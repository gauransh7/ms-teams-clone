import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { createChatRoom } from '../../actions/chatRoomAction'

const AuthGuide = (props) => {
    return (
      <div>
          Auth Guide
      </div>
    )
}

const mapStateToprops = state => {
  return {
    user: state.auth.user,
  }
}

const mapDispatchToprops = dispatch => {
  return {
    createChatRoom: (data, handleSuccess) => {
      return dispatch(createChatRoom(data, handleSuccess))
    },
  }
}

export default withRouter(
  connect(mapStateToprops, mapDispatchToprops)(AuthGuide)
)
