import React from 'react'
import {BrowserRouter, Route  } from 'react-router-dom'

import Landing from "./Pages/Landing"
import ProjectsPage from "./Pages/ProjectsPage/"
import AboutPage from "./Pages/AboutPage"


function Routes(){
    return (
    <BrowserRouter>
        <Route path="/" exact component={Landing}/>
        <Route path="/Projects" component={ProjectsPage}/>
        <Route path="/About" component={AboutPage}/>
     
    </BrowserRouter>
    )
}

export default Routes