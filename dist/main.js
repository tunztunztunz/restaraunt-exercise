!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);let a=()=>{let e=document.querySelector(".content"),t=document.createElement("IMG"),n=document.createElement("div"),a=document.createElement("h1");t.src="landing.jpeg",t.classList.add("landing-image"),e.appendChild(t),n.classList.add("landing-logo-div"),e.appendChild(n),a.textContent="DAD'S LOUNGE",n.classList.add("landing-logo"),n.appendChild(a)},o=["Bacon","Sausage","Country Ham","Chicken & Gravy","Double-Burger"],l=["Baked Apples","Cheese Grits","Biscuits","Fatback Meat"],i=["6","5","8","12","14"],d=["4","3","3","9"];const c=()=>{let e=document.createElement("IMG"),t=document.createElement("p"),n=document.querySelector(".content"),a=document.createElement("div");t.textContent="I'm baby twee post-ironic single-origin coffee shaman, cloud bread 8-bit seitan biodiesel umami DIY street art banh mi.",t.classList.add("menu-description"),n.appendChild(t),e.src="chicken-fries.jpeg",e.classList.add("menu-image"),n.appendChild(e),s(a,"Entrées"),r(a,o,i),s(a,"Sides"),r(a,l,d),a.classList.add("menu"),n.appendChild(a)},r=(e,t,n)=>{let a=0;t.forEach(t=>{let o=document.createElement("div"),l=document.createElement("p"),i=document.createElement("p");l.textContent=t,i.textContent=" "+n[a],o.classList.add("menu-item"),o.appendChild(l),o.appendChild(i),e.appendChild(o),a++})},s=(e,t)=>{let n=document.createElement("h2"),a=document.createElement("div"),o=document.createElement("p"),l=document.createElement("p");n.textContent=t,n.classList.add("menu-header"),e.appendChild(n),a.classList.add("menu-top"),e.appendChild(a),o.textContent="Plate",o.classList.add("menu-plate-header"),a.appendChild(o),l.textContent="Price",l.classList.add("menu-price-header"),a.appendChild(l)},u=()=>{let e=document.querySelector(".content"),t=document.createElement("div"),n=document.createElement("h1"),a=document.createElement("IMG"),o=document.createElement("p");a.src="about.jpeg",t.appendChild(a),n.textContent="About Dad's Lounge ",t.appendChild(n),o.textContent="Heirloom fam venmo copper mug offal vape selfies small batch lomo. Post-ironic lo-fi quinoa shabby chic single-origin coffee. Bitters man bun you probably haven't heard of them wayfarers, heirloom roof party flexitarian. Forage sriracha distillery mumblecore microdosing vinyl palo santo lo-fi iceland before they sold out lomo hella hashtag. Austin edison bulb cold-pressed activated charcoal pabst typewriter.",t.appendChild(o),t.classList.add("about"),e.appendChild(t)};let m=()=>{let e=document.querySelector(".content"),t=document.createElement("div"),n=document.createElement("p"),a=document.createElement("h2"),o=document.createElement("p"),l=document.createElement("p"),i=document.createElement("p"),d=document.createElement("a");n.textContent="MAKE A",n.classList.add("small-bold","small-header"),t.appendChild(n),a.textContent="RESERVATION",t.appendChild(a),o.textContent="To make a reservation please call:",o.classList.add("phone-text"),t.appendChild(o),l.textContent="555-555-6666",l.classList.add("small-bold","phone-number"),t.appendChild(l),i.textContent="We allow a limited amount of online reservations each evening. If you don't see availability online please call, as we may have more availability over the phone.",t.appendChild(i),d.textContent="Find a Table Online",d.href="",d.classList.add("reservations-link"),t.appendChild(d),t.classList.add("reservations"),e.appendChild(t)};const p=()=>{let e=document.querySelector(".content");for(;e.firstChild;)e.removeChild(e.firstChild)};let h=()=>{document.querySelector(".content").classList.toggle("fade")},f=document.querySelector(".logo"),C=document.querySelector("#about-link"),v=document.querySelector("#menu-link"),b=document.querySelector("#contact-link");window.onscroll=function(){y()};let y=()=>{let e=document.querySelector(".navbar"),t=e.offsetTop;window.pageYOffset>t?e.classList.add("sticky"):e.classList.remove("sticky"),console.log("this is sticky "+t),console.log("this is page offset "+window.pageYOffset)},g=e=>{C.classList.remove("active"),v.classList.remove("active"),b.classList.remove("active"),e.classList.add("active")};C.addEventListener("click",e=>{h(),setTimeout(p,700),setTimeout(u,700),setTimeout(h,700),g(e.target)}),v.addEventListener("click",e=>{h(),setTimeout(p,700),setTimeout(c,700),setTimeout(h,700),g(e.target)}),b.addEventListener("click",e=>{h(),setTimeout(p,700),setTimeout(m,700),setTimeout(h,700),g(e.target)}),f.addEventListener("click",e=>{setTimeout(p,700),setTimeout(a,700),setTimeout(h,700),g(e)}),a()}]);