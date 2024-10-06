
import { Routes, Route } from 'react-router-dom';

import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import AboutPage from "./pages/AboutPage"
import HomePage from "./pages/HomePage"
import ProjectPage from "./pages/ProjectPage"
import Contact from "./pages/Contact"



const App = () =>{
    return(<div className="container">
        <Navbar/>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/About' element={<AboutPage/>}/> 
            <Route path ="/Projects" element={<ProjectPage/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
 
        <Footer/>
    </div>)
}

export default App