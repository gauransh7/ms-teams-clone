import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { useEffect } from 'react'
import CreateRoom from '../components/homeComponents/createRoom'
import RoomDetails from '../components/homeComponents/roomDetails'

const useStyles = makeStyles(theme => ({
  Home: {
    display: 'grid',
    gridAutoFlow: 'column',
    justifyItems: 'center',
    padding: theme.spacing(2),
    alignItems: 'center',
    height: '100%',
    [theme.breakpoints.down('xs')]: {
      gridAutoFlow: 'row'
    }
  }
}))

const Home = React.memo(() => {

  const classes = useStyles()
  return (
    <Grid className={classes.Home}>
      <CreateRoom />
      <RoomDetails />
    </Grid>
  )
})

export default Home
