import React from 'react'
import './ProjectAndSkillDivStyle.css'

import Endorsementproject from '../assets/Endorsementproject.jpg'
import Quizproject from '../assets/Quizproject.jpg'
import project5 from '../assets/Todoproject.jpg'

import { BsGithub } from 'react-icons/bs'
import { BiLogoPostgresql } from 'react-icons/bi'
import { SiFirebase, SiReactrouter, SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb } from 'react-icons/si'
import {
    FaLinkedinIn,
    FaCode,
    FaGitAlt,
    FaReact, FaAws, FaDocker, FaCss3, FaJsSquare,
} from 'react-icons/fa'
import { ProjectData } from './ProjectData'
import './ProjectCardsStyle.css'
import project from '../assets/project_two.jpeg'
import project1 from '../assets/intro.jpg'
import project2 from '../assets/project_one.jpeg'
import project3 from '../assets/project_three.jpeg'
import project4 from '../assets/Demomarketing.jpg'


const images = [project1, project2, project3, project4]

const Data = ProjectData.map((item, index) => {
    return (
        <div key={Math.random()} className='projectcard'>
            <img className='project-image' src={images[index]} alt='Project-photo' />
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
                        <img className='home_project_pic' src={Endorsementproject} alt='Project-photo' />
                        <h4>Readium
                        </h4>
                        <p>Notice the use of %PUBLIC_URL% in the tags above. It will be replaced with the URL of the `public` folder during the build. Only files inside the `public` folder can be referenced from the HTML.</p>
                        <div>
                            <a href='https://github.com/anynomous001/Endorsement-App' className='view' >View</a>
                            <a href='https://anynomous001.github.io/Endorsement-App/' className='source'>source</a>
                        </div>
                    </div >
                    <div key={Math.random()} className='projectcard'>
                        <img className='home_project_pic' src={project5} alt='Project-photo' />
                        <h4>Play TM
                        </h4>
                        <p>Notice the use of %PUBLIC_URL% in the tags above. It will be replaced with the URL of the `public` folder during the build. Only files inside the `public` folder can be referenced from the HTML.</p>
                        <div>
                            <a href='https://github.com/anynomous001/Endorsement-App' className='view' >View</a>
                            <a href='https://anynomous001.github.io/Endorsement-App/' className='source'>source</a>
                        </div>
                    </div >
                    <div key={Math.random()} className='projectcard'>
                        <img className='home_project_pic' src={Quizproject} alt='Project-photo' />
                        <h4>Quizzicle
                        </h4>
                        <p>Notice the use of %PUBLIC_URL% in the tags above. It will be replaced with the URL of the `public` folder during the build. Only files inside the `public` folder can be referenced from the HTML.</p>
                        <div>
                            <a href='https://github.com/anynomous001/Endorsement-App' className='view' >View</a>
                            <a href='https://anynomous001.github.io/Endorsement-App/' className='source'>source</a>
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
                <div className='first-row'><  FaCss3 className='skill-icon' />
                    <p>HTML</p>
                </div>
                <div className='first-row'><   SiTypescript className='skill-icon' />
                    <p>TypeScript </p>
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
                <div className='second-row last'>< SiNextdotjs className='skill-icon' />
                    <p>Next js  </p>
                </div>
                <div className='third-row'><  FaAws className='skill-icon' />
                    <p>AWS </p>
                </div>
                <div className='third-row'><  FaDocker className='skill-icon' />
                    <p>Docker </p>
                </div>
                <div className='third-row last'><   SiTailwindcss className='skill-icon' />
                    <p>TalWind </p>
                </div>
            </div>
        </div>
    )
}

export default ProjectAndSkillDiv