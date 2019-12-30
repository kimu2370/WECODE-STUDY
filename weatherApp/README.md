# 위코드 스터디 2주차 과제

 ### HTML+CSS+JS를 이용해서 페이지 만들기

 - 내가 만들 페이지 날씨 앱


19/12/30 기록

1. timezone api를 통해 timestamp와 timeZoneId, rawOffset을 얻어 옴.
2. rawOffset 데이터 가공과 fetch에 임의로 넣은 timestamp 값
  데이터 동적으로 가공하기.

19/12/30 기록2
- momentjs,moment-timeZone-datejs를 이용해 타임존 데이터를 가공하여 날짜와 시간 표현 성공.
- TODO : 
  - forecast api 를 이용해서 예측 데이터 정보 얻어오기.
  - 날씨별로 맞추어 배경색상을 변경해보기
    javasciprt를 사용해 element의 내용 뿐만 아니라 element의 style도 변경할 수 있다.
   
  - 배경 참고 사이트 https://uigradients.com/
   
  - 나만의 날씨 이미지로 변경하기.
      이미지를 수정하거나, 새로운 이미지를 추가해보자.
      원하는 이미지를 찾아 img 폴더에 저장 후 data.js 파일을 수정해보자.
