import React from 'react';



import './styles.css'

import {DiGithubBadge} from "react-icons/di";
import { FaInstagram, FaLinkedin } from "react-icons/fa";


const PageFooter: React.FC = () => {
    return (
        <footer>
            <div className="contact">
                <h2>Contact Me</h2>
                <div className="adress">
                    <h4>São Paulo, Brazil</h4>
                </div>
                <div className="number">
                    <h4>(55) 11 97345 9128</h4>
                </div>
                <div className="email">
                    <a href = "mailto: GustavoSouzaAlves12@gmail.com">GustavoSouzaAlves12@gmail.com</a>
                    
                </div>
            </div>
            <div className="social">
                <div className="Linkedin">
                    <a href="https://www.linkedin.com/in/gustavo-souza-4382041a2/" target="_blank"  rel="noopener noreferrer" ><FaLinkedin/></a>
                </div>
                <div className="Github">
                    <a href="https://github.com/GustavoSouza12" target="_blank"  rel="noopener noreferrer" ><DiGithubBadge/></a>
                </div>
                <div className="Instagram">
                    <a href="https://www.instagram.com/gstdev1/" target="_blank"  rel="noopener noreferrer" ><FaInstagram/></a>
                </div>
            </div>
            <strong>Made by Gustavo</strong>
        </footer>
            
     
    )
}

export default PageFooter