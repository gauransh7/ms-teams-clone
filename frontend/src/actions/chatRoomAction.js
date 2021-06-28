import axios from 'axios';
import apiClient from '../helpers/apiClient';
import { chat_room, update_room_users } from '../urls/chatRoom';

import {
    CREATE_CHAT_ROOM,
    GET_ALL_ROOMS,
    SET_ALL_ROOMS,
    SET_CURRENT_ROOM,
    GET_CURRENT_CHAT_ROOM,
    DELETE_CHAT_ROOM,
    CREATE_CHAT_ROOM_PENDING,
    GET_ALL_ROOMS_PENDING,
    GET_CHAT_ROOM_PENDING,
    DELETE_CHAT_ROOM_PENDING,
    GET_CURRENT_CHAT_ROOM_PENDING,
    CHATROOM_API_ERROR,
} from './chatRoomActionTypes'

const apiDispatch = (actionType = '', data) => {
    return {
        type: actionType,
        payload: data,
    };
};

const apiError = error => {
    return {
        type: CHATROOM_API_ERROR,
        error
    }
}

export const createChatRoom = (data, callback = () => {}) => {
    let url = chat_room;
        
    return dispatch => {
        dispatch(apiDispatch(GET_CURRENT_CHAT_ROOM_PENDING, true));
        dispatch(apiDispatch(CREATE_CHAT_ROOM_PENDING, true));
        apiClient
            .post(url, data)
            .then(res => {
                console.log(res)
                dispatch(apiDispatch(SET_CURRENT_ROOM, res.data));
                dispatch(apiDispatch(GET_CURRENT_CHAT_ROOM_PENDING, false));
                dispatch(apiDispatch(CREATE_CHAT_ROOM_PENDING, false));
                callback(res.data.id, res.data.sharing_id);
            })
            .catch(error => {
                dispatch(apiError(error));
                dispatch(apiDispatch(GET_CURRENT_CHAT_ROOM_PENDING, false));
                dispatch(apiDispatch(CREATE_CHAT_ROOM_PENDING, false));
            })
    }
}

export const updateRoomUsers = (data, id, callback = () => {}) => {
    let url = chat_room + id + "/update_room_users/";
        
    return dispatch => {
        dispatch(apiDispatch(GET_CURRENT_CHAT_ROOM_PENDING, true));
        dispatch(apiDispatch(CREATE_CHAT_ROOM_PENDING, true));
        apiClient
            .patch(url, data)
            .then(res => {
                console.log(res)
                dispatch(apiDispatch(SET_CURRENT_ROOM, res.data));
                dispatch(apiDispatch(GET_CURRENT_CHAT_ROOM_PENDING, false));
                dispatch(apiDispatch(CREATE_CHAT_ROOM_PENDING, false));
                callback();
            })
            .catch(error => {
                dispatch(apiError(error));
                dispatch(apiDispatch(GET_CURRENT_CHAT_ROOM_PENDING, false));
                dispatch(apiDispatch(CREATE_CHAT_ROOM_PENDING, false));
            })
    }
}

export const getAllRooms = () => {
    let url = chat_room;
        
    return dispatch => {
        dispatch(apiDispatch(GET_ALL_ROOMS_PENDING, true));
        apiClient
            .get(url)
            .then(res => {
                console.log(res)
                dispatch(apiDispatch(SET_ALL_ROOMS, res.data));
                dispatch(apiDispatch(GET_ALL_ROOMS_PENDING, false));
            })
            .catch(error => {
                dispatch(apiError(error));
                dispatch(apiDispatch(GET_ALL_ROOMS_PENDING, false));
            })
    }
}