import React from 'react'
import {Link} from 'react-router-dom'


const ButtonProjects = () =>{
    return (
            <div className="button-style">
                <Link to="/Projects">
                    See Projects
                </Link>
            </div>    
    )
}

export default ButtonProjects