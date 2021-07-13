import {
  SET_USER_DATA,
  GET_USER_DATA,
  SET_TOKEN,
  LOGIN_PENDING,
  GET_USER_DATA_PENDING,
  IS_LOGGED_IN,
  USER_API_ERROR
} from '../actions/authActionType'

const initialPendingState = {
  loginPending: false,
  getUserDataPending: false,
}

const initialState = {
  ...initialPendingState,
  user: {},
  token: '',
  isLoggedIn: false,
  error: null
}

export default function authReducer (
  state = initialState,
  { type, payload, error }
) {
  switch (type) {
    case SET_TOKEN:
      return { ...state, token: payload }
    case SET_USER_DATA:
      return { ...state, user: payload }
    case LOGIN_PENDING:
      return { ...state, loginPending: payload }
    case GET_USER_DATA_PENDING:
        return { ...state, getUserDataPending: payload}
    case IS_LOGGED_IN:
      return { ...state, isLoggedIn: payload }
    case USER_API_ERROR:
      return { ...state, error: payload }
    default:
      return state
  }
}
