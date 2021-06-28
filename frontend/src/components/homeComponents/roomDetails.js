import React, { Component, useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory, withRouter } from 'react-router-dom'
import {
  Button,
  Grid,
  Paper,
  StepLabel,
  TextField,
  Typography
} from '@material-ui/core'
import { createChatRoom, getAllRooms } from '../../actions/chatRoomAction'
import ChatRoomCard from '../common/chatRoomCard'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  roomDetailsDiv: {
    width: '100%',
    display: 'grid',
    justifyItems: 'center'
  }
}))

const RoomDetails = props => {
  const history = useHistory()
  useEffect(() => {
    props.getAllRooms()
  }, [])
  const classes = useStyles()

  return (
    <div className={classes.roomDetailsDiv}>
      <StepLabel>Your Rooms</StepLabel>
      <ChatRoomCard room={props.rooms[0]} />
      <ChatRoomCard room={props.rooms[1]} />
    </div>
  )
}

const mapStateToprops = state => {
  return {
    user: state.auth.user,
    rooms: state.room.rooms
  }
}

const mapDispatchToprops = dispatch => {
  return {
    createChatRoom: (data, handleSuccess) => {
      return dispatch(createChatRoom(data, handleSuccess))
    },
    getAllRooms: () => {
      return dispatch(getAllRooms())
    }
  }
}

export default withRouter(
  connect(mapStateToprops, mapDispatchToprops)(RoomDetails)
)
