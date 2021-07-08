import React, { Component, useEffect, useRef, useState } from 'react'
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

const useStyles = makeStyles(theme => ({
  roomChatDiv: {
    height: '100%'
  },
  textfield: {
    position: 'absolute',
    bottom: '0px',
    width: '100%',
    backgroundColor: theme.palette.primary.main
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
    overflowY: 'scroll',
    [theme.breakpoints.down('md')]: {
      right: 0,
    },
  }
}))

const ChatBox = (props) => {
  const history = useHistory()
  const messageBox = useRef()
  const classes = useStyles()
  useEffect(() => {
    console.log('room chat')
    console.log(props)
    props.getAllMessages(props.match.params.id)
  }, [])
  useEffect(() => {
    if (messageBox.current) {
      console.log(messageBox.current.scrollTop)
      messageBox.current.scrollTop = messageBox.current.scrollHeight
      console.log(messageBox.current.scrollTop)
    }
  }, [messageBox.current, props.messages.length])
  const { currentRoom } = props
  return (
      <Grid className={classes.chatBoxMessages}>
        <List ref={messageBox} className={classes.messageList}>
          {props.messages.map(msg => (
            <ListItem key={msg.id}>
              <Grid container>
                <Grid item xs={12}>
                  <ListItemText
                    align={msg.user.pk == props.user.pk ? 'right' : 'left'}
                    disableTypography
                    secondary={
                      <div>
                        <span style={{ fontWeight: 'bolder' }}>
                          {msg.user.first_name}
                        </span>{' '}
                        <span
                          style={{
                            fontWeight: 'lighter',
                            fontSize: 'small'
                          }}
                        >
                          <TimeAgo date={msg.created_on} />
                        </span>
                      </div>
                    }
                  ></ListItemText>
                </Grid>
                <Grid item xs={12}>
                  <ListItemText
                    align={msg.user.pk == props.user.pk ? 'right' : 'left'}
                    primary={msg.message}
                  ></ListItemText>
                </Grid>
              </Grid>
            </ListItem>
          ))}
        </List>
      </Grid>
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

export default withRouter(connect(mapStateToprops, mapDispatchToprops)(ChatBox))
