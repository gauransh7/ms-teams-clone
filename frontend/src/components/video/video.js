import { makeStyles } from '@material-ui/styles'
import React, { useEffect, useRef } from 'react'

const useStyles = makeStyles(theme => ({
  video: {
    backgroundSize: 'cover',
    objectFit: 'fill',
    overflow: 'hidden'
  }
}))
export const Video = props => {
  const ref = useRef()
  const classes = useStyles()

  useEffect(() => {
    props.peer &&
      props.peer.on('stream', stream => {
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
