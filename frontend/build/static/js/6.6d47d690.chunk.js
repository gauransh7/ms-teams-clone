(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[6],{231:function(e,t){},233:function(e,t){},259:function(e,t,n){"use strict";n.r(t);var c=n(30),o=n(31),r=n(43),a=n(42),s=n(0),i=n(16),u=n(29),l=n(71),d=n(32),j=n(75),b=n(175),g=n(180),p=n(143),m=n(178),h=n(255),f=n(257),O=n(256),x=n(100),v=n(179),k=n(10),w=n(207),D=n.n(w),y=n(56),I=n(34),N=n(243),R=n.n(N),S=n(244),C=n.n(S),B=n(245),T=n.n(B),A=n(246),F=n.n(A),V=n(248),M=n.n(V),E=n(247),U=n.n(E),_=n(242),z=n.n(_),J=n(241),P=n.n(J),H=n(2),L=Object(b.a)((function(e){var t;return{video:{width:"100%",height:"100%",backgroundSize:"cover",objectFit:"fill",zIndex:-1,overflow:"hidden"},gridContainer:Object(j.a)({justifyContent:"center"},e.breakpoints.down("md"),{flexDirection:"column"}),paper:Object(j.a)({display:"grid",justifyContent:"space-around",gridAutoFlow:"column",overflow:"hidden",height:"100%",width:"100%",boxShadow:"none"},e.breakpoints.down("sm"),{gridAutoFlow:"row"}),userDetailDiv:{position:"absolute"},userDiv:{textAlign:"center",position:"relative",padding:e.spacing(1),margin:e.spacing(1)},chatRoom:{height:"100%"},chatRoomMainDiv:{display:"grid",gridAutoFlow:"column",width:"100%",height:"100%",position:"relative"},chatBox:Object(j.a)({position:"relative",backgroundColor:e.palette.secondary.main,zIndex:2,width:"auto",minWidth:"30vh",maxHeight:"100%"},e.breakpoints.down("xs"),{position:"absolute",top:0,bottom:0,right:0,left:0,width:"100%",height:"100%"}),chatBoxIntro:{padding:"2px"},chatBoxMessages:{padding:"2px"},actionButtons:(t={position:"absolute",bottom:"2rem",display:"grid",justifyContent:"center",boxShadow:"none",gridAutoFlow:"column",marginLeft:"auto",marginRight:"auto"},Object(j.a)(t,e.breakpoints.up("md"),{right:0,left:0}),Object(j.a)(t,e.breakpoints.down("xs"),{gridAutoFlow:"row"}),t),textfield:{position:"absolute",bottom:"0px",width:"100%",backgroundColor:e.palette.primary.main}}})),W=function(e){var t=Object(s.useRef)(),n=L();return Object(s.useEffect)((function(){e.peer.on("stream",(function(e){t.current.srcObject=e}))}),[]),Object(H.jsx)("video",{playsInline:!0,autoPlay:!0,className:n.video,muted:!0,ref:t})},q={},G=Object(k.h)(Object(i.b)((function(e){return{myuser:e.auth.user,currentRoom:e.room.currentRoom,token:e.auth.token}}),(function(e){return{updateRoomUsers:function(t,n,c){return e(Object(y.c)(t,n,c))}}}))((function(e){var t=Object(k.g)(),n=(Object(i.c)((function(e){return e.room.currentRoom})),Object(s.useState)()),c=Object(d.a)(n,2),o=c[0],r=c[1],a=(Object(i.c)((function(e){return e.auth.token})),Object(s.useState)([])),u=Object(d.a)(a,2),j=u[0],b=u[1],w=Object(s.useState)([]),y=Object(d.a)(w,2),N=y[0],S=y[1],B=Object(s.useState)([]),A=Object(d.a)(B,2),V=(A[0],A[1]),E=(Object(s.useRef)(),Object(s.useRef)()),_=(Object(s.useRef)(),Object(s.useRef)()),J=Object(s.useState)(),G=Object(d.a)(J,2),K=G[0],Q=G[1],X=Object(s.useState)(!0),Y=Object(d.a)(X,2),Z=Y[0],$=Y[1],ee=Object(s.useState)(!1),te=Object(d.a)(ee,2),ne=te[0],ce=te[1],oe=Object(s.useState)(!1),re=Object(d.a)(oe,2),ae=re[0],se=re[1],ie=Object(s.useState)(!1),ue=Object(d.a)(ie,2),le=ue[0],de=ue[1],je=Object(s.useRef)([]),be=L();function ge(){ce(!ne)}return Object(s.useEffect)((function(){console.log(t),console.log(e);var n={id:e.match.params.id,sharing_id:e.match.params.code};return n=JSON.stringify(n),e.updateRoomUsers(n,e.match.params.id,(function(){de(!0)})),function(){_.current.getTracks().map((function(e){e.stop()})),_.current.getTracks()[0].stop(),I.a.close()}}),[]),Object(s.useEffect)((function(){le&&(console.log(e.currentRoom),Boolean(I.a)&&I.a.socketRef&&I.a.close(),I.a.connect("ws://".concat(window.location.hostname,"/ws/chat/").concat(e.currentRoom.sharing_id)),I.a.waitForSocketConnection((function(){console.log("looping")})),V(I.a),navigator.mediaDevices.getUserMedia({video:q,audio:!0}).then((function(t){E.current.srcObject=t,_.current=t,Q(t),I.a.sendSignal("join room",""),I.a.on("all users",(function(n){console.log("all users received"),console.log(n);var c=[];n.forEach((function(n){if(n[0]!==e.myuser.pk){var o=function(e,t,n){var c=new D.a({initiator:!0,trickle:!1,stream:n});return c.on("signal",(function(n){I.a.sendSignal("sending signal",{userToSignal:e,callerID:t,signal:n})})),c}(n[0],e.myuser.pk,t);je.current.push({peerID:n[0],peerName:n[1],peer:o}),c.push({peerID:n[0],peerName:n[1],peer:o}),console.log("created peer "+n.id)}})),b(c),console.log("peers after all users"),console.log(c)})),I.a.on("user joined",(function(n){if(console.log("user joined"),console.log(j),console.log(n.userID),n.userID===e.myuser.pk){var c=function(e,t,n){var c=new D.a({initiator:!1,trickle:!1,stream:n}),o=t[0];return c.on("signal",(function(e){I.a.sendSignal("returning signal",{signal:e,callerID:o})})),c.signal(e),c}(n.signal,n.caller,t);if(!Boolean(je.current.some((function(e){return e.peerID==n.caller[0]})))){je.current.push({peerID:n.caller[0],peerName:n.caller[1],peer:c});var o={peerID:n.callerID,peerName:n.caller[1],peer:c};b((function(e){return[].concat(Object(l.a)(e),[o])})),console.log("added peer "+o.peerID)}console.log(j)}})),I.a.on("receiving returned signal",(function(t){(console.log("receiving returned signal"),t.userID===e.myuser.pk)&&je.current.find((function(e){return e.peerID===t.id})).peer.signal(t.signal)})),I.a.on("user left",(function(e){console.log("user left");var t=je.current.find((function(t){return t.peerID===e}));t&&t.peer.destroy();var n=je.current.filter((function(t){return t.peerID!==e}));je.current=n,b(n)})),I.a.on("message received",(function(e){var t={user:e.user,msg:e.message};S((function(e){return[].concat(Object(l.a)(e),[t])})),console.log(N)}))})))}),[le]),le?Object(H.jsxs)("div",{className:be.chatRoom,children:[Object(H.jsxs)("div",{className:be.chatRoomMainDiv,children:[Object(H.jsxs)(g.a,{container:!0,spacing:2,className:be.paper,children:[Object(H.jsx)(g.a,{container:!0,item:!0,xs:12,className:be.userDiv,children:Object(H.jsxs)(p.a,{children:[Object(H.jsx)(m.a,{variant:"h5",className:be.userDetailDiv,gutterBottom:!0,children:e.myuser.first_name}),Object(H.jsx)("video",{playsInline:!0,autoPlay:!0,className:be.video,muted:!0,ref:E})]})},e.myuser.pk),j.map((function(e){return Object(H.jsx)(g.a,{container:!0,xs:12,item:!0,className:be.userDiv,children:Object(H.jsxs)(p.a,{children:[Object(H.jsx)(m.a,{variant:"h5",className:be.userDetailDiv,gutterBottom:!0,children:e.peerName}),Object(H.jsx)(W,{peer:e.peer})]})},e.peerID)}))]}),ne?Object(H.jsxs)(g.a,{xs:6,className:be.chatBox,children:[Object(H.jsx)(g.a,{className:be.chatBoxIntro,children:Object(H.jsx)(h.a,{children:Object(H.jsx)(P.a,{onClick:ge})})}),Object(H.jsx)(g.a,{className:be.chatBoxMessages,children:N.map((function(e){return Object(H.jsxs)("div",{children:[Object(H.jsx)("div",{children:e.user}),Object(H.jsx)("div",{children:e.msg})]})}))}),Object(H.jsx)(g.a,{className:be.chatBoxInput,children:Object(H.jsx)(f.a,{color:"secondary",className:be.textfield,onChange:function(e){r(e.target.value)},value:o,name:"message",variant:"outlined",autoComplete:!1,label:"",placeholder:"Enter your msg",InputProps:{endAdornment:Object(H.jsx)(O.a,{position:"end",children:Object(H.jsx)(h.a,{children:Object(H.jsx)(x.a,{onClick:function(){I.a.sendSignal("send_message",o),r("")},children:Object(H.jsx)(z.a,{})})})})}})})]}):""]}),Object(H.jsxs)(g.a,{className:be.actionButtons,children:[Object(H.jsx)(v.a,{onClick:function(){K.getVideoTracks()[0].enabled=!K.getVideoTracks()[0].enabled,$(!Z)},children:Z?Object(H.jsx)(R.a,{}):Object(H.jsx)(C.a,{})}),Object(H.jsx)(v.a,{onClick:function(){K.getAudioTracks()[0].enabled=!K.getAudioTracks()[0].enabled,se(!ae)},children:ae?Object(H.jsx)(T.a,{}):Object(H.jsx)(F.a,{})}),Object(H.jsx)(v.a,{onClick:ge,children:Object(H.jsx)(U.a,{})}),Object(H.jsx)(v.a,{onClick:function(){console.log(K),(K&&K.getTracks()).map((function(e){e.stop()})),t.push("/")},children:Object(H.jsx)(M.a,{})}),Object(H.jsx)(v.a,{onClick:function(){console.log(K),console.log(je.current),navigator.mediaDevices.getDisplayMedia({cursor:!0}).then((function(e){console.log(e.getVideoTracks()),je.current[0].peer.replaceTrack(je.current[0].peer.streams[0].getVideoTracks()[0],e.getVideoTracks()[0],je.current[0].peer.streams[0]),E.current.srcObject=e}))},children:Object(H.jsx)(U.a,{})})]})]}):Object(H.jsx)("div",{children:"Room doesnt exist"})}))),K=function(e){Object(r.a)(n,e);var t=Object(a.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(H.jsx)("div",{style:{height:"90vh"},className:"VideoView",children:Object(H.jsx)(G,{})})}}]),n}(s.Component);t.default=Object(i.b)((function(e){return{user:e.auth.user}}),(function(e){return{logoutUser:function(){return e(Object(u.c)())}}}))(K)}}]);
//# sourceMappingURL=6.6d47d690.chunk.js.map