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
  GET_ALL_ROOMS_PENDING
} from '../actions/chatRoomActionTypes'

const initialPendingState = {
  createChatRoomPending: false,
  getAllRommsPending: false
}

const initialState = {
  ...initialPendingState,
  currentRoom: {},
  rooms: [],
  error: null
}

export default function chatRoomReducer (
  state = initialState,
  { type, payload, error }
) {
  switch (type) {
    case SET_CURRENT_ROOM:
      return { ...state, currentRoom: payload, rooms:[payload, ...state.rooms] }
    case SET_ALL_ROOMS:
      return { ...state, rooms: [...payload] }
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
