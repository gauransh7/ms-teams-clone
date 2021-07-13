import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory, withRouter } from 'react-router-dom'
import { Button, Typography } from '@material-ui/core'
import { createChatRoom, getAllRooms } from '../../actions/chatRoomAction'
import { makeStyles } from '@material-ui/styles'
import RoomsList from '../rooms/roomsList'

const useStyles = makeStyles(theme => ({
  roomDetailsDiv: {
    width: '100%',
    height: '60%'
  },
  roomList: {
    height: '100%',
    width: '100%',
    display: 'grid',
    justifyItems: 'center',
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  title: {
    textAlign: 'center'
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
      <div className={classes.roomList}>
        <RoomsList
          heading='Your rooms'
          rooms={props.roomsCreated.slice(0, 2)}
        />
        <RoomsList
          heading='Your Invites'
          rooms={props.roomsInvited.slice(0, 2)}
        />
      </div>
      <Typography variant='h6' className={classes.title}>
        <Button onClick={() => history.push('/rooms')}>View All Rooms</Button>
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
