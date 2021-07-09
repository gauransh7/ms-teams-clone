import { makeStyles } from '@material-ui/styles'
import React, { useEffect, useRef, useState } from 'react'

const useStyles = makeStyles(theme => ({
  video: {
    // width: '100%',
    // height: '100%',SvgIcon
    // width: window.screen.availWidth/1.2,
    backgroundSize: 'cover',
    objectFit: 'fill',
    overflow: 'hidden'
  }
}))
export const Video = props => {
  console.log(props.peer)
  const ref = useRef()
  // const dimension = useSelector(state => state.room.userDimension)
  const classes = useStyles()
  // const dimension = Math.sqrt(props.width * props.height) / 1.4

  useEffect(() => {
    console.log('video started')
    props.peer &&
      props.peer.on('stream', stream => {
        console.log(stream)
        ref.current.srcObject = stream
      })
  }, [])

  return (
    <video
      playsInline
      width={props.width}
      height={props.height}
      controls={true}
      autoPlay
      style={{ display: props.video ? 'block' : 'none' }}
      className={classes.video}
      ref={ref}
    />
  )
}
