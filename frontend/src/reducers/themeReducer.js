import { CHANGE_THEME } from '../actions/themeActionType'

const initialState = {
  theme: localStorage.getItem('theme') || 'default'
}

const themeReducer = (state = initialState, { type, theme }) => {
  switch (type) {
    case CHANGE_THEME:
      console.log(theme)
      return { ...state, theme: theme }
    default:
      return state
  }
}

export default themeReducer
