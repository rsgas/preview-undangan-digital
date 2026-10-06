import './App.css'

// Components
import Nav from './components/nav.jsx'
import PrimText from './components/subComponents/primText.jsx'  

// Sections
import Landing from './page/landing.jsx'
import FsSec from './page/section/fs-sec.jsx'


function App() {
  return (
    <>
      <Nav />
      <Landing />
      <FsSec />
    </>
  )
}

export default App
