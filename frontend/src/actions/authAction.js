import axios from 'axios'
import apiClient from '../helpers/apiClient'
import Cookies from 'js-cookie'

import {
  SET_USER_DATA,
  SET_TOKEN,
  LOGIN_PENDING,
  GET_USER_DATA_PENDING,
  USER_API_ERROR,
  IS_LOGGED_IN
} from './authActionType'

import { facebook_login, google_login, who_am_i, logout } from '../urls/auth'
import toast from 'react-hot-toast'

const apiDispatch = (actionType = '', data) => {
  return {
    type: actionType,
    payload: data
  }
}

const apiError = error => {
  return {
    type: USER_API_ERROR,
    error
  }
}

export const GoogleLoginFtn = data => {
  let url = google_login
  return dispatch => {
    dispatch(apiDispatch(LOGIN_PENDING, true))
    axios({
      method: 'POST',
      url: url,
      data: data,
      headers: { 'Content-type': 'application/json; charset=UTF-8' }
    })
      .then(res => {
        dispatch(apiDispatch(SET_TOKEN, res.data.key))
        Cookies.set('token', res.data.key, { expires: 7 })
        dispatch(apiDispatch(LOGIN_PENDING, false))
        dispatch(getUserData())
      })
      .catch(error => {
        if (
          error.response.status === 400 &&
          error.response.data &&
          error.response.data.non_field_errors ===
            'User is already registered with this e-mail address.'
        ) {
          toast.error('User email already registered with Facebook.')
        } else {
          toast.error('Error occured while login.')
        }
        dispatch(apiError(error))
        dispatch(apiDispatch(LOGIN_PENDING, false))
        dispatch(apiDispatch(IS_LOGGED_IN, false))
      })
  }
}

export const FacebookLoginFtn = data => {
  let url = facebook_login
  return dispatch => {
    dispatch(apiDispatch(LOGIN_PENDING, true))
    axios({
      method: 'POST',
      url: url,
      data: data
    })
      .then(res => {
        dispatch(apiDispatch(SET_TOKEN, res.data.key))
        Cookies.set('token', res.data.key, { expires: 7 })
        dispatch(apiDispatch(LOGIN_PENDING, false))
        // localStorage.setItem("token", res.data.key);
        // dispatch(apiDispatch(IS_LOGGED_IN, true))
        dispatch(getUserData())
      })
      .catch(error => {
        if (
          error.response.status === 400 &&
          error.response.data &&
          error.response.data.non_field_errors ===
            'User is already registered with this e-mail address.'
        ) {
          toast.error('User email already registered with Google.')
        } else {
          toast.error('Error occured while login.')
        }
        dispatch(apiError(error))
        dispatch(apiDispatch(LOGIN_PENDING, false))
        dispatch(apiDispatch(IS_LOGGED_IN, false))
      })
  }
}

export const getUserData = () => {
  let url = who_am_i

  return dispatch => {
    dispatch(apiDispatch(GET_USER_DATA_PENDING, true))
    apiClient
      .get(url)
      .then(res => {
        dispatch(apiDispatch(SET_USER_DATA, res.data))
        dispatch(apiDispatch(IS_LOGGED_IN, true))
        dispatch(apiDispatch(GET_USER_DATA_PENDING, false))
      })
      .catch(error => {
        dispatch(apiError(error))
        dispatch(apiDispatch(GET_USER_DATA_PENDING, false))
        dispatch(apiDispatch(SET_USER_DATA, null))
        dispatch(apiDispatch(SET_TOKEN, ''))
        localStorage.removeItem('token')
        dispatch(apiDispatch(IS_LOGGED_IN, false))
      })
  }
}

export const logoutUser = () => {
  let url = logout

  return dispatch => {
    apiClient
      .post(url)
      .then(res => {
        dispatch(apiDispatch(IS_LOGGED_IN, false))
        dispatch(apiDispatch(SET_USER_DATA, null))
        dispatch(apiDispatch(SET_TOKEN, ''))
        localStorage.removeItem('token')
      })
      .catch(error => {
        dispatch(apiError(error))
      })
  }
}
