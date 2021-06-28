import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import facebookLogin from '../../auth/fblogin'
import './css/authProvider.css'

class FacebookSocialAuth extends Component {
  render () {
    const fbResponse = response => {
      console.log(response)
      facebookLogin(response['accessToken'], response['userId'])
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

export default FacebookSocialAuth
