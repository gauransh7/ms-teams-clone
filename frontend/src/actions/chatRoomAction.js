import toast from 'react-hot-toast'
import apiClient from '../helpers/apiClient'
import {
  chat_room,
  my_rooms
} from '../urls/chatRoom'

import {
  SET_ALL_ROOMS,
  SET_CURRENT_ROOM,
  CREATE_CHAT_ROOM_PENDING,
  GET_ALL_ROOMS_PENDING,
  GET_CURRENT_CHAT_ROOM_PENDING,
  CHATROOM_API_ERROR,
  UPDATE_ROOMS_CREATED,
  GET_ALL_MESSAGES_PENDING,
  SET_USER_DIMENSION,
  ADD_MESSAGE,
  SET_ALL_MESSAGES
} from './chatRoomActionTypes'

const apiDispatch = (actionType = '', data) => {
  return {
    type: actionType,
    payload: data
  }
}

const apiError = error => {
  return {
    type: CHATROOM_API_ERROR,
    error
  }
}

export const createChatRoom = (data, callback = () => {}) => {
  let url = chat_room

  return dispatch => {
    dispatch(apiDispatch(GET_CURRENT_CHAT_ROOM_PENDING, true))
    dispatch(apiDispatch(CREATE_CHAT_ROOM_PENDING, true))
    apiClient
      .post(url, data)
      .then(res => {
        dispatch(apiDispatch(SET_CURRENT_ROOM, res.data))
        dispatch(apiDispatch(UPDATE_ROOMS_CREATED, res.data))
        dispatch(apiDispatch(GET_CURRENT_CHAT_ROOM_PENDING, false))
        dispatch(apiDispatch(CREATE_CHAT_ROOM_PENDING, false))
        callback(res.data.id, res.data.sharing_id)
      })
      .catch(error => {
        dispatch(apiError(error))
        dispatch(apiDispatch(GET_CURRENT_CHAT_ROOM_PENDING, false))
        dispatch(apiDispatch(CREATE_CHAT_ROOM_PENDING, false))
      })
  }
}

export const updateRoomUsers = (data, id, callback = () => {}) => {
  let url = chat_room + id + '/update_room_users/'
  return dispatch => {
    dispatch(apiDispatch(GET_CURRENT_CHAT_ROOM_PENDING, true))
    dispatch(apiDispatch(CREATE_CHAT_ROOM_PENDING, true))
    apiClient
      .patch(url, data)
      .then(res => {
        dispatch(apiDispatch(SET_CURRENT_ROOM, res.data))
        dispatch(apiDispatch(GET_CURRENT_CHAT_ROOM_PENDING, false))
        dispatch(apiDispatch(CREATE_CHAT_ROOM_PENDING, false))
        callback()
      })
      .catch(error => {
        dispatch(apiError(error))
        toast.error(error.response.data)
        dispatch(apiDispatch(GET_CURRENT_CHAT_ROOM_PENDING, false))
        dispatch(apiDispatch(CREATE_CHAT_ROOM_PENDING, false))
      })
  }
}

export const getRoomDetails = (id, callback = () => {}) => {
  let url = chat_room + id
  return dispatch => {
    dispatch(apiDispatch(GET_CURRENT_CHAT_ROOM_PENDING, true))
    dispatch(apiDispatch(CREATE_CHAT_ROOM_PENDING, true))
    apiClient
      .get(url)
      .then(res => {
        dispatch(apiDispatch(SET_CURRENT_ROOM, res.data))
        dispatch(apiDispatch(GET_CURRENT_CHAT_ROOM_PENDING, false))
        dispatch(apiDispatch(CREATE_CHAT_ROOM_PENDING, false))
        callback()
      })
      .catch(error => {
        dispatch(apiError(error))
        dispatch(apiDispatch(GET_CURRENT_CHAT_ROOM_PENDING, false))
        dispatch(apiDispatch(CREATE_CHAT_ROOM_PENDING, false))
      })
  }
}

export const getAllMessages = (id, callback = () => {}) => {
  let url = chat_room + id + '/all_messages'
  return dispatch => {
    dispatch(apiDispatch(GET_ALL_MESSAGES_PENDING, true))
    apiClient
      .get(url)
      .then(res => {
        dispatch(apiDispatch(SET_ALL_MESSAGES, res.data))
        dispatch(apiDispatch(GET_ALL_MESSAGES_PENDING, false))
        callback()
      })
      .catch(error => {
        dispatch(apiError(error))
        dispatch(apiDispatch(GET_ALL_MESSAGES_PENDING, false))
        dispatch(apiDispatch(SET_ALL_MESSAGES, []))
      })
  }
}

export const getAllRooms = () => {
  let url = my_rooms

  return dispatch => {
    dispatch(apiDispatch(GET_ALL_ROOMS_PENDING, true))
    apiClient
      .get(url)
      .then(res => {
        dispatch(apiDispatch(SET_ALL_ROOMS, res.data))
        dispatch(apiDispatch(GET_ALL_ROOMS_PENDING, false))
      })
      .catch(error => {
        dispatch(apiError(error))
        dispatch(apiDispatch(GET_ALL_ROOMS_PENDING, false))
      })
  }
}

export const addMessage = msg => {
  return dispatch => {
    dispatch(apiDispatch(ADD_MESSAGE, msg))
  }
}

export const setUserDimension = dimension => {
  return dispatch => {
    dispatch(apiDispatch(SET_USER_DIMENSION, dimension))
  }
}
