import React, { createContext, useState, useRef, useEffect } from 'react';
// import { io } from 'socket.io-client';
// import Peer from 'simple-peer';
import WebSocketInstance from './websocket/socket';

const SocketContext = createContext();

// const socket = io('http://localhost:5000');
// const socket = io('https://warm-wildwood-81069.herokuapp.com');

const ContextProvider = ({ children }) => {
  const myVideo = useRef(document.querySelector("#local-video"));
  // const [callAccepted, setCallAccepted] = useState(false);
  // const [callEnded, setCallEnded] = useState(false);
  const [stream, setStream] = useState(new MediaStream());
  const [name, setName] = useState('');
  // const [call, setCall] = useState({});
  // const [me, setMe] = useState('');
  // const userVideo = useRef();
  // const connectionRef = useRef();

  useEffect(() => {
    if(Boolean(WebSocketInstance) && WebSocketInstance.socketRef){
        WebSocketInstance.close();
    }
    WebSocketInstance.connect(`ws://localhost:8000/`);
    WebSocketInstance.waitForSocketConnection(() => {
        console.log("looping")
    });

    // setStream(WebSocketInstance.stream)
    // console.log(WebSocketInstance.)
    // if(WebSocketInstance.stream){
    //   console.log(WebSocketInstance.stream)
    // }
    // setStream(WebSocketInstance.stream)
    setName("kid")
    if(name){console.log(name)}
    // console.log(stream)
    // console.log(myVideo)
    console.log(myVideo)
    if(WebSocketInstance.stream){
      myVideo.current.srcObject = WebSocketInstance.stream
    }     

    // navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    //   .then((currentStream) => {
    //     setStream(currentStream);
    //     setName("gauransh");
    //     myVideo.current.srcObject = currentStream;
    //   })
    //   .catch((error) => {
    //     console.log("error is local streaming " + error)
    //   })

    // socket.on('me', (id) => setMe(id));

    // socket.on('callUser', ({ from, name: callerName, signal }) => {
    //   setCall({ isReceivingCall: true, from, name: callerName, signal });
    // });
  }, []);

  // const answerCall = () => {
  //   setCallAccepted(true);

  //   const peer = new Peer({ initiator: false, trickle: false, stream });

  //   peer.on('signal', (data) => {
  //     socket.emit('answerCall', { signal: data, to: call.from });
  //   });

  //   peer.on('stream', (currentStream) => {
  //     userVideo.current.srcObject = currentStream;
  //   });

  //   peer.signal(call.signal);

  //   connectionRef.current = peer;
  // };

  // const callUser = (id) => {
  //   const peer = new Peer({ initiator: true, trickle: false, stream });

  //   peer.on('signal', (data) => {
  //     socket.emit('callUser', { userToCall: id, signalData: data, from: me, name });
  //   });

  //   peer.on('stream', (currentStream) => {
  //     userVideo.current.srcObject = currentStream;
  //   });

  //   socket.on('callAccepted', (signal) => {
  //     setCallAccepted(true);

  //     peer.signal(signal);
  //   });

  //   connectionRef.current = peer;
  // };

  // const leaveCall = () => {
  //   setCallEnded(true);

  //   connectionRef.current.destroy();

  //   window.location.reload();
  // };

  return (
    <SocketContext.Provider value={{
      // call,
      // callAccepted,
      myVideo,
      // userVideo,
      stream,
      name,
      // setName,
      // callEnded,
      // me,
      // callUser,
      // leaveCall,
      // answerCall,
    }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export { ContextProvider, SocketContext };