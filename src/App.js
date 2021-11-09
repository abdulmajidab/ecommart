import React from 'react'
import {BrowserRouter as Router , Routes , Route, Link} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Navigation from './components/Navigation'
const App = () => {
    return (
    <>
        <Router>
            <Navigation/>
                <Routes> 
                    <Route exact path="/" element={<Home/>}></Route>
                    <Route exact path="/About" element={<About/>}></Route>
                    <Route exact path="/About" element={<About/>}></Route>
                    <Route exact path="/About" element={<About/>}></Route>
                </Routes>
        </Router>
    </>    
)
}

export default App

