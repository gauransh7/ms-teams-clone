import React, {Component} from 'react'
import { connect } from 'react-redux'
import { useHistory, withRouter } from 'react-router-dom'
import { Button, Grid, Paper, TextField } from '@material-ui/core'
import { createChatRoom } from '../../actions/chatRoomAction'

const AuthGuide = (props) => {
  const history = useHistory()
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
