(this["webpackJsonpweather-react"]=this["webpackJsonpweather-react"]||[]).push([[0],{12:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),o=a.n(c),l=(a(12),a(1)),s=a.n(l),i=a(5),m=a(2),u=a(6);a(16);var h=function(){var e=Object(n.useState)(),t=Object(m.a)(e,2),a=t[0],c=t[1],o=Object(u.useCurrentPosition)(),l=Object(m.a)(o,2),h=l[0],d=l[1];return Object(n.useEffect)((function(){h&&!d&&function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/api/v1/weather",{body:JSON.stringify({lat:h.coords.latitude,lon:h.coords.longitude}),method:"POST",headers:{"Content-Type":"application/json"}});case 2:if(!(t=e.sent).ok){e.next=10;break}return e.next=6,t.json();case 6:a=e.sent,c(a),e.next=11;break;case 10:alert("Failed to get weather info");case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[h,d]),d?r.a.createElement("p",{className:"loading"},d.message):(h||d)&&a?r.a.createElement("div",{className:"weather"},r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"weather__name"},r.a.createElement("div",{className:"weather__name-temp"},r.a.createElement("h1",null,a.name,", ",a.sys.country),r.a.createElement("span",null,Math.round(a.main.temp)," \xb0C")),r.a.createElement("h2",null,new Date(1e3*a.dt).toLocaleString())),r.a.createElement("div",{className:"weather__condition"},r.a.createElement("img",{src:"https://openweathermap.org/img/wn/".concat(a.weather[0].icon,".png"),alt:a.weather[0].description}),r.a.createElement("div",null,r.a.createElement("span",null,a.weather[0].main),r.a.createElement("span",null,a.weather[0].description)))),r.a.createElement("div",{className:"weather__temp"},r.a.createElement("span",null,"Feels Like ",Math.round(a.main.feels_like)," \xb0C"))):r.a.createElement("p",{className:"loading"},"Allow location access")};a(17);var d=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(18)}},[[7,1,2]]]);
//# sourceMappingURL=main.e1b4ed7a.chunk.js.map