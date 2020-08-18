import React from 'react'

import './styles1.css'
import {SeeNetlifyDeploy, GithubCode, Wrapper} from '../../styled-components'
import PageHeader from '../../components/PageHeader'
import PageFooter from '../../components/PageFooter'
import ProjectImage from '../../Assets/images/project1.svg'

import CalculatorJs from '../../Assets/gif/calculator.gif'

import FrontendMentor1 from '../../Assets/gif/challenger1.png'
import FrontendMentor2 from '../../Assets/gif/Challenger2.gif'
import FrontendMentor3 from '../../Assets/gif/challenger3.png'

import RestaurantTemplate from '../../Assets/gif/restaurant-template.gif'
import AlexSite from '../../Assets/gif/alex-site.gif'
import RecipeApp from '../../Assets/gif/recipe-app.gif'
import SpDivulgaOnline from '../../Assets/gif/sp-divulga-online.gif'
import Portfolio from '../../Assets/gif/portfolio.gif'
import {DiGithubBadge} from "react-icons/di"


function ProjectsPage(){
    return (
        <div className="container" id="teste">
            <div className="pink">
                <PageHeader title="My Projects"/>
            </div>
            <main>
                <div className="container-project-page">    
                    <div className="content">
                        <h1 data-aos="fade-up" data-aos-duration="1200">Let's see what i'm able to create</h1>
                        <img src={ProjectImage} alt="Projects" data-aos="fade-up" data-aos-duration="1200"/>
                    </div>
                    <div className="content">
                        <h2 data-aos="fade-up" data-aos-duration="1200">Calculator JS</h2>
                        <img src={CalculatorJs} alt="Project 1" data-aos="fade-up" data-aos-duration="1200"/>
                        <p data-aos="fade-up" data-aos-duration="1200">Basic calculator using HTML, CSS and Javascript. Making this project i managed to understand more about DOM manipulation using JS </p>
                        <Wrapper data-aos="fade-up" data-aos-duration="1200">
                            <SeeNetlifyDeploy>
                            <a href="https://quirky-thompson-db596a.netlify.app/" target="_blank"  rel="noopener noreferrer">Live project on Netlify</a>
                            </SeeNetlifyDeploy>
                            <GithubCode> <a href="https://github.com/GustavoSouza12/CalculatorJS" target="_blank"  rel="noopener noreferrer">Code on Github<DiGithubBadge/></a></GithubCode>
                        </Wrapper>
                        <h2 data-aos="fade-up" data-aos-duration="1200">Frontend Mentor Challengers</h2>
                        <img src={FrontendMentor1} alt="Challenger 1" data-aos="fade-up" data-aos-duration="1200"/>
                        <img src={FrontendMentor2} alt="Challenger 2" data-aos="fade-up" data-aos-duration="1200"/>
                        <img src={FrontendMentor3} alt="Challenger 3" data-aos="fade-up" data-aos-duration="1200"/>
                        <p data-aos="fade-up" data-aos-duration="1200">here i trained my skills and i did give life to Designs and layouts made by Frontend Mentor. i did use HTML, CSS and Javascript and 
                        i got notion about css variable utility, responsibility, layoults (using grid and flexbox) and good principles like mobile first and how replicate any design.</p>
                        <Wrapper data-aos="fade-up" data-aos-duration="1200">
                             <SeeNetlifyDeploy>
                                <a href="https://sleepy-swanson-af5637.netlify.app/" target="_blank"  rel="noopener noreferrer">Live Challenger 1 on Netlify</a>
                            </SeeNetlifyDeploy>
                            <SeeNetlifyDeploy>
                                <a href="https://stupefied-bell-d2650d.netlify.app/" target="_blank"  rel="noopener noreferrer">Live Challenger 2 on Netlify</a>
                            </SeeNetlifyDeploy>
                                <SeeNetlifyDeploy>
                            <a href="https://condescending-benz-14c8fb.netlify.app/" className="margin-bottom" target="_blank"  rel="noopener noreferrer">Live Challenger 3 on Netlify</a>
                            </SeeNetlifyDeploy>
                            <GithubCode> 
                                <a href="https://github.com/GustavoSouza12/Frontend-Mentor-Challenger">Code on Github<DiGithubBadge/></a>
                            </GithubCode>
                        </Wrapper>
                        <h2 data-aos="fade-up" data-aos-duration="1200">Restaurant Template</h2>
                        <img src={RestaurantTemplate} alt="Restaurant Template" data-aos="fade-up" data-aos-duration="1200"/>
                        <p data-aos="fade-up" data-aos-duration="1200">This is a personal project about restaurant template that i made to consolidate knowledge that i got studdyng HTML, CSS and Bootstrap</p>
                        <Wrapper data-aos="fade-up" data-aos-duration="1200">
                            <SeeNetlifyDeploy>
                                <a href="https://awesome-murdock-e81422.netlify.app/index.html" target="_blank"  rel="noopener noreferrer">Live project on Netlify</a>
                            </SeeNetlifyDeploy>
                            <GithubCode> 
                                <a href="https://github.com/GustavoSouza12/Restaurant-Template" target="_blank"  rel="noopener noreferrer">Code on Github<DiGithubBadge/></a>
                            </GithubCode>
                        </Wrapper>
                        <h2 data-aos="fade-up" data-aos-duration="1200">Alex Necklaces</h2>
                        <img src={AlexSite} alt="Alex Necklaces" data-aos="fade-up" data-aos-duration="1200"/>
                        <p>this is my first freelancer project. I made this site for a brazilian guy that needed a simple site to show your products. I used HTML, CSS and some Animations on it! </p>
                        <Wrapper data-aos="fade-up" data-aos-duration="1200">
                            <SeeNetlifyDeploy>
                                <a href="https://tender-golick-a7016f.netlify.app/" target="_blank"  rel="noopener noreferrer">Live project on Netlify</a>
                            </SeeNetlifyDeploy>
                            <GithubCode> 
                                <a href="https://github.com/GustavoSouza12/MyFirstRealProjectForSomeone">Code on Github<DiGithubBadge/></a>
                            </GithubCode>
                        </Wrapper >
                        <h2 data-aos="fade-up" data-aos-duration="1200">SP divulga online</h2>
                        <img src={SpDivulgaOnline} alt="Sp divulga online" data-aos="fade-up" data-aos-duration="1200"/>
                        <p data-aos="fade-up" data-aos-duration="1200">this project i made for publicize small traders around the region that i live</p>
                        <Wrapper data-aos="fade-up" data-aos-duration="1200">
                            <SeeNetlifyDeploy>
                            <a href="https://spdivulgaonline.ml/" target="_blank"  rel="noopener noreferrer">Live project on Netlify</a>
                            </SeeNetlifyDeploy>
                            <GithubCode> 
                                <a href="https://github.com/GustavoSouza12/SP-Divulga-Online">Code on Github<DiGithubBadge/></a>
                            </GithubCode>
                        </Wrapper>
                        <h2 data-aos="fade-up" data-aos-duration="1200">Food App</h2>
                        <img src={RecipeApp} alt="Recipe App" data-aos="fade-up" data-aos-duration="1200"/>
                        <p data-aos="fade-up" data-aos-duration="1200">My first React.js project! it's a food recipe app that i made while i was starting with React and learning the basics about how to consume APIs</p>
                        <Wrapper data-aos="fade-up" data-aos-duration="1200">
                            <SeeNetlifyDeploy>
                                <a href="https://gustavosouza12.github.io/Recipe-Food-app/" target="_blank"  rel="noopener noreferrer">Live project on Github Pages</a>
                            </SeeNetlifyDeploy>
                            <GithubCode> 
                                <a href="https://github.com/GustavoSouza12/Recipe-Food-app/tree/master" target="_blank"  rel="noopener noreferrer">Code on Github<DiGithubBadge/></a>
                            </GithubCode>
                        </Wrapper>
                        <h2 data-aos="fade-up" data-aos-duration="1200">Gstdev</h2>
                        <img src={Portfolio} alt="Gstdev" data-aos="fade-up" data-aos-duration="1200"/>
                        <p data-aos="fade-up" data-aos-duration="1200">My second project using React.js. making this project i managed to understand a lot of things in react like: props, project structure, components, reusable components,
                            styled components, react router dom and typescript </p>
                        <Wrapper data-aos="fade-up" data-aos-duration="1200">
                            <GithubCode> 
                                <a href="https://www.instagram.com/gusouza_12/" target="_blank"  rel="noopener noreferrer">Code on Github<DiGithubBadge/></a>
                            </GithubCode>
                        </Wrapper>
                        <a href="#top" className="back-top" data-aos="fade-up" data-aos-duration="1200" >Back to the top</a>
                    </div>
                </div>       
            </main>   
            <div className="pink">  
                <PageFooter/>
            </div>          
        </div>
    )
}

export default ProjectsPage