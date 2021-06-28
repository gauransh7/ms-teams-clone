import { Button, Card, Grid, Link, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, useHistory } from 'react-router'
import { logoutUser } from '../actions/authAction'
import AuthGuide from '../components/auth/authGuide'
import AuthProvider from '../components/auth/authProvider'
import FacebookSocialAuth from '../components/auth/facebook'
import GoogleSocialAuth from '../components/auth/google'

const useStyles = makeStyles(theme => ({
  Login: {
    display: 'grid',
    gridAutoFlow: 'column',
    justifyContent: 'space-around'
  }
}))

const LoginView = props => {
  const classes = useStyles()
  return (
    <Grid className={classes.Login}>
      <AuthProvider />
      {/* <AuthGuide /> */}
    </Grid>
  )
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
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginView)
