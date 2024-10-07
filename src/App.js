import React from 'react';
import Footer from './components/Footer';
import Header from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SkillsAndServices from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';


function App() {
  return (
    <>
      <div className="min-h-screen w-full bg-gradient-to-r from-blue-200 to-yellow-200">
        {/* Centered content with max width */}
        <div className="w-full max-w-screen-lg mx-auto p-4 sm:p-6 lg:p-8">
          <Header />
          <Hero />
        </div>
      </div>



      {/* About Section with different background color */}
      <div className="w-full bg-white py-2">
        <div className="max-w-screen-lg mx-auto p-4 sm:p-6 lg:p-8">
          <About />
        </div>
      </div>

      {/* Skills and Services Section with another background color */}
      <div className="w-full bg-white py-2">
        <div className="max-w-screen-lg mx-auto p-4 sm:p-6 lg:p-8">
          <SkillsAndServices />
        </div>
      </div>

      {/* Projects Section with a different background color */}
      <div className="w-full bg-gray-200 py-12">
        <div className="max-w-screen-lg mx-auto p-4 sm:p-6 lg:p-8">
          <Projects />
        </div>
      </div>

      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
