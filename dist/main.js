var Client;(()=>{"use strict";var e={d:(t,n)=>{for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{performAction:()=>n});function n(e){const t=document.getElementById("feelings").value,n=document.getElementById("zip").value;r("http://api.openweathermap.org/data/2.5/weather?zip=",n,"&appid=0bee29c772704d38dee97aa6f80bcb11&units=imperial").then((function(e){c("/weatherdata",{temperature:`${e.main.temp}°F`,date:o,feeling:t}).then(i())}))}document.getElementById("generate").addEventListener("click",n);let a=new Date,o=a.getMonth()+1+"."+a.getDate()+"."+a.getFullYear();const r=async(e,t,n)=>{const a=await fetch(e+t+n);try{return await a.json()}catch(e){console.log("error",e)}},c=async(e="",t={})=>{await fetch(e,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})},i=async()=>{const e=await fetch("/projectdata");try{const t=await e.json();document.getElementById("entry").className="holderResponse",document.getElementById("content").innerHTML=`Feeling: ${t.slice(-1)[0].feeling}`,document.getElementById("date").innerHTML=`Date: ${t.slice(-1)[0].date}`,document.getElementById("temp").innerHTML=`Temperature: ${t.slice(-1)[0].temperature}`}catch(e){console.log("error",e)}};Client=t})();