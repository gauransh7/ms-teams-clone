import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {
  Card,
  CardContent,
  IconButton,
  InputAdornment,
  SvgIcon,
  TextField,
  Typography
} from '@material-ui/core'
import {
  createChatRoom,
  getAllMessages,
  addMessage
} from '../../actions/chatRoomAction'
import WebSocketInstance from '../../websocket/socket'
import { makeStyles } from '@material-ui/styles'
import SendIcon from '@material-ui/icons/Send'
import ChatBox from '../common/chatBox'

const useStyles = makeStyles(theme => ({
  roomChatDiv: {
    position: 'relative',
    height: '90%',
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.down('md')]: {
      position: 'absolute',
      width: '100%',
      bottom: 0
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
  useEffect(() => {
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
      payload.user = JSON.parse(payload.user)
      props.addMessage(payload)
    })
  }, [currentRoom.id])
  const classes = useStyles()
  const [message, setMessage] = useState('')
  function handleMessageSend () {
    if (message != '') WebSocketInstance.sendSignal('send_message', message)
    setMessage('')
  }

  function handleKeyPress (event) {
    if (event.key === 'Enter') {
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
              <IconButton onClick={handleMessageSend}>
                <SvgIcon>
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
