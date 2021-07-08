(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[8],{202:function(e,t,o){"use strict";var n=o(29),r=o(290),i=o(295),a=o(192),s=o(300),c=o(294),l=o(159),d=o(0),u=o(205),m=(o(16),o(10)),j=o(217),b=o.n(j),h=o(209),f=o.n(h),O=o(2),g=Object(l.a)((function(e){return{Card:{backgroundColor:e.palette.secondary.main,margin:e.spacing(.4),width:"80%",justifyContent:"space-between"},roomCardMainDiv:{height:"100%",width:"100%",display:"grid",alignItems:"center",justifyItems:"center"}}}));t.a=function(e){var t=Object(m.g)();console.log(e);var o=g(),l=Object(d.useState)(!1),j=Object(n.a)(l,2),h=j[0],p=j[1];return Object(O.jsxs)("div",{className:o.roomCardMainDiv,children:[Object(O.jsx)(r.a,{className:o.Card,clickable:!0,onClick:function(){return t.push("/room/".concat(e.room.id))},children:Object(O.jsxs)(i.a,{children:[Object(O.jsx)(a.a,{onClick:function(){return p(!0)},gutterBottom:!0,children:e.room&&e.room.room_name}),e.invite&&Object(O.jsx)(s.a,{label:"creater : ".concat(e.room.created_by.first_name)}),Object(O.jsxs)("div",{style:{marginInlineStart:"auto"},children:[!e.invite&&Object(O.jsx)(c.a,{children:Object(O.jsx)(f.a,{onClick:function(e){e.stopPropagation(),p(!0)}})}),Object(O.jsx)(c.a,{children:Object(O.jsx)(b.a,{onClick:function(o){o.stopPropagation(),t.push("/video/".concat(e.room.id,"/").concat(e.room.sharing_id))}})})]})]})}),h&&Object(O.jsx)(u.a,{room:e.room,onClick:function(e){return e.stopPropagation()},show:h,onClose:function(){return p(!1)}})]})}},203:function(e,t,o){"use strict";var n=o(0),r=o(16),i=o(10),a=o(290),s=o(291),c=o(192),l=o(56),d=o(202),u=o(159),m=o(2),j=Object(u.a)((function(e){return{roomsList:{width:"80%",display:"grid",justifyItems:"center",overflow:"hidden",paddingBottom:e.spacing(1),gridTemplateRows:"min-content",height:"80%"},list:{overflowY:"scroll",maxHeight:window.screen.availHeight/2,width:"100%",display:"grid",justifyItems:"center",position:"absolute"},listHeading:{top:0,backgroundColor:e.palette.primary.main,width:"100%",height:"50%",marginLeft:"10%"},listWrapper:{position:"relative",width:"100%",height:"90%",overflow:"hidden"},webkitScrollbar:{width:0,background:"transparent"},webkitScrollbarThumb:{background:"#FF0000"}}}));t.a=Object(i.h)(Object(r.b)((function(e){return{user:e.auth.user,roomsCreated:e.room.roomsCreated,roomsInvited:e.room.roomsInvited}}),(function(e){return{createChatRoom:function(t,o){return e(Object(l.b)(t,o))},getAllRooms:function(){return e(Object(l.d)())}}}))((function(e){Object(i.g)();Object(n.useEffect)((function(){e.getAllRooms()}),[]);var t=j();return Object(m.jsxs)(a.a,{className:t.roomsList,children:[Object(m.jsx)(s.a,{color:"secondary",className:t.listHeading,children:Object(m.jsx)(c.a,{variant:"h5",children:e.heading})}),Object(m.jsx)(s.a,{className:t.listWrapper,children:Object(m.jsx)("div",{className:t.list,children:e.rooms.map((function(t){return Object(m.jsx)(d.a,{room:t,invite:"Your Invites"==e.heading})}))})})]})})))},205:function(e,t,o){"use strict";var n=o(29),r=o(40),i=o(198),a=o(298),s=o(293),c=o(294),l=o(108),d=o(159),u=o(292),m=o(16),j=o(204),b=o.n(j),h=(o(207),o(0)),f=o(56),O=o(208),g=o(2),p=["show","room","onClose","label"],v=Object(d.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.secondary.main,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},textField:{}}}));t.a=Object(m.b)((function(e){return{currentRoom:e.room.currentRoom}}),(function(e){return{updateRoomUsers:function(t,o,n){return e(Object(f.g)(t,o,n))}}}))((function(e){var t=v(),o=e.show,d=(e.room,e.onClose),m=(e.label,Object(r.a)(e,p),Object(h.useState)("")),j=Object(n.a)(m,2),f=j[0],x=j[1];function C(){O.b.success("Added user"),x("")}return Object(g.jsx)(i.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:t.modal,open:o,centered:!0,onClose:d,children:Object(g.jsx)(u.a,{in:o,children:Object(g.jsxs)("div",{className:t.paper,children:[Object(g.jsx)(O.a,{}),Object(g.jsx)("h2",{id:"transition-modal-title",children:e.room.room_name}),Object(g.jsx)("div",{id:"transition-modal-description",children:Object(g.jsx)(a.a,{color:"secondary",className:t.textfield,onChange:function(e){x(e.target.value)},value:f,name:"email",variant:"outlined",autoComplete:!1,label:"",placeholder:"Enter user email",InputProps:{endAdornment:Object(g.jsx)(s.a,{position:"end",children:Object(g.jsx)(c.a,{children:Object(g.jsx)(l.a,{onClick:function(){var t={email:f};e.updateRoomUsers(t,e.room.id,C)},children:Object(g.jsx)(b.a,{})})})})}})})]})})})}))},206:function(e,t,o){"use strict";var n=o(0),r=o(16),i=o(10),a=o(192),s=o(193),c=o(56),l=(o(202),o(159)),d=o(203),u=o(2),m=Object(l.a)((function(e){return{roomDetailsDiv:{width:"100%",display:"grid",justifyItems:"center",height:"90%",alignItems:"center"}}}));t.a=Object(i.h)(Object(r.b)((function(e){return{user:e.auth.user,roomsCreated:e.room.roomsCreated,roomsInvited:e.room.roomsInvited}}),(function(e){return{createChatRoom:function(t,o){return e(Object(c.b)(t,o))},getAllRooms:function(){return e(Object(c.d)())}}}))((function(e){var t=Object(i.g)();Object(n.useEffect)((function(){e.getAllRooms()}),[]);var o=m();return Object(u.jsxs)("div",{className:o.roomDetailsDiv,children:[Object(u.jsx)(d.a,{heading:"Your rooms",rooms:e.roomsCreated.slice(0,2)}),Object(u.jsx)(d.a,{heading:"Your Invites",rooms:e.roomsInvited.slice(0,2)}),Object(u.jsx)(a.a,{variant:"h6",className:o.title,children:Object(u.jsx)(s.a,{onClick:function(){return t.push("/rooms")},children:"View All"})})]})})))},207:function(e,t,o){"use strict";o.r(t);var n=o(76),r=o(196),i=o(159),a=o(0),s=o(16),c=(o(30),o(56)),l=(o(206),o(203)),d=o(2),u=Object(i.a)((function(e){return{Rooms:Object(n.a)({display:"grid",gridAutoFlow:"column",justifyItems:"center",padding:e.spacing(2),alignItems:"center",position:"relative",height:"100%"},e.breakpoints.down("xs"),{gridAutoFlow:"row"})}}));t.default=Object(s.b)((function(e){return{user:e.auth.user,roomsCreated:e.room.roomsCreated,roomsInvited:e.room.roomsInvited}}),(function(e){return{getAllRooms:function(){return e(Object(c.d)())}}}))((function(e){Object(a.useEffect)((function(){e.getAllRooms()}),[]);var t=u();return Object(d.jsxs)(r.a,{className:t.Rooms,children:[Object(d.jsx)(l.a,{rooms:e.roomsCreated,heading:"Your Rooms"}),Object(d.jsx)(l.a,{rooms:e.roomsInvited,heading:"Your Invites"})]})}))}}]);
//# sourceMappingURL=8.94b9d5d7.chunk.js.map