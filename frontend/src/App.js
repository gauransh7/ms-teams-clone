import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, BrowserRouter as Router } from 'react-router-dom'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import ProtectedRoute from './ProtectedRoute'
import { publicRoutes, protectedRoutes } from './routes'
// import { useDispatch, useSelector } from 'react-redux'
import PublicRoute from './PublicRoute'
import { getUserData } from './actions/authAction'
import themes from './assets/theme'
import { Toaster } from 'react-hot-toast'

const theme = theme =>
  createMuiTheme({
    palette: themes[theme]
  })

class App extends Component {
  componentDidMount () {
    this.props.getUser()
  }

  shouldComponentUpdate (prevProps) {
    return prevProps!== this.props
  }
  render () {
    const { currentTheme } = this.props
    return (
      <ThemeProvider theme={theme(currentTheme)}>
        <Toaster />
        <Router>
          <Switch>
            {publicRoutes.map((route, index) => (
              <PublicRoute
                key={index}
                strictlyPublic={route.strictlyPublic}
                layout={route.layout}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            ))}
            {protectedRoutes.map((route, index) => (
              <ProtectedRoute
                key={index}
                layout={route.layout}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            ))}
          </Switch>
        </Router>
      </ThemeProvider>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    isLoggedIn: state.auth.isLoggedIn,
    loginPending: state.auth.loginPending,
    currentTheme: state.theme.theme
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // logoutUser: () => {
    //   return dispatch(logoutUser())
    // },
    getUser: () => {
      return dispatch(getUserData())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
