import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import { useHistory, withRouter } from 'react-router-dom'
import { Button, Grid, Paper, StepLabel, TextField } from '@material-ui/core'
import { createChatRoom } from '../../actions/chatRoomAction'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import { makeStyles } from '@material-ui/styles'

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

  const handleRoomNameChange = e => {
    setRoomName(e.target.value)
  }

  const toggleOpenRoomName = () => {
    setOpenRoomName(!openRoomName)
  }

  const handleCreateRoom = onSuccess => {
    let data = {
      room_name: roomName,
      created_by: props.user.pk
    }
    data = JSON.stringify(data)
    setRoomName("")
    props.createChatRoom(data, onSuccess)
  }
  const handleSuccess = (id, code) => {
    history.push(`/video/${id}/${code}`)
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
            <Button color='secondary' onClick={toggleOpenRoomName}>
              Cancel
            </Button>
            <Button
              disabled={roomName === ''}
              onClick={handleCreateRoom}
              color='secondary'
            >
              Save for later
            </Button>
            <Button
              disabled={roomName === ''}
              onClick={() => handleCreateRoom(handleSuccess)}
              color='secondary'
            >
              Join
            </Button>
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
