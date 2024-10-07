import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-400 py-8 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          
          {/* Social Media Links */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold text-gray-200 mb-2 font-didact">Connect with Me</h3>
            <div className="flex space-x-4">

                <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="h-6 w-6 text-gray-400 hover:text-white transition" />
                </a>
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6 text-gray-400 hover:text-white transition" />
                </a>
                <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className="h-6 w-6 text-gray-400 hover:text-white transition" />
                </a>
              
            </div>
          </div>
  
          {/* Footer Navigation Links */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold text-gray-200 mb-2 font-didact">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-orange-500 font-didact">About Me</a></li>
              <li><a href="#projects" className="hover:text-white font-didact">Projects</a></li>
              <li><a href="#contact" className="hover:text-white font-didact">Contact</a></li>
            </ul>
          </div>
  
          {/* Copyright Notice */}
          <div className="text-center md:text-left">
            <p className="text-sm font-didact">&copy; {new Date().getFullYear()} Boniface Ouma. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  