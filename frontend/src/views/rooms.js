import { Button, Card, Grid, Link, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { Component, useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect, useHistory } from 'react-router'
import { logoutUser } from '../actions/authAction'
import { getAllRooms } from '../actions/chatRoomAction'
import RoomDetails from '../components/homeComponents/roomDetails'
import RoomsList from '../components/rooms/roomsList'

const useStyles = makeStyles(theme => ({
  Rooms: {
    display: 'grid',
    gridAutoFlow: 'column',
    justifyItems: 'center',
    padding: theme.spacing(2),
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      gridAutoFlow: 'row'
    }
  }
}))

const Rooms = props => {
  useEffect(() => {
    props.getAllRooms()
  }, [])
  const classes = useStyles()
  return (
    <Grid className={classes.Rooms}>
      <RoomsList rooms={props.roomsCreated} heading='Your Rooms' />
      <RoomsList rooms={props.roomsInvited} heading='Your Invites' />
    </Grid>
  )
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    roomsCreated: state.room.roomsCreated,
    roomsInvited: state.room.roomsInvited
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllRooms: () => {
      return dispatch(getAllRooms())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Rooms)
