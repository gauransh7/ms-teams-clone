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
    justifyContent: 'space-between'
  },
  roomCardMainDiv: {
    height: '100%',
    width: '100%',
    display: 'grid',
    alignItems: 'center',
    justifyItems: 'center'
  }
}))

const ChatRoomCard = props => {
  const history = useHistory()
  console.log(props)
  const classes = useStyles()
  const [showAddUserModal, setShowAddUserModal] = useState(false)

  function openRoom (e) {
    e.stopPropagation()
    history.push(`/video/${props.room.id}/${props.room.sharing_id}`)
  }

  function handleAddUser (e) {
    e.stopPropagation()
    setShowAddUserModal(true)
  }

  return (
    <div className={classes.roomCardMainDiv}>
      <Card
        className={classes.Card}
        clickable
        onClick={() => history.push(`/room/${props.room.id}`)}
      >
        <CardActions>
          <Typography onClick={() => setShowAddUserModal(true)} gutterBottom>
            {props.room && props.room.room_name}
          </Typography>
          {props.invite && (
            <Chip label={`creater : ${props.room.created_by.first_name}`} />
          )}
          <div style={{ marginInlineStart: 'auto' }}>
            {!props.invite && (
              <IconButton>
                <PersonAddIcon onClick={handleAddUser} />
              </IconButton>
            )}
            <IconButton>
              <LaunchIcon onClick={openRoom} />
            </IconButton>
          </div>
        </CardActions>
      </Card>
      {showAddUserModal && (
        <AddUserModal
          room={props.room}
          onClick={e => e.stopPropagation()}
          show={showAddUserModal}
          onClose={() => setShowAddUserModal(false)}
        />
      )}
    </div>
  )
}

export default ChatRoomCard
