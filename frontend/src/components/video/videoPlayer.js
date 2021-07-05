import {
  Grid,
  Typography,
  Paper,
  makeStyles,
  Button,
  TextField,
  InputAdornment,
  SvgIcon,
  StepLabel,
  IconButton
} from '@material-ui/core'
import React, { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'
import { useSelector } from 'react-redux'
import { useHistory, withRouter } from 'react-router'
// import io from "socket.io-client";
import Peer from 'simple-peer'
import { getRoomDetails } from '../../actions/chatRoomAction'
import toast, { Toaster } from 'react-hot-toast'
// import styled from "styled-components";
import WebSocketInstance from '../../websocket/socket'
import VideocamIcon from '@material-ui/icons/Videocam'
import VideocamOffIcon from '@material-ui/icons/VideocamOff'
import MicIcon from '@material-ui/icons/Mic'
import MicOffIcon from '@material-ui/icons/MicOff'
import CallEndIcon from '@material-ui/icons/CallEnd'
import ChatIcon from '@material-ui/icons/Chat'
import SendIcon from '@material-ui/icons/Send'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ScreenShareIcon from '@material-ui/icons/ScreenShare'
import VideoOffDiv from './videoOffDiv'

const useStyles = makeStyles(theme => ({
  video: {
    // width: '100%',
    // height: '100%',SvgIcon
    // width: window.screen.availWidth/1.2,
    backgroundSize: 'cover',
    objectFit: 'fill',
    overflow: 'hidden'
  },
  gridContainer: {
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column'
    }
  },
  paper: {
    // padding: '2px',
    // border: '2px solid black',
    // margin: '2px',
    // gridTemplateColumns: '1fr 1fr',
    display: 'grid',
    justifyContent: 'space-around',
    gridAutoFlow: 'column',
    overflow: 'hidden',
    height: '100%',
    width: '100%',
    boxShadow: 'none',
    [theme.breakpoints.down('sm')]: {
      gridAutoFlow: 'row'
    }
  },
  userDetailDiv: {
    position: 'absolute'
    // marginLeft: '3%'
  },
  userDiv: {
    textAlign: 'center',
    position: 'relative',
    padding: theme.spacing(1),
    margin: theme.spacing(1)
  },
  chatRoom: {
    height: '100%'
  },
  chatRoomMainDiv: {
    display: 'grid',
    gridAutoFlow: 'column',
    width: '100%',
    height: '100%',
    position: 'relative'
  },
  chatBox: {
    position: 'relative',
    backgroundColor: theme.palette.secondary.main,
    zIndex: 2,
    width: 'auto',
    minWidth: '30vh',
    maxHeight: '100%',
    [theme.breakpoints.down('xs')]: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      width: '100%',
      height: '100%'
    }
  },
  chatBoxIntro: {
    padding: '2px'
  },
  chatBoxMessages: {
    padding: '2px'
  },
  actionButtons: {
    position: 'absolute',
    bottom: '2rem',
    display: 'grid',
    justifyContent: 'center',
    boxShadow: 'none',
    gridAutoFlow: 'column',
    // left: '0',
    // right: '0',
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.up('md')]: {
      right: 0,
      left: 0
    },
    [theme.breakpoints.down('xs')]: {
      gridAutoFlow: 'row'
    }
    // left: '40%'
  },
  textfield: {
    position: 'absolute',
    bottom: '0px',
    width: '100%',
    backgroundColor: theme.palette.primary.main
  }
}))

const Video = props => {
  console.log(props.peer)
  const ref = useRef()
  const classes = useStyles()
  const dimension =
    Math.sqrt(window.screen.availWidth * window.screen.availHeight) / 1.4

  useEffect(() => {
    console.log('video started')
    props.peer.on('stream', stream => {
      console.log(stream)
      ref.current.srcObject = stream
    })
  }, [])

  return (
    <video
      playsInline
      width={dimension / Math.sqrt(1 + props.numpeers)}
      height={dimension / Math.sqrt(1 + props.numpeers)}
      autoPlay
      style={{ display: props.video ? 'block' : 'none' }}
      className={classes.video}
      ref={ref}
    />
  )
}

const videoConstraints = {
  height: window.screen.availHeight,
  width: window.screen.availWidth
}

const Room = React.memo(props => {
  const history = useHistory()
  const currentRoom = useSelector(state => state.room.currentRoom)
  const [inLobby, setInLobby] = useState(true)
  const [pendingRequest, setPendingRequest] = useState(false)
  const [message, setMessage] = useState()
  const token = useSelector(state => state.auth.token)
  const [peers, setPeers] = useState([])
  const [streams, setStreams] = useState([])
  const [allMessages, setAllMessages] = useState([])
  const [websocket, setWebSocket] = useState([])
  var socketRef = useRef()
  var [dimension, setDimension] = useState(window.screen.availHeight)
  const userVideo = useRef()
  var localstream = useRef()
  const [mystream, setMystream] = useState()
  const [video, setVideo] = useState(true)
  const [chatBoxOpen, setChatBoxOpen] = useState(false)
  const [audio, setAudio] = useState(true)
  const [roomExist, setRoomExists] = useState(false)
  const peersRef = useRef([])
  const classes = useStyles()

  useEffect(() => {
    console.log('initialize')
    const d =
      Math.sqrt(window.screen.availHeight * window.screen.availWidth) / 1.4
    setDimension(d)
    return () => {
      const tracks = localstream.current.getTracks()
      tracks.map(track => {
        track.stop()
      })
      localstream.current.getTracks()[1].stop()
      WebSocketInstance.close()
    }
  }, [])

  useEffect(() => {
    console.log('peers changed')
    console.log(peers)
  }, [peers])

  useEffect(() => {
    // let data = {
    //   id: props.match.params.id,
    //   sharing_id: props.match.params.code
    // }
    // data = JSON.stringify(data)
    console.log("currentroom.id changes")
    console.log(currentRoom)
    props.getRoomDetails(props.match.params.id, () => {
      console.log(currentRoom && currentRoom.created_by.pk == props.myuser.pk)
      if (currentRoom && currentRoom.created_by.pk == props.myuser.pk) {
        navigator.mediaDevices
          .getUserMedia({ video: { videoConstraints }, audio: true })
          .then(stream => {
            console.log(stream)
            userVideo.current.srcObject = stream
            localstream.current = stream
            setMystream(stream)
          })
          .catch(err => {
            console.log(err)
            toast.error('Cannot get access to your camera and video !')
          })
        console.log('admin hai ye')
        setInLobby(false)
      }
      setRoomExists(true)
    })
  }, [currentRoom.id])

  useEffect(() => {
    if (roomExist) {
      if (inLobby) {
        navigator.mediaDevices
          .getUserMedia({ video: { videoConstraints }, audio: true })
          .then(stream => {
            console.log(stream)
            userVideo.current.srcObject = stream
            // dummyUserVideo.current.srcObject = stream
            localstream.current = stream
            setMystream(stream)
          })
          .catch(err => {
            console.log(err)
            toast.error('Cannot get access to your camera and video !')
          })
      } else {
        if (Boolean(WebSocketInstance) && WebSocketInstance.socketRef) {
          WebSocketInstance.close()
        }
        WebSocketInstance.connect(
          `${window.location.protocol == 'http:' ? 'ws' : 'wss'}://${
            window.location.host.includes('localhost:')
              ? 'localhost:8000'
              : window.location.hostname
          }/ws/chat/${props.currentRoom.sharing_id}`
        )
        // WebSocketInstance.waitForSocketConnection(() => {
        //   console.log('looping')
        // })
        setWebSocket(WebSocketInstance)
        WebSocketInstance.sendSignal('join room', { video, audio })
        WebSocketInstance.on('request invite', user => {
          let presentInUsers =
            props.currentRoom.all_users.indexOf(user.id) != -1
          console.log(props.currentRoom.all_users)
          console.log(user.id == props.currentRoom.created_by.pk)
          console.log(user.id == props.currentRoom.created_by.pk || presentInUsers)
          if (user.id == props.currentRoom.created_by.pk || presentInUsers) {
            WebSocketInstance.sendSignal('accept invite', user.id)
          }
          else if (
            props.currentRoom.created_by.pk == props.myuser.pk &&
            currentRoom.created_by.pk != user.id 
          ) {
            toast(
              t => (
                <div>
                  {user.email} wants to join{' '}
                  <Button
                    color='inherit'
                    onClick={() => handleUserAccept(t.id, user.id)}
                  >
                    accept
                  </Button>
                  <Button
                    color='inherit'
                    onClick={() => handleUserReject(t.id, user.id)}
                  >
                    Decline
                  </Button>
                </div>
              ),
              {
                icon: '👤',
                duration: 100000
              }
            )
          }
        })
        WebSocketInstance.on('invite was rejected', payload => {
          console.log(props.myuser.pk == payload.id)
          if (props.myuser.pk == payload.id) {
            alert('Admin rejected your request')
            history.push('/')
          }
        })
        WebSocketInstance.on('all users', payload => {
          if (pendingRequest == true) {
            console.log('pending req was true')
            setPendingRequest(false)
            userVideo.current.srcObject = localstream.current
          }
          if (payload.id == props.myuser.pk) {
            console.log('all users received')
            console.log(payload.users)
            const allPeers = []
            payload.users.forEach(user => {
              if (user[0] !== props.myuser.pk) {
                if (!Boolean(peersRef.current.some(e => e.peerID == user[0]))) {
                  console.log(localstream.current)
                  const peer = createPeer(
                    user[0],
                    props.myuser.pk,
                    localstream.current
                  )
                  peersRef.current.push({
                    peerID: user[0],
                    peerName: user[1],
                    video: user[2],
                    audio: user[3],
                    peer
                  })
                  allPeers.push({
                    peerID: user[0],
                    peerName: user[1],
                    video: user[2],
                    audio: user[3],
                    peer
                  })
                  console.log('created peer ' + user[1])
                }
              }
            })
            setPeers(allPeers)
            console.log('peers after all users')
            console.log(peers)
          }
        })

        WebSocketInstance.on('user joined', payload => {
          // console.log(peersRef.current)
          // setPeers(peersRef.current)
          console.log(payload.userID)
          if (payload.userID === props.myuser.pk) {
            if (
              !Boolean(
                peersRef.current.some(e => e.peerID == payload.caller[0])
              )
            ) {
              const peer = addPeer(
                payload.signal,
                payload.caller,
                localstream.current
              )
              toast(`${payload.caller[1]} joined the room.`, { icon: '👏' })
              console.log(`${payload.caller[1]} joined the room.`)
              peersRef.current.push({
                peerID: payload.caller[0],
                peerName: payload.caller[1],
                video: payload.caller[2],
                audio: payload.caller[3],
                peer
              })

              let peerObj = {
                peerID: payload.caller[0],
                peerName: payload.caller[1],
                video: payload.caller[2],
                audio: payload.caller[3],
                peer
              }

              setPeers([...peers, peerObj])

              console.log('added peer')
            }
            console.log(peers)
          }
          // setPeers(peersRef.current)
        })

        WebSocketInstance.on('receiving returned signal', payload => {
          console.log('receiving returned signal')
          if (payload.userID === props.myuser.pk) {
            const item = peersRef.current.find(p => p.peerID === payload.id)
            item.peer.signal(payload.signal)
          }
          // setPeers(peersRef.current)
          console.log(peers)
        })

        WebSocketInstance.on('user left', id => {
          const peerObj = peersRef.current.find(p => p.peerID === id)
          if (peerObj) {
            toast(`${peerObj.peerName} left.`, { icon: 'ℹ️' })

            peerObj.peer.destroy()
          }
          const allPeers = peersRef.current.filter(p => p.peerID !== id)
          peersRef.current = allPeers
          setPeers(allPeers)
        })

        WebSocketInstance.on('message received', payload => {
          const msgObj = {
            user: payload.user,
            msg: payload.message
          }
          setAllMessages(messages => [...messages, msgObj])
          if (props.myuser.first_name != msgObj.user && !chatBoxOpen) {
            toast(`${payload.user} : ${payload.message}`, { icon: '💬' })
          }
          console.log(allMessages)
        })

        WebSocketInstance.on('toggle video', payload => {
          if (payload.id == props.myuser.pk) {
            setVideo(payload.value)
          } else {
            var newPeers = peersRef.current
            for (var i in newPeers) {
              if (newPeers[i].peerID == payload.id) {
                newPeers[i].video = payload.value
                break //Stop this loop, we found it!
              }
            }
            setPeers([...newPeers])
            peersRef.current = newPeers
          }
        })

        WebSocketInstance.on('toggle audio', payload => {
          if (payload.id == props.myuser.pk) {
            setAudio(payload.value)
          } else {
            var newPeers = peersRef.current
            for (var i in newPeers) {
              if (newPeers[i].peerID == payload.id) {
                newPeers[i].audio = payload.value
                break //Stop this loop, we found it!
              }
            }
            setPeers([...newPeers])
            peersRef.current = newPeers
          }
        })
      }
    }
  }, [roomExist, inLobby])

  function handleUserAccept (toast_id, user_id) {
    WebSocketInstance.sendSignal('accept invite', user_id)
    toast.dismiss(toast_id)
  }

  function handleUserReject (toast_id, user_id) {
    WebSocketInstance.sendSignal('reject invite', user_id)
    toast.dismiss(toast_id)
  }

  function createPeer (userToSignal, callerID, stream) {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream
    })

    peer.on('signal', signal => {
      WebSocketInstance.sendSignal('sending signal', {
        userToSignal,
        callerID,
        signal
      })
    })

    return peer
  }

  function addPeer (incomingSignal, caller, stream) {
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream
    })
    let callerID = caller[0]
    peer.on('signal', signal => {
      WebSocketInstance.sendSignal('returning signal', { signal, callerID })
    })

    peer.signal(incomingSignal)

    return peer
  }

  function shareScreen () {
    console.log(mystream)
    console.log(peersRef.current[0].peer)
    navigator.mediaDevices
      .getDisplayMedia({ video: { cursor: 'always' }, audio: 'true' })
      .then(screenStream => {
        console.log(screenStream.getVideoTracks())
        let videoTrack = screenStream.getVideoTracks()[0]
        // peersRef.current[0].peer.getSenders()[1].replaceTrack(screenStream.getTracks()[0])
        userVideo.current.srcObject = screenStream
        // screenStream.getTracks()[0].onended = () =>{
        // peers[0].peer.getSenders.find(function(s){return s.track.kind == videoTrack.kind}).replaceTrack(videoTrack)
        // userVideo.current.srcObject=mystream
        // }
      })
  }

  function handleMessageSend () {
    WebSocketInstance.sendSignal('send_message', message)
    setMessage('')
  }

  function handleMessageChange (event) {
    setMessage(event.target.value)
  }

  function toggleChatBoxOpen () {
    setChatBoxOpen(!chatBoxOpen)
  }

  function handleJoinRoom () {
    console.log('joining room')
    setPendingRequest(true)
    setInLobby(false)
  }

  function handleVideoToggle () {
    localstream.current.getVideoTracks()[0].enabled = !localstream.current.getVideoTracks()[0]
      .enabled
    if (inLobby) {
      setVideo(!video)
    } else {
      WebSocketInstance.sendSignal('toggle video')
    }
  }
  function handleAudioToggle () {
    localstream.current.getAudioTracks()[0].enabled = !localstream.current.getAudioTracks()[0]
      .enabled
    // setAudio(!audio)
    if (inLobby) {
      setAudio(!audio)
    } else {
      WebSocketInstance.sendSignal('toggle audio')
    }
  }
  function handleDisconnect () {
    console.log(mystream)
    const tracks = mystream && mystream.getTracks()
    tracks.map(track => {
      track.stop()
    })
    // localstream.current.getTracks()[0].stop();
    // WebSocketInstance.close()
    history.push('/')
  }
  console.log(pendingRequest)
  console.log(inLobby)
  console.log(peers)
  return roomExist ? (
    !inLobby && !pendingRequest ? (
      <div className={classes.chatRoom}>
        <Toaster />
        <div className={classes.chatRoomMainDiv}>
          <Grid
            // xs={chatBoxOpen ? 6 : 12}
            container
            spacing={2}
            className={classes.paper}
          >
            <Grid
              container
              item
              xs={12}
              // style={{'display':'none'}}
              // xs={12}
              key={props.myuser.pk}
              className={classes.userDiv}
            >
              {/* <Paper> */}
              <Typography
                variant='h5'
                className={classes.userDetailDiv}
                style={{ display: video ? 'block' : 'none' }}
                gutterBottom
              >
                {props.myuser.first_name}
              </Typography>
              <video
                width={dimension / Math.sqrt(1 + peersRef.current.length)}
                height={dimension / Math.sqrt(1 + peersRef.current.length)}
                playsInline
                muted
                style={{ display: video ? 'block' : 'none' }}
                autoPlay
                className={classes.video}
                ref={userVideo}
              />
              <VideoOffDiv
                name={props.myuser.first_name}
                audio={audio}
                video={video}
                dimension={dimension}
                numpeers={peersRef.current.length}
              />
              {/* </Paper> */}
            </Grid>

            {peersRef.current.map(peer => {
              console.log(peer)
              return (
                <Grid
                  // container
                  xs={12}
                  // xs={12}
                  item
                  key={peer.peerID}
                  className={classes.userDiv}
                >
                  {/* <Paper> */}
                  <Typography
                    variant='h5'
                    className={classes.userDetailDiv}
                    gutterBottom
                    style={{ display: peer.video ? 'block' : 'none' }}
                  >
                    {peer.peerName}
                  </Typography>
                  <Video
                    peer={peer.peer}
                    video={peer.video}
                    numpeers={peersRef.current.length}
                  />
                  <VideoOffDiv
                    name={peer.peerName}
                    audio={peer.audio}
                    video={peer.video}
                    dimension={dimension}
                    numpeers={peersRef.current.length}
                  />
                  {/* </Paper> */}
                </Grid>
              )
            })}
          </Grid>
          {chatBoxOpen ? (
            <Grid className={classes.chatBox}>
              <Grid className={classes.chatBoxIntro}>
                <IconButton>
                  <ArrowBackIcon onClick={toggleChatBoxOpen} />
                </IconButton>
              </Grid>
              {/* <StepLabel>
                Messages are not saved and will be removed once you disconnect
              </StepLabel> */}
              <Grid className={classes.chatBoxMessages}>
                {allMessages.map(obj => {
                  return (
                    <div>
                      <div>{obj.user}</div>
                      <div>{obj.msg}</div>
                    </div>
                  )
                })}
              </Grid>
              <Grid className={classes.chatBoxInput}>
                <TextField
                  color='secondary'
                  className={classes.textfield}
                  onChange={handleMessageChange}
                  value={message}
                  name='message'
                  variant='outlined'
                  autoComplete={false}
                  label=''
                  placeholder='Enter your msg'
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton>
                          <SvgIcon onClick={handleMessageSend}>
                            <SendIcon />
                          </SvgIcon>
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
            </Grid>
          ) : (
            ''
          )}
        </div>
        <Grid className={classes.actionButtons}>
          <Button onClick={handleVideoToggle}>
            {video ? <VideocamIcon /> : <VideocamOffIcon />}
          </Button>
          <Button onClick={handleAudioToggle}>
            {audio ? <MicIcon /> : <MicOffIcon />}
          </Button>
          <Button onClick={toggleChatBoxOpen}>
            <ChatIcon />
          </Button>
          <Button onClick={handleDisconnect}>
            <CallEndIcon />
          </Button>
          <Button onClick={shareScreen}>
            <ScreenShareIcon />
          </Button>
        </Grid>
      </div>
    ) : (
      <div>
        <Typography variant='h5' className={classes.userDetailDiv} gutterBottom>
          {props.myuser.first_name}
        </Typography>
        <video
          width={
            peers.length == 0 || window.screen.availWidth < 1400
              ? window.screen.availWidth / 1.3
              : window.screen.availWidth / 2.2
          }
          height={
            peers.length == 0
              ? window.screen.availHeight / 1.3
              : window.screen.availWidth < 1400
              ? window.screen.availHeight / 2.3
              : window.screen.availHeight / 1.3
          }
          playsInline
          muted
          autoPlay
          className={classes.video}
          ref={userVideo}
        />
        <Button onClick={handleVideoToggle}>
          {video ? <VideocamIcon /> : <VideocamOffIcon />}
        </Button>
        <Button onClick={handleAudioToggle}>
          {audio ? <MicIcon /> : <MicOffIcon />}
        </Button>
        <Button onClick={handleJoinRoom} disabled={pendingRequest}>
          Join room
        </Button>
      </div>
    )
  ) : (
    <div>Room doesnt exist</div>
  )
})

const mapStateToprops = state => {
  return {
    myuser: state.auth.user,
    currentRoom: state.room.currentRoom,
    token: state.auth.token
  }
}

const mapDispatchToprops = dispatch => {
  return {
    getRoomDetails: (id, handleSuccess) => {
      return dispatch(getRoomDetails(id, handleSuccess))
    }
  }
}
export default withRouter(connect(mapStateToprops, mapDispatchToprops)(Room))

// width={
//   peers.length == 0 || window.screen.availWidth < 1400
//     ? window.screen.availWidth / 1.3
//     : window.screen.availWidth / 2.2
// }
// height={
//   peers.length == 0
//     ? window.screen.availHeight / 1.3
//     : window.screen.availWidth < 1400
//     ? window.screen.availHeight / 2.3
//     : window.screen.availHeight / 1.3
// }
