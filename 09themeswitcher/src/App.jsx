import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './component/ThemeBtn'
import Card from './component/Card'

function App() {
  const [themeMode, setThemeMode] = useState('light');

  const lightTheme=()=>{
    setThemeMode('light')
  }

  const darkTheme=()=>{
    setThemeMode('dark')
  }


  // this how we can change theme of website
  useEffect(()=>{
    document.querySelector('html').classList.remove('light','dark') // first remove light and dark mode
    document.querySelector('html').classList.add(themeMode)// now add the thememode which we have set
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        {/* theme-btn */}
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       {/* card */}
                       <Card/>
                    </div>
                </div>
            </div>

    </ThemeProvider>
  )
}

export default App
