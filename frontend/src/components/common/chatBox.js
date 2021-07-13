import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Grid, ListItemText, List, ListItem } from '@material-ui/core'
import { getAllMessages } from '../../actions/chatRoomAction'
import TimeAgo from 'react-timeago'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  roomChatDiv: {
    height: '100%'
  },
  textfield: {
    position: 'absolute',
    bottom: '0px',
    width: '100%',
    backgroundColor: theme.palette.primary.main
  },
  chatBoxMessages: {
    padding: '2px',
    position: 'relative',
    overflow: 'hidden',
    height: '85%',
    width: '100%'
  },
  messageList: {
    maxHeight: '100%',
    top: 0,
    left: 0,
    right: -theme.spacing(2),
    position: 'absolute',
    overflowY: 'scroll',
    [theme.breakpoints.down('md')]: {
      right: 0
    }
  }
}))

const ChatBox = React.memo(() => {
  const messageBox = useRef()
  const classes = useStyles()
  const user = useSelector(state => state.auth.user)
  const messages = useSelector(state => state.room.messages)
  const dispatch = useDispatch()
  const { id } = useParams()
  useEffect(() => {
    dispatch(getAllMessages(id))
  }, [])
  useEffect(() => {
    if (messageBox.current) {
      messageBox.current.scrollTop = messageBox.current.scrollHeight
    }
  }, [messageBox.current, messages.length])
  return (
    <Grid className={classes.chatBoxMessages}>
      <List ref={messageBox} className={classes.messageList}>
        {messages.map(msg => (
          <ListItem key={msg.id}>
            <Grid container>
              <Grid item xs={12}>
                <ListItemText
                  align={msg.user.pk == user.pk ? 'right' : 'left'}
                  disableTypography
                  secondary={
                    <div>
                      <span style={{ fontWeight: 'bolder' }}>
                        {msg.user.first_name}
                      </span>{' '}
                      <span
                        style={{
                          fontWeight: 'lighter',
                          fontSize: 'small'
                        }}
                      >
                        <TimeAgo date={msg.created_on} />
                      </span>
                    </div>
                  }
                ></ListItemText>
              </Grid>
              <Grid item xs={12}>
                <ListItemText
                  align={msg.user.pk == user.pk ? 'right' : 'left'}
                  primary={msg.message}
                ></ListItemText>
              </Grid>
            </Grid>
          </ListItem>
        ))}
      </List>
    </Grid>
  )
})

export default ChatBox
