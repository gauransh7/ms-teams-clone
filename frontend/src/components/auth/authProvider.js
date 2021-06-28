import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import { useHistory, withRouter } from 'react-router-dom'
import { Button, Grid, Paper, StepLabel, TextField } from '@material-ui/core'
import { createChatRoom } from '../../actions/chatRoomAction'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import { makeStyles } from '@material-ui/styles'
import FacebookSocialAuth from './facebook'
import GoogleSocialAuth from './google'

const useStyles = makeStyles(theme => ({
  createRoomButton: {
    margin: theme.spacing(2)
  },
  buttonsDiv: {
    marginTop: theme.spacing(2)
  },
  authDiv: {
      marginTop: theme.spacing(2),
      display: 'flex'
  }
}))
const AuthProvider = props => {
  const history = useHistory()
  const classes = useStyles()

  return (
    <Grid>
      <StepLabel>We provide premium quality video calls.</StepLabel>
      <StepLabel>
        Enjoy video calling with different themes. You are just a click away.
      </StepLabel>
      <div className={classes.authDiv}>
        <FacebookSocialAuth />
        <GoogleSocialAuth />
      </div>
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
  connect(mapStateToprops, mapDispatchToprops)(AuthProvider)
)
