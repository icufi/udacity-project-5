var Client;(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{performAction:()=>n});function n(e){const t=document.getElementById("dateField").value,n=[t.slice(-4),t.slice(0,4)].join("-");console.log(n);document.getElementById("feelings").value;const r=document.getElementById("city").value,i=new Date(n).getTime(),s=Math.round((i-o.getTime())/864e5+1);a("http://api.geonames.org/searchJSON?q=",r,"&maxRows=1&username=icufishmg").then((function(e){c("/travelinfo",{city:e.city_name,country:e.country_code,travelDate:n,daysCountdown:s}).then(l())}))}document.getElementById("generate").addEventListener("click",n);let o=new Date;o.getMonth(),o.getDate(),o.getFullYear();const a=async(e,t,n)=>{const o=await fetch(e+t+n);try{const e=await o.json(),t=await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?&lat=${e.geonames[0].lat}&lon=${e.geonames[0].lng}&key=1d235b160c6c4917b499388daca9bc82`),n=await t.json();return console.log(n),n}catch(e){console.log("error",e)}},c=async(e="",t={})=>{await fetch(e,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})},l=async()=>{const e=await fetch("/projectdata");try{const t=await e.json();console.log(t),document.getElementById("entry").className="holderResponse",document.getElementById("content").innerHTML=`Country: ${t.slice(-1)[0].country}`,document.getElementById("date").innerHTML=`City: ${t.slice(-1)[0].city}`,document.getElementById("travelDate").innerHTML=`Travel Date: ${t.slice(-1)[0].travelDate}`,document.getElementById("daysCountdown").innerHTML=`Days Until Travel: ${t.slice(-1)[0].daysCountdown}`}catch(e){console.log("error",e)}};Client=t})();