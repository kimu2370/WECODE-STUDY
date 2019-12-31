const body = document.querySelector("body");
const date = document.querySelector(".date");
const time = document.querySelector(".time");
const weatherBox = document.querySelector("#weatherBox");
const icon = document.querySelector(".weatherIcon");
const temp = document.querySelector(".temperature");
const city = document.querySelector(".city");
const searchForm = document.getElementById("searchForm");
const input = document.getElementById("searchText");
const forecastItems = document.querySelectorAll(".forecastItem");
const forecastIcon = document.querySelectorAll(".forecastIcon");
const forecastTemp = document.querySelectorAll(".forecastTemp");
const forecastTime = document.querySelectorAll(".forecastTime");

// 도시 이름을 입력하고, Enter키를 누루면 아래 함수가 실행됩니다.
searchForm.addEventListener("submit",(event) => {
   event.preventDefault();

   const text = input.value;
   // console.log(text);
   input.value = "";
   input.disabled = true;

   getGeoCode(text)  // text = 입력한 데이터
      .then((code) => {
         return getWeatherData(code.lat, code.lng);
      })
      .then((info) => {
         return getMomentInfo(info);
      })
      .then((info) => {
         return getForecastInfo(info);
      })
      .then((info) => {
         setInfo(text, info); // info = 화면에 표시할 데이터
      })
      .catch((err) => { // 에러가 발생했을때 뜨게 됨.
         console.log("에러가 발생했습니다.", err);
         input.disabled = false;
      });
   });

// 1. 입력된 도시의 위도, 경도 값을 가지고 옵니다.
function getGeoCode(city) {
   //Promise resolve를 통해 .then의 익명함수 매개변수에 값을 전달.
   return new Promise((resolve, reject) => { 
      fetch(
         `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${GOOGLE_KEY}`
      ).then((response) => {
         response.json().then((data) => {

            let loactionDATA = {};
            loactionDATA.lat = data["results"][0]["geometry"]["location"]["lat"];
            loactionDATA.lng = data["results"][0]["geometry"]["location"]["lng"];

            resolve(loactionDATA);
         });
      });
   });
}

// 2. 위도, 경도를 바탕으로 해당 지역의 날씨를 가지고 옵니다.
function getWeatherData(lat, lng) {
   return new Promise((resolve, reject) => {
      fetch(
         `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=${WEATHER_KEY}`
      ).then((response) => {
         response.json().then((data) => {

            let appInfo = {}; //화면에 보여줄 데이터를 담는다.
            appInfo["temp"] = data["main"]["temp"];
            appInfo["weather"] = data["weather"][0]["main"];
            appInfo["lat"] = lat;
            appInfo["lng"] = lng;
            appInfo["dt"] = data["dt"];

            resolve(appInfo); 
         });
      });
   });
}



// 3. 검색한 지도 정보를 바탕으로 타임존 정보를 얻는다.
function getMomentInfo(appInfo) {
   return new Promise((resolve, reject) => {
      fetch(
         `https://maps.googleapis.com/maps/api/timezone/json?location=${appInfo["lat"]},${appInfo["lng"]}&timestamp=${appInfo["dt"]}&key=${GOOGLE_KEY}`
      ).then((response) => {
         response.json().then((data) => {

            // console.log("타임존 데이터",data);
            appInfo["timeZoneId"]=data["timeZoneId"];

            //moment로 객체에 현재 날짜와 시간 추가
            appInfo["dateFormat"]= moment().tz(appInfo["timeZoneId"]).format().split('T')[0].split('-');
            appInfo["timeFormat"]= moment().tz(appInfo["timeZoneId"]).format().split('T')[1].substring(0,8).split(':');

            resolve(appInfo); // 화면에 표시할 정보
         });
      });
   }); 
}

// 4. 검색한 지도를 바탕으로 일기예보 정보를 얻는다.
function getForecastInfo(appInfo) {
   let listArr=[],forecast=[];
   return new Promise((resolve, reject) => {
      fetch(
         `https://api.openweathermap.org/data/2.5/forecast?lat=${appInfo["lat"]}&lon=${appInfo["lng"]}&APPID=${WEATHER_KEY}`
      ).then((response) => {
         response.json().then((data) => {
            console.log(data);
            //출력하고 싶은 일기예보 5개만 담았다.(현재시간의 예보를 제외한 다음 예보부터)
            for(let i=3; i<8;i++){
               listArr.push(data["list"][i]);
            }
            appInfo["forecast"] = listArr.slice();
            console.log(appInfo);

            resolve(appInfo);
         });
      });
   });
}

// 4. 받은 날씨 정보로 화면을 변경합니다.
function setInfo(cityName, appInfo) {
   // console.log(appInfo);
   //날짜 포맷팅
   date.innerText = appInfo["dateFormat"][0]+"년 "+
                     appInfo["dateFormat"][1]+"월 "+
                     appInfo["dateFormat"][2]+"일";

   //시간 포맷팅
   time.innerText = appInfo["timeFormat"][0]+"시 "+
                     appInfo["timeFormat"][1]+"분 ";
   
   //날씨 아이콘
   const weatherLink = imgLinks[appInfo["weather"]];
   icon.src = `image/icon/${weatherLink}`; 

   //온도 섭씨->켈빈 °C = K − 273.15
   temp.innerText = Math.floor(appInfo["temp"]-273.15)+" ℃";

   //도시 이름
   city.innerText = cityName;

   //일기예보
   for(let i=0; i<5; i++){
      let forecastLink = imgLinks[appInfo["forecast"][i]["weather"][0]["main"]];
      forecastIcon[i].src = `image/icon/${forecastLink}`;
      forecastTemp[i].innerText = Math.floor(appInfo["forecast"][i]["main"]["temp"]-273.15)+"℃";
      forecastTime[i].innerText = appInfo["forecast"][i]["dt_txt"].split(" ")[1].slice(0,2)+"시";
   }

   //날씨에 따른 배경 전환
   const bgImgLink = bgImgLinks[appInfo["weather"]];
   body.style.cssText = `background-image: url("image/background/${bgImgLink}")`;

   //날씨에 따른 일기예보 배경 전환
   forecastItems.forEach((item,i) => {
      item.style.cssText = bgColorLinks[appInfo["forecast"][i]["weather"][0]["main"]];
   });
    //입력창을 활성화 시킴.
   input.disabled = false;
}

// 12:00:00 중 ("12")시에 해당하는 부분들을 배열로 담았다.
//  listArr=data["list"].map(item=>(
//    item["dt_txt"].split(" ")[1].split(":")[0]
// )).slice();
