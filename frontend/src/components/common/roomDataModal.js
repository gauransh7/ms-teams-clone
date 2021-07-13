import { Modal } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Fade from '@material-ui/core/Fade'
import { connect } from 'react-redux'
import { updateRoomUsers } from '../../actions/chatRoomAction'
import RoomData from '../rooms/roomData'

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

const RoomDetailsModal = props => {
  const classes = useStyles()
  const { show, onClose, label = 'Room Details', ...restProps } = props
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
        <RoomData meeting={props.meeting} />
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

export default connect(mapStateToProps, mapDispatchToprops)(RoomDetailsModal)
