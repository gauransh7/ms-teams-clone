(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[6,7],{160:function(e,t,o){"use strict";var n=o(110),r=o(111);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(o(0)),c=(0,n(o(112)).default)(a.createElement("path",{d:"M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"}),"VideoCall");t.default=c},202:function(e,t,o){"use strict";var n=o(29),r=o(293),a=o(298),c=o(192),i=o(305),s=o(297),l=o(159),u=o(0),d=o(206),j=(o(16),o(10)),b=o(217),m=o.n(b),h=o(214),O=o.n(h),f=o(2),g=Object(l.a)((function(e){return{Card:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText,margin:e.spacing(.4),width:"80%",cursor:"pointer",justifyContent:"space-between"},roomCardMainDiv:{height:"100%",width:"100%",display:"grid",alignItems:"center",justifyItems:"center"},icons:{color:e.palette.secondary.contrastText}}}));t.a=function(e){var t=Object(j.g)();console.log(e);var o=g(),l=Object(u.useState)(!1),b=Object(n.a)(l,2),h=b[0],p=b[1];return Object(f.jsxs)("div",{className:o.roomCardMainDiv,children:[Object(f.jsx)(r.a,{className:o.Card,clickable:!0,onClick:function(){return t.push("/room/".concat(e.room.id))},children:Object(f.jsxs)(a.a,{children:[Object(f.jsx)(c.a,{onClick:function(){return p(!0)},gutterBottom:!0,children:e.room&&e.room.room_name}),e.invite&&Object(f.jsx)(i.a,{label:"creater : ".concat(e.room.created_by.first_name)}),Object(f.jsxs)("div",{style:{marginInlineStart:"auto"},children:[!e.invite&&Object(f.jsx)(s.a,{children:Object(f.jsx)(O.a,{className:o.icons,onClick:function(e){e.stopPropagation(),p(!0)}})}),Object(f.jsx)(s.a,{children:Object(f.jsx)(m.a,{className:o.icons,onClick:function(o){o.stopPropagation(),t.push("/video/".concat(e.room.id,"/").concat(e.room.sharing_id))}})})]})]})}),h&&Object(f.jsx)(d.a,{room:e.room,onClick:function(e){return e.stopPropagation()},show:h,onClose:function(){return p(!1)}})]})}},203:function(e,t,o){"use strict";var n=o(76),r=o(0),a=o(16),c=o(10),i=o(293),s=o(294),l=o(192),u=o(56),d=o(202),j=o(159),b=o(2),m=Object(j.a)((function(e){return{roomsList:{width:"80%",display:"grid",justifyItems:"center",overflow:"hidden",paddingBottom:e.spacing(1),backgroundColor:e.palette.background,gridTemplateRows:"min-content",height:"80%"},list:Object(n.a)({overflowY:"scroll",maxHeight:window.screen.availHeight/1.3,width:"100%",display:"grid",justifyItems:"center",position:"absolute"},e.breakpoints.down("xs"),{maxHeight:window.screen.availHeight/2}),listHeading:{top:0,backgroundColor:e.palette.primary.main,width:"100%",height:"50%",marginLeft:"10%"},listWrapper:{position:"relative",width:"100%",height:"90%",overflow:"hidden",display:"grid"},webkitScrollbar:{width:0,background:"transparent"},webkitScrollbarThumb:{background:"#FF0000"}}}));t.a=Object(c.h)(Object(a.b)((function(e){return{user:e.auth.user,roomsCreated:e.room.roomsCreated,roomsInvited:e.room.roomsInvited}}),(function(e){return{createChatRoom:function(t,o){return e(Object(u.b)(t,o))},getAllRooms:function(){return e(Object(u.d)())}}}))((function(e){Object(c.g)();Object(r.useEffect)((function(){e.getAllRooms()}),[]);var t=m();return Object(b.jsxs)(i.a,{className:t.roomsList,children:[Object(b.jsx)(s.a,{color:"secondary",className:t.listHeading,children:Object(b.jsx)(l.a,{variant:"h5",children:e.heading})}),Object(b.jsx)(s.a,{className:t.listWrapper,children:Object(b.jsx)("div",{className:t.list,children:e.rooms.map((function(t){return Object(b.jsx)(d.a,{room:t,invite:"Your Invites"==e.heading})}))})})]})})))},205:function(e,t,o){"use strict";var n=o(76),r=o(0),a=o(16),c=o(10),i=o(192),s=o(193),l=o(56),u=(o(202),o(159)),d=o(203),j=o(2),b=Object(u.a)((function(e){return{roomDetailsDiv:{width:"100%",height:"60%"},roomList:Object(n.a)({height:"100%",width:"100%",display:"grid",justifyItems:"center"},e.breakpoints.down("xs"),{display:"none"}),title:{textAlign:"center"}}}));t.a=Object(c.h)(Object(a.b)((function(e){return{user:e.auth.user,roomsCreated:e.room.roomsCreated,roomsInvited:e.room.roomsInvited}}),(function(e){return{createChatRoom:function(t,o){return e(Object(l.b)(t,o))},getAllRooms:function(){return e(Object(l.d)())}}}))((function(e){var t=Object(c.g)();Object(r.useEffect)((function(){e.getAllRooms()}),[]);var o=b();return Object(j.jsxs)("div",{className:o.roomDetailsDiv,children:[Object(j.jsxs)("div",{className:o.roomList,children:[Object(j.jsx)(d.a,{heading:"Your rooms",rooms:e.roomsCreated.slice(0,2)}),Object(j.jsx)(d.a,{heading:"Your Invites",rooms:e.roomsInvited.slice(0,2)})]}),Object(j.jsx)(i.a,{variant:"h6",className:o.title,children:Object(j.jsx)(s.a,{onClick:function(){return t.push("/rooms")},children:"View All Rooms"})})]})})))},206:function(e,t,o){"use strict";var n=o(29),r=o(40),a=o(198),c=o(302),i=o(296),s=o(297),l=o(108),u=o(159),d=o(295),j=o(16),b=o(204),m=o.n(b),h=(o(207),o(0)),O=o(56),f=o(210),g=o(2),p=["show","room","onClose","label"],v=Object(u.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.secondary.main,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},textField:{}}}));t.a=Object(j.b)((function(e){return{currentRoom:e.room.currentRoom}}),(function(e){return{updateRoomUsers:function(t,o,n){return e(Object(O.g)(t,o,n))}}}))((function(e){var t=v(),o=e.show,u=(e.room,e.onClose),j=(e.label,Object(r.a)(e,p),Object(h.useState)("")),b=Object(n.a)(j,2),O=b[0],x=b[1];function C(){f.b.success("Added user"),x("")}return Object(g.jsx)(a.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:t.modal,open:o,centered:!0,onClose:u,children:Object(g.jsx)(d.a,{in:o,children:Object(g.jsxs)("div",{className:t.paper,children:[Object(g.jsx)(f.a,{}),Object(g.jsx)("h2",{id:"transition-modal-title",children:e.room.room_name}),Object(g.jsx)("div",{id:"transition-modal-description",children:Object(g.jsx)(c.a,{color:"secondary",className:t.textfield,onChange:function(e){x(e.target.value)},value:O,name:"email",variant:"outlined",autoComplete:!1,label:"",placeholder:"Enter user email",InputProps:{endAdornment:Object(g.jsx)(i.a,{position:"end",children:Object(g.jsx)(s.a,{children:Object(g.jsx)(l.a,{onClick:function(){var t={email:O};e.updateRoomUsers(t,e.room.id,C)},children:Object(g.jsx)(m.a,{})})})})}})})]})})})}))},207:function(e,t,o){"use strict";o.r(t);var n=o(76),r=o(196),a=o(159),c=o(0),i=o(16),s=(o(30),o(56)),l=(o(205),o(203)),u=o(2),d=Object(a.a)((function(e){return{Rooms:Object(n.a)({display:"grid",gridAutoFlow:"column",justifyItems:"center",padding:e.spacing(2),alignItems:"center",position:"relative",height:"100%"},e.breakpoints.down("xs"),{gridAutoFlow:"row"})}}));t.default=Object(i.b)((function(e){return{user:e.auth.user,roomsCreated:e.room.roomsCreated,roomsInvited:e.room.roomsInvited}}),(function(e){return{getAllRooms:function(){return e(Object(s.d)())}}}))((function(e){Object(c.useEffect)((function(){e.getAllRooms()}),[]);var t=d();return Object(u.jsxs)(r.a,{className:t.Rooms,children:[Object(u.jsx)(l.a,{rooms:e.roomsCreated,heading:"Your Rooms"}),Object(u.jsx)(l.a,{rooms:e.roomsInvited,heading:"Your Invites"})]})}))},304:function(e,t,o){"use strict";o.r(t);var n=o(76),r=o(196),a=o(159),c=o(0),i=o(16),s=o(30),l=o(29),u=o(10),d=o(199),j=o(302),b=o(193),m=o(161),h=o(195),O=o(56),f=o(160),g=o.n(f),p=o(210),v=o(2),x=Object(a.a)((function(e){return{createRoomButton:{margin:e.spacing(2)},textfield:{marginTop:e.spacing(2),backgroundColor:e.palette.primary.contrast},buttonsDiv:{marginTop:e.spacing(2)}}})),C=Object(u.h)(Object(i.b)((function(e){return{user:e.auth.user}}),(function(e){return{createChatRoom:function(t,o){return e(Object(O.b)(t,o))}}}))((function(e){var t,o=Object(u.g)(),a=x(),i=Object(c.useState)(!1),s=Object(l.a)(i,2),O=s[0],f=s[1],C=Object(c.useState)(!1),w=Object(l.a)(C,2),y=(w[0],w[1],Object(c.useState)("")),k=Object(l.a)(y,2),I=k[0],N=k[1],R=Object(c.useState)(""),S=Object(l.a)(R,2),A=S[0],H=(S[1],Object(c.useState)(null)),E=Object(l.a)(H,2),_=E[0],D=E[1];Object(c.useEffect)((function(){console.log("render")}),[]);var T=function(){f(!O)},F=function(e){if(""!=I)switch(e){case 0:return void Y(L);case 1:return void Y(M);case 2:return void Y()}else p.b.error("Enter a room name")},Y=function(t){var o={room_name:I,created_by:e.user.pk};o=JSON.stringify(o),N(""),e.createChatRoom(o,t)},L=function(e,t){o.push("/video/".concat(e,"/").concat(t))},M=function(e,t){o.push("/room/".concat(e))};return Object(v.jsxs)(r.a,{children:[Object(v.jsxs)(d.a,{children:["Hi ",e.user.first_name,"! We provide premium quality video calls."]}),Object(v.jsx)(d.a,{children:"Enjoy video calling with different themes. You are just a click away."}),O?Object(v.jsxs)("div",{className:a.roomNameDiv,children:[Object(v.jsx)(p.a,{}),Object(v.jsx)(j.a,{color:"secondary",className:a.textfield,onChange:function(e){N(e.target.value)},value:I,name:"roomName",variant:"outlined",autoComplete:!1,label:"",placeholder:"Enter a room name",error:!!A}),Object(v.jsxs)("div",{className:a.buttonsDiv,children:[Object(v.jsx)(b.a,{size:"large",color:"secondary",onClick:T,children:"Cancel"}),Object(v.jsx)(b.a,(t={"aria-controls":"avatar-dropdown",content:"avatar",variant:"contained",color:"secondary","aria-haspopup":"true"},Object(n.a)(t,"color","inherit"),Object(n.a)(t,"size","large"),Object(n.a)(t,"onClick",(function(e){console.log(e.currentTarget),D(e.currentTarget)})),Object(n.a)(t,"startIcon",Object(v.jsx)(g.a,{})),Object(n.a)(t,"children","Launch"),t)),Object(v.jsxs)(m.a,{id:"avatar-dropdown",anchorEl:_,open:Boolean(_),onClose:function(){console.log("close"),D(null)},style:{marginTop:"30px"},onClick:function(){return e.logout},children:[Object(v.jsx)(h.a,{onClick:function(){return F(0)},children:"Start Meeting"}),Object(v.jsx)(h.a,{onClick:function(){return F(1)},children:"Start Conversation"}),Object(v.jsx)(h.a,{onClick:function(){return F(2)},children:"Save for later"})]})]})]}):Object(v.jsx)(b.a,{variant:"contained",color:"secondary",className:a.createRoomButton,startIcon:Object(v.jsx)(g.a,{}),onClick:T,children:"Create Room"})]})}))),w=o(205),y=Object(a.a)((function(e){return{Home:Object(n.a)({display:"grid",gridAutoFlow:"column",justifyItems:"center",padding:e.spacing(2),alignItems:"center",height:"100%"},e.breakpoints.down("xs"),{gridAutoFlow:"row"})}}));t.default=Object(i.b)((function(e){return{user:e.auth.user}}),(function(e){return{logoutUser:function(){return e(Object(s.c)())}}}))((function(e){Object(c.useEffect)((function(){console.log("render")}),[]);var t=y();return Object(v.jsxs)(r.a,{className:t.Home,children:[Object(v.jsx)(C,{}),Object(v.jsx)(w.a,{})]})}))}}]);
//# sourceMappingURL=6.0585f283.chunk.js.map