import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/authAction'
import AuthProvider from '../components/auth/authProvider'
import Loader from '../components/common/loader'

const useStyles = makeStyles(theme => ({
  Login: {
    display: 'grid',
    gridAutoFlow: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
  }
}))

const LoginView = props => {
  const classes = useStyles()
  return props.getUserDataPending || props.loginPending ? (
    <Loader />
  ) : (
    <Grid className={classes.Login}>
      <AuthProvider />
    </Grid>
  )
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    loginPending: state.auth.loginPending,
    getUserDataPending: state.auth.getUserDataPending,
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
