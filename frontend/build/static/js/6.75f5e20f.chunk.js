(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[6],{237:function(e,t){},239:function(e,t){},267:function(e,t,n){"use strict";n.r(t);var o=n(30),c=n(31),a=n(42),i=n(41),r=n(0),s=n(16),l=n(29),u=n(70),d=n(32),j=n(74),h=n(181),b=n(186),g=n(184),m=n(263),p=n(265),f=n(264),O=n(101),v=n(185),w=n(10),x=n(213),k=n.n(x),D=n(55),y=n(256),I=n(34),N=n(249),R=n.n(N),C=n(250),S=n.n(C),B=n(251),W=n.n(B),A=n(252),T=n.n(A),H=n(254),F=n.n(H),M=n(253),E=n.n(M),V=n(248),_=n.n(V),U=n(247),J=n.n(U),P=n(255),z=n.n(P),L=n(2),q=Object(h.a)((function(e){var t;return{video:{backgroundSize:"cover",objectFit:"fill",overflow:"hidden"},gridContainer:Object(j.a)({justifyContent:"center"},e.breakpoints.down("md"),{flexDirection:"column"}),paper:Object(j.a)({display:"grid",justifyContent:"space-around",gridAutoFlow:"column",overflow:"hidden",height:"100%",width:"100%",boxShadow:"none"},e.breakpoints.down("sm"),{gridAutoFlow:"row"}),userDetailDiv:{position:"absolute"},userDiv:{textAlign:"center",position:"relative",padding:e.spacing(1),margin:e.spacing(1)},chatRoom:{height:"100%"},chatRoomMainDiv:{display:"grid",gridAutoFlow:"column",width:"100%",height:"100%",position:"relative"},chatBox:Object(j.a)({position:"relative",backgroundColor:e.palette.secondary.main,zIndex:2,width:"auto",minWidth:"30vh",maxHeight:"100%"},e.breakpoints.down("xs"),{position:"absolute",top:0,bottom:0,right:0,left:0,width:"100%",height:"100%"}),chatBoxIntro:{padding:"2px"},chatBoxMessages:{padding:"2px"},actionButtons:(t={position:"absolute",bottom:"2rem",display:"grid",justifyContent:"center",boxShadow:"none",gridAutoFlow:"column",marginLeft:"auto",marginRight:"auto"},Object(j.a)(t,e.breakpoints.up("md"),{right:0,left:0}),Object(j.a)(t,e.breakpoints.down("xs"),{gridAutoFlow:"row"}),t),textfield:{position:"absolute",bottom:"0px",width:"100%",backgroundColor:e.palette.primary.main}}})),G=function(e){console.log(e);var t=Object(r.useRef)(),n=q();return Object(r.useEffect)((function(){e.peer.on("stream",(function(e){t.current.srcObject=e}))}),[]),Object(L.jsx)("video",{playsInline:!0,width:0==e.numpeers||window.screen.availWidth<1400?window.screen.availWidth/1.3:window.screen.availWidth/2.2,height:0==e.numpeers?window.screen.availHeight/1.3:window.screen.availWidth<1400?window.screen.availHeight/2.3:window.screen.availHeight/1.3,autoPlay:!0,className:n.video,ref:t})},K={height:window.screen.availHeight,width:window.screen.availWidth},Q=Object(w.h)(Object(s.b)((function(e){return{myuser:e.auth.user,currentRoom:e.room.currentRoom,token:e.auth.token}}),(function(e){return{updateRoomUsers:function(t,n,o){return e(Object(D.c)(t,n,o))}}}))((function(e){var t=Object(w.g)(),n=(Object(s.c)((function(e){return e.room.currentRoom})),Object(r.useState)()),o=Object(d.a)(n,2),c=o[0],a=o[1],i=(Object(s.c)((function(e){return e.auth.token})),Object(r.useState)([])),l=Object(d.a)(i,2),j=l[0],h=l[1],x=Object(r.useState)([]),D=Object(d.a)(x,2),N=D[0],C=D[1],B=Object(r.useState)([]),A=Object(d.a)(B,2),H=(A[0],A[1]),M=(Object(r.useRef)(),Object(r.useRef)()),V=(Object(r.useRef)(),Object(r.useRef)()),U=Object(r.useState)(),P=Object(d.a)(U,2),Q=P[0],X=P[1],Y=Object(r.useState)(!0),Z=Object(d.a)(Y,2),$=Z[0],ee=Z[1],te=Object(r.useState)(!1),ne=Object(d.a)(te,2),oe=ne[0],ce=ne[1],ae=Object(r.useState)(!0),ie=Object(d.a)(ae,2),re=ie[0],se=ie[1],le=Object(r.useState)(!1),ue=Object(d.a)(le,2),de=ue[0],je=ue[1],he=Object(r.useRef)([]),be=q();function ge(){ce(!oe)}return Object(r.useEffect)((function(){console.log(t),console.log(e);var n={id:e.match.params.id,sharing_id:e.match.params.code};return n=JSON.stringify(n),e.updateRoomUsers(n,e.match.params.id,(function(){je(!0)})),function(){V.current.getTracks().map((function(e){e.stop()})),V.current.getTracks()[0].stop(),I.a.close()}}),[]),Object(r.useEffect)((function(){de&&(console.log(e.currentRoom),Boolean(I.a)&&I.a.socketRef&&I.a.close(),I.a.connect("".concat("http:"==window.location.protocol?"ws":"wss","://").concat(window.location.host.includes("localhost:")?"localhost:8000":window.location.hostname,"/ws/chat/").concat(e.currentRoom.sharing_id)),H(I.a),navigator.mediaDevices.getUserMedia({video:{videoConstraints:K},audio:!0}).then((function(t){M.current.srcObject=t,V.current=t,X(t),I.a.sendSignal("join room",""),I.a.on("all users",(function(n){console.log("all users received"),console.log(n);var o=[];n.forEach((function(n){if(n[0]!==e.myuser.pk){var c=function(e,t,n){var o=new k.a({initiator:!0,trickle:!1,stream:n});return o.on("signal",(function(n){I.a.sendSignal("sending signal",{userToSignal:e,callerID:t,signal:n})})),o}(n[0],e.myuser.pk,t);he.current.push({peerID:n[0],peerName:n[1],peer:c}),o.push({peerID:n[0],peerName:n[1],peer:c}),console.log("created peer "+n.id)}})),h(o),console.log("peers after all users"),console.log(o)})),I.a.on("user joined",(function(n){if(console.log(j),console.log(n.userID),n.userID===e.myuser.pk){Object(y.b)("".concat(n.caller[1]," joined the room."),{icon:"\ud83d\udc4f"});var o=function(e,t,n){var o=new k.a({initiator:!1,trickle:!1,stream:n}),c=t[0];return o.on("signal",(function(e){I.a.sendSignal("returning signal",{signal:e,callerID:c})})),o.signal(e),o}(n.signal,n.caller,t);if(!Boolean(he.current.some((function(e){return e.peerID==n.caller[0]})))){console.log("".concat(n.caller[1]," joined the room.")),he.current.push({peerID:n.caller[0],peerName:n.caller[1],peer:o});var c={peerID:n.callerID,peerName:n.caller[1],peer:o};h((function(e){return[].concat(Object(u.a)(e),[c])})),console.log("added peer "+c.peerID)}console.log(j)}})),I.a.on("receiving returned signal",(function(t){(console.log("receiving returned signal"),t.userID===e.myuser.pk)&&he.current.find((function(e){return e.peerID===t.id})).peer.signal(t.signal)})),I.a.on("user left",(function(e){var t=he.current.find((function(t){return t.peerID===e}));t&&(Object(y.b)("".concat(t.peerName," left."),{icon:"\u2139\ufe0f"}),t.peer.destroy());var n=he.current.filter((function(t){return t.peerID!==e}));he.current=n,h(n)})),I.a.on("message received",(function(t){var n={user:t.user,msg:t.message};C((function(e){return[].concat(Object(u.a)(e),[n])})),e.myuser.first_name==n.user||oe||Object(y.b)("".concat(t.user," : ").concat(t.message),{icon:"\ud83d\udcac"}),console.log(N)}))})).catch((function(e){console.log(e),y.b.error("Cannot get access to your camera and video !")})))}),[de]),de?Object(L.jsxs)("div",{className:be.chatRoom,children:[Object(L.jsx)(y.a,{}),Object(L.jsxs)("div",{className:be.chatRoomMainDiv,children:[Object(L.jsxs)(b.a,{container:!0,spacing:2,className:be.paper,children:[Object(L.jsxs)(b.a,{container:!0,item:!0,xs:12,className:be.userDiv,children:[Object(L.jsx)(g.a,{variant:"h5",className:be.userDetailDiv,gutterBottom:!0,children:e.myuser.first_name}),Object(L.jsx)("video",{width:0==j.length||window.screen.availWidth<1400?window.screen.availWidth/1.3:window.screen.availWidth/2.2,height:0==j.length?window.screen.availHeight/1.3:window.screen.availWidth<1400?window.screen.availHeight/2.3:window.screen.availHeight/1.3,playsInline:!0,muted:!0,autoPlay:!0,className:be.video,ref:M})]},e.myuser.pk),j.map((function(e){return Object(L.jsxs)(b.a,{xs:12,item:!0,className:be.userDiv,children:[Object(L.jsx)(g.a,{variant:"h5",className:be.userDetailDiv,gutterBottom:!0,children:e.peerName}),Object(L.jsx)(G,{peer:e.peer,numpeers:j.length})]},e.peerID)}))]}),oe?Object(L.jsxs)(b.a,{className:be.chatBox,children:[Object(L.jsx)(b.a,{className:be.chatBoxIntro,children:Object(L.jsx)(m.a,{children:Object(L.jsx)(J.a,{onClick:ge})})}),Object(L.jsx)(b.a,{className:be.chatBoxMessages,children:N.map((function(e){return Object(L.jsxs)("div",{children:[Object(L.jsx)("div",{children:e.user}),Object(L.jsx)("div",{children:e.msg})]})}))}),Object(L.jsx)(b.a,{className:be.chatBoxInput,children:Object(L.jsx)(p.a,{color:"secondary",className:be.textfield,onChange:function(e){a(e.target.value)},value:c,name:"message",variant:"outlined",autoComplete:!1,label:"",placeholder:"Enter your msg",InputProps:{endAdornment:Object(L.jsx)(f.a,{position:"end",children:Object(L.jsx)(m.a,{children:Object(L.jsx)(O.a,{onClick:function(){I.a.sendSignal("send_message",c),a("")},children:Object(L.jsx)(_.a,{})})})})}})})]}):""]}),Object(L.jsxs)(b.a,{className:be.actionButtons,children:[Object(L.jsx)(v.a,{onClick:function(){Q.getVideoTracks()[0].enabled=!Q.getVideoTracks()[0].enabled,ee(!$)},children:$?Object(L.jsx)(R.a,{}):Object(L.jsx)(S.a,{})}),Object(L.jsx)(v.a,{onClick:function(){Q.getAudioTracks()[0].enabled=!Q.getAudioTracks()[0].enabled,se(!re)},children:re?Object(L.jsx)(W.a,{}):Object(L.jsx)(T.a,{})}),Object(L.jsx)(v.a,{onClick:ge,children:Object(L.jsx)(E.a,{})}),Object(L.jsx)(v.a,{onClick:function(){console.log(Q),(Q&&Q.getTracks()).map((function(e){e.stop()})),t.push("/")},children:Object(L.jsx)(F.a,{})}),Object(L.jsx)(v.a,{onClick:function(){console.log(Q),console.log(he.current[0].peer),navigator.mediaDevices.getDisplayMedia({cursor:!0}).then((function(e){console.log(e.getVideoTracks()),M.current.srcObject=e}))},children:Object(L.jsx)(z.a,{})})]})]}):Object(L.jsx)("div",{children:"Room doesnt exist"})}))),X=function(e){Object(a.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(L.jsx)("div",{style:{height:"90vh"},className:"VideoView",children:Object(L.jsx)(Q,{})})}}]),n}(r.Component);t.default=Object(s.b)((function(e){return{user:e.auth.user}}),(function(e){return{logoutUser:function(){return e(Object(l.c)())}}}))(X)}}]);
//# sourceMappingURL=6.75f5e20f.chunk.js.map