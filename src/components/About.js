import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faRobot, faLaptopCode, faMobileAlt, faNetworkWired } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <section id="about" className="bg-white px-4 md:px-20 pt-8">
      <h2 className="text-3xl font-bold text-orange-500 text-center font-didact">About Me</h2>
      <p className="text-lg text-gray-600 text-center mt-4 font-didact">
        I am Boniface Ouma, a Full-Stack Developer with over 2 years of experience in creating scalable web applications and AI-powered solutions. 
        A graduate of Holberton School, I thrive on solving complex problems and collaborating with diverse teams to build innovative solutions for clients worldwide.
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-blue-950 font-didact">Key Skills</h3>
          <ul className="list-none mt-2">
            <li className="flex items-center text-gray-900 font-didact">
              <FontAwesomeIcon icon={faCode} className="text-orange-500 mr-2" /> 
              JavaScript (React, Node.js, Express.js)
            </li>
            <li className="flex items-center text-gray-900 font-didact">
              <FontAwesomeIcon icon={faRobot} className="text-orange-500 mr-2" /> 
              Python (Django, Flask, FastAPI)
            </li>
            <li className="flex items-center text-gray-900 font-didact">
              <FontAwesomeIcon icon={faLaptopCode} className="text-orange-500 mr-2" /> 
              AI & Machine Learning (TensorFlow, PyTorch)
            </li>
            <li className="flex items-center text-gray-900 font-didact">
              <FontAwesomeIcon icon={faMobileAlt} className="text-orange-500 mr-2" /> 
              Responsive Web Design
            </li>
            <li className="flex items-center text-gray-900 font-didact">
              <FontAwesomeIcon icon={faNetworkWired} className="text-orange-500 mr-2" /> 
              API Integration
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-blue-950 font-didact">Experience</h3>
          <p className="text-gray-900 mt-2 font-didact">
            With a strong focus on delivering clean and maintainable code, I have successfully completed various projects, including e-commerce platforms and AI-powered applications. My goal is to provide high-quality results that meet and exceed client expectations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
