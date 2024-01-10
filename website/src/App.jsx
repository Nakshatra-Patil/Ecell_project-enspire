import {Route,Routes} from "react-router-dom"
import './App.css'
import {Navbar} from "./components/Navbar"
import { Events } from './components/pages/Events'
import { Home } from './components/pages/Home'
import { Sponsers } from './components/pages/Sponsers'
import { Team } from './components/pages/Team'

function App() {
  return (
  <div className='App'>
    <Navbar/>
    <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/events" element={<Events/>}/>
       <Route path="/sponsers" element={<Sponsers/>}/>
       <Route path="/team" element={<Team/>}/>
    </Routes>
  </div>
  ) 
  
}
export default App

