(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[5],{19:function(t,e,n){"use strict";var r=n.p+"static/media/error.42292aa1.gif",c=n(0);e.a=function(){return Object(c.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:r,alt:"Error"})}},20:function(t,e,n){"use strict";var r=n(21),c=n.n(r),a=n(22),i=n(4),s=n(1);e.a=function(){var t=function(){var t=Object(s.useState)(!1),e=Object(i.a)(t,2),n=e[0],r=e[1],o=Object(s.useState)(null),u=Object(i.a)(o,2),l=u[0],b=u[1];return{loading:n,request:Object(s.useCallback)(function(){var t=Object(a.a)(c.a.mark((function t(e){var n,a,i,s,o,u=arguments;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:"GET",a=u.length>2&&void 0!==u[2]?u[2]:null,i=u.length>3&&void 0!==u[3]?u[3]:{"Content-Type":"application/json"},r(!0),t.prev=4,t.next=7,fetch(e,{method:n,body:a,headers:i});case 7:if((s=t.sent).ok){t.next=10;break}throw new Error("Could not fetch ".concat(e,", status: ").concat(s.status));case 10:return t.next=12,s.json();case 12:return o=t.sent,r(!1),t.abrupt("return",o);case 17:throw t.prev=17,t.t0=t.catch(4),r(!1),b(t.t0.message),t.t0;case 22:case"end":return t.stop()}}),t,null,[[4,17]])})));return function(e){return t.apply(this,arguments)}}(),[]),error:l,clearError:Object(s.useCallback)((function(){return b(null)}),[])}}(),e=t.loading,n=t.request,r=t.error,o=t.clearError,u="https://gateway.marvel.com:443/v1/public/",l="apikey=d17fbed03245694ae40e3f68990623c9",b=function(){var t=Object(a.a)(c.a.mark((function t(e){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n("".concat(u,"characters?name=").concat(e,"&").concat(l));case 2:return r=t.sent,t.abrupt("return",r.data.results.map(j));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(a.a)(c.a.mark((function t(){var e,r,a=arguments;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:210,t.next=3,n("".concat(u,"characters?limit=9&offset=").concat(e,"&").concat(l));case 3:return r=t.sent,t.abrupt("return",r.data.results.map(j));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),m=function(){var t=Object(a.a)(c.a.mark((function t(e){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n("".concat(u,"characters/").concat(e,"?").concat(l));case 2:return r=t.sent,t.abrupt("return",j(r.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=Object(a.a)(c.a.mark((function t(){var e,r,a=arguments;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:0,t.next=3,n("".concat(u,"comics?orderBy=issueNumber&limit=8&offset=").concat(e,"&").concat(l));case 3:return r=t.sent,t.abrupt("return",r.data.results.map(h));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=Object(a.a)(c.a.mark((function t(e){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n("".concat(u,"comics/").concat(e,"?").concat(l));case 2:return r=t.sent,t.abrupt("return",h(r.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(t){return{id:t.id,name:t.name,description:t.description?"".concat(t.description.slice(0,210),"..."):"There is no description for this character",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,homepage:t.urls[0].url,wiki:t.urls[1].url,comics:t.comics.items}},h=function(t){var e;return{id:t.id,title:t.title,description:t.description||"There is no description",pageCount:t.pageCount?"".concat(t.pageCount," p."):"No information about the number of pages",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,language:(null===(e=t.textObjects[0])||void 0===e?void 0:e.language)||"en-us",price:t.prices[0].price?"".concat(t.prices[0].price,"$"):"not available"}};return{loading:e,error:r,clearError:o,getCharacterByName:b,getAllCharacters:p,getCharacter:m,getAllComics:d,getComics:f}}},24:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(8);var c=n(6);function a(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(c.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},36:function(t,e,n){},37:function(t,e,n){},42:function(t,e,n){"use strict";n.r(e);var r=n(23),c=n(24),a=n(4),i=n(1),s=n(20),o=n(9),u=n(19),l=n(5),b=(n(36),n(0)),p=function(){var t=Object(i.useState)([]),e=Object(a.a)(t,2),n=e[0],r=e[1],p=Object(i.useState)(!1),m=Object(a.a)(p,2),d=m[0],f=m[1],j=Object(i.useState)(0),h=Object(a.a)(j,2),v=h[0],O=h[1],g=Object(i.useState)(!1),x=Object(a.a)(g,2),y=x[0],w=x[1],_=Object(s.a)(),k=_.loading,C=_.error,N=_.getAllComics;Object(i.useEffect)((function(){A(v,!0)}),[]);var A=function(t,e){f(!e),N(t).then(S)},S=function(t){var e=!1;t.length<8&&(e=!0),r([].concat(Object(c.a)(n),Object(c.a)(t))),f(!1),O(v+8),w(e)};var E=function(t){var e=t.map((function(t){return Object(b.jsx)("li",{className:"comics__item",children:Object(b.jsxs)(l.b,{to:"/comics/".concat(t.id),children:[Object(b.jsx)("img",{src:t.thumbnail,alt:t.title,className:"comics__item-img"}),Object(b.jsx)("div",{className:"comics__item-name",children:t.title}),Object(b.jsx)("div",{className:"comics__item-price",children:t.price})]})},t.id)}));return Object(b.jsx)("ul",{className:"comics__grid",children:e})}(n),T=C?Object(b.jsx)(u.a,{}):null,q=k&&!d?Object(b.jsx)(o.a,{}):null;return Object(b.jsxs)("div",{className:"comics__list",children:[T,q,E,Object(b.jsx)("button",{disabled:d,style:{display:y?"none":"block"},className:"button button__main button__long",onClick:function(){return A(v)},children:Object(b.jsx)("div",{className:"inner",children:"load more"})})]})},m=(n(37),n.p+"static/media/Avengers.4065c8f9.png"),d=n.p+"static/media/Avengers_logo.9eaf2193.png",f=function(){return Object(b.jsxs)("div",{className:"app__banner",children:[Object(b.jsx)("img",{src:m,alt:"Avengers"}),Object(b.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",Object(b.jsx)("br",{}),"Stay tuned!"]}),Object(b.jsx)("img",{src:d,alt:"Avengers logo"})]})};e.default=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(r.a,{children:[Object(b.jsx)("meta",{name:"description",content:"Page with list of  our comics"}),Object(b.jsx)("title",{children:"Comics page"})]}),Object(b.jsx)(f,{}),Object(b.jsx)(p,{})]})}}}]);
//# sourceMappingURL=5.30221ca3.chunk.js.map