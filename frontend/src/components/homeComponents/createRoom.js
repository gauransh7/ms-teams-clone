import React, { Component, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useHistory, withRouter } from 'react-router-dom'
import {
  Button,
  Grid,
  Menu,
  MenuItem,
  Paper,
  StepLabel,
  TextField
} from '@material-ui/core'
import { createChatRoom } from '../../actions/chatRoomAction'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import { makeStyles } from '@material-ui/styles'
import toast, { Toaster } from 'react-hot-toast'

const useStyles = makeStyles(theme => ({
  createRoomButton: {
    margin: theme.spacing(2)
  },
  textfield: {
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.primary.contrast
  },
  buttonsDiv: {
    marginTop: theme.spacing(2)
  }
}))
const CreateRoom = props => {
  const history = useHistory()
  const classes = useStyles()
  const [openRoomName, setOpenRoomName] = useState(false)
  const [saveForLater, setSaveForLater] = useState(false)
  const [roomName, setRoomName] = useState('')
  const [roomNameError, setRoomNameError] = useState('')
  const [anchorAvatarEl, setAnchorAvatarEl] = useState(null)

  const handleAvatarBtnClick = event => {
    console.log(event.currentTarget)
    setAnchorAvatarEl(event.currentTarget)
  }

  const handleAvatarBtnClose = () => {
    console.log('close')
    setAnchorAvatarEl(null)
  }
  useEffect(() => {
    console.log('render')
  }, [])

  const handleRoomNameChange = e => {
    setRoomName(e.target.value)
  }

  const toggleOpenRoomName = () => {
    setOpenRoomName(!openRoomName)
  }

  const handleLaunch = id => {
    if (roomName == '') {
      toast.error('Enter a room name')
      return
    }
    switch (id) {
      case 0:
        handleCreateRoom(handleSuccessJoinMeeeting)
        return
      case 1:
        handleCreateRoom(handleSuccessJoinConversation)
        return
      case 2:
        handleCreateRoom()
        return
    }
  }

  const handleCreateRoom = onSuccess => {
    let data = {
      room_name: roomName,
      created_by: props.user.pk
    }
    data = JSON.stringify(data)
    setRoomName('')
    props.createChatRoom(data, onSuccess)
  }
  const handleSuccessJoinMeeeting = (id, code) => {
    history.push(`/video/${id}/${code}`)
  }

  const handleSuccessJoinConversation = (id, code) => {
    history.push(`/room/${id}`)
  }
  return (
    <Grid>
      <StepLabel>
        Hi {props.user.first_name}! We provide premium quality video calls.
      </StepLabel>
      <StepLabel>
        Enjoy video calling with different themes. You are just a click away.
      </StepLabel>
      {openRoomName ? (
        <div className={classes.roomNameDiv}>
          {/* <FormLabel className={classes.formLabel} required>
            Room Name
          </FormLabel> */}
          <Toaster />
          <TextField
            color='secondary'
            className={classes.textfield}
            onChange={handleRoomNameChange}
            value={roomName}
            name='roomName'
            variant='outlined'
            autoComplete={false}
            label=''
            placeholder='Enter a room name'
            error={roomNameError ? true : false}
          />
          <div className={classes.buttonsDiv}>
            <Button size='large' color='secondary' onClick={toggleOpenRoomName}>
              Cancel
            </Button>
            <Button
              aria-controls='avatar-dropdown'
              content='avatar'
              variant='contained'
              color='secondary'
              aria-haspopup='true'
              color='inherit'
              size='large'
              // className='header-title-button'
              onClick={handleAvatarBtnClick}
              startIcon={<VideoCallIcon />}
            >
              Launch
            </Button>
            <Menu
              id='avatar-dropdown'
              anchorEl={anchorAvatarEl}
              // keepMounted
              open={Boolean(anchorAvatarEl)}
              onClose={handleAvatarBtnClose}
              style={{ marginTop: '30px' }}
              onClick={() => props.logout}
              // style={{ marginTop: '30px' }}
            >
              <MenuItem onClick={() => handleLaunch(0)}>Start Meeting</MenuItem>
              <MenuItem onClick={() => handleLaunch(1)}>
                Start Conversation
              </MenuItem>
              <MenuItem onClick={() => handleLaunch(2)}>
                Save for later
              </MenuItem>
            </Menu>
          </div>
        </div>
      ) : (
        <Button
          variant='contained'
          color='secondary'
          className={classes.createRoomButton}
          startIcon={<VideoCallIcon />}
          onClick={toggleOpenRoomName}
        >
          Create Room
        </Button>
      )}
    </Grid>
  )
}

const mapStateToprops = state => {
  return {
    user: state.auth.user
  }
}

const mapDispatchToprops = dispatch => {
  return {
    createChatRoom: (data, handleSuccess) => {
      return dispatch(createChatRoom(data, handleSuccess))
    }
  }
}

export default withRouter(
  connect(mapStateToprops, mapDispatchToprops)(CreateRoom)
)
