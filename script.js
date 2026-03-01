let loverName="Mahi";
document.addEventListener("DOMContentLoaded",()=>{

 document.getElementById("welcome").innerText=
 `Hey ${loverName} ❤️`;

});

let messages=[
`Meeting you changed my life ❤️
I never expected you 🌙`,

`Onna vida onnu epovume better ah thaan irukum,
Aana enaku, Unna vida better ah
Edhuvume epovum thonala ❤️`,

`You understand me better than anyone 🤍`,

`To my hardworking man 💪
I am so proud of you ✨
And so blessed to have you ❤️`
];

let index=0;

function startApp(){
    document.getElementById("bgmusic").play();
 document.getElementById("start").style.display="none";
 document.getElementById("main").classList.remove("hidden");
 showMessage();
}

function showMessage(){

 let text = messages[index];
 let i = 0;

 document.getElementById("message").innerText="";

 let typing = setInterval(()=>{

   document.getElementById("message").innerText += text.charAt(i);

   i++;

   if(i >= text.length){
     clearInterval(typing);
   }

 },50);
}

function nextMessage(){

 index++;

 if(index<messages.length){
   showMessage();
 }else{
   document.getElementById("nextBtn").style.display="none";
   document.getElementById("finalBtn").classList.remove("hidden");
 }
}

 if(index<messages.length){
   showMessage();
 }else{
   document.getElementById("message").innerText=
   "Surprise complete ❤️";
 }

 function showFinal(){

 document.getElementById("message").innerText=
`${loverName}, No matter what happens, I choose you - Always ❤️

Your Kosuuu🦟❤️`;

 document.getElementById("finalBtn").style.display="none";
}

setInterval(createHeart,500);

function createHeart(){

 let heart=document.createElement("div");
 heart.classList.add("heart");
 heart.innerText="❤️";

 heart.style.left=Math.random()*100+"%";

 document.querySelector(".hearts")
 .appendChild(heart);

 setTimeout(()=>{
   heart.remove();
 },6000);
}