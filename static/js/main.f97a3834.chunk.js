(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports={nav:"NavBar_nav__3JIZ9",activeLink:"NavBar_activeLink__1oLam"}},function(e,t,n){e.exports={container:"Profile_container__JhAjO",avatar:"Profile_avatar__1XK06",description:"Profile_description__1R6yD"}},,,,,,,function(e,t,n){e.exports={container:"Welcome_container__FCBMs"}},function(e,t,n){e.exports={header:"Header_header__2PEly"}},,function(e,t,n){e.exports={container:"Wall_container__2MSW8"}},function(e,t,n){e.exports={container:"Messages_container__3ytLq"}},function(e,t,n){e.exports={container:"Message_container__NMkvi"}},,,,,function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(17),s=n.n(i),r=(n(28),n(18)),o=n.n(r),j=n(0),u=function(){return Object(j.jsx)("main",{id:o.a.container,children:Object(j.jsx)("p",{children:"Welcome"})})},d=n(19),l=n.n(d),b=function(){return Object(j.jsx)("header",{id:l.a.header})},h=n(8),x=n(10),f=n.n(x),p=function(){return Object(j.jsx)("nav",{id:f.a.nav,children:Object(j.jsxs)("ul",{children:[Object(j.jsx)(h.b,{to:"/",activeClassName:f.a.activeLink,children:Object(j.jsx)("li",{})}),Object(j.jsx)(h.b,{to:"/Profile",activeClassName:f.a.activeLink,children:Object(j.jsx)("li",{children:"Profile"})}),Object(j.jsx)(h.b,{to:"/Wall",activeClassName:f.a.activeLink,children:Object(j.jsx)("li",{children:"Wall"})})]})})},_=n(11),O=n.n(_),v=n.p+"static/media/avatar.614fb127.jpg",m=function(){return Object(j.jsxs)("main",{id:O.a.container,children:[Object(j.jsx)("section",{id:O.a.avatar,children:Object(j.jsx)("img",{src:v,alt:"avatar"})}),Object(j.jsx)("section",{id:O.a.description,children:Object(j.jsx)("p",{children:"Johnny West"})})]})},g=n(21),P=n.n(g),T=n(22),w=n.n(T),S=n(23),y=n.n(S),k=function(e){return Object(j.jsx)("main",{id:y.a.container,children:e.message})},C="ADD_POST",L="UPDATE_NEW_POST_TEXT",W=function(e,t){switch(t.type){case C:var n={message:e.newPostText};return e.messageData.push(n),e.newPostText="",e;case L:return e.newPostText=t.newText,e;default:return e}},D=function(e){var t=e.state.messageData.map((function(e){return Object(j.jsx)(k,{message:e.message})})),n=c.a.createRef();return Object(j.jsxs)("main",{children:[Object(j.jsxs)("section",{id:w.a.container,children:[Object(j.jsx)("textarea",{ref:n,onChange:function(){var t=function(e){return{type:L,newText:e}}(n.current.value);e.dispatch(t)},value:e.state.newPostText}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{onClick:function(){var t={type:C};e.dispatch(t)},children:"Add Post"})]}),Object(j.jsx)("section",{children:t})]})},N=function(e){return Object(j.jsx)("main",{id:P.a.container,children:Object(j.jsx)(D,{state:e.state,dispatch:e.dispatch})})},M=(n(35),n(2)),B=function(e){return Object(j.jsx)("div",{id:"app-wrapper",children:Object(j.jsxs)(h.a,{children:[Object(j.jsx)(b,{}),Object(j.jsx)(p,{}),Object(j.jsx)(M.a,{path:"/",render:function(){return Object(j.jsx)(u,{})}}),Object(j.jsx)(M.a,{path:"/Profile",render:function(){return Object(j.jsx)(m,{})}}),Object(j.jsx)(M.a,{path:"/Wall",render:function(){return Object(j.jsx)(N,{state:e.state,dispatch:e.dispatch})}})]})})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))},F={_state:{messageData:[{message:"\u041f\u0440\u0438\u0432\u0435\u0442"}],newPostText:""},_callSubscriber:function(){console.log("State changed")},getState:function(){return this._state},subscribe:function(e){this._callSubscriber=e},dispatch:function(e){this._state=W(this._state,e),this._callSubscriber(this._state)}},J=function(){s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(B,{state:F.getState(),dispatch:F.dispatch.bind(F)})}),document.getElementById("root"))};J(),F.subscribe(J),E()}],[[36,1,2]]]);
//# sourceMappingURL=main.f97a3834.chunk.js.map