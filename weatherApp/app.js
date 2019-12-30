const date = document.querySelector('.date');
const time = document.querySelector('.time');
const icon = document.querySelector(".weatherIcon");
const temp = document.querySelector(".temperature");
const city = document.querySelector(".city");
const searchForm = document.getElementById("searchForm");
const input = document.getElementById("searchText");

// 도시 이름을 입력하고, Enter키를 누루면 아래 함수가 실행됩니다.
searchForm.addEventListener("submit", function(event) {
   event.preventDefault();

   const text = input.value;
   // console.log(text);
   input.value = "";
   input.disabled = true;

   getGeoCode(text)  // text = 입력한 데이터
      .then(function(code) {
         return getWeatherData(code.lat, code.lng);   //다음 익명함수에 매개변수에 넣을 데이터
      })
      .then(function(info) {
         return getMomentInfo(info);   //다음 익명함수에 매개변수에 넣을 데이터
      })
      .then(function(info) {
         setInfo(text, info); //화면에 표시할 데이터
      })
      .catch(function(err) { // 에러가 발생했을때 뜨게 됨.
         console.log("에러가 발생했습니다.", err);
         input.disabled = false;
      });
   });

// 1. 입력된 도시의 위도, 경도 값을 가지고 옵니다.
function getGeoCode(city) {
   return new Promise(function(resolve, reject) {
      fetch(
         `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${GOOGLE_KEY}`
      ).then(function(response) {
         response.json().then(function(data) {
            let loactionDATA = {};
            loactionDATA.lat = data.results[0]["geometry"]["location"]["lat"];
            loactionDATA.lng = data.results[0]["geometry"]["location"]["lng"];
            resolve(loactionDATA);
         });
      });
   });
}

// 2. 위도, 경도를 바탕으로 해당 지역의 날씨를 가지고 옵니다.
function getWeatherData(lat, lng) {
   return new Promise(function(resolve, reject) {
      fetch(
         `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=${WEATHER_KEY}`
      ).then(function(response) {
         response.json().then(function(data) {
            let appInfo = {};
            appInfo["temp"] = data["main"]["temp"];
            appInfo["weather"] = data["weather"][0]["main"];
            appInfo["lat"] = lat;
            appInfo["lng"] = lng;
            appInfo["dt"] = data["dt"];
            resolve(appInfo); // 온도,날씨,위도,경도,dt 정보를 담는다.
         });
      });
   });
}



// 3. 타임존 정보를 얻는다.
function getMomentInfo(appInfo) {
   return new Promise(function(resolve, reject) {
      fetch(
         `https://maps.googleapis.com/maps/api/timezone/json?location=${appInfo["lat"]},${appInfo["lng"]}&timestamp=${appInfo["dt"]}&key=${GOOGLE_KEY}`
      ).then(function(response) {
         response.json().then(function(data) {
            // console.log("타임존 데이터",data);
            appInfo["timeZoneId"]=data["timeZoneId"];
            resolve(appInfo); // 화면에 표시할 정보
         });
      });
   }); 
}

// 4. 받은 날씨 정보로 화면을 변경합니다.
function setInfo(cityName, appInfo) {
   // console.log(appInfo);
   //moment로 현재 시간 포맷팅
   const dateTimeFormat = moment().tz(appInfo["timeZoneId"]).format(); 

   //날짜 포맷팅
   const dateFormat = dateTimeFormat.split('T')[0].split('-');
   let dateItem = document.createElement('div');
   dateItem.innerText = dateFormat[0]+"년 "+dateFormat[1]+"월 "+dateFormat[2]+"일";
   date.append(dateItem);   

   //시간 포맷팅
   const timeFormat = dateTimeFormat.split('T')[1].substring(0,8).split(':');
   let timeItem = document.createElement('div');
   timeItem.innerText = timeFormat[0]+"시 "+timeFormat[1]+"분 ";
   time.append(timeItem);
   
   //날씨 아이콘
   const weatherLink = imgLinks[appInfo.weather];
   icon.src = `image/icon/${weatherLink}`; 

   //온도 섭씨->켈빈 °C = K − 273.15
   temp.innerText = Math.floor(appInfo.temp-273.15)+" ℃";

   //도시 이름
   city.innerText = cityName;

    //입력창을 활성화 시킴.
   input.disabled = false;
}

