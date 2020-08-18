import React from 'react';

import {Link} from 'react-router-dom'
import { FaReact } from 'react-icons/fa'




import './styles.css'


interface PageHeaderProps {
    title: string
    
}


const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
      
        <header className="page-header" data-aos="zoom-in-down">
            <div className="top-bar-container">
                <Link to="/">
                    Go Back
                </Link> 
                <div className="react">
                    <span className="made-react">made using
                    </span>
                    <FaReact size='1.5rem' color="#8257E5"/>
                </div>
            </div>
            <div className="header-content">
                <strong>{props.title}</strong>
            </div>
        </header>
    
    )
}

export default PageHeader