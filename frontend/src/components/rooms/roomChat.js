import React, { Component, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link, useHistory, withRouter } from 'react-router-dom'
import {
  Button,
  Grid,
  Paper,
  StepLabel,
  TextField,
  Typography
} from '@material-ui/core'
import { createChatRoom, getAllRooms, getRoomDetails } from '../../actions/chatRoomAction'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  roomDataDiv: {
    width: '100%',
    display: 'grid',
    justifyItems: 'center'
  }
}))

const RoomChat = props => {
  const history = useHistory()
  useEffect(() => {
    console.log("room chat")
  }, [])
  const classes = useStyles()

  return (
    <div className={classes.roomDataDiv}>
      {props.currentRoom && props.currentRoom.room_name} Chat
    </div>
  )
}

const mapStateToprops = state => {
  return {
    user: state.auth.user,
    currentRoom: state.room.currentRoom
  }
}

const mapDispatchToprops = dispatch => {
  return {
    createChatRoom: (data, handleSuccess) => {
      return dispatch(createChatRoom(data, handleSuccess))
    },
    getRoomDetails: () => {
      return dispatch(getRoomDetails())
    }
  }
}

export default withRouter(
  connect(mapStateToprops, mapDispatchToprops)(RoomChat)
)
