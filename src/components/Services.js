const SkillsAndServices = () => {
    return (
      <section id="skills" className="bg-white py-12 px-4 md:px-20">
        <h2 className="text-3xl font-bold text-orange-500 text-center font-didact">Skills & Services</h2>
        <p className="text-center text-gray-600 mt-4 font-didact">
          Here are the technologies I work with and the services I offer to help you build scalable and efficient applications.
        </p>
        
        {/* Skills Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-blue-950 font-didact">Python</h3>
            <p className="text-gray-600 mt-2 font-didact">Advanced level in Python, used for backend development, AI, and data analysis.</p>
          </div>
  
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-blue-950 font-didact">Django</h3>
            <p className="text-gray-600 mt-2 font-didact">Experienced in creating robust, scalable web applications using Django.</p>
          </div>
  
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-blue-950 font-didact">React</h3>
            <p className="text-gray-600 mt-2 font-didact">Expert in building interactive UIs and single-page applications with React.</p>
          </div>
  
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-blue-950 font-didact">AI/ML</h3>
            <p className="text-gray-600 mt-2 font-didact">Proficient in building AI-powered solutions using TensorFlow, PyTorch, and more.</p>
          </div>
        </div>
        
        {/* Services Section */}
        <h3 className="text-2xl font-bold text-blue-950 text-center mt-12 font-didact">Services</h3>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-bold text-orange-500 font-didact">Web Development</h4>
            <p className="text-gray-600 mt-2 font-didact">Building responsive and modern web applications using the latest technologies.</p>
          </div>
  
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-bold text-orange-500 font-didact">AI/ML Solutions</h4>
            <p className="text-gray-600 mt-2 font-didact">Designing and developing AI-driven applications for predictive analytics and more.</p>
          </div>
  
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-bold text-orange-500 font-didact">API Integration</h4>
            <p className="text-gray-600 mt-2 font-didact">Seamlessly integrating third-party APIs for payment, data processing, and other services.</p>
          </div>
  
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-bold text-orange-500 font-didact">E-commerce Development</h4>
            <p className="text-gray-600 mt-2 font-didact">Creating scalable e-commerce platforms with full cart, checkout, and payment integration.</p>
          </div>
        </div>
        
        {/* Certifications Section */}
        <h3 className="text-2xl font-bold text-gray-800 text-center mt-12 font-didact">Certifications & Awards</h3>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h4 className="text-lg font-bold text-gray-800 font-didact">Certified Python Developer</h4>
            <p className="text-gray-600 mt-2 font-didact">Recognized by WoopySports Limited for excellence in Python programming.</p>
          </div>
  
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h4 className="text-lg font-bold text-gray-800 font-didact">AI/ML Certification</h4>
            <p className="text-gray-600 mt-2 font-didact">Completed an advanced course in AI/ML solutions design and development.</p>
          </div>
  
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h4 className="text-lg font-bold text-gray-800 font-didact">React Expert</h4>
            <p className="text-gray-600 mt-2 font-didact">Certified as a React.js developer for building high-quality web applications.</p>
          </div>
          
        </div>
      </section>
    );
  };
  
  export default SkillsAndServices;
  