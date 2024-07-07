import React,  { useState } from 'react'
import Navbar from './components/Navbar'
import NewsList from './components/NewsList'

const App = () => {
  const [mode, setMode]=useState("light")

  const toggleMode = () =>{
    if(mode=="light"){
      setMode("dark")
      document.body.style.backgroundColor="#03071e"
    } else{
      setMode("light")
      document.body.style.backgroundColor="white"
    }
  }
  return (
    <div>
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <NewsList mode={mode} pageSize={20}/>
    </div>
  )
}

export default App