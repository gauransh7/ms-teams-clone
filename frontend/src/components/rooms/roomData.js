import React, { Component, useEffect, useState } from 'react'
import { connect, useSelector } from 'react-redux'
import { Link, useHistory, withRouter } from 'react-router-dom'
import {
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  StepLabel,
  TextField,
  Typography,
  ListItemText,
  List,
  ListItem,
  Chip,
  CardHeader,
  CardActions
} from '@material-ui/core'
import AddUserModal from '../common/addUser'
import {
  createChatRoom,
  getAllRooms,
  getRoomDetails
} from '../../actions/chatRoomAction'
import { makeStyles } from '@material-ui/styles'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import { getModifiedDate } from '../../helpers/helperFunctions'

const useStyles = makeStyles(theme => ({
  roomDataDiv: {
    width: '100%',
    display: 'grid',
    justifyItems: 'center',
    alignItems: 'center'
  }
}))

const RoomData = props => {
  const history = useHistory()
  useEffect(() => {
    // props.getRoomDetails()
  }, [])
  const classes = useStyles()
  const [showAddUserModal, setShowAddUserModal] = useState(false)
  const currentRoom = useSelector(state => state.room.currentRoom)
  function openRoom () {
    history.push(`/video/${currentRoom.id}/${currentRoom.sharing_id}`)
  }
  return (
    <div className={classes.roomDataDiv}>
      <Card style={{ textAlign: 'center' }}>
        <CardHeader
          // avatar={
          //   <Avatar aria-label="recipe" className={classes.avatar}>
          //     R
          //   </Avatar>
          // }
          // action={
          //   <IconButton aria-label="settings">
          //     <MoreVertIcon />
          //   </IconButton>
          // }
          title={currentRoom && currentRoom.room_name}
          subheader={getModifiedDate(currentRoom.created_on)}
        />
        {/* <CardHeader color='secondary' className={classes.roomName}>
          <Typography style={{ textAlign: 'center' }} variant='h4'>
            {currentRoom && currentRoom.room_name}
          </Typography>
        </CardHeader> */}
        <CardContent>
          <Typography style={{ textAlign: 'center' }} variant='h5'>
            Admin
          </Typography>
          <Chip
            size='medium'
            color='default'
            label={`${currentRoom.id && currentRoom.created_by.email}`}
          />
        </CardContent>
        <CardContent>
          <Typography style={{ textAlign: 'center' }} variant='h5'>
            All Users
          </Typography>
          {currentRoom.id &&
            currentRoom.all_users.map(user => (
              <Chip style={{'margin' : '0.2rem'}} size='medium' color='secondary' label={`${user.email}`} />
            ))}
        </CardContent>
        <CardActions style={{ justifyContent: 'center' }}>
          {currentRoom.id && currentRoom.created_by.pk == props.user.pk && (
            <Button
              variant='contained'
              color='secondary'
              className={classes.createRoomButton}
              startIcon={<PersonAddIcon />}
              onClick={() => setShowAddUserModal(true)}
            >
              Add User
            </Button>
          )}
          {props.meeting && <Button
            variant='contained'
            color='secondary'
            className={classes.createRoomButton}
            startIcon={<VideoCallIcon />}
            onClick={openRoom}
          >
            Join Meeting
          </Button>}
          {/* </ListItem> */}
          {showAddUserModal && (
            <AddUserModal
              room={currentRoom}
              show={showAddUserModal}
              onClose={() => setShowAddUserModal(false)}
            />
          )}
        </CardActions>
      </Card>
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
  connect(mapStateToprops, mapDispatchToprops)(RoomData)
)
