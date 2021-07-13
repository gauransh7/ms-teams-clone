import React, { useEffect } from 'react'
import NavBar from '../components/common/navbar'

const DefaultLayout = React.memo(({ children }) => {
  const theme = localStorage.getItem('theme')

  const themeColors = {
    default: '#ffffff',
    dark: '#242526',
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
          style={{ height: '100vh', backgroundColor: themeColors[theme] }}
          className='w-100 fg-100 overflow-auto position-relative'
        >
          {children}
        </div>
      </main>
    </div>
  )
})

export default DefaultLayout
