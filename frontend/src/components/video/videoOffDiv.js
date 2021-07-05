import React, { Component, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useHistory, withRouter } from 'react-router-dom'
import {
  Avatar,
  Button,
  Grid,
  Paper,
  StepLabel,
  TextField,
  Typography
} from '@material-ui/core'
import { createChatRoom } from '../../actions/chatRoomAction'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import { makeStyles } from '@material-ui/styles'
import MicIcon from '@material-ui/icons/Mic'
import MicOffIcon from '@material-ui/icons/MicOff'

const useStyles = makeStyles(theme => ({
  videoOffDiv: {
    overflow: 'hidden',
    objectFit: 'fill',
    backgroundSize: 'cover',
    backgroundColor: theme.palette.secondary.main,
    display: 'grid',
    alignItems: 'center',
    justifyItems: 'center'
  }
}))
const VideoOffDiv = props => {
  const history = useHistory()
  const classes = useStyles()
  const dimensions = props.dimension / Math.sqrt(1 + props.numpeers)

  return (
    <Paper
      className={classes.videoOffDiv}
      style={{
        width: dimensions,
        height: dimensions,
        display: props.video ? 'none' : ''
      }}
    >
      {/* <Avatar color='inherit'> */}
      <div>
        <Typography variant='h5'>{props.name}</Typography>
        {props.audio ? <MicIcon /> : <MicOffIcon />}
      </div>
      {/* </Avatar> */}
    </Paper>
  )
}

export default VideoOffDiv
