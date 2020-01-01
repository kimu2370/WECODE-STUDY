(function init() {
   for(let i=0; i<que_DATA.length; i++){
      let body = document.body;
      let div = document.createElement('div');
      let span = document.createElement('span');
      span.style.display="block";
      span.style.margin="2%";
      div.innerText=i+1+' . '+que_DATA[i].question;
      body.append(div);
      div.append(span);
   }
})();

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
   let fileName = "test.js";
   let button = document.createElement('button');
   let p = document.createElement('p');
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
   
});