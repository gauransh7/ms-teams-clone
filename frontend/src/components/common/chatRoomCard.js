import {
  Card,
  CardActions,
  Chip,
  IconButton,
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { Component, useEffect, useState } from 'react'
import AddUserModal from './addUser'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import LaunchIcon from '@material-ui/icons/Launch'
import PersonAddIcon from '@material-ui/icons/PersonAdd'

const useStyles = makeStyles(theme => ({
  Card: {
    backgroundColor: theme.palette.secondary.main,
    margin: theme.spacing(0.4),
    width: '80%',
    justifyContent: 'space-between',
  }
}))

const ChatRoomCard = props => {
  const history = useHistory()
  console.log(props)
  const classes = useStyles()
  const [showAddUserModal, setShowAddUserModal] = useState(false)

  function openRoom () {
    history.push(`/video/${props.room.id}/${props.room.sharing_id}`)
  }

  return (
    <Card className={classes.Card}>
      <CardActions>
        <Typography onClick={() => setShowAddUserModal(true)} gutterBottom>
          {props.room && props.room.room_name}
        </Typography>
        {props.invite && <Chip label={`creater : ${props.room.created_by.first_name}`} />}
        <div style={{ marginInlineStart: 'auto' }}>
          {!props.invite && (
            <IconButton>
              <PersonAddIcon onClick={() => setShowAddUserModal(true)} />
            </IconButton>
          )}
          <IconButton>
            <LaunchIcon onClick={openRoom} />
          </IconButton>
        </div>
      </CardActions>
      {showAddUserModal && (
        <AddUserModal
          room={props.room}
          show={showAddUserModal}
          onClose={() => setShowAddUserModal(false)}
        />
      )}
    </Card>
  )
}

export default ChatRoomCard
