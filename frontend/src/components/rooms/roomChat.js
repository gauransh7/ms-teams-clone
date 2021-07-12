import React, { Component, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link, useHistory, withRouter } from 'react-router-dom'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  StepLabel,
  SvgIcon,
  TextField,
  Typography,
  ListItemText,
  List,
  ListItem
} from '@material-ui/core'
import {
  createChatRoom,
  getAllMessages,
  getAllRooms,
  getRoomDetails,
  addMessage
} from '../../actions/chatRoomAction'
import WebSocketInstance from '../../websocket/socket'
import TimeAgo from 'react-timeago'
import { makeStyles } from '@material-ui/styles'
import SendIcon from '@material-ui/icons/Send'
import ChatBox from '../common/chatBox'

const useStyles = makeStyles(theme => ({
  roomChatDiv: {
    // width: '100%',
    // display: 'grid',
    // justifyItems: 'center'
    position: 'relative',
    height: '90%',
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.down('md')]: {
      position: 'absolute',
      width: '100%',
      bottom: 0,
    }
  },
  textfield: {
    position: 'absolute',
    bottom: '0px',
    width: '100%',
    backgroundColor: theme.palette.primary.main
  },
  chatHeading: {
    top: '0px',
    backgroundColor: theme.palette.primary.main
  },
  chatBoxMessages: {
    padding: '2px',
    position: 'relative',
    overflow: 'hidden',
    height: '82%',
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      height: '75%'
    }
  },
  messageList: {
    maxHeight: '100%',
    top: 0,
    left: 0,
    right: -theme.spacing(2),
    position: 'absolute',
    overflowY: 'scroll'
  }
}))

const RoomChat = props => {
  const history = useHistory()
  useEffect(() => {
    console.log('room chat')
    console.log(props)
    props.getAllMessages(props.match.params.id)
    return () => {
      WebSocketInstance.close()
    }
  }, [])
  const { currentRoom } = props
  useEffect(() => {
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
    //   setWebSocket(WebSocketInstance)
    WebSocketInstance.sendSignal('join room', {
      video: false,
      audio: false,
      onlyChat: true
    })
    WebSocketInstance.on('message received', payload => {
      // const msgObj = {
      //   user: payload.user,
      //   msg: payload.message
      // }
      payload.user = JSON.parse(payload.user)
      props.addMessage(payload)
      // if (props.myuser.first_name != msgObj.user && !chatBoxOpen) {
      //   toast(`${payload.user} : ${payload.message}`, { icon: '💬' })
      // }
      // console.log(allMessages)
    })
  }, [currentRoom.id])
  const classes = useStyles()
  const [message, setMessage] = useState('')
  function handleMessageSend () {
    if(message!='') WebSocketInstance.sendSignal('send_message', message)
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

  return (
    <Card className={classes.roomChatDiv}>
      <CardContent color='secondary' className={classes.chatHeading}>
        <Typography variant='h5'>Chat</Typography>
      </CardContent>
      <ChatBox />
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
              <IconButton>
                <SvgIcon onClick={handleMessageSend}>
                  <SendIcon />
                </SvgIcon>
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    </Card>
  )
}

const mapStateToprops = state => {
  return {
    user: state.auth.user,
    currentRoom: state.room.currentRoom,
    messages: state.room.messages
  }
}

const mapDispatchToprops = dispatch => {
  return {
    createChatRoom: (data, handleSuccess) => {
      return dispatch(createChatRoom(data, handleSuccess))
    },
    getAllMessages: (id, callback) => {
      return dispatch(getAllMessages(id, callback))
    },
    addMessage: message => {
      return dispatch(addMessage(message))
    }
  }
}

export default withRouter(
  connect(mapStateToprops, mapDispatchToprops)(RoomChat)
)

// import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
// import Paper from '@material-ui/core/Paper'
// import Grid from '@material-ui/core/Grid'
// import Box from '@material-ui/core/Box'
// import Divider from '@material-ui/core/Divider'
// import TextField from '@material-ui/core/TextField'
// import Typography from '@material-ui/core/Typography'
// import List from '@material-ui/core/List'
// import ListItem from '@material-ui/core/ListItem'
// import ListItemIcon from '@material-ui/core/ListItemIcon'
// import ListItemText from '@material-ui/core/ListItemText'
// import Avatar from '@material-ui/core/Avatar'
// import Fab from '@material-ui/core/Fab'
// import SendIcon from '@material-ui/icons/Send'

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650
//   },
//   chatSection: {
//     width: '100%',
//     height: '80vh'
//   },
//   headBG: {
//     backgroundColor: '#e0e0e0'
//   },
//   borderRight500: {
//     borderRight: '1px solid #e0e0e0'
//   },
//   messageArea: {
//     height: '70vh',
//     overflowY: 'auto'
//   }
// })

// const RoomChat = () => {
//   const classes = useStyles()

//   return (
//     <div>
//       <Grid container>
//         <Grid item xs={12}>
//           <Typography variant='h5' className='header-message'>
//             Chat
//           </Typography>
//         </Grid>
//       </Grid>
//       <Grid container component={Paper} className={classes.chatSection}>
//         <Grid item xs={3} className={classes.borderRight500}>
//           <List>
//             <ListItem button key='RemySharp'>
//               <ListItemIcon>
//                 <Avatar
//                   alt='Remy Sharp'
//                   src='https://material-ui.com/static/images/avatar/1.jpg'
//                 />
//               </ListItemIcon>
//               <ListItemText primary='John Wick'></ListItemText>
//             </ListItem>
//           </List>
//           <Divider />
//           <Grid item xs={12} style={{ padding: '10px' }}>
//             <TextField
//               id='outlined-basic-email'
//               label='Search'
//               variant='outlined'
//               fullWidth
//             />
//           </Grid>
//           <Divider />
//           <List>
//             <ListItem button key='RemySharp'>
//               <ListItemIcon>
//                 <Avatar
//                   alt='Remy Sharp'
//                   src='https://material-ui.com/static/images/avatar/1.jpg'
//                 />
//               </ListItemIcon>
//               <ListItemText primary='Remy Sharp'>Remy Sharp</ListItemText>
//               <ListItemText secondary='online' align='right'></ListItemText>
//             </ListItem>
//             <ListItem button key='Alice'>
//               <ListItemIcon>
//                 <Avatar
//                   alt='Alice'
//                   src='https://material-ui.com/static/images/avatar/3.jpg'
//                 />
//               </ListItemIcon>
//               <ListItemText primary='Alice'>Alice</ListItemText>
//             </ListItem>
//             <ListItem button key='CindyBaker'>
//               <ListItemIcon>
//                 <Avatar
//                   alt='Cindy Baker'
//                   src='https://material-ui.com/static/images/avatar/2.jpg'
//                 />
//               </ListItemIcon>
//               <ListItemText primary='Cindy Baker'>Cindy Baker</ListItemText>
//             </ListItem>
//           </List>
//         </Grid>
//         <Grid item xs={9}>
//           <List className={classes.messageArea}>
//             <ListItem key='1'>
//               <Grid container>
//                 <Grid item xs={12}>
//                   {/* <ListItem button key='CindyBaker'>
//                     <ListItemIcon> */}
//                   <Avatar
//                     alt='Cindy Baker'
//                     src='https://material-ui.com/static/images/avatar/2.jpg'
//                   />
//                   {/* </ListItemIcon> */}
//                   {/* <ListItemText primary='Cindy Baker'> */}
//                   Cindy Baker
//                   {/* </ListItemText> */}
//                   {/* </ListItem> */}
//                   <ListItemText align='right'>
//                     <Avatar
//                       alt='Cindy Baker'
//                       src='https://material-ui.com/static/images/avatar/2.jpg'
//                     />
//                     Cindy Baker 09:30
//                   </ListItemText>
//                 </Grid>
//                 <Grid item xs={12}>
//                   <ListItemText
//                     align='right'
//                     secondary="Hey man, What's up ?"
//                   ></ListItemText>
//                 </Grid>
//               </Grid>
//             </ListItem>
//             <ListItem key='2'>
//               <Grid container>
//                 <Grid item xs={12}>
//                   <ListItemText
//                     align='left'
//                     primary='Hey, Iam Good! What about you ?'
//                   ></ListItemText>
//                 </Grid>
//                 <Grid item xs={12}>
//                   <ListItemText align='left' secondary='09:31'></ListItemText>
//                 </Grid>
//               </Grid>
//             </ListItem>
//             <ListItem key='3'>
//               <Grid container>
//                 <Grid item xs={12}>
//                   <ListItemText
//                     align='right'
//                     primary="Cool. i am good, let's catch up!"
//                   ></ListItemText>
//                 </Grid>
//                 <Grid item xs={12}>
//                   <ListItemText align='right' secondary='10:30'></ListItemText>
//                 </Grid>
//               </Grid>
//             </ListItem>
//           </List>
//           <Divider />
//           <Grid container style={{ padding: '20px' }}>
//             <Grid item xs={11}>
//               <TextField
//                 id='outlined-basic-email'
//                 label='Type Something'
//                 fullWidth
//               />
//             </Grid>
//             <Grid xs={1} align='right'>
//               <Fab color='primary' aria-label='add'>
//                 <SendIcon />
//               </Fab>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Grid>
//     </div>
//   )
// }

// export default RoomChat
