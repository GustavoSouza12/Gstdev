import React from 'react'
import {Link} from 'react-router-dom'
import './styles.css'
import landingImg from '../../Assets/images/logo.png'




import purpleHeartIcon from '../../Assets/images/icons/purple-heart.svg'


const Landing = () =>{
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <h1 data-aos="fade-right" data-aos-duration="2000">Gstdev</h1>
                    <h2 data-aos="fade-right"  data-aos-delay="500" data-aos-duration="1500" >Hello! my name is <span>Gustavo</span> and i'm a front-end developer!</h2>
                </div>
                <img src={landingImg} alt="Plataforma de estudos" className="hero-image" data-aos="fade-in" data-aos-delay="1500" data-aos-duration="1000"/>
                <div className="buttons-container">
                    <Link to="/About" className="button1" data-aos="zoom-in-right" data-aos-delay="500" data-aos-duration="1000">
                        About
                    </Link>
                    <Link to="/Projects" className="button2" data-aos="zoom-in-left" data-aos-delay="500" data-aos-duration="1000">
                        Projects
                    </Link>
                </div>
                <span className="total-connections" data-aos="fade-in" data-aos-delay="1500" >
                    I hope you like my work!!! <img src={purpleHeartIcon} alt="Coração roxo"/>
                </span>
            </div>    
        </div>
    )
}

export default Landing