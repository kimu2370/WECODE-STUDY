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
         return getWeatherData(code.lat, code.lng);
      })
      .then(function(info) {
         setWeatherInfo(text, info);
         getMomentInfo(info);
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
            console.log(data);
            let loactionDATA = {};
            loactionDATA.lat = data.results[0]["geometry"]["location"]["lat"];
            loactionDATA.lng = data.results[0]["geometry"]["location"]["lng"];
            resolve(loactionDATA);
         });
      });
   });
}

// 2. 위도, 경도를 바탕으로 해당 지역의 날씨를 가지고 옵니다.
/**
 * getGeoCode 함수에서 return한 객체에서 lat, lng 값을 가지고 옵니다.
 * lat - 위도
 * lng - 경도
 */
function getWeatherData(lat, lng) {
   return new Promise(function(resolve, reject) {
      fetch(
         `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=${WEATHER_KEY}`
      ).then(function(response) {
         response.json().then(function(data) {
            let weatherAndlocationInfo = {};
            weatherAndlocationInfo.temp = data["main"]["temp"];
            weatherAndlocationInfo.weather = data["weather"][0]["main"];
            weatherAndlocationInfo.lat = lat;
            weatherAndlocationInfo.lng = lng;
            console.log("우리가 받은 날씨 데이터 ", data);
            resolve(weatherAndlocationInfo); // 여기에 저희가 원하는 형식의 값을 넣어주세요!
         });
      });
   });
}

// 3. 저희가 받은 날씨 정보로 화면을 변경합니다.
/**
 * cityName - 입력한 도시 이름
 * weatherInfo - getWeatherData에서 return해준 객체
 * {
 *    temp: 기온
 *    weather: 날씨
 * }
 */
function setWeatherInfo(cityName, weatherInfo) {
   // console.log("cityName",cityName);
   // console.log("weatherInfo",weatherInfo);
   // 섭씨->켈빈 °C = K − 273.15
   temp.innerText = Math.floor(weatherInfo.temp-273.15)+" ℃";
   const weatherLink = imgLinks[weatherInfo.weather];
   icon.src = `image/icon/${weatherLink}`; 
   city.innerText = cityName;
   input.disabled = false; //입력창을 활성화 시킴.
}

function getMomentInfo(locationInfo) {
   console.log("locationInfo",locationInfo);
   return new Promise(function(resolve, reject) {
      fetch(
         `https://maps.googleapis.com/maps/api/timezone/json?location=${locationInfo.lat},${locationInfo.lng}&timestamp=1577707992&key=${GOOGLE_KEY}`
      ).then(function(response) {
         response.json().then(function(data) {
            console.log("모먼트 데이터",data);
            resolve(locationInfo);
         });
      });
   }); 
}

/**
 * 해볼 것들
 *
 * - 날씨별로 맞추어 배경색상을 변경해보기
 * javasciprt를 사용해 element의 내용 뿐만 아니라 element의 style도 변경할 수 있습니다.
 * 어떻게 javascript를 사용해 css를 다룰 수 있을까요?
 *
 * 배경 참고 사이트 https://uigradients.com/
 *
 * - 나만의 날씨 이미지로 변경하기
 * 이미지를 수정하거나, 새로운 이미지를 추가해보세요.
 * 원하는 이미지를 찾아 img 폴더에 저장 후 data.js 파일을 수정해보세요.
 *
 */
