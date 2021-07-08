import { Button, Card, Grid, Link, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { Component, useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Redirect, useHistory } from 'react-router'
import { logoutUser } from '../actions/authAction'
import { getRoomDetails } from '../actions/chatRoomAction'
import RoomChat from '../components/rooms/roomChat'
import RoomData from '../components/rooms/roomData'
import RoomDetailsModal from '../components/common/roomDataModal'

const useStyles = makeStyles(theme => ({
  Room: {
    display: 'grid',
    gridAutoFlow: 'column',
    padding: theme.spacing(2),
    height: '100%',
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      gridAutoFlow: 'row'
    }
  },
  roomDetailsButton: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  roomDetailsDiv: {
    // [theme.breakpoints.down('lg')]: {
      display: 'none'
    // }
  }
}))

const Room = props => {
  const [showRoomDetailModal, setShowRoomDetailModal] = useState(false)
  useEffect(() => {
    console.log('render')
    console.log(props)
    props.getRoomDetails(props.match.params.id)
  }, [])
  const classes = useStyles()
  return (
    <Grid className={classes.Room}>
      <Button
        variant='contained'
        color='secondary'
        className={classes.roomDetailsButton}
        // startIcon={<PersonAddIcon />}
        onClick={() => setShowRoomDetailModal(true)}
      >
        View Details
      </Button>
      {showRoomDetailModal && (
        <RoomDetailsModal
          show={showRoomDetailModal}
          meeting={true}
          onClose={() => setShowRoomDetailModal(false)}
        />
      )}
      <RoomData className={classes.roomDetailsDiv} meeting={true} />
      <RoomChat />
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
    },
    getRoomDetails: (id, callback) => {
      return dispatch(getRoomDetails(id, callback))
    }
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Room))
