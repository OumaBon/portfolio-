import Footer from './components/Footer'
import Header from './components/Navbar';
import Hero from './components/Hero'
import About from './components/About'
import SkillsAndServices from './components/Services';
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contacts'


function App() {
  return (
    <>
    <div className="min-h-screen w-full bg-gradient-to-r from-blue-200 to-yellow-200">
      <div className="w-full max-w-screen-lg mx-auto p-4 sm:p-6 lg:p-8">
        <Header/>
        <Hero/>
      </div>
      <About/>
      <SkillsAndServices/>
    </div>
    <Projects/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
  
  );
}

export default App;
