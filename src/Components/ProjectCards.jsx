import React from 'react'
import './ProjectCardsStyle.css'
import { ProjectData } from './ProjectData'
import project from '../assets/project_two.jpeg'
import project1 from '../assets/intro.jpg'
import project2 from '../assets/project_one.jpeg'
import project3 from '../assets/project_three.jpeg'
import project4 from '../assets/Demomarketing.jpg'
import Onscroll from '../Components/OnScroll'


const images = [project1, project2, project3, project4]

const data = ProjectData.map((item, index) => {

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

const ProjectCards = () => {

    return (
        <div>
            <div className='headline-div'>
                <h1 className='project-headline' >My Projects</h1>
                <h4 className='sub-headline'>"Programming is thinking, not just typing."</h4>
            </div>
            <div className='ProjectCardDiv'>
                {data}
            </div>
        </div>
    )
}

export default ProjectCards