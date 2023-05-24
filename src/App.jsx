import Hero from "./components/Hero"
import NavBar from "./components/NavBar"

import { BrowserRouter as Router } from "react-router-dom"

function App() {

  return (
    <Router>
      <NavBar />
      <Hero />
    </Router>
  )
}

export default App
