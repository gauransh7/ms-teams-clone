(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[5],{146:function(e,t,a){"use strict";var c=a(101),r=a(102);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),o=(0,c(a(103)).default)(n.createElement("path",{d:"M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"}),"VideoCall");t.default=o},206:function(e,t,a){"use strict";var c=a(101),r=a(102);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),o=(0,c(a(103)).default)(n.createElement("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"}),"Launch");t.default=o},258:function(e,t,a){"use strict";a.r(t);var c=a(75),r=a(180),n=a(144),o=a(0),s=a(16),i=a(29),l=a(32),u=a(10),d=a(182),j=a(257),b=a(179),m=a(56),f=a(146),O=a.n(f),h=a(2),v=Object(n.a)((function(e){return{createRoomButton:{margin:e.spacing(2)},textfield:{marginTop:e.spacing(2),backgroundColor:e.palette.primary.contrast},buttonsDiv:{marginTop:e.spacing(2)}}})),g=Object(u.h)(Object(s.b)((function(e){return{user:e.auth.user}}),(function(e){return{createChatRoom:function(t,a){return e(Object(m.a)(t,a))}}}))((function(e){var t=Object(u.g)(),a=v(),c=Object(o.useState)(!1),n=Object(l.a)(c,2),s=n[0],i=n[1],m=Object(o.useState)(!1),f=Object(l.a)(m,2),g=(f[0],f[1],Object(o.useState)("")),p=Object(l.a)(g,2),x=p[0],y=p[1],C=Object(o.useState)(""),N=Object(l.a)(C,2),w=N[0],k=(N[1],function(){i(!s)}),R=function(t){var a={room_name:x,created_by:e.user.pk};a=JSON.stringify(a),y(""),e.createChatRoom(a,t)},S=function(e,a){t.push("/video/".concat(e,"/").concat(a))};return Object(h.jsxs)(r.a,{children:[Object(h.jsxs)(d.a,{children:["Hi ",e.user.first_name,"! We provide premium quality video calls."]}),Object(h.jsx)(d.a,{children:"Enjoy video calling with different themes. You are just a click away."}),s?Object(h.jsxs)("div",{className:a.roomNameDiv,children:[Object(h.jsx)(j.a,{color:"secondary",className:a.textfield,onChange:function(e){y(e.target.value)},value:x,name:"roomName",variant:"outlined",autoComplete:!1,label:"",placeholder:"Enter a room name",error:!!w}),Object(h.jsxs)("div",{className:a.buttonsDiv,children:[Object(h.jsx)(b.a,{color:"secondary",onClick:k,children:"Cancel"}),Object(h.jsx)(b.a,{disabled:""===x,onClick:R,color:"secondary",children:"Save for later"}),Object(h.jsx)(b.a,{disabled:""===x,onClick:function(){return R(S)},color:"secondary",children:"Join"})]})]}):Object(h.jsx)(b.a,{variant:"contained",color:"secondary",className:a.createRoomButton,startIcon:Object(h.jsx)(O.a,{}),onClick:k,children:"Create Room"})]})}))),p=a(1),x=a(3),y=(a(6),a(4)),C=a(143),N=a(7),w=o.forwardRef((function(e,t){var a=e.classes,c=e.className,r=e.raised,n=void 0!==r&&r,s=Object(x.a)(e,["classes","className","raised"]);return o.createElement(C.a,Object(p.a)({className:Object(y.a)(a.root,c),elevation:n?8:1,ref:t},s))})),k=Object(N.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(w),R=o.forwardRef((function(e,t){var a=e.disableSpacing,c=void 0!==a&&a,r=e.classes,n=e.className,s=Object(x.a)(e,["disableSpacing","classes","className"]);return o.createElement("div",Object(p.a)({className:Object(y.a)(r.root,n,!c&&r.spacing),ref:t},s))})),S=Object(N.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(R),_=a(178),H=a(255),M=a(206),D=a.n(M),E=Object(n.a)((function(e){return{Card:{backgroundColor:e.palette.secondary.main,margin:e.spacing(.4),width:"80%"}}})),V=function(e){var t=Object(u.g)();console.log(e);var a=E();return Object(h.jsx)(k,{className:a.Card,children:Object(h.jsxs)(S,{children:[Object(h.jsx)(_.a,{gutterBottom:!0,children:e.room&&e.room.room_name}),Object(h.jsx)(H.a,{style:{marginInlineStart:"auto"},children:Object(h.jsx)(D.a,{onClick:function(){t.push("/video/".concat(e.room.id,"/").concat(e.room.sharing_id))}})})]})})},A=Object(n.a)((function(e){return{roomDetailsDiv:{width:"100%",display:"grid",justifyItems:"center"}}})),I=Object(u.h)(Object(s.b)((function(e){return{user:e.auth.user,rooms:e.room.rooms}}),(function(e){return{createChatRoom:function(t,a){return e(Object(m.a)(t,a))},getAllRooms:function(){return e(Object(m.b)())}}}))((function(e){Object(u.g)();Object(o.useEffect)((function(){e.getAllRooms()}),[]);var t=A();return Object(h.jsxs)("div",{className:t.roomDetailsDiv,children:[Object(h.jsx)(d.a,{children:"Your Rooms"}),Object(h.jsx)(V,{room:e.rooms[0]}),Object(h.jsx)(V,{room:e.rooms[1]})]})}))),z=Object(n.a)((function(e){return{Home:Object(c.a)({display:"grid",gridAutoFlow:"column",justifyItems:"center",padding:e.spacing(2)},e.breakpoints.down("xs"),{gridAutoFlow:"row"})}}));t.default=Object(s.b)((function(e){return{user:e.auth.user}}),(function(e){return{logoutUser:function(){return e(Object(i.c)())}}}))((function(e){var t=z();return Object(h.jsxs)(r.a,{className:t.Home,children:[Object(h.jsx)(g,{}),Object(h.jsx)(I,{})]})}))}}]);
//# sourceMappingURL=5.b4ee8b72.chunk.js.map