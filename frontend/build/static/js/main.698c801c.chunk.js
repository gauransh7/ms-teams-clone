(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[2],{152:function(e,t,n){},153:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n.n(o),r=n(10),a=n.n(r),i=n(11),u=n(27),s=n(56),l=n(33),f=n(34),d=n(45),h=n(44),b=n(12),g=n(104),j=n(195),O=n(31),m=n(4),p=n(41),v=n(183),y=n(2),x=function(){return Object(y.jsx)("div",{style:{height:"100%",display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",width:"100%"},children:Object(y.jsx)("div",{children:Object(y.jsx)(v.a,{})})})},k=["component"],T=["layout","component"],_=function(e){var t=e.component,n=Object(p.a)(e,k);return Object(y.jsx)(t,Object(m.a)({},n))},E=c.a.memo((function(e){var t=e.layout,n=e.component,c=Object(p.a)(e,T),r=Object(o.useState)(!0),a=Object(O.a)(r,2),u=a[0],s=a[1],l=Object(o.useRef)(!0),f=Object(i.c)((function(e){return e.auth.isLoggedIn})),d=Object(i.c)((function(e){return e.room.getChatRoomPending})),h=Object(i.c)((function(e){return e.auth.getUserDataPending}));return Object(o.useLayoutEffect)((function(){console.log(c),console.log(c.exact),l.current?l.current=!1:h||s(!1)}),[h]),Object(o.useEffect)((function(){f&&s(!1)}),[f]),Object(y.jsx)(b.b,{path:c.path,exact:c.exact,component:function(e){return!0===u||d?Object(y.jsx)(x,{}):f?Object(y.jsx)(t,Object(m.a)(Object(m.a)({},e),{},{noNavbar:c.noNavbar,navbar:c.navbar,navItems:c.navItems,homeIcon:c.homeIcon,children:Object(y.jsx)(o.Suspense,{fallback:Object(y.jsx)("div",{className:"text-primary"}),children:Object(y.jsx)(_,Object(m.a)({component:n},e))})})):Object(y.jsx)(b.a,{to:"/login?next=".concat(c.location.pathname.slice(1))})}})})),S=n(40),I=n(187),C=n(188),N=n(189),R=n(190),P=n(191),D=n(101),w=n.n(D),L=n(159),A=n(25),G=n(193),M=n(198),U=n(66),F=function(e){return console.log(e),{type:U.a,theme:e}},z=n(64),J=Object(I.a)((function(e){return{AppBar:{backgroundColor:e.secondary},hideMobile:Object(S.a)({},e.breakpoints.down("xs"),{display:"none"}),title:{flexGrow:1},menuButtonHidden:{display:"none"}}})),B=Object(b.h)(Object(i.b)((function(e){return{user:e.auth.user,currentTheme:e.theme.theme,darkTheme:"dark"==e.theme.theme||"solarizedDark"==e.theme.theme||"palpatine"==e.theme.theme||"dracula"==e.theme.theme}}),(function(e){return{logout:function(){return e(Object(A.d)())},changeTheme:function(t){return console.log("hrere"),e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default";return console.log(e),function(t){t(F(e)),localStorage.setItem("theme",e)}}(t))}}}))((function(e){var t=J(),n=Object(b.g)();console.log(e.currentTheme);var c=Object(o.useState)(null),r=Object(O.a)(c,2),a=r[0],i=r[1],u=Object(o.useState)(null),s=Object(O.a)(u,2),l=s[0],f=s[1],d=function(){i(null)};return Object(y.jsx)(C.a,{position:"static",children:Object(y.jsxs)(N.a,{children:[Object(y.jsx)(R.a,{variant:"h6",className:t.title,children:Object(y.jsx)("img",{onClick:function(){return n.push("/login?next=")},style:{cursor:"pointer"},src:"".concat(window.location.origin,"/").concat(e.currentTheme,".png")})}),Object(y.jsx)(P.a,{"aria-controls":"simple-theme-menu",content:"themes","aria-haspopup":"true",color:"inherit",className:"header-title-button",onClick:function(e){i(e.currentTarget)},startIcon:Object(y.jsx)(w.a,{}),children:Object(y.jsx)("span",{className:t.hideMobile,children:"Themes"})}),Object(y.jsxs)(L.a,{id:"simple-theme-menu",anchorEl:a,keepMounted:!0,open:Boolean(a),onClose:d,style:{marginTop:"30px"},children:[Object(y.jsx)(G.a,{className:"default"===e.currentTheme&&"active-menu-option",onClick:function(){d(),e.changeTheme("default")},children:"Light"}),Object(y.jsx)(G.a,{className:"dark"===e.currentTheme&&"active-menu-option",onClick:function(){d(),e.changeTheme("dark")},children:"Dark"}),Object(y.jsx)(G.a,{className:"solarizedLight"===e.currentTheme&&"active-menu-option",onClick:function(){d(),e.changeTheme("solarizedLight")},children:"Solarized Light"}),Object(y.jsx)(G.a,{className:"solarizedDark"===e.currentTheme&&"active-menu-option",onClick:function(){d(),e.changeTheme("solarizedDark")},children:"Solarized Dark"}),Object(y.jsx)(G.a,{className:"dracula"===e.currentTheme&&"active-menu-option",onClick:function(){d(),e.changeTheme("dracula")},children:"Dracula"})]}),e.user?Object(y.jsxs)("div",{children:[Object(y.jsx)(P.a,{"aria-controls":"avatar-dropdown",content:"avatar","aria-haspopup":"true",color:"inherit",onClick:function(e){console.log(e.currentTarget),f(e.currentTarget)},startIcon:Object(y.jsx)(M.a,{color:"inherit",className:t.avatar,children:Object(z.b)(e.user.first_name+" "+e.user.last_name).reduce((function(e,t){return e+t}),"").substr(0,2)}),children:Object(y.jsx)("span",{className:t.hideMobile,children:e.user.first_name})}),Object(y.jsx)(L.a,{id:"avatar-dropdown",anchorEl:l,open:Boolean(l),onClose:function(){console.log("close"),f(null)},style:{marginTop:"30px"},onClick:function(){return e.logout},children:Object(y.jsx)(G.a,{onClick:e.logout,children:"Logout"})})]}):""]})})}))),H=function(e){var t=e.children,n=localStorage.getItem("theme");return Object(y.jsx)("div",{children:Object(y.jsxs)("main",{style:{height:"100vh",overflow:"hidden",display:"flex",flexDirection:"column"},children:[Object(y.jsx)(B,{}),Object(y.jsx)("div",{style:{height:"100vh",backgroundColor:{default:"#ffffff",dark:"#242526",palpatine:"#ffffff",solarizedLight:"#eee8d5",solarizedDark:"#0e2a35",dracula:"#282a36"}[n]},className:"w-100 fg-100 overflow-auto position-relative",children:t})]})})},W=n(194),X=n(157),q=n(58),K=(Object(b.h)(Object(i.b)((function(e){return{user:e.auth.user}}),(function(e){return{createChatRoom:function(t,n){return e(Object(q.b)(t,n))}}}))((function(e){Object(b.g)();return Object(y.jsx)("div",{children:"Auth Guide"})}))),n(197)),Y=n(102),V=n.n(Y),Q=(n(94),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){var e=this;return Object(y.jsx)(V.a,{textButton:"LOGIN WITH FACEBOOK",appId:"514560663329207",fields:"name,email,picture",callback:function(t){console.log("success"),console.log(t);var n={access_token:t.accessToken,code:t.userID};console.log(n),e.props.FacebookLoginFtn(n)}})}}]),n}(o.Component)),Z=Object(i.b)((function(e){return{user:e.auth.user,loginPending:e.auth.loginPending}}),(function(e){return{FacebookLoginFtn:function(t){return e(Object(A.a)(t))}}}))(Q),$=n(103),ee=n.n($),te=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){var e=this,t=function(t){console.log("success"),console.log(t);var n={access_token:t.accessToken,code:t.googleId};n=JSON.stringify(n),e.props.GoogleLoginFtn(n)};return Object(y.jsx)(ee.a,{clientId:"505402258596-eo28agt8peogpfa7hp10s0dv7r5555ag.apps.googleusercontent.com",buttonText:"LOGIN WITH GOOGLE",onSuccess:t,onFailure:t})}}]),n}(o.Component),ne=Object(i.b)((function(e){return{user:e.auth.user,loginPending:e.auth.loginPending}}),(function(e){return{GoogleLoginFtn:function(t){return e(Object(A.b)(t))}}}))(te),oe=Object(X.a)((function(e){return{createRoomButton:{margin:e.spacing(2)},buttonsDiv:{marginTop:e.spacing(2)},authDiv:{marginTop:e.spacing(2),display:"flex"}}})),ce=Object(b.h)(Object(i.b)((function(e){return{user:e.auth.user}}),(function(e){return{createChatRoom:function(t,n){return e(Object(q.b)(t,n))}}}))((function(e){Object(b.g)();var t=oe();return Object(y.jsxs)(W.a,{children:[Object(y.jsx)(K.a,{children:"We provide premium quality video calls."}),Object(y.jsx)(K.a,{children:"Enjoy video calling with different themes. You are just a click away."}),Object(y.jsxs)("div",{className:t.authDiv,children:[Object(y.jsx)(Z,{}),Object(y.jsx)(ne,{})]})]})}))),re=Object(X.a)((function(e){return{Login:{display:"grid",gridAutoFlow:"column",justifyContent:"space-around",alignItems:"center",height:"100%"}}})),ae=Object(i.b)((function(e){return{user:e.auth.user,loginPending:e.auth.loginPending,getUserDataPending:e.auth.getUserDataPending}}),(function(e){return{logoutUser:function(){return e(Object(A.d)())}}}))((function(e){var t=re();return e.getUserDataPending||e.loginPending?Object(y.jsx)(x,{}):Object(y.jsx)(W.a,{className:t.Login,children:Object(y.jsx)(ce,{})})})),ie=c.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,302))})),ue=c.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,205))})),se=c.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(8)]).then(n.bind(null,296))})),le=c.a.lazy((function(){return Promise.all([n.e(0),n.e(5),n.e(1),n.e(9)]).then(n.bind(null,300))})),fe=[{path:"/",exact:!0,layout:H,component:function(){return Object(y.jsx)(ie,{})}},{path:"/video/:id/:code",exact:!0,layout:H,component:function(){return Object(y.jsx)(le,{})}},{path:"/rooms",exact:!0,layout:H,component:function(){return Object(y.jsx)(ue,{})}},{path:"/room/:id",exact:!0,layout:H,component:function(){return Object(y.jsx)(se,{})}}],de=[{path:"/login",exact:!0,layout:H,component:function(){return Object(y.jsx)(ae,{})},strictlyPublic:!0}],he=(n(35),["component"]),be=["layout","component","strictlyPublic"],ge=function(e){var t=e.component,n=Object(p.a)(e,he);return Object(y.jsx)(t,Object(m.a)({},n))},je=function(e){var t=e.layout,n=e.component,c=e.strictlyPublic,r=void 0!==c&&c,a=Object(p.a)(e,be),u=Object(i.c)((function(e){return e.auth.isLoggedIn})),s="";return a.location.search.includes("next")&&(s=a.location.search.slice(6)),Object(y.jsx)(b.b,{path:a.path,exact:a.exact,component:function(e){return r&&!0===u?Object(y.jsx)(b.a,{to:"/".concat(s)}):Object(y.jsx)(t,Object(m.a)(Object(m.a)({},e),{},{noNavbar:a.noNavbar,navbar:a.navbar,navItems:a.navItems,homeIcon:a.homeIcon,children:Object(y.jsx)(o.Suspense,{fallback:Object(y.jsx)("div",{className:"text-primary"}),children:Object(y.jsx)(ge,Object(m.a)({component:n},e))})}))}})},Oe={solarizedDark:{type:"dark",primary:{main:"#002b36",contrastText:"#eee8d5"},secondary:{main:"#eee8d5",contrastText:"#0e2a35"},background:{default:"#09232c",paper:"#002b36"}},solarizedLight:{type:"light",primary:{main:"#fff7dd",contrastText:"#002b36"},secondary:{main:"#708090",contrastText:"#eee8d5"},background:{default:"#eee8d5",paper:"#fff7dd"}},palpatine:{type:"dark",primary:{main:"#1a1a1a",contrastText:"#ffffff"},secondary:{main:"#e04035",contrastText:"#ffffff"},background:{default:"#101010",paper:"#1b1b1b"}},default:{type:"light",primary:{main:"#ffffff",contrastText:"#000000"},secondary:{main:"#356fff",contrastText:"#ffffff"},background:{default:"#f0f2f5",paper:"#ffffff"}},dark:{type:"dark",primary:{main:"#282828",contrastText:"#ffffff"},secondary:{main:"#757575",contrastText:"#ffffff"},background:{default:"#18191a",paper:"#242526"}},dracula:{type:"dark",primary:{main:"#44475a",contrastText:"#bd93f9"},secondary:{main:"#bd93f9",contrastText:"#f8f8f2"},background:{default:"#20222c",paper:"#282a36"}}},me=n(28),pe=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"componentDidMount",value:function(){this.props.getUser()}},{key:"render",value:function(){return Object(y.jsxs)(j.a,{theme:(e=this.props.currentTheme,Object(g.a)({palette:Oe[e]})),children:[Object(y.jsx)(me.a,{}),Object(y.jsx)(u.a,{children:Object(y.jsxs)(b.d,{children:[de.map((function(e,t){return Object(y.jsx)(je,{strictlyPublic:e.strictlyPublic,layout:e.layout,path:e.path,exact:e.exact,component:e.component},t)})),fe.map((function(e,t){return Object(y.jsx)(E,{layout:e.layout,path:e.path,exact:e.exact,component:e.component},t)}))]})})]});var e}}]),n}(o.Component),ve=Object(i.b)((function(e){return{user:e.auth.user,isLoggedIn:e.auth.isLoggedIn,loginPending:e.auth.loginPending,currentTheme:e.theme.theme}}),(function(e){return{getUser:function(){return e(Object(A.c)())}}}))(pe);n(152);a.a.render(Object(y.jsx)(i.a,{store:s.a,children:Object(y.jsx)(u.a,{children:Object(y.jsx)(ve,{})})}),document.getElementById("root"))},25:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return h})),n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return g}));var o=n(47),c=n.n(o),r=n(30),a=n(77),i=n.n(a),u=n(9),s=n(28),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return{type:e,payload:t}},f=function(e){return{type:u.f,error:e}},d=function(e){return function(t){t(l(u.c,!0)),c()({method:"POST",url:"/rest-auth/google/",data:e,headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){console.log("done"),console.log(e),t(l(u.d,e.data.key)),i.a.set("token",e.data.key,{expires:7}),t(l(u.c,!1)),t(b())})).catch((function(e){400===e.response.status&&e.response.data&&"User is already registered with this e-mail address."===e.response.data.non_field_errors?s.b.error("User email already registered with Facebook."):s.b.error("Error occured while login."),t(f(e)),t(l(u.c,!1)),t(l(u.b,!1))}))}},h=function(e){return function(t){t(l(u.c,!0)),c()({method:"POST",url:"/rest-auth/facebook/",data:e}).then((function(e){console.log("done"),console.log(e),t(l(u.d,e.data.key)),i.a.set("token",e.data.key,{expires:7}),t(l(u.c,!1)),t(b())})).catch((function(e){400===e.response.status&&e.response.data&&"User is already registered with this e-mail address."===e.response.data.non_field_errors?s.b.error("User email already registered with Google."):s.b.error("Error occured while login."),t(f(e)),t(l(u.c,!1)),t(l(u.b,!1))}))}},b=function(){console.log("fetch data");return function(e){e(l(u.a,!0)),r.a.get("/rest-auth/user/").then((function(t){console.log(t.data),e(l(u.e,t.data)),e(l(u.b,!0)),e(l(u.a,!1))})).catch((function(t){e(f(t)),e(l(u.a,!1)),e(l(u.e,null)),e(l(u.d,"")),localStorage.removeItem("token"),e(l(u.b,!1))}))}},g=function(){console.log("fetch data");return function(e){r.a.post("/rest-auth/logout/").then((function(t){console.log(t.data),e(l(u.b,!1)),e(l(u.e,null)),e(l(u.d,"")),localStorage.removeItem("token")})).catch((function(t){e(f(t))}))}}},30:function(e,t,n){"use strict";var o=n(47),c=n.n(o),r=n(64),a=c.a.create({withCredentials:!0,headers:{"Content-Type":"application/json","Cache-Control":"no-cache"}});a.interceptors.request.use((function(e){return e.headers["X-CSRFToken"]=Object(r.a)("teams_csrftoken"),e})),t.a=a},35:function(e,t,n){"use strict";var o=n(4),c=n(33),r=n(34),a=n(56),i=function(){function e(){Object(c.a)(this,e),this.stream=null,this.token=null,this.config=null,this.callbacks={},this.socketRef=null,console.log(a.a.getState().auth)}return Object(r.a)(e,[{key:"connect",value:function(e){var t=this;console.log("chat url "+e),this.socketRef=new WebSocket(e),this.socketRef.onopen=function(){console.log("websocket open")},this.socketRef.onmessage=function(e){t.socketNewMessage(e.data)},this.socketRef.onerror=function(e){console.log(e)},this.socketRef.onclose=function(){console.log("websockets closed lets reopen")}}},{key:"close",value:function(){this.socketRef&&this.socketRef.close()}},{key:"on",value:function(e,t){this.callbacks[e]=t}},{key:"socketNewMessage",value:function(e){var t=JSON.parse(e),n=(t.peer,t.action),o=t.message;0!=Object.keys(this.callbacks).length&&this.callbacks[n](o)}},{key:"getSteam",value:function(){return this.stream}},{key:"sendMessage",value:function(e){try{this.socketRef.send(JSON.stringify(Object(o.a)({},e)))}catch(t){console.log(t.message)}}},{key:"sendSignal",value:function(e,t){try{this.waitForSocketConnection(function(){var n=JSON.stringify({peer:a.a.getState().auth.user,action:e,message:t});this.socketRef.send(n)}.bind(this),1e3)}catch(n){console.log(n.message)}}},{key:"state",value:function(){return this.socketRef.readyState}},{key:"waitForSocketConnection",value:function(e){var t=this;setTimeout((function(){if(1===u.state())return console.log("Connection is made"),e(),void console.log(this);console.log("wait for connection..."),console.log(this),t.waitForSocketConnection(e)}),100)}}],[{key:"getInstance",value:function(){return e.instance||(e.instance=new e),e.instance}}]),e}();i.instance=null;var u=i.getInstance();t.a=u},56:function(e,t,n){"use strict";var o=n(50),c=n(96),r=n(4),a=n(9),i=Object(r.a)(Object(r.a)({},{loginPending:!1,getUserDataPending:!1}),{},{user:{},token:"",isLoggedIn:!1,error:null});var u=n(66),s={theme:localStorage.getItem("theme")||"default"},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0,n=t.type,o=t.theme;switch(n){case u.a:return console.log(o),Object(r.a)(Object(r.a)({},e),{},{theme:o});default:return e}},f=n(52),d=n(6),h=Object(r.a)(Object(r.a)({},{createChatRoomPending:!1,getAllRommsPending:!1,getAllMessagesPenging:!1}),{},{currentRoom:{},roomsCreated:[],roomsInvited:[],userDimension:"2rem",messages:[],error:null});var b=Object(o.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0,n=t.type,o=t.payload;switch(t.error,n){case a.d:return Object(r.a)(Object(r.a)({},e),{},{token:o});case a.e:return Object(r.a)(Object(r.a)({},e),{},{user:o});case a.c:return Object(r.a)(Object(r.a)({},e),{},{loginPending:o});case a.a:return Object(r.a)(Object(r.a)({},e),{},{getUserDataPending:o});case a.b:return Object(r.a)(Object(r.a)({},e),{},{isLoggedIn:o});case a.f:return Object(r.a)(Object(r.a)({},e),{},{error:o});default:return e}},theme:l,room:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0,n=t.type,o=t.payload;switch(t.error,n){case d.i:return Object(r.a)(Object(r.a)({},e),{},{currentRoom:o});case d.k:return Object(r.a)(Object(r.a)({},e),{},{roomsCreated:[o].concat(Object(f.a)(e.roomsCreated))});case d.g:return Object(r.a)(Object(r.a)({},e),{},{messages:o});case d.d:return Object(r.a)(Object(r.a)({},e),{},{getAllMessagesPenging:o});case d.a:return Object(r.a)(Object(r.a)({},e),{},{messages:[].concat(Object(f.a)(e.messages),[o])});case d.j:return Object(r.a)(Object(r.a)({},e),{},{userDimension:o});case d.h:return Object(r.a)(Object(r.a)({},e),{},{roomsCreated:Object(f.a)(o.created),roomsInvited:Object(f.a)(o.invited)});case d.c:return Object(r.a)(Object(r.a)({},e),{},{createChatRoomPending:o});case d.e:return Object(r.a)(Object(r.a)({},e),{},{getAllRommsPending:o});case d.b:return Object(r.a)(Object(r.a)({},e),{},{error:o});default:return e}}}),g=function(e,t){return b(e,t)},j=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.c,O=Object(o.d)(g,j(Object(o.a)(c.a)));t.a=O},58:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"g",(function(){return l})),n.d(t,"e",(function(){return f})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return h})),n.d(t,"a",(function(){return b})),n.d(t,"f",(function(){return g}));n(47);var o=n(28),c=n(30),r="/call/room/",a=n(6),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return{type:e,payload:t}},u=function(e){return{type:a.b,error:e}},s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=r;return console.log(e),function(o){o(i(a.f,!0)),o(i(a.c,!0)),c.a.post(n,e).then((function(e){console.log(e),o(i(a.i,e.data)),o(i(a.k,e.data)),o(i(a.f,!1)),o(i(a.c,!1)),t(e.data.id,e.data.sharing_id)})).catch((function(e){o(u(e)),o(i(a.f,!1)),o(i(a.c,!1))}))}},l=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},s=r+t+"/update_room_users/";return console.log(e),function(t){t(i(a.f,!0)),t(i(a.c,!0)),c.a.patch(s,e).then((function(e){console.log(e),t(i(a.i,e.data)),t(i(a.f,!1)),t(i(a.c,!1)),n()})).catch((function(e){t(u(e)),o.b.error(e.response.data),t(i(a.f,!1)),t(i(a.c,!1))}))}},f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=r+e;return console.log("fetch room details"),function(e){e(i(a.f,!0)),e(i(a.c,!0)),c.a.get(n).then((function(n){console.log(n),e(i(a.i,n.data)),e(i(a.f,!1)),e(i(a.c,!1)),t()})).catch((function(t){e(u(t)),e(i(a.f,!1)),e(i(a.c,!1))}))}},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=r+e+"/all_messages";return console.log("fetch messages"),function(e){e(i(a.d,!0)),c.a.get(n).then((function(n){console.log(n),e(i(a.g,n.data)),e(i(a.d,!1)),t()})).catch((function(t){e(u(t)),e(i(a.d,!1)),e(i(a.g,[]))}))}},h=function(){return function(e){e(i(a.e,!0)),c.a.get("/call/my_chat_rooms").then((function(t){console.log(t),e(i(a.h,t.data)),e(i(a.e,!1))})).catch((function(t){e(u(t)),e(i(a.e,!1))}))}},b=function(e){return function(t){t(i(a.a,e))}},g=function(e){return function(t){t(i(a.j,e))}}},6:function(e,t,n){"use strict";n.d(t,"h",(function(){return o})),n.d(t,"i",(function(){return c})),n.d(t,"k",(function(){return r})),n.d(t,"g",(function(){return a})),n.d(t,"a",(function(){return i})),n.d(t,"j",(function(){return u})),n.d(t,"c",(function(){return s})),n.d(t,"e",(function(){return l})),n.d(t,"f",(function(){return f})),n.d(t,"d",(function(){return d})),n.d(t,"b",(function(){return h}));var o="SET_ALL_ROOMS",c="SET_CURRENT_ROOM",r="UPDATE_ROOMS_CREATED",a="SET_ALL_MESSAGES",i="ADD_MESSAGE",u="SET_USER_DIMENSION",s="CREATE_CHAT_ROOM_PENDING",l="GET_ALL_ROOMS_PENDING",f="GET_CURRENT_CHAT_ROOM_PENDING",d="GET_ALL_MESSAGES_PENDING",h="CHATROOM_API_ERROR"},64:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return a}));var o=function(e){for(var t=e+"=",n=decodeURIComponent(document.cookie).split(";"),o=0;o<n.length;o++){for(var c=n[o];" "==c.charAt(0);)c=c.substring(1);if(0==c.indexOf(t))return c.substring(t.length,c.length)}return""},c=["January","February","March","April","May","June","July","August","September","Octtober","November","December"];function r(e){var t=new Date(e);return c[t.getMonth()]+" "+t.getDate()+", "+t.getFullYear()}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.split(" ").map((function(e){return e?e[0].toUpperCase():""}))}},66:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var o="CHANGE_THEME"},9:function(e,t,n){"use strict";n.d(t,"e",(function(){return o})),n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i})),n.d(t,"f",(function(){return u}));var o="SET_USER_DATA",c="SET_TOKEN",r="IS_LOGGED_IN",a="LOGIN_PENDING",i="GET_USER_DATA_PENDING",u="USER_API_ERROR"},94:function(e,t,n){}},[[153,3,4]]]);
//# sourceMappingURL=main.698c801c.chunk.js.map