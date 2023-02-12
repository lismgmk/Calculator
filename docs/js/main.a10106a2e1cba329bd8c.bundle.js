"use strict";(self.webpackChunkcustom_calculator=self.webpackChunkcustom_calculator||[]).push([[179],{639:()=>{const e=JSON.parse('[{"value":"AC","className":"clear grey","id":"clear-all"},{"value":"+/-","className":"grey","id":"pos-neg"},{"value":"%","className":"grey","id":"percentage"},{"value":"&divide;","className":"operator","id":"/"},{"value":"7","className":"number","id":"7"},{"value":"8","className":"number","id":"8"},{"value":"9","className":"number","id":"9"},{"value":"&times;","className":"operator","id":"*"},{"value":"4","className":"number","id":"4"},{"value":"5","className":"number","id":"5"},{"value":"6","className":"number","id":"6"},{"value":"-","className":"operator","id":"-"},{"value":"1","className":"number","id":"1"},{"value":"2","className":"number","id":"2"},{"value":"3","className":"number","id":"3"},{"value":"+","className":"operator","id":"+"},{"value":"0","className":"number zeroWeight","id":"0"},{"value":",","id":"decimal","className":"number"},{"value":"=","id":"equals","className":"operator equals"}]');var n=function(){var n="0",c="0",a="",r="",t=e;function l(){var e,t=Number(c),l=Number(a);if(a&&r)if("/"===r&&"0"===a)c="",a="",r="",n="ERROR",document.querySelector(".screen").innerHTML=n;else{switch(r){case"+":e=t+l;break;case"-":e=t-l;break;case"*":e=t*l;break;case"/":e=t/l}e=e.toString(),c=e,a="",r="",n=e,document.querySelector(".screen").innerHTML=n}}function u(e){return e<0?-e:e}function s(){return"ERROR"===n}function o(){return!a&&!r}function i(){return!!a}return{renderCalculator:function(){document.querySelector(".calculator").innerHTML='\n  <div class="screen">0</div>\n  <div class="calc-buttons-container">\n    </div>',document.querySelector(".calc-buttons-container").innerHTML=t.map((function(e){return'<button type="button" class="button calc-button'.concat(void 0!==e.className?" "+e.className:"",'" } id="').concat(e.id,'">').concat(e.value,"</button>")})).join("")},selectNumber:function(e){s()||(r?c&&""===a&&"equals"===r?(n=c+=e,document.querySelector(".screen").innerHTML=n):("0"===a&&(a=""),n=a+=e,document.querySelector(".screen").innerHTML=n):("0"===c&&(c=""),n=c+=e,document.querySelector(".screen").innerHTML=n))},selectOperator:function(e){s()||(a&&l(),r=e)},togglePosNeg:function(){s()||(i()?(a=(a=a<0?u(a):a>0?-a:0).toString(),n=a,document.querySelector(".screen").innerHTML=n):o()&&(c=(c=c<0?u(c):c>0?-c:0).toString(),n=c,document.querySelector(".screen").innerHTML=n))},convertToPercent:function(){s()||(i()?(a=(a/=100).toString(),n=a,document.querySelector(".screen").innerHTML=n):o()&&(c=(c/=100).toString(),n=c,document.querySelector(".screen").innerHTML=n))},clearAll:function(){c="0",a="",r="",n="0",document.querySelector(".screen").innerHTML=n},selectDecimal:function(){s()||(r&&!a.includes(".")?("0"===a||""===a?a="0.":a+=".",n=a,document.querySelector(".screen").innerHTML=n):o()&&!c.includes(".")&&("0"===c||""===c?c="0.":c+=".",n=c,document.querySelector(".screen").innerHTML=n))},solveEquation:l}}();document.getElementById("app").innerHTML='\n    <header>\n      <h1>Calculator</h1>\n    </header>\n    <main>\n      <div class="calculator"></div>\n    </main>\n    <footer>Created by <a href="https://github.com/lismgmk/calculator-js" target="_blank">Lis Uladzimir</a> &copy; '.concat((new Date).getFullYear(),"</footer>"),n.renderCalculator(),document.addEventListener("click",(function(e){var c=e.target;c.matches(".number")&&n.selectNumber(c.id),c.matches(".operator")&&n.selectOperator(c.id),c.matches("#pos-neg")&&n.togglePosNeg(),c.matches("#percentage")&&n.convertToPercent(),c.matches("#clear-all")&&n.clearAll(),c.matches("#decimal")&&n.selectDecimal(),c.matches("#equals")&&n.solveEquation()}))}},e=>{e(e.s=639)}]);