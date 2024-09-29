import React from 'react'
import Navbar from '../Components/Navbar'
import HomeHeroDiv from '../Components/HomeHeroDiv'
import ProjectAndSkillDiv from '../Components/ProjectAndSkillDiv'
import Footer from '../Components/Footer'
import AboutPage from '../Components/AboutPage'

const Home = () => {
    return (
        <div>
            < Navbar />
            < HomeHeroDiv />
            < ProjectAndSkillDiv />
            <AboutPage />
            <Footer />
        </div>
    )
}

export default Home