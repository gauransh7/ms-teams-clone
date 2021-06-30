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
import { updateRoomUsers } from '../../actions/chatRoomAction'
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

const useStyles = makeStyles(theme => ({
  video: {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    objectFit: 'fill',
    zIndex: -1,
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
  const ref = useRef()
  const classes = useStyles()

  useEffect(() => {
    props.peer.on('stream', stream => {
      ref.current.srcObject = stream
    })
  }, [])

  return (
    <video playsInline autoPlay className={classes.video} muted ref={ref} />
  )
}

const videoConstraints = {
  // height: window.innerHeight / 1.5,
  // width: window.innerWidth / 2
}

const Room = props => {
  const history = useHistory()
  const currentRoom = useSelector(state => state.room.currentRoom)
  const [message, setMessage] = useState()
  const token = useSelector(state => state.auth.token)
  const [peers, setPeers] = useState([])
  const [allMessages, setAllMessages] = useState([])
  const [websocket, setWebSocket] = useState([])
  var socketRef = useRef()
  const userVideo = useRef()
  const dummyUserVideo = useRef()
  var localstream = useRef()
  const [mystream, setMystream] = useState()
  const [video, setVideo] = useState(true)
  const [chatBoxOpen, setChatBoxOpen] = useState(false)
  const [audio, setAudio] = useState(false)
  const [roomExist, setRoomExists] = useState(false)
  const peersRef = useRef([])
  const roomID = ''
  const classes = useStyles()

  // const handleSuccess = () => {
  //   console.log("success")
  //   setRoomExists(true)
  // }
  useEffect(() => {
    console.log(history)
    console.log(props)
    let data = {
      id: props.match.params.id,
      sharing_id: props.match.params.code
    }
    data = JSON.stringify(data)
    props.updateRoomUsers(data, props.match.params.id, () => {
      setRoomExists(true)
    })
    return () => {
      // Anything in here is fired on component unmount.
      // console.log(localstream.current.getTracks())
      const tracks = localstream.current.getTracks()
      tracks.map(track => {
        track.stop()
      })
      localstream.current.getTracks()[0].stop()
      WebSocketInstance.close()
    }
  }, [])

  useEffect(() => {
    if (roomExist) {
      console.log(props.currentRoom)
      if (Boolean(WebSocketInstance) && WebSocketInstance.socketRef) {
        WebSocketInstance.close()
      }
      WebSocketInstance.connect(
        `ws://${window.location.hostname}/ws/chat/${props.currentRoom.sharing_id}`
      )
      WebSocketInstance.waitForSocketConnection(() => {
        console.log('looping')
      })
      setWebSocket(WebSocketInstance)
      navigator.mediaDevices
        .getUserMedia({ video: videoConstraints, audio: true })
        .then(stream => {
          userVideo.current.srcObject = stream
          // dummyUserVideo.current.srcObject = stream
          localstream.current = stream
          setMystream(stream)
          WebSocketInstance.sendSignal('join room', roomID)
          WebSocketInstance.on('all users', users => {
            console.log('all users received')
            console.log(users)
            const peers = []
            users.forEach(user => {
              if (user[0] !== props.myuser.pk) {
                const peer = createPeer(user[0], props.myuser.pk, stream)
                peersRef.current.push({
                  peerID: user[0],
                  peerName: user[1],
                  peer
                })
                peers.push({
                  peerID: user[0],
                  peerName: user[1],
                  peer
                })
                console.log('created peer ' + user.id)
              }
            })
            setPeers(peers)
            console.log('peers after all users')
            console.log(peers)
          })

          WebSocketInstance.on('user joined', payload => {
            console.log('user joined')
            console.log(peers)
            console.log(payload.userID)
            if (payload.userID === props.myuser.pk) {
              const peer = addPeer(payload.signal, payload.caller, stream)
              if (
                !Boolean(
                  peersRef.current.some(e => e.peerID == payload.caller[0])
                )
              ) {
                peersRef.current.push({
                  peerID: payload.caller[0],
                  peerName: payload.caller[1],
                  peer
                })

                const peerObj = {
                  peerID: payload.callerID,
                  peerName: payload.caller[1],
                  peer
                }

                setPeers(users => [...users, peerObj])
                console.log('added peer ' + peerObj.peerID)
              }
              console.log(peers)
            }
          })

          WebSocketInstance.on('receiving returned signal', payload => {
            console.log('receiving returned signal')
            if (payload.userID === props.myuser.pk) {
              const item = peersRef.current.find(p => p.peerID === payload.id)
              item.peer.signal(payload.signal)
            }
          })

          WebSocketInstance.on('user left', id => {
            console.log('user left')
            const peerObj = peersRef.current.find(p => p.peerID === id)
            if (peerObj) {
              peerObj.peer.destroy()
            }
            const peers = peersRef.current.filter(p => p.peerID !== id)
            peersRef.current = peers
            setPeers(peers)
          })

          WebSocketInstance.on('message received', payload => {
            const msgObj = {
              user: payload.user,
              msg: payload.message
            }
            setAllMessages(messages => [...messages, msgObj])
            console.log(allMessages)
          })
        })
    }
  }, [roomExist])

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
    console.log(peersRef.current)
    navigator.mediaDevices
      .getDisplayMedia({ cursor: true })
      .then(screenStream => {
        console.log(screenStream.getVideoTracks())
        peersRef.current[0].peer.replaceTrack(
          peersRef.current[0].peer['streams'][0].getVideoTracks()[0],
          screenStream.getVideoTracks()[0],
          peersRef.current[0].peer['streams'][0]
        )
        userVideo.current.srcObject = screenStream
        // screenStream.getTracks()[0].onended = () =>{
        // peers[0].peer.replaceTrack(screenStream.getVideoTracks()[0],mystream.getVideoTracks()[0],mystream)
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

  function handleVideoToggle () {
    mystream.getVideoTracks()[0].enabled = !mystream.getVideoTracks()[0].enabled
    setVideo(!video)
  }
  function handleAudioToggle () {
    mystream.getAudioTracks()[0].enabled = !mystream.getAudioTracks()[0].enabled
    setAudio(!audio)
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

  return roomExist ? (
    <div className={classes.chatRoom}>
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
            // xs={12}
            key={props.myuser.pk}
            className={classes.userDiv}
          >
          <Paper>
            <Typography
              variant='h5'
              className={classes.userDetailDiv}
              gutterBottom
            >
              {props.myuser.first_name}
            </Typography>
            <video
              // width="100%"
              // height="120%"
              playsInline
              autoPlay
              className={classes.video}
              muted
              ref={userVideo}
            />
            </Paper>
          </Grid>

          {peers.map(peer => {
            return (
              <Grid
                container
                xs={12}
                // xs={12}
                item
                key={peer.peerID}
                className={classes.userDiv}
              >
              <Paper>
                <Typography
                  variant='h5'
                  className={classes.userDetailDiv}
                  gutterBottom
                >
                  {peer.peerName}
                </Typography>
                <Video peer={peer.peer} />
                </Paper>
              </Grid>
            )
          })}
        </Grid>
        {chatBoxOpen ? (
          <Grid xs={6} className={classes.chatBox}>
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
          <ChatIcon />
        </Button>
      </Grid>
    </div>
  ) : (
    <div>Room doesnt exist</div>
  )
}

const mapStateToprops = state => {
  return {
    myuser: state.auth.user,
    currentRoom: state.room.currentRoom,
    token: state.auth.token
  }
}

const mapDispatchToprops = dispatch => {
  return {
    updateRoomUsers: (data, id, handleSuccess) => {
      return dispatch(updateRoomUsers(data, id, handleSuccess))
    }
  }
}

export default withRouter(connect(mapStateToprops, mapDispatchToprops)(Room))
