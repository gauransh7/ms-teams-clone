import React from 'react'
import { useHistory } from 'react-router-dom'
import {
  Paper,
  Typography
} from '@material-ui/core'
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
  const classes = useStyles()
  // const dimensions = props.dimension / Math.sqrt(1 + props.numpeers)

  return (
    <Paper
      className={classes.videoOffDiv}
      style={{
        width: props.width,
        height: props.height,
        display: props.video ? 'none' : ''
      }}
    >
      <div>
        <Typography variant='h5'>{props.name}</Typography>
        {props.audio ? <MicIcon /> : <MicOffIcon />}
      </div>
    </Paper>
  )
}

export default VideoOffDiv
