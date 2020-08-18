import React from 'react'
import {Link} from 'react-router-dom'
import './../AboutPage/styles.css'


import PageHeader from '../../components/PageHeader'
import PageFooter from '../../components/PageFooter'
import ButtonProjects from '../../components/ButtonToProjects'
import AboutImage2 from '../../Assets/images/about1.svg'
import AboutImage1 from '../../Assets/images/about.svg'
import SoftSkills from '../../Assets/images/soft-skills.svg'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { DiHtml5, DiCss3, DiJsBadge, DiReact, DiBootstrap, DiJqueryLogo, DiNpm, DiGithubBadge, DiGit, DiSass, DiVisualstudio  } from "react-icons/di";

function PageAbout (){
    return (
        <div className="container" id="top">
            <div className="header-container" >
                <PageHeader title="About Me"/>
                <div className="button-container" data-aos="fade-in" data-aos-duration="1200" data-aos-delay="1200">
                    <ButtonProjects />
                </div>    
            </div>   
            <main>
                <div className="container-about-page">
                    <div className="content">
                        <h1 data-aos="fade-up" data-aos-duration="1200">Give me an oportunity</h1>
                        <img className="about" src={AboutImage1}alt="About me!" data-aos="fade-up" data-aos-duration="1200"/>
                        <p  data-aos="fade-up" data-aos-duration="1200" >I'm 19 years old and i have a certificate in Electronics. In the course of this year, i become completely passionate about Frontend and all the possibilities to make beautifull and usable stuff for
                             many peoples around the whole world using tecnology! Just give me an opportunity and i will make it happen.
                        </p>
                    </div>
                    <div className="content">
                        <h3  data-aos="fade-up" data-aos-duration="1200">My Skills</h3>
                        <img className="skills" src={AboutImage2} data-aos="fade-up" data-aos-duration="1200"  alt="My Skills"/>
                        <h3 data-aos="fade-up" data-aos-duration="1200">Programmer Language</h3>
                        <ul>
                            <li data-aos="flip-up" data-aos-duration="1200">Html5<span className="about-icons"><DiHtml5 /></span></li>
                            <li data-aos="flip-up" data-aos-duration="1200">Css<span className="about-icons"><DiCss3 /></span></li>
                            <li data-aos="flip-up" data-aos-duration="1200">Javascript<span className="about-icons"><DiJsBadge /></span></li>
                        </ul>
                        <h3 data-aos="fade-up" data-aos-duration="1200">Libraries and frameworks</h3>
                        <ul>
                            <li data-aos="flip-right" data-aos-duration="1200">React<span className="about-icons"><DiReact/></span></li>
                            <li data-aos="flip-left" data-aos-duration="1200">jQuery<span className="about-icons"><DiJqueryLogo /></span></li>
                            <li data-aos="flip-right" data-aos-duration="1200">Bootstrap<span className="about-icons"><DiBootstrap/></span></li>
                            <li data-aos="flip-left" data-aos-duration="1200">Sass<span className="about-icons"><DiSass /></span></li>
                        </ul>
                        <h3 data-aos="fade-up" data-aos-duration="1200">Tools</h3>
                        <ul>
                            <li data-aos="fade-up" data-aos-duration="1200">Git<span className="about-icons"><DiGit /></span></li>
                            <li data-aos="fade-up" data-aos-duration="1200">GitHub<span className="about-icons"><DiGithubBadge/></span></li>
                            <li data-aos="fade-up" data-aos-duration="1200">Npm<span className="about-icons"><DiNpm /></span></li>
                            <li data-aos="fade-up" data-aos-duration="1200">Visual Studio Code<span className="about-icons"><DiVisualstudio/></span></li>
                        </ul>
                            <h3 data-aos="fade-up" data-aos-duration="1200">And much more !</h3>
                        <ul className="sublist">
                            <li data-aos="zoom-out" >Swipper.js</li>
                            <li data-aos="zoom-out">Aos.js</li>
                            <li data-aos="zoom-out">Gasp.js</li>
                            <li data-aos="zoom-out">Netlify</li>
                            <li data-aos="zoom-out">Google Analytics</li>
                        </ul>    
                    </div>  
                    <div className="content">
                        <h2 data-aos="fade-up" data-aos-duration="1200">Just code is not enough. At least for me.</h2>
                        <img className="about" src={SoftSkills} alt="Soft Skills" data-aos="zoom-in-up" data-aos-duration="1200"/>
                        <p data-aos="zoom-in-up" data-aos-duration="1200"> i'm not here for just code. I'm here to show to the world what i can create and how i can bring tecnology to all people life.</p>
                        <h3  data-aos="zoom-in-down" data-aos-duration="1200">Soft Skills</h3>
                        <ul>
                            <li data-aos="zoom-in-down" data-aos-duration="1200">Organized</li>
                            <li data-aos="zoom-in-down" data-aos-duration="1200">Good Teamworker </li>
                            <li data-aos="zoom-in-down" data-aos-duration="1200">Open Minded</li>
                            <li data-aos="zoom-in-down" data-aos-duration="1200">Great ability to learn</li>
                            <li data-aos="zoom-in-down" data-aos-duration="1200">dedicated</li>
                        </ul>
                        <a href="#top" className="back-top" data-aos="zoom-in-up" data-aos-delay="1000">Back to the top</a>
                    </div>  
                </div>    
            </main> 
            <div className="yellow">
                <PageFooter/>
            </div>
        </div>
    )
}

export default PageAbout