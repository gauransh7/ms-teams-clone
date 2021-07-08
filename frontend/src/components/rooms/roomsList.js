import React, { Component, useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory, withRouter } from 'react-router-dom'
import {
  Button,
  Card,
  CardContent,
  CardHeader,
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
  roomsList: {
    width: '80%',
    display: 'grid',
    justifyItems: 'center',
    overflow: 'hidden',
    paddingBottom: theme.spacing(1),
    backgroundColor: theme.palette.background,
    gridTemplateRows: 'min-content',
    height: '80%'
  },
  list: {
    overflowY: 'scroll',
    maxHeight: window.screen.availHeight / 2,
    width: '100%',
    display: 'grid',
    justifyItems: 'center',
    position: 'absolute'
  },
  listHeading: {
    top: 0,
    backgroundColor: theme.palette.primary.main,
    width: '100%',
    height: '50%',
    marginLeft: '10%'
  },
  listWrapper: {
    position: 'relative',
    width: '100%',
    height: '90%',
    overflow: 'hidden'
  },
  webkitScrollbar: {
    width: 0 /* Remove scrollbar space */,
    background: 'transparent' /* Optional: just make scrollbar invisible */
  },
  /* Optional: show position indicator in red */
  webkitScrollbarThumb: {
    background: '#FF0000'
  }
}))

const RoomsList = props => {
  const history = useHistory()
  useEffect(() => {
    props.getAllRooms()
  }, [])
  const classes = useStyles()

  return (
    <Card className={classes.roomsList}>
      <CardContent color='secondary' className={classes.listHeading}>
        <Typography variant='h5'>{props.heading}</Typography>
      </CardContent>
      <CardContent className={classes.listWrapper}>
      <div className={classes.list}>
        {props.rooms.map(room => (
          <ChatRoomCard room={room} invite={props.heading=="Your Invites"} />
        ))}
      </div>
      </CardContent>
    </Card>
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
  connect(mapStateToprops, mapDispatchToprops)(RoomsList)
)
