import Homepage from './pages/home/homepage';
import './App.css';
import Skillpage from './pages/skills/skillpage';
import Workpage from './pages/works/workpage';
import Aboutpage from './pages/about/aboutpage';

import React from 'react';


import {
    createBrowserRouter,
    RouterProvider,

} from "react-router-dom";
import HamburgerMenu from './components/Main/HamburgerMenu';




import linkedin from "C:/Users/HP/Desktop/PORTFOLIO-1-master/src/images/linkedin_log.ico";
import github from "C:/Users/HP/Desktop/PORTFOLIO-1-master/src/images/github.ico"
import resume from "C:/Users/HP/Desktop/PORTFOLIO-1-master/src/images/resume.ico";



const router = createBrowserRouter([{
        path: "/",
        element: < Homepage / > ,
    },
    {
        path: "/skill",
        element: < Skillpage / > ,
    },
    {
        path: "/work",
        element: < Workpage / > ,
    },
    {
        path: "/about",
        element: < Aboutpage / > ,
    }


]);


function App() {



    return ( <

        >


        <
        h1 className = 'home_name' > PRANJAY GULERIA < /h1> 



        <
        a href = 'https://www.linkedin.com/in/pranjay-guleria-39b64b222/'
        target = "blank"
        className = 'linkedinImg' >
        <
        img src = { linkedin }
        alt = "linkedin_img"
        className = 'img' / >
        <
        /a> <
        a href = 'https://github.com/pranjay19'
        target = "blank"
        className = 'gitImg' >
        <
        img src = { github }
        alt = "github_img"
        className = 'git_img' / >
        <
        /a> <
        a href = 'https://www.instagram.com'
        target = "blank"
        className = 'resumeImg' >
        <
        img src = { resume }
        alt = "resume_img"
        className = 'resume_img' / >
        <
        /a>





        <
        RouterProvider router = { router }
        />

        <
        HamburgerMenu / >





        { /* <Skillpage/> */ }



        { /* <Homepage/> */ } { /* <Navbar/> */ } { /* <ShowDiv/> */ }

        <
        />
    );
}

export default App;