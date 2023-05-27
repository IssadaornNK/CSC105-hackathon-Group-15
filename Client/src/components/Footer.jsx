import React from "react";
import { FaFacebookSquare, FaInstagram, FaGithub, FaLinkedin} from 'react-icons/fa'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-[#333198] flex text-center justify-center text-white p-[rem3]">
      <div className="my-6">
        <h3 className="font-bold text-4xl">KitsuNe</h3>
        <ul className="flex my-[2rem] font-bold text-2xl" >
          <li className="hover:text-orange-400">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-orange-400">
            <Link to="/AboutPage">About</Link>
          </li>
          <li className="hover:text-orange-400">
            <Link to="/ProjectPage">Project</Link>
          </li>
        </ul>

        <ul className="grid grid-cols-4 items-center">
          <li className="hover:text-orange-400">
            <a href="https://www.facebook.com/xXNekoLordXx/" target="_blank" className="text-4xl"><FaFacebookSquare /></a>
          </li>
          <li className="hover:text-orange-400">
            <a href="https://www.instagram.com/kitsune_ne_cs/" target="_blank" className="text-4xl"><FaInstagram /></a>
          </li>
          <li className="hover:text-orange-400">
            <a href="https://github.com/xXNeonKitsuneXx" target="_blank" className="text-4xl"><FaGithub /></a>
          </li>
          <li className="hover:text-orange-400">
            <a href="https://www.linkedin.com/in/nithit-lertcharoensombat-722855264/" target="_blank" className="text-4xl"><FaLinkedin /></a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
