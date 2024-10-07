const About = () => {
    return (
      <section id="about" className="bg-white px-4 md:px-20 pt-3">
        <h2 className="text-3xl font-bold text-orange-500 text-center font-didact">About Me</h2>
        <p className="text-lg text-gray-600 text-center mt-4 font-didact">
          I'm Boniface Ouma, a Full-Stack Developer with a passion for creating scalable web applications and AI-powered solutions.
          I thrive on solving complex problems, collaborating with diverse teams, and building innovative solutions for clients worldwide.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-blue-950 font-didact">Key Skills</h3>
            <ul className="list-disc list-inside text-gray-900 mt-2 font-didact">
              <li>JavaScript (React,Node.js,Express.js)</li>
              <li>Python (Django,Flask,FastAPI)</li>
              <li>AI & Machine Learning (TensorFlow, PyTorch)</li>
              <li>Responsive Web Design</li>
              <li>API Integration</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-950 font-didact">Experience</h3>
            <p className="text-gray-900 mt-2 font-didact">
              With 2+ years of experience, I have worked on various projects including e-commerce platforms, AI-powered applications, and 
              backend systems. I focus on delivering clean, maintainable code and ensuring high-quality results.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  