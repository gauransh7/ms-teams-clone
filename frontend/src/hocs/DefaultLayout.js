import React from 'react'
import NavBar from '../components/common/navbar'
// import themes from '../assets/theme'

const DefaultLayout = ({ children }) => {
  const theme = localStorage.getItem('theme')
  // console.log(themes)
  // console.log(theme)
  // console.log(themes[theme].primary.main)
  const themeColors = {
    default: '#ffffff',
    dark: '#242526',
    palpatine: '#ffffff',
    solarizedLight: '#eee8d5',
    solarizedDark: '#0e2a35',
    dracula: '#282a36'
  }
  return (
    <div>
      <main
        style={{
          height: '100vh',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* {' '} */}
        <NavBar />
        <div
          style={{ height: '100vh', backgroundColor: themeColors[theme], display: 'grid', alignContent: 'space-around' }}
          className='w-100 fg-100 overflow-auto position-relative'
        >
          {children}
        </div>
      </main>
    </div>
  )
}

export default DefaultLayout
