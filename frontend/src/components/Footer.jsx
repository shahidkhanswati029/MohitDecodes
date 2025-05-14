import { FaGithub, FaYoutube, FaFacebook } from "react-icons/fa6";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 dark:text-white text-gray-700 py-10">
      <div className="max-w-7xl w-full px-6 pl-20 pr-0">
        {/* Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Main */}
          <div>
            <h3 className="font-semibold mb-4">Main</h3>
            <ul className="space-y-2">
              <li className="hover:text-gray-500 cursor-pointer">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-gray-500 cursor-pointer">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="hover:text-gray-500 cursor-pointer">
                <Link to="/work-with-us">Work With Us</Link>
              </li>
              <li className="hover:text-gray-500 cursor-pointer">
                <Link to="/my-gear">My Gear</Link>
              </li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h3 className="font-semibold mb-4">Learn</h3>
            <ul className="space-y-2">
              <li className="hover:text-gray-500 cursor-pointer">
                <Link to="/courses">Courses</Link>
              </li>
              <li className="hover:text-gray-500 cursor-pointer">
                <Link to="/tutorials">Tutorials</Link>
              </li>
              <li className="hover:text-gray-500 cursor-pointer">
                <Link to="/notes">Notes</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li className="hover:text-gray-500 cursor-pointer">
                <Link to="/terms">Terms</Link>
              </li>
              <li className="hover:text-gray-500 cursor-pointer">
                <Link to="/privacy">Privacy</Link>
              </li>
              <li className="hover:text-gray-500 cursor-pointer">
                <Link to="/refund">Refund</Link>
              </li>
            </ul>
          </div>

          {/* Social (external links remain with <a>) */}
          <div>
            <h3 className="font-semibold mb-4">Social</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2 hover:text-gray-500 cursor-pointer">
                <FaGithub className="text-black dark:text-white" />
                <a href="https://github.com/mohitdjcet/" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li className="flex items-center gap-2 hover:text-gray-500 cursor-pointer">
                <FaYoutube className="text-black dark:text-white" />
                <a href="https://www.youtube.com/@MohitDecodes/" target="_blank" rel="noopener noreferrer">
                  YouTube
                </a>
              </li>
              <li className="flex items-center gap-2 hover:text-gray-500 cursor-pointer">
                <FaFacebook className="text-black dark:text-white" />
                <a href="https://www.facebook.com/mohitdecode/" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </li>
              <li className="flex items-center gap-2 hover:text-gray-500 cursor-pointer">
                <FaInstagram className="text-black dark:text-white" />
                <a href="https://www.instagram.com/mohit_decodes/" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
              <li className="flex items-center gap-2 hover:text-gray-500 cursor-pointer">
                <FaLinkedin className="text-black dark:text-white" />
                <a href="https://www.linkedin.com/in/mohitdecodes/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="text-center text-sm text-gray-500 mt-10">
          Made with ❤️ and ☕ in India
        </div>
      </div>
    </footer>
  );
};

export default Footer;
