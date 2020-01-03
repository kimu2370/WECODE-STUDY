//init 함수로 문제와 답을 쓸 공간을 로드한다.
(function init() {
   for(let i=0; i<que_DATA.length; i++){
      let body = document.body
         ,div = document.createElement('div')
         ,span = document.createElement('span');
      span.style.display="block";
      span.style.margin="2%";
      span.style.color="red";
      div.innerText=i+1+' . '+que_DATA[i].question;
      body.append(div);
      div.append(span);
   }
})();
//문제에 해당하는 답을 제출할 변수.->List 형태로 저장한다.
let solution = document.querySelectorAll('span');

//1.
(()=>{
   let button = document.createElement('button');
   button.innerText = "클릭";
   button.addEventListener('click',()=>{
      alert("안녕하세요");
   });
   solution[0].append(button);
})();

//2.
(()=>{
   let button = document.createElement('button');
   button.innerText = "날짜/시간";
   button.addEventListener('click',()=>{
      let dt,year,month,date,hour,min,sec;
      dt = new Date();
      year = dt.getFullYear();
      month = dt.getMonth() + 1;
      date = dt.getDate();
      hour = dt.getHours();
      min = dt.getMinutes();
      sec = dt.getSeconds();
      if(month<10){month = '0' + month};
      if(date<10){date = '0' + date};
      if(hour<10){hour = '0' + hour};
      if(min<10){min = '0' + min};
      if(sec<10){sec = '0' + sec};
      alert(year + "-" + month + "-" + date + " " + hour + ":" + min + ":" + sec);
   });
   solution[1].append(button);
})();

//3.
(()=>{
   let fileName = "test.js"
      ,button = document.createElement('button')
      ,p = document.createElement('p');
   button.innerText = "파일명검사버튼";
   button.addEventListener('click',()=>{
      if(fileName.includes('hwp')){
         p.innerText = "hwp 파일입니다.";
      }else{
         p.innerText = `hwp 파일이 아닙니다. ${fileName}입니다.`;
      };
   });
   solution[2].append(button);
   solution[2].append(p);
})();

//4.
(()=>{
   let input = document.createElement('input');
   input.type="text";
   input.addEventListener('change',(event)=>{
      let rrnStr = String(event.target.value);
      rrnStr.length===13
         ?alert(`생년월일은${rrnStr.slice(0,6)}입니다.`):alert("주민번호13자리를 입력해주세요.");
   });
   solution[3].append(input);
})();

//5.
(()=>{
   let input = document.createElement('input')
      ,button = document.createElement('button');
   input.type="text";
   input.placeholder="점수를 입력해주세요.";
   button.innerText="click";
   button.addEventListener('click',()=>{
      let num = input.value;
      if(typeof num!=="string"||num!==""&&num<101){
         if(num===100){
            alert("A+");
         }else if(num>=90){
            alert("A");
         }else if(num>=80){
            alert("B");
         }else if(num>=70){
            alert("C");
         }else if(num>=60){
            alert("D");
         }else{
            alert("F");
         }
      }else{
         alert("점수를 입력하세요.");
      }
   });
   solution[4].append(input);
   solution[4].append(button);
})();

//6.
(()=>{ 
   let arr = [];
   solution[5].innerText="=>규칙에 맞게 별찍기";
   for(let k=0;k<2; k++){
      //5x5 별묶음 2번 반복.
      for(let i=1; i<=5; i++){
         //별찍기의 행을 담당.
         let star = ""
            ,div = document.createElement('div');
         for(let j=1; j<=i; j++){
            //별찍기의 열을 담당.
            star = star+"*";
         }
         arr.push(star+"\n");
         div.innerText=arr[i-1];
         solution[5].append(div);
      }
   }
})();

//7.
(()=>{
   let sharp="###",persent="%%%";
   solution[6].innerText="=>###과%%%을 규칙에 맞게 출력하면";
   for(let i=1;i<=11;i++){
      let div = document.createElement('div');
      if(i%2===1){
         div.innerText = sharp;
      }else{
         div.innerText = persent;
      }
      solution[6].append(div);
   }
})();

//8.
(()=>{
   let arr = [];
   solution[7].innerText="=>규칙에 맞게 별찍기 reverse!";
   for(let k=0; k<2; k++){
      //5x5 별묶음 2번 반복.
      for(let i=5; i>=1; i--){
         //별찍기의 행을 담당.
         let star = ""
            ,div = document.createElement('div');
         for(let j=1; j<=i; j++){
            //별찍기의 열을 담당.
            star = star+"*";
         }
         arr.push(star+"\n");
         div.innerText=arr[5-i];
         solution[7].append(div);
      }
   }
})();

//9.
(()=>{
   for(let i=0; i<2; i++){
      let button = document.createElement('button');
      button.style.fontSize="2rem";
      button.style.margin="20px";
      button.style.display = "block";

      if(i===0){
         button.innerText="버튼1";
      }else{
         button.innerText="버튼2";
      }

      solution[8].append(button);
      let btn1and2 = solution[8].children;   //button1과button2를 List형태로 변수에 저장.
      btn1and2[i].addEventListener('click',(event)=>{
         if(event.target===btn1and2[0]){
            button.style.backgroundColor="red";
         }else{
            button.style.backgroundColor="blue";
         }
      });
   }
})();

//10.
(()=>{
   for(let i=0; i<2; i++){
      let button = document.createElement('button');
      button.style.fontSize="2rem";
      button.style.margin="20px";
      button.style.display = "block";

      if(i===0){
         button.innerText="NAVER";
      }else{
         button.innerText="DAUM";
      }

      solution[9].append(button);
      let btn1and2 = solution[9].children;   //button1과button2를 List형태로 변수에 저장.
      btn1and2[i].addEventListener('click',(event)=>{
         if(event.target===btn1and2[0]){
            window.open("https://www.naver.com/");//새창으로 url 열기
            // location.href="https://www.naver.com/" 현재 창에서 url 열기
         }else{
            window.open("https://www.daum.net/");
         }
      });
   }
})();

//11.
(()=>{
   for(let i=0; i<3; i++){
      let input = document.createElement('input');
      input.type="text";
      input.style.width="90px"
      input.style.margin="5px";
      solution[10].append(input);
      if(i<2){
         let span = document.createElement('span');
         span.innerText="-";
         solution[10].append(span);
      }
   }

   let button = document.createElement('button');
   button.innerText="검사"
   button.style.margin="5px";
   solution[10].append(button);

   let inputNum = solution[10].children;
   let checkNum = ["010","011","017","016","018","019"];
   let result = document.createElement('span');
   solution[10].append(result);
   button.addEventListener('click',()=>{
      let fullNum = inputNum[0].value+inputNum[2].value+inputNum[4].value+"";
      if(fullNum.length<11){
         alert("핸드폰번호 11자리를 입력해주세요.");
      }else{
      solution[10].children[6].innerText>0 //결과값이 한번 이상 쓰였는지
         ? 
            solution[10].children[6].innerText=""
            :
            checkNum.find(num=>(num===inputNum[0].value))//삼항 연산자로 번호 검사.
               ?
                  result.innerText=`${inputNum[0].value}-${inputNum[2].value}-${inputNum[4].value}`
                  :
                  result.innerText="해당 국번이 아닙니다.";
      }
   });
})();

//12.두개의 숫자를 input text로 받아서 곱셈한 결과를 p태그에 출력하는 프로그램을 작성하시오.
(()=>{
   let num1,num2;
   let result = document.createElement('p');
   for(let i=0; i<2; i++){
      let input = document.createElement('input');
      input.type="text";
      input.style.margin="10px";
      solution[11].append(input);
      solution[11].children[i].addEventListener('change',(event)=>{
         i===0
            ?
               num1 = event.target.value
               :
               num2 = event.target.value;
         if(num1&&num2){
            result.innerText=`${num1} x ${num2} = ${num1*num2}`;
         }
      });
   }
   solution[11].append(result);
})();

//13.남성, 여성중 한 개만 선택하도록 radio button을 만들고, 버튼을 누르면 선택한 값이 alert로 출력되도록 작성하시오.
(()=>{
   let radio1 = document.createElement('input');
      radio1.name="gender";//라디오 버튼에 name속성을 주어 그룹화시킴.하나만 checked
      radio1.type="radio";
      radio1.style.margin="10px";
      radio1.value="남성"
   let radio2 = document.createElement('input');
      radio2.name="gender";
      radio2.type="radio";
      radio2.style.margin="10px";
      radio2.value="여성";
      solution[12].append(radio1);
      solution[12].append("남성");
      solution[12].append(radio2);
      solution[12].append("여성");
   for(let i=0;i<2;i++){
      solution[12].children[i].addEventListener('click',(event)=>{
         if(event.target.checked){
            alert(event.target.value);
         }
      });
   }
})();
//14. 운동, 독서, 영화감상 을 checkbox로 만들고, 선택한 값(복수)을 p태그에 출력하는 프로그램을 작성하시오.
(()=>{
   let hobby = ["운동","독서","영화감상"];
   for(let i=0; i<3; i++){
      let input = document.createElement('input');
      input.type="checkBox";
      input.value=hobby[i];
      solution[13].append(input);
      solution[13].append(hobby[i]);
   }
   let button = document.createElement('button');
   let p = document.createElement('p');
   button.style.marginLeft="15px";
   button.innerText="클릭";
   solution[13].append(button);
   //버튼클릭하면 checkbox의 check가 true인 것만 p태그에 출력하게한다.
   button.addEventListener('click',(event)=>{
      p.innerText="";
      let result = [];
      for(let i=0;i<3;i++){
         if(solution[13].children[i].checked){
            result.push(solution[13].children[i].value);
         }
      }
      p.innerText = result.join(',');
      solution[13].append(p);
   });

})();
/* 15. 다음과 같은 JSON데이터를 변수에 저장한 후 name과 price를 각각 h1태그와 h2태그에 출력하는 프로그램을 작성하시오.
"products":[
   {"name":"mp3", "price":"1000"}, 
   {"name":"pc", "price":"2000"}, 
   {"name":"smart phone","price":"3000"}
] */