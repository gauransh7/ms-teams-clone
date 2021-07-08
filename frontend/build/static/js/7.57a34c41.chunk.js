(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[7,8],{160:function(e,t,o){"use strict";var n=o(110),r=o(111);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(o(0)),c=(0,n(o(112)).default)(a.createElement("path",{d:"M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"}),"VideoCall");t.default=c},202:function(e,t,o){"use strict";var n=o(29),r=o(290),a=o(295),c=o(192),i=o(300),s=o(294),l=o(159),u=o(0),d=o(205),j=(o(16),o(10)),m=o(217),b=o.n(m),h=o(209),O=o.n(h),f=o(2),g=Object(l.a)((function(e){return{Card:{backgroundColor:e.palette.secondary.main,margin:e.spacing(.4),width:"80%",justifyContent:"space-between"},roomCardMainDiv:{height:"100%",width:"100%",display:"grid",alignItems:"center",justifyItems:"center"}}}));t.a=function(e){var t=Object(j.g)();console.log(e);var o=g(),l=Object(u.useState)(!1),m=Object(n.a)(l,2),h=m[0],v=m[1];return Object(f.jsxs)("div",{className:o.roomCardMainDiv,children:[Object(f.jsx)(r.a,{className:o.Card,clickable:!0,onClick:function(){return t.push("/room/".concat(e.room.id))},children:Object(f.jsxs)(a.a,{children:[Object(f.jsx)(c.a,{onClick:function(){return v(!0)},gutterBottom:!0,children:e.room&&e.room.room_name}),e.invite&&Object(f.jsx)(i.a,{label:"creater : ".concat(e.room.created_by.first_name)}),Object(f.jsxs)("div",{style:{marginInlineStart:"auto"},children:[!e.invite&&Object(f.jsx)(s.a,{children:Object(f.jsx)(O.a,{onClick:function(e){e.stopPropagation(),v(!0)}})}),Object(f.jsx)(s.a,{children:Object(f.jsx)(b.a,{onClick:function(o){o.stopPropagation(),t.push("/video/".concat(e.room.id,"/").concat(e.room.sharing_id))}})})]})]})}),h&&Object(f.jsx)(d.a,{room:e.room,onClick:function(e){return e.stopPropagation()},show:h,onClose:function(){return v(!1)}})]})}},203:function(e,t,o){"use strict";var n=o(0),r=o(16),a=o(10),c=o(290),i=o(291),s=o(192),l=o(56),u=o(202),d=o(159),j=o(2),m=Object(d.a)((function(e){return{roomsList:{width:"80%",display:"grid",justifyItems:"center",overflow:"hidden",paddingBottom:e.spacing(1),gridTemplateRows:"min-content",height:"80%"},list:{overflowY:"scroll",maxHeight:window.screen.availHeight/2,width:"100%",display:"grid",justifyItems:"center",position:"absolute"},listHeading:{top:0,backgroundColor:e.palette.primary.main,width:"100%",height:"50%",marginLeft:"10%"},listWrapper:{position:"relative",width:"100%",height:"90%",overflow:"hidden"},webkitScrollbar:{width:0,background:"transparent"},webkitScrollbarThumb:{background:"#FF0000"}}}));t.a=Object(a.h)(Object(r.b)((function(e){return{user:e.auth.user,roomsCreated:e.room.roomsCreated,roomsInvited:e.room.roomsInvited}}),(function(e){return{createChatRoom:function(t,o){return e(Object(l.b)(t,o))},getAllRooms:function(){return e(Object(l.d)())}}}))((function(e){Object(a.g)();Object(n.useEffect)((function(){e.getAllRooms()}),[]);var t=m();return Object(j.jsxs)(c.a,{className:t.roomsList,children:[Object(j.jsx)(i.a,{color:"secondary",className:t.listHeading,children:Object(j.jsx)(s.a,{variant:"h5",children:e.heading})}),Object(j.jsx)(i.a,{className:t.listWrapper,children:Object(j.jsx)("div",{className:t.list,children:e.rooms.map((function(t){return Object(j.jsx)(u.a,{room:t,invite:"Your Invites"==e.heading})}))})})]})})))},205:function(e,t,o){"use strict";var n=o(29),r=o(40),a=o(198),c=o(298),i=o(293),s=o(294),l=o(108),u=o(159),d=o(292),j=o(16),m=o(204),b=o.n(m),h=(o(207),o(0)),O=o(56),f=o(208),g=o(2),v=["show","room","onClose","label"],p=Object(u.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.secondary.main,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},textField:{}}}));t.a=Object(j.b)((function(e){return{currentRoom:e.room.currentRoom}}),(function(e){return{updateRoomUsers:function(t,o,n){return e(Object(O.g)(t,o,n))}}}))((function(e){var t=p(),o=e.show,u=(e.room,e.onClose),j=(e.label,Object(r.a)(e,v),Object(h.useState)("")),m=Object(n.a)(j,2),O=m[0],x=m[1];function C(){f.b.success("Added user"),x("")}return Object(g.jsx)(a.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:t.modal,open:o,centered:!0,onClose:u,children:Object(g.jsx)(d.a,{in:o,children:Object(g.jsxs)("div",{className:t.paper,children:[Object(g.jsx)(f.a,{}),Object(g.jsx)("h2",{id:"transition-modal-title",children:e.room.room_name}),Object(g.jsx)("div",{id:"transition-modal-description",children:Object(g.jsx)(c.a,{color:"secondary",className:t.textfield,onChange:function(e){x(e.target.value)},value:O,name:"email",variant:"outlined",autoComplete:!1,label:"",placeholder:"Enter user email",InputProps:{endAdornment:Object(g.jsx)(i.a,{position:"end",children:Object(g.jsx)(s.a,{children:Object(g.jsx)(l.a,{onClick:function(){var t={email:O};e.updateRoomUsers(t,e.room.id,C)},children:Object(g.jsx)(b.a,{})})})})}})})]})})})}))},206:function(e,t,o){"use strict";var n=o(0),r=o(16),a=o(10),c=o(192),i=o(193),s=o(56),l=(o(202),o(159)),u=o(203),d=o(2),j=Object(l.a)((function(e){return{roomDetailsDiv:{width:"100%",display:"grid",justifyItems:"center",height:"90%",alignItems:"center"}}}));t.a=Object(a.h)(Object(r.b)((function(e){return{user:e.auth.user,roomsCreated:e.room.roomsCreated,roomsInvited:e.room.roomsInvited}}),(function(e){return{createChatRoom:function(t,o){return e(Object(s.b)(t,o))},getAllRooms:function(){return e(Object(s.d)())}}}))((function(e){var t=Object(a.g)();Object(n.useEffect)((function(){e.getAllRooms()}),[]);var o=j();return Object(d.jsxs)("div",{className:o.roomDetailsDiv,children:[Object(d.jsx)(u.a,{heading:"Your rooms",rooms:e.roomsCreated.slice(0,2)}),Object(d.jsx)(u.a,{heading:"Your Invites",rooms:e.roomsInvited.slice(0,2)}),Object(d.jsx)(c.a,{variant:"h6",className:o.title,children:Object(d.jsx)(i.a,{onClick:function(){return t.push("/rooms")},children:"View All"})})]})})))},207:function(e,t,o){"use strict";o.r(t);var n=o(76),r=o(196),a=o(159),c=o(0),i=o(16),s=(o(30),o(56)),l=(o(206),o(203)),u=o(2),d=Object(a.a)((function(e){return{Rooms:Object(n.a)({display:"grid",gridAutoFlow:"column",justifyItems:"center",padding:e.spacing(2),alignItems:"center",position:"relative",height:"100%"},e.breakpoints.down("xs"),{gridAutoFlow:"row"})}}));t.default=Object(i.b)((function(e){return{user:e.auth.user,roomsCreated:e.room.roomsCreated,roomsInvited:e.room.roomsInvited}}),(function(e){return{getAllRooms:function(){return e(Object(s.d)())}}}))((function(e){Object(c.useEffect)((function(){e.getAllRooms()}),[]);var t=d();return Object(u.jsxs)(r.a,{className:t.Rooms,children:[Object(u.jsx)(l.a,{rooms:e.roomsCreated,heading:"Your Rooms"}),Object(u.jsx)(l.a,{rooms:e.roomsInvited,heading:"Your Invites"})]})}))},302:function(e,t,o){"use strict";o.r(t);var n=o(76),r=o(196),a=o(159),c=o(0),i=o(16),s=o(30),l=o(29),u=o(10),d=o(199),j=o(298),m=o(193),b=o(161),h=o(195),O=o(56),f=o(160),g=o.n(f),v=o(208),p=o(2),x=Object(a.a)((function(e){return{createRoomButton:{margin:e.spacing(2)},textfield:{marginTop:e.spacing(2),backgroundColor:e.palette.primary.contrast},buttonsDiv:{marginTop:e.spacing(2)}}})),C=Object(u.h)(Object(i.b)((function(e){return{user:e.auth.user}}),(function(e){return{createChatRoom:function(t,o){return e(Object(O.b)(t,o))}}}))((function(e){var t,o=Object(u.g)(),a=x(),i=Object(c.useState)(!1),s=Object(l.a)(i,2),O=s[0],f=s[1],C=Object(c.useState)(!1),w=Object(l.a)(C,2),y=(w[0],w[1],Object(c.useState)("")),k=Object(l.a)(y,2),I=k[0],R=k[1],N=Object(c.useState)(""),S=Object(l.a)(N,2),A=S[0],E=(S[1],Object(c.useState)(null)),H=Object(l.a)(E,2),_=H[0],D=H[1];Object(c.useEffect)((function(){console.log("render")}),[]);var F=function(){f(!O)},T=function(e){if(""!=I)switch(e){case 0:return void Y(M);case 1:return void Y(B);case 2:return void Y()}else v.b.error("Enter a room name")},Y=function(t){var o={room_name:I,created_by:e.user.pk};o=JSON.stringify(o),R(""),e.createChatRoom(o,t)},M=function(e,t){o.push("/video/".concat(e,"/").concat(t))},B=function(e,t){o.push("/room/".concat(e))};return Object(p.jsxs)(r.a,{children:[Object(p.jsxs)(d.a,{children:["Hi ",e.user.first_name,"! We provide premium quality video calls."]}),Object(p.jsx)(d.a,{children:"Enjoy video calling with different themes. You are just a click away."}),O?Object(p.jsxs)("div",{className:a.roomNameDiv,children:[Object(p.jsx)(v.a,{}),Object(p.jsx)(j.a,{color:"secondary",className:a.textfield,onChange:function(e){R(e.target.value)},value:I,name:"roomName",variant:"outlined",autoComplete:!1,label:"",placeholder:"Enter a room name",error:!!A}),Object(p.jsxs)("div",{className:a.buttonsDiv,children:[Object(p.jsx)(m.a,{size:"large",color:"secondary",onClick:F,children:"Cancel"}),Object(p.jsx)(m.a,(t={"aria-controls":"avatar-dropdown",content:"avatar",variant:"contained",color:"secondary","aria-haspopup":"true"},Object(n.a)(t,"color","inherit"),Object(n.a)(t,"size","large"),Object(n.a)(t,"onClick",(function(e){console.log(e.currentTarget),D(e.currentTarget)})),Object(n.a)(t,"startIcon",Object(p.jsx)(g.a,{})),Object(n.a)(t,"children","Launch"),t)),Object(p.jsxs)(b.a,{id:"avatar-dropdown",anchorEl:_,open:Boolean(_),onClose:function(){console.log("close"),D(null)},style:{marginTop:"30px"},onClick:function(){return e.logout},children:[Object(p.jsx)(h.a,{onClick:function(){return T(0)},children:"Start Meeting"}),Object(p.jsx)(h.a,{onClick:function(){return T(1)},children:"Start Conversation"}),Object(p.jsx)(h.a,{onClick:function(){return T(2)},children:"Save for later"})]})]})]}):Object(p.jsx)(m.a,{variant:"contained",color:"secondary",className:a.createRoomButton,startIcon:Object(p.jsx)(g.a,{}),onClick:F,children:"Create Room"})]})}))),w=o(206),y=Object(a.a)((function(e){return{Home:Object(n.a)({display:"grid",gridAutoFlow:"column",justifyItems:"center",padding:e.spacing(2),alignItems:"center",height:"100%"},e.breakpoints.down("xs"),{gridAutoFlow:"row"})}}));t.default=Object(i.b)((function(e){return{user:e.auth.user}}),(function(e){return{logoutUser:function(){return e(Object(s.c)())}}}))((function(e){Object(c.useEffect)((function(){console.log("render")}),[]);var t=y();return Object(p.jsxs)(r.a,{className:t.Home,children:[Object(p.jsx)(C,{}),Object(p.jsx)(w.a,{})]})}))}}]);
//# sourceMappingURL=7.57a34c41.chunk.js.map