import React, { Component } from 'react'
import { connect } from 'react-redux'
import FacebookLogin from 'react-facebook-login'
import { FacebookLoginFtn } from '../../actions/authAction'
// import facebookLogin from '../../auth/fblogin'
import './css/authProvider.css'

class FacebookSocialAuth extends Component {
  render () {
    const fbResponse = response => {
      console.log('success')
      console.log(response)
      let data = {
        access_token: response['accessToken'],
        code: response['userID']
      }
      data = JSON.stringify(data)
      this.props.FacebookLoginFtn(data)
    }
    return (
      <FacebookLogin
        textButton='LOGIN WITH FACEBOOK'
        appId='514560663329207'
        fields='name,email,picture'
        // cssClass="btnFacebook"
        callback={fbResponse}
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
    FacebookLoginFtn: data => {
      return dispatch(FacebookLoginFtn(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FacebookSocialAuth)
