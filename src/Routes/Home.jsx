import React from 'react'
import Navbar from '../Components/Navbar'
import HomeHeroDiv from '../Components/HomeHeroDiv'
import ProjectAndSkillDiv from '../Components/ProjectAndSkillDiv'
import Footer from '../Components/Footer'

const Home = () => {
    return (
        <div className='Home-Section'>
            < Navbar />
            < HomeHeroDiv />
            < ProjectAndSkillDiv />
        </div>
    )
}

export default Home