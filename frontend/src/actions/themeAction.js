import {
    CHANGE_THEME,
} from './themeActionType'

export const setTheme = (theme) => {
  console.log(theme)
  return {
    type: CHANGE_THEME,
    theme: theme,
  }
}

export const changeTheme = (theme = "default") => {
  console.log(theme)
  return (dispatch) => {
    dispatch(setTheme(theme));
    localStorage.setItem("theme", theme);
  };
};
