import './App.css'

// Components
import Nav from './components/nav.jsx'
import PrimText from './components/subComponents/primText.jsx'  

// CASADING STYLE SHEETS
import './css/components.css'
import './css/layout.css'
import './css/nav.css'
import './css/theme.css'

// CSS / PAGES

import './css/section/fs-sec.css'
import './css/section/landing.css'

// Sections
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
