import React from 'react'
import Navbar from '../Components/Navbar'
import HomeHeroDiv from '../Components/HomeHeroDiv'
import ProjectAndSkillDiv from '../Components/ProjectAndSkillDiv'
import Footer from '../Components/Footer'

const Home = () => {
    return (
        <div>
            < Navbar />
            < HomeHeroDiv />
            < ProjectAndSkillDiv />
            <Footer />
        </div>
    )
}

export default Home