import React from 'react'
import './ProjectAndSkillDivStyle.css'

import Quizproject from '../assets/Quizproject.jpg'
import project5 from '../assets/image1.png'

import { BiLogoPostgresql } from 'react-icons/bi'
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiRecoil, SiExpress } from 'react-icons/si'
import {
    FaReact, FaAws, FaDocker
} from 'react-icons/fa'
import { TbBrandRedux } from "react-icons/tb";
import { DiNginx } from "react-icons/di";

import { ProjectData } from './ProjectData'
import project1 from '../assets/image.png'
import project2 from '../assets/project_one.jpeg'
import project3 from '../assets/project_three.jpeg'
import project4 from '../assets/Demomarketing.jpg'
import readium from '../assets/readium.jpg'


const images = [project1, project2, project3, project4]

const Data = ProjectData.map((item, index) => {
    return (
        <div key={Math.random()} className='projectcard'>
            <img className='home_project_pic' src={images[index]} alt='Project-photo' />
            <h4>{item.name}</h4>
            <p>{item.about}</p>
            <div>
                <a href={item.view} className='view' >View</a>
                <a href={item.source} className='source'>source</a>
            </div>
        </div >
    )
})



const ProjectAndSkillDiv = () => {

    const [seeMore, setSeeMore] = React.useState(false)

    console.log(seeMore)
    return (
        <div className='ProjectAndSkillDiv'>
            <h1 className='home-project-header'>Some of my Projects</h1>
            <div className='home-projects-container'>
                <div className='flex-div'>
                    <div key={Math.random()} className='projectcard'>
                        <img className='home_project_pic' src={readium} alt='Project-photo' />
                        <h4>Readium
                        </h4>
                        <p>Readium is a full-stack Medium-like blogging platform built with Typescript, Node.js, and Prisma,
                            using PostgreSQL as the database.
                            It features user authentication, CRUD operations for posts. Optimized API routes
                            ensure efficient data fetching, while Recoil manages state.
                        </p>
                        <div>
                            <a href='https://readium.techtovium.com/' className='view' >View</a>
                            <a href='https://github.com/anynomous001/Medium_Full-Stack' className='source'>source</a>
                        </div>
                    </div >
                    <div key={Math.random()} className='projectcard'>
                        <img className='home_project_pic' src={project5} alt='Project-photo' />
                        <h4>Play TM
                        </h4>
                        <p>PlayTM is a full-stack Paytm-like wallet app built with NextJS, Node.js, and Prisma, using PostgreSQL as the database.
                            It features user authentication(next-auth), wallet transactions, and balance syncing. Optimized API routes ensure efficient data fetching,
                            while Recoil manages state.</p>
                        <div>
                            <a href='https://playtm.vercel.app/dashboard/auth/signup' className='view' >View</a>
                            <a href='https://github.com/anynomous001/Turborepo_Paytm' className='source'>source</a>
                        </div>
                    </div >
                    <div key={Math.random()} className='projectcard'>
                        <img className='home_project_pic' src={Quizproject} alt='Project-photo' />
                        <h4>Quizzicle
                        </h4>
                        <p>QuizApp is a React and Vite-based quiz platform that fetches questions from the Open Trivia Database API.
                            It allows users to select a domain, choose difficulty levels, and test their knowledge. Optimized for performance, it features real-time scoring and interactive feedback.</p>
                        <div>
                            <a href='https://spectacular-kataifi-8d603e.netlify.app/' className='view' >View</a>
                            <a href='https://github.com/anynomous001/Quiz?tab=readme-ov-file' className='source'>source</a>
                        </div>
                    </div >
                    {seeMore && Data}
                </div>
                <button className='project-more' onClick={() => setSeeMore(!seeMore)} type="button">{seeMore ? 'Less View' : 'See More'}</button>
            </div>



            <div className='mid-heading-div'>

                <h1 className='home-skills-headline'>My TechStack</h1>
                <p className='home-skills-subheadline'></p>
            </div>

            <div className='skill-div'>
                <div className='first-row'><  SiTypescript className='skill-icon' />
                    <p>Typescript</p>
                </div>
                <div className='first-row'><   SiNextdotjs className='skill-icon' />
                    <p>Next js </p>
                </div>
                <div className='first-row last'><  FaReact className='skill-icon' />
                    <p>React </p>
                </div>
                <div className='second-row'><BiLogoPostgresql className='skill-icon' />
                    <p>Postgresql  </p>
                </div>
                <div className='second-row'>< SiMongodb className='skill-icon' />
                    <p>Mongodb  </p>
                </div>
                <div className='second-row last'>< SiExpress className='skill-icon' />
                    <p>Express</p>
                </div>
                <div className='third-row'><  FaAws className='skill-icon' />
                    <p>AWS </p>
                </div>
                <div className='third-row'><  FaDocker className='skill-icon' />
                    <p>Docker </p>
                </div>
                <div className='third-row last'><   DiNginx className='skill-icon Nginx' />
                    <p>Nginx </p>
                </div>
                <div className='fourth-row'><  SiTailwindcss className='skill-icon' />
                    <p>Tailwind </p>
                </div>
                <div className='fourth-row'>< SiRecoil className='skill-icon' />
                    <p>Recoil  </p>
                </div>
                <div className='fourth-row last'>< TbBrandRedux className='skill-icon' />
                    <p>Redux </p>
                </div>
            </div>
        </div>
    )
}

export default ProjectAndSkillDiv