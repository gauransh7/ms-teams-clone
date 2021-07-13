import {
  IconButton,
  InputAdornment,
  Modal,
  SvgIcon,
  TextField
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Fade from '@material-ui/core/Fade'
import { connect } from 'react-redux'
import SendIcon from '@material-ui/icons/Send'
import rooms from '../../views/rooms'
import { useState } from 'react'
import { updateRoomUsers } from '../../actions/chatRoomAction'
import toast, { Toaster } from 'react-hot-toast'

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: theme.palette.secondary.main,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  textField: {}
}))

const AddUserModal = props => {
  const classes = useStyles()
  const { show, room, onClose, label = 'Add Participant', ...restProps } = props
  const [email, setEmail] = useState('')
  function handleEmailSend () {
    const data = {
      "email": email
    }
    props.updateRoomUsers(data, props.room.id, handleSuccess)
  }

  function handleSuccess () {
    toast.success('Added user')
    setEmail('')
  }

  function handleEmailChange (event) {
    setEmail(event.target.value)
  }
  return (
    <Modal
      aria-labelledby='transition-modal-title'
      aria-describedby='transition-modal-description'
      className={classes.modal}
      open={show}
      centered
      onClose={onClose}
    >
      <Fade in={show}>
        <div className={classes.paper}>
        <Toaster />
          <h2 id='transition-modal-title'>{props.room.room_name}</h2>
          <div id='transition-modal-description'>
            <TextField
              color='secondary'
              className={classes.textfield}
              onChange={handleEmailChange}
              value={email}
              name='email'
              variant='outlined'
              autoComplete={false}
              label=''
              placeholder='Enter user email'
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton  onClick={handleEmailSend}>
                      <SvgIcon>
                        <SendIcon />
                      </SvgIcon>
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </div>
        </div>
      </Fade>
    </Modal>
  )
}

const mapStateToProps = state => {
  return {
    currentRoom: state.room.currentRoom
  }
}

const mapDispatchToprops = dispatch => {
  return {
    updateRoomUsers: (data, id, handleSuccess) => {
      return dispatch(updateRoomUsers(data, id, handleSuccess))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToprops)(AddUserModal)
