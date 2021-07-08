import React from 'react'
import { useHistory } from 'react-router-dom'
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Paper,
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import MicIcon from '@material-ui/icons/Mic'
import MicOffIcon from '@material-ui/icons/MicOff'
import VideoOffDiv from './videoOffDiv'
import { Video } from './video'

const useStyles = makeStyles(theme => ({
  video: {
    backgroundSize: 'cover',
    objectFit: 'fill',
    overflow: 'hidden'
  },
  userDetailDiv: {
    position: 'absolute',
    top: '0.4rem',
    // left: '6.25%',
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // display: 'flex',
    // alignItems: 'center',
    // background: 'top',
    height: '1.8rem',
    borderRadius: '0.3rem',
    // fontSize: '0.8rem',
    padding: '0.2rem 0.4rem'
  },
  userDiv: {
    textAlign: 'center',
    position: 'relative',
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    display: 'grid',
    justifyContent: 'center'
  }
}))
const UserCard = props => {
  const classes = useStyles()
  //   const dimensions = props.dimension / Math.sqrt(1 + props.numpeers)

  return (
    <Grid
      container
      item
      xs={12}
      // style={{'display':'none'}}
      // xs={12}
      className={classes.userDiv}
      style={{'display' : props.show ? '' : 'none' }}
    >
      <Card>
        {props.refer ? (
          <video
            width={props.width}
            height={props.height}
            playsInline
            muted
            style={{ display: props.video ? 'block' : 'none' }}
            autoPlay
            className={classes.video}
            ref={props.refer}
          />
        ) : (
          <Video
            peer={props.peer.peer}
            video={props.video}
            dimension={props.dimensions}
            width={props.width}
            height={props.height}
            numpeers={props.numpeers}
          />
        )}
        <VideoOffDiv
          name={props.name}
          audio={props.audio}
          video={props.video}
          dimension={props.dimensions}
          width={props.width}
          height={props.height}
          numpeers={props.numpeers}
        />
        <div
          style={{ display: props.video ? 'block' : 'none' }}
          className={classes.userDetailDiv}
        >
          <Typography variant='h5' gutterBottom>
            {props.name} {props.audio ? <MicIcon /> : <MicOffIcon />}
          </Typography>
        </div>
      </Card>
      {/* </Paper> */}
    </Grid>
  )
}

export default UserCard
