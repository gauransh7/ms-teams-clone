(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[5],{152:function(e,t,c){"use strict";var a=c(102),n=c(103);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(c(0)),o=(0,a(c(104)).default)(r.createElement("path",{d:"M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"}),"VideoCall");t.default=o},214:function(e,t,c){"use strict";var a=c(102),n=c(103);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(c(0)),o=(0,a(c(104)).default)(r.createElement("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"}),"Launch");t.default=o},266:function(e,t,c){"use strict";c.r(t);var a=c(74),n=c(186),r=c(150),o=c(0),s=c(16),i=c(29),l=c(32),u=c(10),d=c(188),j=c(265),b=c(185),m=c(55),f=c(152),O=c.n(f),v=c(2),h=Object(r.a)((function(e){return{createRoomButton:{margin:e.spacing(2)},textfield:{marginTop:e.spacing(2),backgroundColor:e.palette.primary.contrast},buttonsDiv:{marginTop:e.spacing(2)}}})),g=Object(u.h)(Object(s.b)((function(e){return{user:e.auth.user}}),(function(e){return{createChatRoom:function(t,c){return e(Object(m.a)(t,c))}}}))((function(e){var t=Object(u.g)(),c=h(),a=Object(o.useState)(!1),r=Object(l.a)(a,2),s=r[0],i=r[1],m=Object(o.useState)(!1),f=Object(l.a)(m,2),g=(f[0],f[1],Object(o.useState)("")),p=Object(l.a)(g,2),x=p[0],y=p[1],C=Object(o.useState)(""),N=Object(l.a)(C,2),w=N[0];N[1];Object(o.useEffect)((function(){console.log("render")}),[]);var k=function(){i(!s)},R=function(t){var c={room_name:x,created_by:e.user.pk};c=JSON.stringify(c),y(""),e.createChatRoom(c,t)},E=function(e,c){t.push("/video/".concat(e,"/").concat(c))};return Object(v.jsxs)(n.a,{children:[Object(v.jsxs)(d.a,{children:["Hi ",e.user.first_name,"! We provide premium quality video calls."]}),Object(v.jsx)(d.a,{children:"Enjoy video calling with different themes. You are just a click away."}),s?Object(v.jsxs)("div",{className:c.roomNameDiv,children:[Object(v.jsx)(j.a,{color:"secondary",className:c.textfield,onChange:function(e){y(e.target.value)},value:x,name:"roomName",variant:"outlined",autoComplete:!1,label:"",placeholder:"Enter a room name",error:!!w}),Object(v.jsxs)("div",{className:c.buttonsDiv,children:[Object(v.jsx)(b.a,{color:"secondary",onClick:k,children:"Cancel"}),Object(v.jsx)(b.a,{disabled:""===x,onClick:R,color:"secondary",children:"Save for later"}),Object(v.jsx)(b.a,{disabled:""===x,onClick:function(){return R(E)},color:"secondary",children:"Join"})]})]}):Object(v.jsx)(b.a,{variant:"contained",color:"secondary",className:c.createRoomButton,startIcon:Object(v.jsx)(O.a,{}),onClick:k,children:"Create Room"})]})}))),p=c(1),x=c(3),y=(c(6),c(4)),C=c(149),N=c(7),w=o.forwardRef((function(e,t){var c=e.classes,a=e.className,n=e.raised,r=void 0!==n&&n,s=Object(x.a)(e,["classes","className","raised"]);return o.createElement(C.a,Object(p.a)({className:Object(y.a)(c.root,a),elevation:r?8:1,ref:t},s))})),k=Object(N.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(w),R=o.forwardRef((function(e,t){var c=e.disableSpacing,a=void 0!==c&&c,n=e.classes,r=e.className,s=Object(x.a)(e,["disableSpacing","classes","className"]);return o.createElement("div",Object(p.a)({className:Object(y.a)(n.root,r,!a&&n.spacing),ref:t},s))})),E=Object(N.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(R),S=c(184),_=c(263),H=c(214),M=c.n(H),D=Object(r.a)((function(e){return{Card:{backgroundColor:e.palette.secondary.main,margin:e.spacing(.4),width:"80%"}}})),V=function(e){var t=Object(u.g)();console.log(e);var c=D();return Object(v.jsx)(k,{className:c.Card,children:Object(v.jsxs)(E,{children:[Object(v.jsx)(S.a,{gutterBottom:!0,children:e.room&&e.room.room_name}),Object(v.jsx)(_.a,{style:{marginInlineStart:"auto"},children:Object(v.jsx)(M.a,{onClick:function(){t.push("/video/".concat(e.room.id,"/").concat(e.room.sharing_id))}})})]})})},A=Object(r.a)((function(e){return{roomDetailsDiv:{width:"100%",display:"grid",justifyItems:"center"}}})),I=Object(u.h)(Object(s.b)((function(e){return{user:e.auth.user,rooms:e.room.rooms}}),(function(e){return{createChatRoom:function(t,c){return e(Object(m.a)(t,c))},getAllRooms:function(){return e(Object(m.b)())}}}))((function(e){Object(u.g)();Object(o.useEffect)((function(){e.getAllRooms()}),[]);var t=A();return Object(v.jsxs)("div",{className:t.roomDetailsDiv,children:[Object(v.jsx)(d.a,{children:"Your Rooms"}),Object(v.jsx)(V,{room:e.rooms[0]}),Object(v.jsx)(V,{room:e.rooms[1]})]})}))),z=Object(r.a)((function(e){return{Home:Object(a.a)({display:"grid",gridAutoFlow:"column",justifyItems:"center",padding:e.spacing(2)},e.breakpoints.down("xs"),{gridAutoFlow:"row"})}}));t.default=Object(s.b)((function(e){return{user:e.auth.user}}),(function(e){return{logoutUser:function(){return e(Object(i.c)())}}}))((function(e){Object(o.useEffect)((function(){console.log("render")}),[]);var t=z();return Object(v.jsxs)(n.a,{className:t.Home,children:[Object(v.jsx)(g,{}),Object(v.jsx)(I,{})]})}))}}]);
//# sourceMappingURL=5.0c156d5f.chunk.js.map