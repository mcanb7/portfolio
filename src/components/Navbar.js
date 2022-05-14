import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{
    faGithub,
    faLinkedin,
    faTwitter
} from "@fortawesome/free-brands-svg-icons";


export default function Navbar(){
    return(
        <header className="bg-navbar">
            <div className="text-center container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink 
                    to="/" 
                    exact
                    className="inflex-flex items-center py-8 px-3 mr-4 text-black-400 text-3xl font-bold cursive2 tracking-widest"
                    >
                        Mahmut Can
                    </NavLink>

                    <NavLink 
                    to="/post"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-black-400 yazi"
                    >
                        Çalışmalar
                    </NavLink>  

                    <NavLink 
                    to="/about"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-black-400 yazi"
                    >
                        Hakkımda
                    </NavLink>
                    <NavLink 
                    to="/contact"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-black-400 yazi"
                    >
                        İletişim
                    </NavLink>
                </nav>
                <div className="inline-flex">

                <a href="https://twitter.com/mhmtcnbyrm7" target="_blank" className="twitter social py-6">
                <FontAwesomeIcon icon={faTwitter} size="3x" />
                </a>
                
                <a href="https://www.linkedin.com/in/mcanbayram/" target="_blank" className="linkedin social py-6">
                <FontAwesomeIcon icon={faLinkedin} size="3x" />
                </a>

                <a href="https://github.com/mcanb7" target="_blank" className="github social py-6">
                <FontAwesomeIcon icon={faGithub} size="3x" />
                </a>

                </div>
            </div>
        </header>
    )
}