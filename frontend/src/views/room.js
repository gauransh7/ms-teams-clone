import { Button, Card, Grid, Link, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { Component, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Redirect, useHistory } from 'react-router'
import { logoutUser } from '../actions/authAction'
import { getRoomDetails } from '../actions/chatRoomAction'
import RoomChat from '../components/rooms/roomChat'
import RoomData from '../components/rooms/roomData'

const useStyles = makeStyles(theme => ({
  Room: {
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

const Room = props => {
  useEffect(() => {
    console.log('render')
    console.log(props)
    props.getRoomDetails(props.match.params.id)
  }, [])
  const classes = useStyles()
  return <Grid className={classes.Room}>
      <RoomChat />
      <RoomData />
  </Grid>
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => {
      return dispatch(logoutUser())
    },
    getRoomDetails: (id, callback) => {
      return dispatch(getRoomDetails(id, callback))
    }
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Room))
