import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory, withRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Brightness4RoundedIcon from '@material-ui/icons/Brightness4Rounded'
import Menu from '@material-ui/core/Menu'
import { logoutUser } from '../../actions/authAction'
import { Avatar, MenuItem } from '@material-ui/core'
import { changeTheme } from '../../actions/themeAction'
import { getInitials } from '../../helpers/helperFunctions'

const useStyles = makeStyles(theme => ({
  AppBar: {
    backgroundColor: theme.secondary
  },
  hideMobile: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  title: {
    flexGrow: 1
  },
  menuButtonHidden: {
    display: 'none'
  }
}))

const NavBar = props => {
  const classes = useStyles()
  const history = useHistory()
  const [anchorThemeEl, setAnchorThemeEl] = useState(null)
  const [anchorAvatarEl, setAnchorAvatarEl] = useState(null)

  const handleAvatarBtnClick = event => {
    setAnchorAvatarEl(event.currentTarget)
  }

  const handleAvatarBtnClose = () => {
    setAnchorAvatarEl(null)
  }

  const handleThemeBtnClick = event => {
    setAnchorThemeEl(event.currentTarget)
  }

  const handleThemeBtnClose = () => {
    setAnchorThemeEl(null)
  }

  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' className={classes.title}>
          <img
            onClick={() => history.push('/login?next=')}
            style={{ cursor: 'pointer' }}
            src={`${window.location.origin}/${props.currentTheme}.png`}
          />
        </Typography>
        <Button
          aria-controls='simple-theme-menu'
          content='themes'
          aria-haspopup='true'
          color='inherit'
          style={{ display: props.match.params.code ? 'none' : '' }}
          className='header-title-button'
          onClick={handleThemeBtnClick}
          startIcon={<Brightness4RoundedIcon />}
        >
          <span className={classes.hideMobile}>Themes</span>
        </Button>
        <Menu
          id='simple-theme-menu'
          anchorEl={anchorThemeEl}
          keepMounted
          open={Boolean(anchorThemeEl)}
          onClose={handleThemeBtnClose}
          style={{ marginTop: '30px' }}
        >
          <MenuItem
            className={props.currentTheme === 'default' && 'active-menu-option'}
            onClick={() => {
              handleThemeBtnClose()
              props.changeTheme('default')
            }}
          >
            Light
          </MenuItem>
          <MenuItem
            className={props.currentTheme === 'dark' && 'active-menu-option'}
            onClick={() => {
              handleThemeBtnClose()
              props.changeTheme('dark')
            }}
          >
            Dark
          </MenuItem>
          <MenuItem
            className={
              props.currentTheme === 'solarizedLight' && 'active-menu-option'
            }
            onClick={() => {
              handleThemeBtnClose()
              props.changeTheme('solarizedLight')
            }}
          >
            Solarized Light
          </MenuItem>
          <MenuItem
            className={
              props.currentTheme === 'solarizedDark' && 'active-menu-option'
            }
            onClick={() => {
              handleThemeBtnClose()
              props.changeTheme('solarizedDark')
            }}
          >
            Solarized Dark
          </MenuItem>
          <MenuItem
            className={props.currentTheme === 'dracula' && 'active-menu-option'}
            onClick={() => {
              handleThemeBtnClose()
              props.changeTheme('dracula')
            }}
          >
            Dracula
          </MenuItem>
        </Menu>
        {props.user ? (
          <div>
            <Button
              aria-controls='avatar-dropdown'
              content='avatar'
              aria-haspopup='true'
              color='inherit'
              // className='header-title-button'
              onClick={handleAvatarBtnClick}
              startIcon={
                <Avatar
                  // aria-controls='avatar-dropdown'
                  // content='themes'
                  // aria-haspopup='true'
                  color='inherit'
                  className={classes.avatar}
                >
                  {getInitials(
                    props.user.first_name + ' ' + props.user.last_name
                  )
                    .reduce((a, b) => a + b, '')
                    .substr(0, 2)}
                </Avatar>
              }
            >
              <span className={classes.hideMobile}>
                {props.user.first_name}
              </span>
            </Button>
            <Menu
              id='avatar-dropdown'
              anchorEl={anchorAvatarEl}
              open={Boolean(anchorAvatarEl)}
              onClose={handleAvatarBtnClose}
              style={{ marginTop: '30px' }}
              onClick={() => props.logout}
            >
              <MenuItem onClick={props.logout}>Logout</MenuItem>
            </Menu>
          </div>
        ) : (
          ''
        )}
      </Toolbar>
    </AppBar>
  )
}

const mapStateToprops = state => {
  return {
    user: state.auth.user,
    currentTheme: state.theme.theme,
    darkTheme:
      state.theme.theme == 'dark' ||
      state.theme.theme == 'solarizedDark' ||
      state.theme.theme == 'dracula'
  }
}

const mapDispatchToprops = dispatch => {
  return {
    logout: () => {
      return dispatch(logoutUser())
    },
    changeTheme: newTheme => {
      return dispatch(changeTheme(newTheme))
    }
  }
}

export default withRouter(connect(mapStateToprops, mapDispatchToprops)(NavBar))
