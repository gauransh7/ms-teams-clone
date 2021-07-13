import { CHANGE_THEME } from './themeActionType'

export const setTheme = theme => {
  return {
    type: CHANGE_THEME,
    theme: theme
  }
}

export const changeTheme = (theme = 'default') => {
  return dispatch => {
    dispatch(setTheme(theme))
    localStorage.setItem('theme', theme)
  }
}
