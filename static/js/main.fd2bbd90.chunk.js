(this.webpackJsonpDS_frontend=this.webpackJsonpDS_frontend||[]).push([[0],[,,,,function(e,t,a){e.exports=a.p+"static/media/zabity_za_prawde.4fcb4f47.jpg"},function(e,t,a){},,,function(e,t,a){},,function(e,t,a){e.exports=a(23)},,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(9),c=a.n(r),m=a(2),s=a(3);var i=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,24)).then(t=>{let{getCLS:a,getFID:l,getFCP:n,getLCP:r,getTTFB:c}=t;a(e),l(e),n(e),r(e),c(e)})};const o={ROOT:"/",DETAILS:"details",SUBMIT_ORDER:"submit-order",BASKET:"basket"},d={ROOT:"/seller",DASHBOARD:"dashboard",ORDERS:{MAIN:"orders",DETAILS:":id",CREATE:"create"}},E={ROOT:"items",UPDATE:"update",DETAILS:":id"},u="/login",p="/logout",b=o,y=d;var g={CLIENT_MAIN:o.ROOT,CLIENT_DETAILS:o.ROOT+E.ROOT+"/"+E.ROOT,CLIENT_SUBMIT_ORDER:o.ROOT+o.SUBMIT_ORDER,CLIENT_BASKET:o.ROOT+o.BASKET,SELLER_DASHBOARD:d.ROOT+"/"+d.DASHBOARD,SELLER_ORDERS_MAIN:d.ROOT+"/"+d.ORDERS.MAIN,SELLER_ORDER_DETAILS:d.ROOT+"/"+d.ORDERS.MAIN+"/"+d.ORDERS.DETAILS,SELLER_ORDER_CREATE:d.ROOT+"/"+d.ORDERS.MAIN+"/"+d.ORDERS.CREATE,CLIENT_ITEMS:E.ROOT,CLIENT_ITEM_DETAILS:E.ROOT+"/"+E.DETAILS,SELLER_ITEMS:y.ROOT+"/"+E.ROOT,SELLER_ITEM_DETAILS:y.ROOT+"/"+E.ROOT+"/"+E.DETAILS,SELLER_UPDATE_ITEM:y.ROOT+"/"+E.ROOT+"/"+E.UPDATE,LOGIN:u,LOGOUT:p};function f(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("main",{id:"main-content",className:"loading",style:{gridRow:"2",display:"grid",justifyContent:"center",alignItems:"center"}},n.a.createElement("span",{style:{fontSize:"2.5em"}},"\u0141adowanie...")))}const h=Object(l.createContext)(),N="user-credentials",k=e=>new Promise(e=>{setTimeout(()=>e("12345678"),250)});function O(e){let{children:t}=e;const a=Object(l.useRef)(null),[r,c]=Object(l.useState)(!1),s=(Object(m.o)(),e=>{sessionStorage.setItem(N,JSON.stringify(e)),a.current=e});Object(l.useEffect)(()=>{let e={};try{e=JSON.parse(sessionStorage.getItem(N)),e||c(!0)}catch(t){}k().then(t=>{e.token=t,s(e),c(!0)}).catch(()=>{s(null),c(!0)})},[]);const i=Object(m.q)(),o={userData:a,handleLogin:e=>{e&&e.preventDefault(),k().then(e=>{s({name:"Bartek",token:e}),console.log(a.current),i(g.SELLER_DASHBOARD)})},handleLogout:async()=>{s(null),console.log("Logging out..."),i(g.CLIENT_MAIN)}};return r?n.a.createElement(h.Provider,{value:o},t):n.a.createElement(f,null)}const S=()=>Object(l.useContext)(h),w=e=>{let{children:t}=e;const{userData:a,ifLoadedCreds:l}=S(),r=Object(m.o)();return a.current?t:n.a.createElement(m.a,{to:g.CLIENT_MAIN,state:{from:r}})},z=Object(l.createContext)();function T(e){let{children:t}=e;const[a,r]=Object(l.useState)(0),c={basket:a,setBasket:r};return Object(l.useState)(()=>{try{r(sessionStorage.getItem("basket").length>0)}catch{}},[]),n.a.createElement(z.Provider,{value:c},t)}const R=()=>Object(l.useContext)(z);let v;function x(e){let{target:t}=e;const{userData:a}=S(),{basket:l}=R();a.current?a.current&&(v=[{txt:"Panel sprzedawcy",id:"main-page",href:g.SELLER_DASHBOARD+"/",func:null},{txt:"Zam\xf3wienia",id:"orders",href:g.SELLER_ORDERS_MAIN+"/",basket:l},{txt:"Itemy",id:"items",href:g.SELLER_ITEMS},{txt:"Wyloguj si\u0119",id:"logout",href:g.LOGOUT}]):v=[{txt:"Strona g\u0142\xf3wna",id:"main-page",href:g.CLIENT_MAIN,func:null},{txt:"Itemki",id:"items",href:g.CLIENT_ITEMS},{txt:"Koszyk",id:"basket",href:g.CLIENT_BASKET,basket:l},{txt:"Zaloguj si\u0119",id:"login",href:g.LOGIN}];const r=v.map(e=>n.a.createElement(s.c,{className:"btn btn-primary",to:e.href,id:e.id,key:e.id,onClick:()=>{try{document.querySelector(".show").classList.remove("show")}catch{}}},n.a.createElement("div",{"items-amount":e.basket?1:0},e.txt)));return n.a.createElement("nav",{className:"navbar navbar-expand-md"},n.a.createElement("button",{className:"btn btn-primary navbar-btn  ",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarList"},n.a.createElement("span",null," Menu: "),n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarList"},n.a.createElement("div",{className:"navbar-nav"},r)))}function A(){const e=JSON.parse(sessionStorage.getItem("categories"));let t=null;return null===e?(t=[{id:0,name:"Formacja",href:""},{id:1,name:"Ciekawe",href:""},{id:2,name:"Nowo\u015bci",href:""},{id:3,name:"Bestsellery",href:""},{id:4,name:"ks. Blachnicki",href:""},{id:5,name:"Gad\u017cety",href:""}],sessionStorage.setItem("categories",JSON.stringify(t))):t=Array.from(e),n.a.createElement("aside",null,"Kategorie:",n.a.createElement("ul",null,t.map(e=>n.a.createElement("li",{key:e.id},n.a.createElement("a",{className:"link-underline link-underline-opacity-0",href:e.href},e.name)))))}function I(){return n.a.createElement("footer",null,"Stopka, buhahaha")}a(18);function L(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(x,{target:"customer"}),n.a.createElement("div",{className:"main-wrapper"},n.a.createElement(A,null),n.a.createElement("main",{id:"main-content"},n.a.createElement(m.b,{id:"main-content"}))),n.a.createElement(I,null))}a(19);function D(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(x,{target:"seller"}),n.a.createElement("div",{className:"main-wrapper seller"},n.a.createElement("main",{id:"main-content"},n.a.createElement(w,null,n.a.createElement(m.b,{id:"main-content"})))),n.a.createElement(I,null))}var j=function(){const{userData:e}=S();return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{className:"topic border-bottom"},"Panel sprzedawcy"),n.a.createElement("div",{className:"Dashboard"},n.a.createElement("i",null,"Tutaj b\u0119dzie co\u015b ciekawego... kiedy\u015b...")))};function C(e){let{className:t}=e;return n.a.createElement("form",{role:"search",className:t},n.a.createElement("input",{type:"text",name:"search",placeholder:"Wyszukiwanie..."}),n.a.createElement("button",{className:"btn btn-secondary",type:"submit"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-search",viewBox:"0 0 16 16"},n.a.createElement("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"}))))}function _(e){let{img:t,href:a,title:l,dostepnosc:r,price:c}=e;const m=t?n.a.createElement("img",{src:t,className:"img",alt:"img"}):n.a.createElement("div",{className:"img"},"ksi\u0105\u017cka");return n.a.createElement(s.b,{to:a,className:"card"},m,n.a.createElement("div",{className:"wrapper "},n.a.createElement("h3",null,l),n.a.createElement("span",{className:"dostepnosc"},r),n.a.createElement("span",{className:"price"},c)))}function M(e){let{name:t,cards:a}=e;const l=a.map((e,t)=>n.a.createElement(_,{key:t,K:t,href:e.href,title:e.title,dostepnosc:e.dostepnosc,price:e.price,img:e.img}));return n.a.createElement("div",{key:t,className:"books container-fluid d-flex justify-content-center"},l)}a(8);var B=a(4),Z=a.n(B);const F=[{key:0,title:"Droga ku dojrza\u0142o\u015bci Chrze\u015bcija\u0144skiej",href:null,dostepnosc:"Nie dzia\u0142a",price:"25,26"},{key:1,title:"Zabity za prawd\u0119",href:"items/1234",dostepnosc:"DZIA\u0141A-kliknij",price:"35.22",img:Z.a},{key:2,title:"Tytu\u0142 ksi\u0105\u017cki",href:null,dostepnosc:"Nie dzia\u0142a",price:"25,26"},{key:3,title:"ZAK\u0141ADKA MAGNETYCZNA: DARY ZOBOWI\u0104ZANIA DOMOWEGO KO\u015aCIO\u0141A",href:null,dostepnosc:"Nie dzia\u0142a",price:"25,26"},{key:4,title:"Tytu\u0142 ksi\u0105\u017cki",href:null,dostepnosc:"Nie dzia\u0142a",price:"25,26"},{key:5,title:"Tytu\u0142 ksi\u0105\u017cki",href:null,dostepnosc:"Nie dzia\u0142a",price:"25,26"}];var P=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(C,null),n.a.createElement("h2",{className:"topic"},"Nowo\u015bci"),n.a.createElement(M,{cards:F,name:"newest"}),n.a.createElement("h2",{className:"topic"},"Popularne"),n.a.createElement(M,{cards:F,name:"topic"}))};function K(e){let{txt:t,onClick:a,disabled:l=!1}=e;return n.a.createElement("button",{className:"btn btn-primary",onClick:a,disabled:l},t)}function U(e){let{txt:t,onClick:a,disabled:l}=e;return n.a.createElement("button",{className:"btn btn-success",onClick:a,disabled:l},t)}function q(e){let{txt:t,href:a,disabled:l}=e;return a?n.a.createElement(s.b,{style:{color:"unset",textDecoration:"none"},to:a},n.a.createElement("button",{className:"btn btn-outline-primary",disabled:l},t)):n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{disabled:l,className:"btn btn-outline-primary"},t))}function J(e){let{onClick:t,txt:a}=e;return n.a.createElement("button",{type:"button",className:"close btn btn-outline-danger","aria-label":"Close",onClick:t},n.a.createElement("span",{"aria-hidden":"true"},a))}function W(e){let{i:t,txt:a,checked:l,action:r}=e;return n.a.createElement(n.a.Fragment,null,n.a.createElement("input",{name:"check-"+t,id:"check-"+t,onChange:e=>{r(t,e.target.checked)},checked:l,type:"checkbox",className:"btn-check"}),n.a.createElement("label",{htmlFor:"check-"+t,className:"btn btn-outline-primary"},a))}function G(e){let{txt:t,action:a,children:l}=e;return n.a.createElement("span",null,n.a.createElement("button",{title:"Przycisk testowy, na produkcji nie powinno go by\u0107","data-placement":"top",type:"button",className:"d-block btn btn-outline-info test-btn m-2","aria-label":"Close",onClick:a},t||l))}function H(){const{handleLogin:e}=S(),[t,a]=Object(l.useState)(!1);return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{className:"topic border-bottom"},"Strona logowania"),n.a.createElement("form",{onSubmit:l=>{e(l),a(!t)},className:"mx-2 my-3 w-50 d-flex flex-column",style:{alignSelf:"center"}},n.a.createElement("div",{className:"form-floating mb-2"},n.a.createElement("input",{type:"text",className:"form-control",min:"1",name:"name",id:"name",placeholder:"0",required:!0}),n.a.createElement("label",{htmlFor:"name",className:"form-label"},"Login")),n.a.createElement("div",{className:"form-floating"},n.a.createElement("input",{type:"password",className:"form-control",step:"0.01",size:"2",min:"1",name:"passwd",id:"passwd",placeholder:"23",required:!0}),n.a.createElement("label",{htmlFor:"passwd",className:"form-label"},"Has\u0142o")),n.a.createElement("small",{style:{fontStyle:"italic"}},"Wpisz cokolwiek, tu wszystko zadzia\u0142a"),n.a.createElement("span",{className:"mw mt-4 ",style:{display:"grid",justifyContent:"end"}},n.a.createElement(K,{type:"submit",txt:"Zaloguj si\u0119",disabled:t}))))}function Q(){const{handleLogout:e}=S();return e(),n.a.createElement(f,null)}a(20);function Y(e){return n.a.createElement("li",{className:"info "+e.cat_id,key:e.cat_id,"data-tag":e.name},e.val)}function V(e){let{seller:t}=e;const{setBasket:a}=R(),[l,r,c,m]=[1234,"Zabity za prawd\u0119",Z.a,35.22];function i(){const e=[l,r,m,1,""];let t;try{t=JSON.parse(sessionStorage.getItem("basket")),console.log({temp:t}),t=null===t?new Array([]):Array.from(t)}catch{t=new Array([])}const n=t.findIndex(e=>e[0]===l);console.log({temp:t}),n<0?t.push(e):t[n][3]+=1,console.log({i:n,d:e,temp:t}),sessionStorage.setItem("basket",JSON.stringify(t)),a(!0),alert("Dodano!")}let o,d;return console.log({seller:t}),t?d=n.a.createElement(s.b,{to:g.SELLER_UPDATE_ITEM+"/"+l},n.a.createElement("button",{className:"my-btn pc",type:"button"},"Aktualizuj artyku\u0142")):(o=n.a.createElement("button",{className:"my-btn",type:"button",onClick:i},"Dodaj do koszyka"),d=n.a.createElement("button",{className:"my-btn pc",type:"button",onClick:i},"Dodaj do koszyka")),n.a.createElement("div",{className:"DetailsContainer "},n.a.createElement("h2",{className:"topic border-bottom"},r),n.a.createElement("img",{src:c,alt:""}),n.a.createElement("div",{className:"details"},n.a.createElement("ul",null,[{cat_id:"dostepnosc",name:"Dost\u0119pno\u015b\u0107: ",val:"Jest w magazynie"},{cat_id:"category",name:"Kategoria: ",val:"x. Blachnicki"},{cat_id:"publisher",name:"Wydawnictwo: ",val:"LWT"},{cat_id:"pages",name:"Stron: ",val:"Sporo..."}].map(Y)),n.a.createElement("span",{className:"price"},m),d),o,n.a.createElement("div",{className:"description"},"Zacz\u0119\u0142o si\u0119 tak: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, assumenda earum facilis dolore id eligendi alias, rem officiis inventore sapiente ab quo nisi perferendis qui dolorem, labore repellat veniam dicta!"))}a(5);const X=e=>{e.target.select()};let $=new Array(5).fill([1,"Zabity za prawd\u0119",35.25,2,"/details/1234"],0,10);function ee(){let e=[];try{e=Array.from(JSON.parse(sessionStorage.getItem("basket")))}catch{}const[t,a]=Object(l.useState)(e),{setBasket:r}=R();Object(l.useEffect)(()=>{try{const l=t.filter(e=>e[0]?e:null);e=l,sessionStorage.setItem("basket",JSON.stringify(l)),a(l)}catch{}},[]),Object(l.useEffect)(()=>{console.log("Updating storage"),sessionStorage.setItem("basket",JSON.stringify(t)),r(t.length>0)},[t]);const c=(e,l)=>{let n=t;n[e][3]=l,a([...n])};let m=0;if(null===e||0===e.length)return n.a.createElement("div",{className:"Basket"},n.a.createElement("h2",{className:"topic border-bottom mb-3"},"Koszyk"),n.a.createElement("span",{style:{textAlign:"center",width:"100%"}},"Tw\xf3j koszyk jest pusty..."),n.a.createElement(G,{action:()=>{a([...$])}},"Nape\u0142nij koszyk"));function i(e){console.log("To delete: ",e);let l=t.filter((t,a)=>e-1!==a?t:null);a([...l])}return n.a.createElement("div",{className:"Basket"},n.a.createElement("h2",{className:"topic border-bottom mb-3"},"Koszyk"),n.a.createElement("table",{className:"table table-bordered table-striped table-hover"},n.a.createElement("thead",{className:"table-secondary"},n.a.createElement("tr",null,n.a.createElement("th",{scope:"col"},"#"),n.a.createElement("th",{scope:"col"},"Zdj\u0119cie"),n.a.createElement("th",{scope:"col"},"Tytu\u0142"),n.a.createElement("th",{scope:"col"},"Ilo\u015b\u0107"),n.a.createElement("th",{scope:"col"},"Cena"),n.a.createElement("th",{scope:"col"}))),n.a.createElement("tbody",null,t.map((e,t)=>(m+=e[2]*e[3],function(e,t,a,l){const r=e[3],c=e=>{e<1&&(e=1),l(t-1,e)};if(!e[0])return;return n.a.createElement("tr",{key:t,id:t},n.a.createElement("td",{key:"nr"},t),n.a.createElement("td",{key:"img"},n.a.createElement("img",{className:"img",src:e[5]||"",alt:"preview"})),n.a.createElement("td",{key:"title"},n.a.createElement(s.b,{to:"/items/"+e.id},e[1])),n.a.createElement("td",{className:"align-items-center",key:"amount"},n.a.createElement("button",{className:"amount-btn",onClick:()=>c(r-1)},"-"),n.a.createElement("input",{style:{padding:0,paddingRight:".5em",margin:"0 .3em",textAlignLast:"center"},type:"number",name:"id_amount",onChange:e=>{null!=e.target.value&&c(Number(e.target.value))},onClick:X,min:0,max:20,value:r}),n.a.createElement("button",{className:"amount-btn",onClick:()=>c(r+1)},"+")),n.a.createElement("td",{key:"price",className:"price"},e[2]),n.a.createElement("td",{className:"bin"},n.a.createElement(J,{onClick:()=>a(t),txt:"Usu\u0144 z koszyka"})))}(e,t+1,i,c))),n.a.createElement("tr",{className:"table-secondary"},n.a.createElement("td",{colSpan:"6",style:{textAlign:"end"}})))),n.a.createElement("span",{className:"mw",style:{display:"grid",justifyItems:"end",gap:".7em"}},n.a.createElement("span",{className:"price",style:{fontSize:"x-large",marginRight:".5em"}},"Razem: ",(Math.round(100*m)/100).toFixed(2)),n.a.createElement(s.b,{to:g.CLIENT_SUBMIT_ORDER},n.a.createElement(K,{txt:"Z\u0142\xf3\u017c zam\xf3wienie"}))))}function te(){return n.a.createElement("form",{onSubmit:function(e){e.preventDefault();const t=e.target;new FormData(t).append("items",sessionStorage.getItem("basket")),alert("Formularz zosanie wys\u0142any. Info w konsoli")},className:"mx-2"},n.a.createElement("div",{className:"mb-2"},n.a.createElement("label",{htmlFor:"name",className:"form-label"},"Imi\u0119 i nazwisko zamawiaj\u0105cego:"),n.a.createElement("input",{type:"text",name:"name",id:"name",className:"form-control mx-1",minLength:"3",placeholder:"Przemek Krakowski",required:!0}),n.a.createElement("div",{className:"form-text px-2"},"Pole obowi\u0105zkowe")),n.a.createElement("div",{className:"mb-2"},n.a.createElement("label",{htmlFor:"email",className:"form-label"},"Adres email:"),n.a.createElement("input",{type:"email",name:"email",className:"form-control mx-1",minLength:"3",placeholder:"przyklad@poczta.pl",id:"",required:!0}),n.a.createElement("div",{className:"form-text px-2"},"Pole obowi\u0105zkowe")),n.a.createElement("div",{className:"mb-4"},n.a.createElement("label",{htmlFor:"authorized",className:"form-label"},"Osoby upowa\u017cnione do odbioru (oddzieli\u0107 po przecinku):"),n.a.createElement("input",{type:"text",name:"authorized",className:"form-control mx-1",minLength:"3",placeholder:"Grzegorz Majstersztyk"})),n.a.createElement("span",{className:"mw",style:{display:"grid",justifyContent:"end"}},n.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Z\u0142\xf3\u017c zam\xf3wienie")))}function ae(){return n.a.createElement("div",{className:"submitOrder"},n.a.createElement("h2",{className:"topic border-bottom mb-3"},"Sk\u0142adanie zam\xf3wienia"),n.a.createElement(te,null))}const le=e=>{e.target.select()};const ne=new Array([{id:1,title:"Zabity za prawd\u0119",price:35.25,amount:0,href:"/details/1234",img:null},{id:2,title:"Zabity za prawd\u0119",price:35.25,amount:0,href:"/details/1234",img:null},{id:3,title:"Zabity za prawd\u0119",price:35.25,amount:0,href:"/details/1234",img:null},{id:4,title:"Zabity za prawd\u0119",price:35.25,amount:0,href:"/details/1234",img:null}])[0];function re(){const[e,t]=Object(l.useState)(ne);console.log({list:e});const a=(a,l)=>{let n=e;console.log({i:a,v:l}),n[a].amount=l,console.log({temp:n}),console.log({temp:n,list:e}),t([...n]),sessionStorage.setItem("basket",JSON.stringify(n))};let r=0;return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{className:"topic border-bottom"},"Tworzenie zam\xf3wienia"),n.a.createElement("form",{className:"mx-2 my-2 w-100 d-flex flex-row justify-content-between",style:{alignSelf:"center"}},n.a.createElement("div",{className:"form-floating mx-3 col"},n.a.createElement("input",{type:"text",className:"form-control",min:"1",name:"name",id:"name",placeholder:"0",required:!0}),n.a.createElement("label",{htmlFor:"name",className:"form-label"},"Zamawiaj\u0105cy"),n.a.createElement("div",{className:"form-text px-2"},"*Pole obowi\u0105zkowe")),n.a.createElement("div",{className:"form-floating col mx-3"},n.a.createElement("input",{type:"text",className:"form-control",min:"1",name:"email",id:"email",placeholder:"0"}),n.a.createElement("label",{htmlFor:"email",className:"form-label"},"Adres email"))),n.a.createElement("table",{className:"Basket table table-bordered table-striped table-hover"},n.a.createElement("thead",{className:"table-secondary"},n.a.createElement("tr",null,n.a.createElement("th",{scope:"col"},"#"),n.a.createElement("th",{scope:"col"},"Zdj\u0119cie"),n.a.createElement("th",{scope:"col"},"Tytu\u0142"),n.a.createElement("th",{scope:"col"},"Ilo\u015b\u0107"),n.a.createElement("th",{scope:"col"},"Cena"))),n.a.createElement("tbody",null,e.map((e,t)=>(r+=e.price*e.amount,e.id=t,function(e,t,a,l){const r=e.amount;e.id=t;const c=e=>{e<0&&(e=0),l(t-1,e)};return n.a.createElement("tr",{key:t,id:t},n.a.createElement("td",{key:"nr"},t),n.a.createElement("td",{key:"img"},n.a.createElement("img",{className:"img",src:e.img})),n.a.createElement("td",{key:"title"},n.a.createElement("a",{href:"/details/"+e.id},e.title)),n.a.createElement("td",{className:"align-items-center",key:"amount"},n.a.createElement("button",{className:"amount-btn",onClick:()=>c(r-1)},"-"),n.a.createElement("input",{style:{padding:0,paddingRight:".5em",margin:"0 .3em",textAlignLast:"center"},type:"number",name:"id_amount",onChange:e=>{c(Number(e.target.value))},onClick:le,id:"",min:0,max:20,value:r}),n.a.createElement("button",{className:"amount-btn",onClick:e=>c(r+1)},"+")),n.a.createElement("td",{key:"price",className:"price"},e.price))}(e,t+1,0,a))),n.a.createElement("tr",{className:"table-secondary"},n.a.createElement("td",{colSpan:"6",style:{textAlign:"end"}})))),n.a.createElement("span",{className:"mw mt-4 ",style:{display:"grid",justifyContent:"end"}},n.a.createElement(K,{type:"submit",txt:"Stw\xf3rz zam\xf3wienie",onClick:()=>alert("Zam\xf3wienie stworzone... itp")})))}const ce=new Array(5);ce.fill({id:"20240215_1234",person:"Przemys\u0142aw Zielent",email:"poczta@domena.pl",authorized:"Larynta",status:0},0,5);function me(e){let{data:t}=e;return n.a.createElement("tr",null,n.a.createElement("td",{className:"order-id"},"#",t.id),n.a.createElement("td",{className:"order-status"},0===(a=t.status)?"Oczekuj\u0105ce":1===a?"W trakcie przygotowania":2===a?"Oczekuje na odbi\xf3r":3===a?"Wydane":void 0),n.a.createElement("td",{className:"order-person"},t.person),n.a.createElement("td",{className:"order-email"},t.email),n.a.createElement("td",{className:"order-actions"},n.a.createElement(q,{txt:"Poka\u017c",href:"./"+t.id})));var a}function se(){return console.log(ce.length),n.a.createElement("div",{className:"OrdersList"},n.a.createElement("h2",{className:"topic border-bottom mb-3"},"Lista zam\xf3wie\u0144"),n.a.createElement("div",{className:"m-2"},n.a.createElement(q,{txt:"Stw\xf3rz nowe zam\xf3wienie",href:g.SELLER_ORDER_CREATE})),n.a.createElement("table",{className:"table table-bordered table-striped table-hover"},n.a.createElement("thead",{className:"table-secondary"},n.a.createElement("tr",null,n.a.createElement("th",{scope:"col"},"Nr zam\xf3wienia"),n.a.createElement("th",{scope:"col"},"Status"),n.a.createElement("th",{scope:"col"},"Zamawiaj\u0105cy"),n.a.createElement("th",{scope:"col"},"Adres email"),n.a.createElement("th",{scope:"col"}))),n.a.createElement("tbody",null,ce.map((e,t)=>n.a.createElement(me,{key:e.id+t,data:e})))))}const ie=new Array(15).fill({id:1,title:"Zabity za prawd\u0119; Ks. Blachnicki w obozach i wi\u0119zieniach",price:35.25,amount:12,dostepnosc:"Jest",href:"/items/1234",img:null},0,10);function oe(e){let{seller:t}=e,a=ie;const[r,c]=Object(l.useState)(a);return n.a.createElement("div",{className:""},n.a.createElement("h2",{className:"topic border-bottom mb-3 w"},"Lista przedmiot\xf3w"),n.a.createElement("div",{className:"d-flex justify-content-center flex-column"},n.a.createElement("div",{className:"mx-2 "},t&&n.a.createElement(q,{txt:"Dodaj nowy produkt",href:g.SELLER_UPDATE_ITEM}),n.a.createElement(C,{className:"mb-3"}),!t&&n.a.createElement(M,{cards:ie}),t&&n.a.createElement("table",{className:"table table-bordered table-striped table-hover"},n.a.createElement("thead",{className:"table-secondary"},n.a.createElement("tr",null,n.a.createElement("th",{scope:"col"},"#"),n.a.createElement("th",{scope:"col"},"Zdj\u0119cie"),n.a.createElement("th",{scope:"col"},"Tytu\u0142"),t&&n.a.createElement("th",{scope:"col"},"Ilo\u015b\u0107"),n.a.createElement("th",{scope:"col"},"Cena"),n.a.createElement("th",{scope:"col"}))),n.a.createElement("tbody",null,r.map((e,t)=>function(e,t){const a=e.amount;return n.a.createElement("tr",{key:t,id:t},n.a.createElement("td",{key:"nr"},t),n.a.createElement("td",{key:"img"},n.a.createElement("img",{className:"img",src:e.img,alt:"img"})),n.a.createElement("td",{key:"title"},e.title),n.a.createElement("td",{className:"align-items-center",key:"amount"},n.a.createElement("input",{style:{padding:0,paddingRight:".5em",margin:"0 .3em",textAlignLast:"center"},type:"number",name:"id_amount",id:"",min:0,max:20,value:a,disabled:!0})),n.a.createElement("td",{key:"price",className:"price"},e.price),n.a.createElement("td",{className:"bin"},n.a.createElement(q,{onClick:()=>{},txt:"Aktualizuj",href:g.SELLER_UPDATE_ITEM+"/"+e.id})))}(e,t+1)),n.a.createElement("tr",{className:"table-secondary"},n.a.createElement("td",{colSpan:"6",style:{textAlign:"end"}})))))))}const de="20240215_1234",Ee="Przemys\u0142aw Zielent",ue="poczta@domena.pl",pe="Larynta",be=0;let ye=new Array(3).fill({id:1234,title:"Zabity za prawd\u0119",price:35.22,amount:2,img:Z.a},0,10);function ge(){const e=ye,[t,a]=Object(l.useState)(Array(e.length).fill(!1)),[r,c]=Object(l.useState)(!1),[m,i]=Object(l.useState)(!1);let o=0;const d=(e,l)=>{let n=t;n=n.map((t,a)=>a===e?l:t),a([...n]),n.includes(!1)||c(!0)};return n.a.createElement("div",{className:"OrderDetails"},n.a.createElement("h2",{className:"topic border-bottom mg-3"},"Zam\xf3wienie #",de," - szczeg\xf3\u0142y"),n.a.createElement("ul",{className:"my-2"},n.a.createElement("li",null,"Zamawiaj\u0105cy: ",n.a.createElement("strong",null,Ee)),n.a.createElement("li",null,"Adres email: ",n.a.createElement("strong",{id:"email"},ue)),n.a.createElement("li",null,"Upowa\u017cniony: ",n.a.createElement("strong",{id:"authorized"},pe)),n.a.createElement("li",null,"Status: ",n.a.createElement("strong",{id:"status"},0===(E=be)?"Oczekuj\u0105ce":1===E?"W trakcie przygotowania":2===E?"Oczekuje na odbi\xf3r":3===E?"Wydane":void 0))),n.a.createElement("table",{className:"table table-bordered table-striped table-hover"},n.a.createElement("thead",{className:"table-secondary"},n.a.createElement("tr",null,n.a.createElement("th",{scope:"col"},"#"),n.a.createElement("th",{scope:"col"},"Zdj\u0119cie"),n.a.createElement("th",{scope:"col"},"Tytu\u0142"),n.a.createElement("th",{scope:"col"},"Ilo\u015b\u0107"),n.a.createElement("th",{scope:"col"},"Cena"),n.a.createElement("th",{scope:"col"}))),n.a.createElement("tbody",null,e.map((e,a)=>(o+=e.price*e.amount,n.a.createElement("tr",{key:a,id:a},n.a.createElement("td",{key:"nr"},a+1),n.a.createElement("td",{key:"img"},n.a.createElement("img",{className:"img",src:e.img,alt:"img"})),n.a.createElement("td",{key:"title"},n.a.createElement(s.b,{to:g.SELLER_ITEM_DETAILS.replace(":id",e.id)},e.title)),n.a.createElement("td",{className:"align-items-center",key:"amount"},n.a.createElement("input",{style:{padding:0,paddingRight:".5em",margin:"0 .3em",textAlignLast:"center"},type:"number",id:"",min:0,max:20,value:e.amount,readOnly:!0})),n.a.createElement("td",{key:"price",className:"price"},e.price),n.a.createElement("td",{className:"bin"},n.a.createElement(W,{i:a,txt:"Jest",name:"item_"+a,checked:t[a],action:d}))))),n.a.createElement("tr",{className:"table-secondary"},n.a.createElement("td",{colSpan:"6",style:{textAlign:"end"}})))),n.a.createElement("span",{className:"mw",style:{display:"grid",justifyItems:"end",gap:".7em"}},n.a.createElement("span",{className:"price",style:{fontSize:"x-large",marginRight:".5em"}},(Math.round(100*o)/100).toFixed(2)),n.a.createElement(K,{txt:"Powiadom odbiorc\u0119",disabled:!(r&&!m),onClick:()=>{alert("Klient powiadomiony"),i(!0)}}),n.a.createElement(U,{txt:"Wydaj zam\xf3wienie",disabled:!(r&&m)})));var E}a(21);function fe(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"notFound"},n.a.createElement("span",null,"Co\u015b posz\u0142o",n.a.createElement("br",null),"nie tak...")))}a(22);function he(e){let{v:t}=e;return n.a.createElement("option",{key:t.id,value:t.id},t.name)}const Ne=["Zabity za prawd\u0119",4,null,35.22,"Zacz\u0119\u0142o si\u0119 tak: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, assumenda earum facilis dolore id eligendi alias, rem officiis inventore sapiente ab quo nisi perferendis qui dolorem, labore repellat veniam dicta!"];function ke(e){let{}=e;const[t,a]=Object(l.useState)([]),[r,c]=Object(l.useState)(!1),s=Object(m.s)().id;return Object(l.useEffect)(()=>{let e=JSON.parse(sessionStorage.getItem("categories"));a(e),s&&new Promise(e=>setTimeout(e,500)).then(()=>{var e;e=Ne,document.getElementById("title").value=e[0]||null,document.getElementById("category").value=e[1]||null,document.getElementById("amount").value=e[2]||null,document.getElementById("prize").value=e[3]||null,document.getElementById("description").innerText=e[4]||null,c(!0)})},[]),n.a.createElement("div",{className:"updateItem"},n.a.createElement("h2",{className:"topic border-bottom"},"Dodawanie artyku\u0142u"),n.a.createElement("div",{className:"wrapper"},n.a.createElement("div",{className:"img"},n.a.createElement("img",{alt:"Miejsce na zdj\u0119cie"}),n.a.createElement("button",{className:"btn btn-secondary",onClick:e=>{}},"Dodaj/aktualizuj zdj\u0119cie")),n.a.createElement("form",null,n.a.createElement("ul",null,n.a.createElement("li",{className:"form-floating"},n.a.createElement("input",{type:"text",className:"form-control",name:"title",id:"title",placeholder:"Zabity za prawd\u0119...",required:!0}),n.a.createElement("label",{htmlFor:"title"},"Tytu\u0142:")),n.a.createElement("li",{className:"form-floating col-md"},n.a.createElement("select",{className:"form-select",name:"category",id:"category",defaultValue:"","aria-label":"Wybierz kategori\u0119",required:!0},n.a.createElement("option",{value:"",disabled:!0},"..."),t.map((e,t)=>n.a.createElement(he,{key:t,v:e}))),n.a.createElement("label",{htmlFor:"category",className:"form-label"},"Kategoria:")),n.a.createElement("div",{className:"d-flex  g-1",style:{gap:"1.5em"}},n.a.createElement("li",{className:"form-floating col-sm"},n.a.createElement("input",{type:"number",className:"form-control",size:"2",min:"1",name:"amount",id:"amount",placeholder:"0",required:!0}),n.a.createElement("label",{htmlFor:"amount",className:"form-label"},"Liczba sztuk:")),n.a.createElement("li",{className:"form-floating col-sm"},n.a.createElement("input",{type:"number",className:"form-control",step:"0.01",size:"2",min:"1",name:"prize",id:"prize",placeholder:"23",required:!0}),n.a.createElement("label",{htmlFor:"prize",className:"form-label"},"Cena (z\u0142):"))),n.a.createElement("li",{className:"form-floating"},n.a.createElement("textarea",{className:"form-control",id:"description",name:"description",rows:"3",placeholder:"..."}),n.a.createElement("label",{htmlFor:"description"},"Opis:")),n.a.createElement("div",{className:"mw",style:{display:"grid",justifyContent:"end"}},n.a.createElement(K,{txt:"Dodaj/aktualizuj pozycj\u0119"}))))))}const Oe=()=>n.a.createElement(T,null,n.a.createElement(O,null,n.a.createElement(m.e,null,n.a.createElement(m.c,{element:n.a.createElement(L,null),path:b.ROOT},n.a.createElement(m.c,{index:!0,element:n.a.createElement(P,null)}),n.a.createElement(m.c,{path:E.ROOT},n.a.createElement(m.c,{element:n.a.createElement(oe,null),index:!0}),n.a.createElement(m.c,{element:n.a.createElement(V,null),path:E.DETAILS})),n.a.createElement(m.c,{path:b.BASKET,element:n.a.createElement(ee,null)}),n.a.createElement(m.c,{path:b.SUBMIT_ORDER,element:n.a.createElement(ae,null)}),n.a.createElement(m.c,{path:u,element:n.a.createElement(H,null)}),n.a.createElement(m.c,{path:p,element:n.a.createElement(Q,null)}),n.a.createElement(m.c,{path:"*",element:n.a.createElement(fe,null)})),n.a.createElement(m.c,{element:n.a.createElement(D,null),path:y.ROOT},n.a.createElement(m.c,{element:n.a.createElement(j,null),index:!0,path:y.DASHBOARD}),n.a.createElement(m.c,{path:E.ROOT},n.a.createElement(m.c,{index:!0,element:n.a.createElement(oe,{seller:!0})}),n.a.createElement(m.c,{path:E.DETAILS,element:n.a.createElement(V,{seller:!0})}),n.a.createElement(m.c,{path:E.UPDATE,element:n.a.createElement(ke,null)}),n.a.createElement(m.c,{path:E.UPDATE+"/:id",element:n.a.createElement(ke,null)})),n.a.createElement(m.c,{path:y.ORDERS.MAIN},n.a.createElement(m.c,{index:!0,element:n.a.createElement(se,null)}),n.a.createElement(m.c,{path:y.ORDERS.CREATE,element:n.a.createElement(re,null)}),n.a.createElement(m.c,{path:y.ORDERS.DETAILS,element:n.a.createElement(ge,null)}))))));c.a.createRoot(document.getElementById("container")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(s.a,null,n.a.createElement(Oe,null)))),i()}],[[10,1,2]]]);
//# sourceMappingURL=main.fd2bbd90.chunk.js.map