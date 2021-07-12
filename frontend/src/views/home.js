import { Button, Card, Grid, Link, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { Component, memo, useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect, useHistory } from 'react-router'
import { logoutUser } from '../actions/authAction'
import CreateRoom from '../components/homeComponents/createRoom'
import RoomDetails from '../components/homeComponents/roomDetails'

const useStyles = makeStyles(theme => ({
  Home: {
    display: 'grid',
    gridAutoFlow: 'column',
    justifyItems: 'center',
    padding: theme.spacing(2),
    alignItems: 'center',
    height: '100%',
    [theme.breakpoints.down('xs')]: {
      gridAutoFlow: 'row'
    }
  }
}))

const Home = memo(props => {
  useEffect(() => {
    console.log('render')
  }, [])
  const classes = useStyles()
  return (
    <Grid className={classes.Home}>
      <CreateRoom />
      <RoomDetails />
    </Grid>
  )
})

const mapStateToProps = state => {
  return {
    user: state.auth.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => {
      return dispatch(logoutUser())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
