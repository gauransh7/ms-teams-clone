// import React, { useContext } from 'react';
// import { Grid, Typography, Paper, makeStyles } from '@material-ui/core';
// import WebSocketInstance from '../../websocket/socket';
// import {SocketContext} from '../../Context';

// const useStyles = makeStyles((theme) => ({
//   video: {
//     width: '550px',
//     [theme.breakpoints.down('xs')]: {
//       width: '300px',
//     },
//   },
//   gridContainer: {
//     justifyContent: 'center',
//     [theme.breakpoints.down('xs')]: {
//       flexDirection: 'column',
//     },
//   },
//   paper: {
//     padding: '10px',
//     border: '2px solid black',
//     margin: '10px',
//   },
// }));

// const VideoPlayer = () => {
//   console.log(SocketContext)
//   const {myVideo} = useContext(SocketContext)
//   // console.log(socket)
//   // const { myVideo } = useContext(SocketContext);
//   // useContext(SocketContext);
//   // const { myVideo } = socket;
//   const classes = useStyles();

//   // useEffect(() => {
//   //     // if(userId !== null && currentGroupId !== null){
//   //       if(Boolean(WebSocketInstance) && WebSocketInstance.socketRef){
//   //           WebSocketInstance.close();
//   //       }
//   //       WebSocketInstance.connect(`ws://localhost:8000/`);
//   //       waitForSocketConnection(() => {
//   //           // WebSocketInstance.initChatUser(userId);
//   //           // WebSocketInstance.addCallbacks(
//   //           //     setMessagesHandler,
//   //           //     addMessage,
//   //           //     addImageMessage,
//   //           // );
//   //           // WebSocketInstance.fetchMessages(userId);
//   //           console.log("here to");
//   //         });
//   //     // }
//   // }, [])

//   // const waitForSocketConnection = (callback) => {
//   //     setTimeout(function () {
//   //         // Check if websocket state is OPEN
//   //         if (WebSocketInstance.state() === 1) {
//   //             console.log("Connection is made");
//   //             callback();
//   //             return;
//   //         } else {
//   //             console.log("wait for connection...");
//   //             waitForSocketConnection(callback);
//   //         }
//   //     }, 100); // wait 100 milisecond for the connection...
//   // }

//   // var localStream = new MediaStream();

//   // const constraints = {
//   //     'video' : true,
//   //     'audio' : true,
//   // }

//   // const localVideo = document.querySelector("#local-video");

//   // var userMedia = navigator.mediaDevices.getUserMedia(constraints)
//   //     .then(stream => {
//   //         localStream = stream;
//   //         localVideo.srcObject = localStream;
//   //         localVideo.muted = true;
//   //     })
//   //     .catch(error => {
//   //         console.log(error);
//   //     })

//   return (
//     // <div>
//     //   video view
//     // </div>
//     <Grid container className={classes.gridContainer}>
//       {/* {stream && ( */}
//         <Paper className={classes.paper}>
//           <Grid item xs={12} md={6}>
//             <Typography variant="h5" gutterBottom>{'Name'}</Typography>
//             <video playsInline muted ref={myVideo} autoPlay id="local-video" className={classes.video} />
//           </Grid>
//         </Paper>
//       {/* ) */}
//       {/* } */}
//       {/* {callAccepted && !callEnded && ( */}
//         <Paper className={classes.paper}>
//           <Grid item xs={12} md={6}>
//             <Typography variant="h5" gutterBottom>{'Name'}</Typography>
//             <video playsInline ref={null} autoPlay className={classes.video} />
//           </Grid>
//         </Paper>
//       {/* )} */}
//     </Grid>
//   );
// };

// export default VideoPlayer;

import React, { useContext, useEffect, useRef } from 'react'
import { Grid, Typography, Paper, makeStyles, Button } from '@material-ui/core'
import { Helmet } from 'react-helmet'
import WebSocketInstance from '../../websocket/socket'
import { useSelector } from 'react-redux'
// import { SocketContext } from '../../Context'
// import '../../websocket'

const useStyles = makeStyles(theme => ({
  video: {
    width: '550px',
    [theme.breakpoints.down('xs')]: {
      width: '300px'
    }
  },
  gridContainer: {
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column'
    }
  },
  paper: {
    padding: '10px',
    border: '2px solid black',
    margin: '10px'
  }
}))

const VideoPlayer = () => {
  const userName = useSelector(state => state.auth.user.first_name)
  var socketRef = useRef()
  const classes = useStyles()
  useEffect(() => {
    if (userName !== null) {
      if (Boolean(WebSocketInstance) && WebSocketInstance.socketRef) {
        WebSocketInstance.close()
      }
      WebSocketInstance.connect(`ws://localhost:8000/`)
      WebSocketInstance.waitForSocketConnection(() => {
        console.log(WebSocketInstance)
      })
      socketRef = WebSocketInstance.socketRef
    }
  }, [])

  const setMyStream = () => {
    const localVideo = document.querySelector('#local-video')
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then(currentStream => {
        localVideo.srcObject = currentStream
      })
      .catch(error => {
        console.log('error is local streaming ' + error)
      })
    localVideo.muted = true;
  }
  
  WebSocketInstance.on("new-peer",() => {
    console.log("new-peer")
  })

  const sendSignal = (action, message) => {
    var jsonStr = JSON.stringify({
      peer: userName,
      action: action,
      message: message
    })

    WebSocketInstance.send(jsonStr)
  }

  return (
    <Grid container className={classes.gridContainer}>
      {/* {stream && ( */}
      <Paper className={classes.paper}>
        <Grid item xs={12} md={6}>
          <Typography variant='h5' gutterBottom>
            {userName}
          </Typography>
          <Button onClick={setMyStream}>Join Chat</Button>
          <video
            playsInline
            muted
            ref={null}
            autoPlay
            id='local-video'
            className={classes.video}
          />
        </Grid>
      </Paper>
      {/* )} */}
      {/* {callAccepted && !callEnded && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>{call.name || 'Name'}</Typography>
            <video playsInline ref={userVideo} autoPlay className={classes.video} />
          </Grid>
        </Paper>
      )} */}
    </Grid>
  )
}

export default VideoPlayer

// <div>
//   <Helmet>
//     <script src='../../websocket/index.js' type='text/babel' />
//   </Helmet>
//   <h1 id='label-username'>username</h1>
//   <Button id='btn-join'>Join Chat</Button>
//   <div className='main-grid-container'>
//     <div id='video-container'>
//       <div>
//         <video
//           id='local-video'
//           style={{ float: 'left' }}
//           autoPlay
//           playsInline
//         ></video>
//       </div>
//       <Button id='btn-toggle-audio'>Mute Audio</Button>
//       <Button id='btn-toggle-video'>Remove Video</Button>
//     </div>
//     <div id='chat'>
//       <h3>chat</h3>
//       <div id='messages'>
//         <ul id='message-list'></ul>
//       </div>
//       <div>
//         <input id='msg' />
//         <button id='btn-send-msg'>send message</button>
//       </div>
//     </div>
//   </div>
// </div>
