import {
  CREATE_CHAT_ROOM,
  GET_ALL_ROOMS,
  SET_ALL_ROOMS,
  SET_CURRENT_ROOM,
  GET_CURRENT_CHAT_ROOM,
  DELETE_CHAT_ROOM,
  CREATE_CHAT_ROOM_PENDING,
  GET_CHAT_ROOM_PENDING,
  DELETE_CHAT_ROOM_PENDING,
  GET_CURRENT_CHAT_ROOM_PENDING,
  CHATROOM_API_ERROR,
  GET_ALL_ROOMS_PENDING,
  UPDATE_ROOMS_CREATED,
  SET_ALL_MESSAGES,
  GET_ALL_MESSAGES_PENDING,
  SET_USER_DIMENSION,
  ADD_MESSAGE
} from '../actions/chatRoomActionTypes'

const initialPendingState = {
  createChatRoomPending: false,
  getAllRommsPending: false,
  getAllMessagesPenging: false
}

const initialState = {
  ...initialPendingState,
  currentRoom: {},
  roomsCreated: [],
  roomsInvited: [],
  userDimension: '2rem',
  messages: [],
  error: null
}

export default function chatRoomReducer (
  state = initialState,
  { type, payload, error }
) {
  switch (type) {
    case SET_CURRENT_ROOM:
      return { ...state, currentRoom: payload }
    case UPDATE_ROOMS_CREATED:
      return {...state, roomsCreated: [payload,...state.roomsCreated]}
    case SET_ALL_MESSAGES:
      return {...state, messages: payload}
    case GET_ALL_MESSAGES_PENDING:
      return {...state, getAllMessagesPenging: payload}
    case ADD_MESSAGE:
      return {...state, messages:[ ...state.messages,payload]}
    case SET_USER_DIMENSION:
      return {...state, userDimension: payload}
    case SET_ALL_ROOMS:
      return { ...state, roomsCreated: [...payload.created], roomsInvited: [...payload.invited] }
    case CREATE_CHAT_ROOM_PENDING:
      return { ...state, createChatRoomPending: payload }
    case GET_ALL_ROOMS_PENDING:
      return { ...state, getAllRommsPending: payload }
    case CHATROOM_API_ERROR:
      return { ...state, error: payload }
    default:
      return state
  }
}
