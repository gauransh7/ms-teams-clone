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
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
  Divider,
  Fab,
  Menu,
  MenuItem
} from '@material-ui/core'
import React, { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'
import { useSelector } from 'react-redux'
import { useHistory, withRouter } from 'react-router'
// import io from "socket.io-client";
import Peer from 'simple-peer'
import {
  addMessage,
  getAllMessages,
  getRoomDetails,
  setUserDimension
} from '../../actions/chatRoomAction'
import toast, { Toaster } from 'react-hot-toast'
import TimeAgo from 'react-timeago'
// import styled from "styled-components";
import WebSocketInstance from '../../websocket/socket'
import RoomDetailsModal from '../common/roomDataModal'
import VideocamIcon from '@material-ui/icons/Videocam'
import VideocamOffIcon from '@material-ui/icons/VideocamOff'
import MicIcon from '@material-ui/icons/Mic'
import MicOffIcon from '@material-ui/icons/MicOff'
import CallEndIcon from '@material-ui/icons/CallEnd'
import ChatIcon from '@material-ui/icons/Chat'
import SendIcon from '@material-ui/icons/Send'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import DetailsIcon from '@material-ui/icons/Details'
import ScreenShareIcon from '@material-ui/icons/ScreenShare'
import VideoOffDiv from './videoOffDiv'
import RoomChat from '../rooms/roomChat'
import UserCard from './userCard'
import ChatBox from '../common/chatBox'
import GridOnIcon from '@material-ui/icons/GridOn'
import GridOffIcon from '@material-ui/icons/GridOff'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import RoomData from '../rooms/roomData'
import GroupIcon from '@material-ui/icons/Group'

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
  introLobby: {
    display: 'grid',
    gridAutoFlow: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    display: 'grid',
    justifyContent: 'space-around',
    alignItems: 'center',
    // gridAutoFlow: 'column',
    overflow: 'hidden',
    height: '100%',
    width: '100%',
    boxShadow: 'none'
    // [theme.breakpoints.down('sm')]: {
    //   gridAutoFlow: 'row'
    // }
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
    zIndex: 5,
    // width: 'auto',
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
    padding: '2px',
    position: 'relative',
    overflow: 'hidden',
    height: '85%',
    width: '100%'
  },
  messageList: {
    maxHeight: '100%',
    top: 0,
    left: 0,
    right: -theme.spacing(2),
    position: 'absolute',
    overflowY: 'scroll'
  },
  actionButtons: {
    position: 'absolute',
    bottom: 0,
    display: 'grid',
    justifyContent: 'center',
    boxShadow: 'none',
    gridAutoFlow: 'column',
    zIndex: 3,
    // left: '0',
    // right: '0',
    // marginLeft: 'auto',
    // marginRight: 'auto',
    right: 0,
    left: 0
    // [theme.breakpoints.up('md')]: {

    // },
    // [theme.breakpoints.down('xs')]: {
    //   // gridAutoFlow: 'row'
    // }
    // left: '40%'
  },
  desktopButton: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  mobileButton: {
    display: 'none',
    [theme.breakpoints.down('xs')]: {
      display: 'block'
    }
  },
  textfield: {
    position: 'absolute',
    bottom: '0px',
    width: '100%',
    backgroundColor: theme.palette.primary.main
  }
}))

const videoConstraints = {
  // height: usersDiv.current.offsetHeight,
  // width: usersDiv.current.offsetWidth
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
  var [dimension, setDimension] = useState(100)
  var [videoHeight, setVideoHeight] = useState(window.screen.availHeight / 2.2)
  var [videoWidth, setVideoWidth] = useState(window.screen.availWidth / 2.2)
  const userVideo = useRef()
  const messageBox = useRef()
  // const duserVideo = useRef()
  const usersDiv = useRef()
  var localstream = useRef()
  const [mystream, setMystream] = useState()
  const [myVideoTrack, setMyVideoTrack] = useState(null)
  const [video, setVideo] = useState(true)
  const [col, setCol] = useState(0)
  const [showRoomDetailModal, setShowRoomDetailModal] = useState(false)
  const [show, setShow] = useState(true)
  const [showDetails, setShowDetails] = useState(true)
  const [chatBoxOpen, setChatBoxOpen] = useState(false)
  const [allUsersBoxOpen, setAllUsersBoxOpen] = useState(false)
  const [audio, setAudio] = useState(true)
  const [roomExist, setRoomExists] = useState(false)
  const peersRef = useRef([])
  const classes = useStyles()
  const [anchorAvatarEl, setAnchorAvatarEl] = useState(null)
  const [searchUser, setSearchUser] = useState('')

  useEffect(() => {
    props.getAllMessages(props.match.params.id)
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
    if (messageBox.current) {
      messageBox.current.scrollTop = messageBox.current.scrollHeight
    }
  }, [messageBox.current, props.messages.length])

  useEffect(() => {
    if (usersDiv.current) {
      // const d =
      //   Math.sqrt(usersDiv.current.offsetWidth * usersDiv.current.offsetWidth) /
      //   2
      // setDimension(d)
      var n = 0
      if (show) {
        n++
      }
      n += peersRef.current.filter(peer => peer.show === true).length
      if (n == 0) {
        setShowDetails(true)
      } else {
        setShowDetails(false)
      }
      var numCol = Math.sqrt(n)
      if (usersDiv.current.offsetHeight < usersDiv.current.offsetWidth) {
        numCol = Math.ceil(numCol)
      } else {
        numCol = Math.floor(numCol)
      }
      setCol(numCol)
      const numRow = Math.ceil(n / numCol)
      setVideoHeight(usersDiv.current.offsetHeight / (1.2 * numRow))
      setVideoWidth(usersDiv.current.offsetWidth / (1.2 * numCol))
    }
  }, [
    usersDiv.current,
    peers,
    show,
    chatBoxOpen,
    allUsersBoxOpen,
    peersRef.current.length
  ])

  useEffect(() => {
    props.getRoomDetails(props.match.params.id, () => {
      if (currentRoom && currentRoom.created_by.pk == props.myuser.pk) {
        navigator.mediaDevices
          .getUserMedia({ video: { videoConstraints }, audio: true })
          .then(stream => {
            userVideo.current.srcObject = stream
            localstream.current = stream
            setMyVideoTrack(stream.getVideoTracks()[0])
            setMystream(stream)
          })
          .catch(err => {
            toast.error('Cannot get access to your camera and video !')
          })
        setInLobby(true)
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
            userVideo.current.srcObject = stream
            localstream.current = stream
            setMyVideoTrack(stream.getVideoTracks()[0])
            setMystream(stream)
          })
          .catch(err => {
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
        setWebSocket(WebSocketInstance)
        WebSocketInstance.sendSignal('join room', {
          video,
          audio,
          onlyChat: false
        })
        WebSocketInstance.on('request invite', user => {
          let presentInUsers =
            props.currentRoom.all_users.indexOf(user.id) != -1
          if (user.id == props.currentRoom.created_by.pk || presentInUsers) {
            WebSocketInstance.sendSignal('accept invite', user.id)
          } else if (
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
          if (props.myuser.pk == payload.id) {
            // alert('Admin rejected your request')
            toast("Admin rejected your request", { icon : 'ℹ️'})
            history.push('/')
          }
        })
        WebSocketInstance.on('all users', payload => {
          if (pendingRequest == true) {
            setPendingRequest(false)
            userVideo.current.srcObject = localstream.current
          }
          if (payload.id == props.myuser.pk) {
            const allPeers = []
            payload.users.forEach(user => {
              if (user[0] !== props.myuser.pk) {
                if (!Boolean(peersRef.current.some(e => e.peerID == user[0]))) {
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
                    show: true,
                    peer
                  })
                  allPeers.push({
                    peerID: user[0],
                    peerName: user[1],
                    video: user[2],
                    audio: user[3],
                    show: true,
                    peer
                  })
                }
              }
            })
            setPeers(allPeers)
          }
        })

        WebSocketInstance.on('user joined', payload => {
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
              peersRef.current.push({
                peerID: payload.caller[0],
                peerName: payload.caller[1],
                video: payload.caller[2],
                audio: payload.caller[3],
                show: true,
                peer
              })

              let peerObj = {
                peerID: payload.caller[0],
                peerName: payload.caller[1],
                video: payload.caller[2],
                audio: payload.caller[3],
                show: true,
                peer
              }

              setPeers([...peers, peerObj])

            }
          }
        })

        WebSocketInstance.on('receiving returned signal', payload => {
          if (payload.userID === props.myuser.pk) {
            const item = peersRef.current.find(p => p.peerID === payload.id)
            item.peer.signal(payload.signal)
          }
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
          // const msgObj = {
          //   user: payload.user,
          //   msg: payload.message
          // }
          // setAllMessages(messages => [...messages, msgObj])
          payload.user = JSON.parse(payload.user)
          if (
            props.myuser.first_name != payload.user.first_name &&
            !chatBoxOpen
          ) {
            toast(`${payload.user.first_name} : ${payload.message}`, {
              icon: '💬'
            })
          }
          props.addMessage(payload)
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

  const handleAvatarBtnClick = event => {
    setAnchorAvatarEl(event.currentTarget)
  }

  const handleAvatarBtnClose = () => {
    setAnchorAvatarEl(null)
  }

  const handleSearchUser = e => {
    setSearchUser(e.target.value)
  }

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
    setMyVideoTrack(localstream.current.getVideoTracks()[0])
    navigator.mediaDevices
      .getDisplayMedia({ video: { cursor: 'always' }, audio: 'true' })
      .then(screenStream => {
        for (let index = 0; index < peersRef.current.length; index++) {
          peersRef.current[index].peer.replaceTrack(
            localstream.current.getVideoTracks()[0],
            screenStream.getVideoTracks()[0],
            localstream.current
          )
        }
        setPeers([...peersRef.current])
        localstream.current.removeTrack(localstream.current.getVideoTracks()[0])
        localstream.current.addTrack(screenStream.getVideoTracks()[0])
        screenStream.getVideoTracks()[0].onended = function () {
          for (let index = 0; index < peersRef.current.length; index++) {
            peersRef.current[index].peer.replaceTrack(
              localstream.current.getVideoTracks()[0],
              myVideoTrack,
              localstream.current
            )
          }
          setPeers([...peersRef.current])
          localstream.current.removeTrack(
            localstream.current.getVideoTracks()[0]
          )
          localstream.current.addTrack(myVideoTrack)
        }
      })
  }

  function handleMessageSend () {
    if(message != '') WebSocketInstance.sendSignal('send_message', message)
    setMessage('')
  }

  function handleKeyPress (event) {
    if(event.key === 'Enter'){
      handleMessageSend()
    }
  }

  function handleMessageChange (event) {
    setMessage(event.target.value)
  }

  function togglePeerShow (peer) {
    var newPeers = peersRef.current
    for (var i in newPeers) {
      if (newPeers[i].peerID == peer.peerID) {
        newPeers[i].show = !newPeers[i].show
        break //Stop this loop, we found it!
      }
    }
    setPeers([...newPeers])
    peersRef.current = newPeers
  }

  function toggleChatBoxOpen () {
    setAllUsersBoxOpen(false)
    setChatBoxOpen(!chatBoxOpen)
  }

  function toggleAllUsersBoxOpen () {
    setChatBoxOpen(false)
    setAllUsersBoxOpen(!allUsersBoxOpen)
  }

  function handleJoinRoom () {
    if(props.myuser.pk != currentRoom.created_by.pk) toast.success("Notified Admin, waiting for approval...")
    setPendingRequest(true)
    setInLobby(false)
  }

  function toggleShow () {
    if (show) {
      setShow(false)
    } else {
      setShow(true)
      if (userVideo.current) {
        userVideo.current.srcObject = localstream.current
      }
    }
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
    const tracks = mystream && mystream.getTracks()
    tracks.map(track => {
      track.stop()
    })
    history.push(`/room/${currentRoom.id}`)
  }
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
            ref={usersDiv}
            style={{
              gridTemplateColumns: `repeat(${col},1fr)`,
              position: showDetails ? 'relative' : ''
            }}
          >
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
              <Button
                className={classes.desktopButton}
                onClick={toggleAllUsersBoxOpen}
              >
                <GroupIcon />
              </Button>
              <Button
                style={{ backgroundColor: 'red' }}
                onClick={handleDisconnect}
              >
                <CallEndIcon />
              </Button>
              <Button className={classes.desktopButton} onClick={shareScreen}>
                <ScreenShareIcon />
              </Button>
              <Button
                className={classes.desktopButton}
                onClick={() => setShowRoomDetailModal(true)}
              >
                <DetailsIcon />
              </Button>
              <Button
                aria-controls='avatar-dropdown'
                content='avatar'
                // variant='contained'
                // color='secondary'
                // aria-haspopup='true'
                // color='inherit'
                // size='large'
                className={classes.mobileButton}
                // className='header-title-button'
                onClick={handleAvatarBtnClick}
                startIcon={<MoreVertIcon />}
              />
              <Menu
                id='avatar-dropdown'
                anchorEl={anchorAvatarEl}
                // keepMounted
                open={Boolean(anchorAvatarEl)}
                onClose={handleAvatarBtnClose}
                style={{ marginBottom: '30px' }}
                // style={{ marginTop: '30px' }}
              >
                <MenuItem onClick={toggleAllUsersBoxOpen}>
                  Manage Users
                </MenuItem>
                <MenuItem onClick={shareScreen}>Share Screen</MenuItem>
                <MenuItem onClick={() => setShowRoomDetailModal(true)}>
                  View Details
                </MenuItem>
              </Menu>
            </Grid>
            {showRoomDetailModal && (
              <RoomDetailsModal
                show={showRoomDetailModal}
                meeting={false}
                onClose={() => setShowRoomDetailModal(false)}
              />
            )}
            {showDetails && <RoomData meeting={false} />}
            <UserCard
              key={props.myuser.pk - 100}
              video={video}
              audio={audio}
              dimensions={dimension / Math.sqrt(2 + peersRef.current.length)}
              width={videoWidth}
              height={videoHeight}
              show={show}
              refer={userVideo}
              name={props.myuser.first_name}
              numpeers={peersRef.current.length}
            />
            {/* <UserCard
              key={props.myuser.pk}
              video={video}
              audio={audio}
              dimensions={dimension / Math.sqrt(2 + peersRef.current.length)}
              width={videoWidth}
              height={videoHeight}
              refer={duserVideo}
              name={props.myuser.first_name}
              numpeers={peersRef.current.length}
            /> */}

            {peersRef.current.map(peer => {
              return (
                <UserCard
                  key={peer.peerID}
                  video={peer.video}
                  audio={peer.audio}
                  dimensions={
                    dimension / Math.sqrt(2 + peersRef.current.length)
                  }
                  width={videoWidth}
                  height={videoHeight}
                  refer={null}
                  show={peer.show}
                  peer={peer}
                  name={peer.peerName}
                  numpeers={peersRef.current.length}
                />
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
              <ChatBox />
              <Grid className={classes.chatBoxInput}>
                <TextField
                  color='secondary'
                  className={classes.textfield}
                  onChange={handleMessageChange}
                  onKeyPress={handleKeyPress}
                  value={message}
                  name='message'
                  variant='outlined'
                  autoComplete={false}
                  label=''
                  placeholder='Enter your msg'
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton onClick={handleMessageSend}>
                          <SvgIcon>
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
          {allUsersBoxOpen ? (
            <Grid className={classes.chatBox}>
              <Grid className={classes.chatBoxIntro}>
                <IconButton>
                  <ArrowBackIcon onClick={toggleAllUsersBoxOpen} />
                </IconButton>
              </Grid>
              <Grid>
                <List>
                  <ListItem key='RemySharp'>
                    <ListItemIcon>
                      <Avatar color='inherit'>
                        {props.myuser.first_name[0]}
                      </Avatar>
                    </ListItemIcon>
                    <ListItemText
                      primary={props.myuser.first_name}
                    ></ListItemText>
                    <IconButton onClick={handleVideoToggle}>
                      {video ? <VideocamIcon /> : <VideocamOffIcon />}
                    </IconButton>
                    <IconButton onClick={handleAudioToggle}>
                      {audio ? <MicIcon /> : <MicOffIcon />}
                    </IconButton>
                    <IconButton onClick={() => toggleShow()}>
                      {show ? <GridOnIcon /> : <GridOffIcon />}
                    </IconButton>
                  </ListItem>
                </List>
                <Divider />
                <Grid item xs={12} style={{ padding: '10px' }}>
                  <TextField
                    id='outlined-basic-email'
                    label='Search'
                    name={searchUser}
                    value={searchUser}
                    onChange={handleSearchUser}
                    variant='outlined'
                    fullWidth
                  />
                </Grid>
                <Divider />
                <List>
                  {peersRef.current.map(peer => {
                    return (
                      <ListItem style={{display: peer.peerName.includes(searchUser) ? '' : 'none'}} key='RemySharp'>
                        <ListItemIcon>
                          <Avatar color='inherit'>{peer.peerName[0]}</Avatar>
                        </ListItemIcon>
                        <ListItemText primary={peer.peerName}>
                          Remy Sharp
                        </ListItemText>
                        <IconButton disabled>
                          {peer.video ? (
                            <VideocamIcon disabled />
                          ) : (
                            <VideocamOffIcon disabled />
                          )}
                        </IconButton>
                        <IconButton disabled>
                          {peer.audio ? (
                            <MicIcon disabled />
                          ) : (
                            <MicOffIcon disabled />
                          )}
                        </IconButton>
                        <IconButton onClick={() => togglePeerShow(peer)}>
                          {peer.show ? <GridOnIcon /> : <GridOffIcon />}
                        </IconButton>
                      </ListItem>
                    )
                  })}
                </List>
              </Grid>
            </Grid>
          ) : (
            ''
          )}
        </div>
      </div>
    ) : (
      <div>
        <div className={classes.introLobby}>
          <UserCard
            key={props.myuser.pk}
            video={video}
            audio={audio}
            dimensions={dimension / Math.sqrt(1 + peersRef.current.length)}
            width={videoWidth}
            show={show}
            height={videoHeight}
            refer={userVideo}
            name={props.myuser.first_name}
            numpeers={peersRef.current.length}
          />
          <div>
            <Button disabled={pendingRequest} onClick={handleVideoToggle}>
              {video ? <VideocamIcon /> : <VideocamOffIcon />}
            </Button>
            <Button disabled={pendingRequest} onClick={handleAudioToggle}>
              {audio ? <MicIcon /> : <MicOffIcon />}
            </Button>
            <Button onClick={handleJoinRoom} disabled={pendingRequest}>
              Join room
            </Button>
          </div>
        </div>
        <RoomData meeting={false} />
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
    token: state.auth.token,
    messages: state.room.messages,
    userDimension: state.room.userDimension
  }
}

const mapDispatchToprops = dispatch => {
  return {
    getRoomDetails: (id, handleSuccess) => {
      return dispatch(getRoomDetails(id, handleSuccess))
    },
    getAllMessages: (id, callback) => {
      return dispatch(getAllMessages(id, callback))
    },
    addMessage: message => {
      return dispatch(addMessage(message))
    },
    setUserDimension: dimension => {
      return dispatch(setUserDimension(dimension))
    }
  }
}
export default withRouter(connect(mapStateToprops, mapDispatchToprops)(Room))
