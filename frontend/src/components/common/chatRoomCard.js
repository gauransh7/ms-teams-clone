import { Card, CardActions, IconButton, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { Component, useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import LaunchIcon from '@material-ui/icons/Launch'

const useStyles = makeStyles(theme => ({
  Card: {
    backgroundColor: theme.palette.secondary.main,
    margin: theme.spacing(0.4),
    width: '80%'
  },
}))

const ChatRoomCard = props => {
  const history = useHistory()
  console.log(props)
  const classes = useStyles()

  function openRoom () {
    history.push(`/video/${props.room.id}/${props.room.sharing_id}`)
  }

  return (
    <Card className={classes.Card}>
      <CardActions>
        <Typography gutterBottom>
          {props.room && props.room.room_name}
        </Typography>
        <IconButton style={{'marginInlineStart': 'auto'}}>
          <LaunchIcon onClick={openRoom} />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default ChatRoomCard
