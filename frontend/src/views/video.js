import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/authAction'
import VideoPlayer from '../components/video/videoPlayer.js'

class VideoView extends Component {
  render () {
    return (
      <div style={{height:'90vh'}} className='VideoView'>
        <VideoPlayer />
      </div>
    )
  }
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
export default connect(mapStateToProps, mapDispatchToProps)(VideoView)
