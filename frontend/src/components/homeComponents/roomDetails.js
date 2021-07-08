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
import { createChatRoom, getAllRooms } from '../../actions/chatRoomAction'
import ChatRoomCard from '../common/chatRoomCard'
import { makeStyles } from '@material-ui/styles'
import RoomsList from '../rooms/roomsList'

const useStyles = makeStyles(theme => ({
  roomDetailsDiv: {
    width: '100%',
    display: 'grid',
    justifyItems: 'center',
    height: '90%',
    alignItems: 'center'
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
      <RoomsList heading="Your rooms" rooms={props.roomsCreated.slice(0,2)} />
      <RoomsList heading="Your Invites" rooms={props.roomsInvited.slice(0,2)} />
      <Typography variant='h6' className={classes.title}>
          <Button onClick={() => history.push('/rooms')}>View All</Button>
        </Typography>
    </div>
  )
}

const mapStateToprops = state => {
  return {
    user: state.auth.user,
    roomsCreated: state.room.roomsCreated,
    roomsInvited: state.room.roomsInvited
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
