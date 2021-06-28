import React, { Component } from 'react'
import { connect } from 'react-redux'
import GoogleLogin from 'react-google-login'
import { GoogleLoginFtn } from '../../actions/authAction'
import './css/authProvider.css'
// import googleLogin from '../../auth/googlelogin';
// import { useDispatch } from 'react-redux';

class GoogleSocialAuth extends Component {
  render () {
    // const googleResponse = (response) => {
    //   console.log(response);
    //   googleLogin(response['accessToken'], response['googleId']);
    // }
    const googleResponse = response => {
      console.log('success')
      console.log(response)
      let data = {
        access_token: response['accessToken'],
        code: response['googleId']
      }
      data = JSON.stringify(data)
      this.props.GoogleLoginFtn(data)
    }
    return (
      <GoogleLogin
        clientId='505402258596-eo28agt8peogpfa7hp10s0dv7r5555ag.apps.googleusercontent.com'
        buttonText='LOGIN WITH GOOGLE'
        onSuccess={googleResponse}
        onFailure={googleResponse}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    loginPending: state.auth.loginPending
  }
}

const mapDispatchToProps = dispatch => {
  return {
    GoogleLoginFtn: data => {
      return dispatch(GoogleLoginFtn(data))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(GoogleSocialAuth)
