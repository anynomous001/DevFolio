import React from 'react'
import './ProjectHeroDiv.css'

const ProjectHeroDiv = () => {
    return (
        <div className='ProjectHeroDiv'>
            <div className='ProjectHeroDiv-content'>
                <h1 className='project-headline'>My Projects.</h1>
                <h4 className='sub-headline'>"Every line of code is a step in the journey of continuous improvement."</h4>
            </div>
        </div>
    )
}

export default ProjectHeroDiv

/*<div className='hero2-container'>
                <video className='hero2-img' autoPlay muted loop id="video-background">
                    <source src={video1} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div> */