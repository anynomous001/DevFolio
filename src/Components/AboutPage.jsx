import React from 'react'
import { PiHandWaving } from 'react-icons/pi'
import profile from '../assets/profile.jpg'
import './AboutPageStyle.css'
import { Link } from 'react-router-dom'

const AboutPage = () => {
    return (
        <div>
            <div className='aboutHero-div'>
                <div className='intro-div'>
                    <PiHandWaving className='waving' />
                    <span className='opener-tag'>
                        Hi, I'm Pritam Chakroborty
                    </span>
                    <h2 className='greetings'>Nice to meet you !</h2>
                </div>
            </div>

            <div className='about-content-container'>

                <div className='about-img-content'>
                    <img className='about-img' src={profile} />
                </div>

                <div className='about-content'>

                    <p>I’m a FullStack Developer from Kolkata (India).
                        I completed Frontend Carrer Path from <Link to={'https://v2.scrimba.com/'}>Scrimba</Link>  in 2022 and then persued my Fullstack
                        career from <Link to={'https://app.100xdevs.com/home'}> 100xdevs</Link>.
                    </p>


                    <p> I learned my craft by building various projects, Scrimba's Wholesome community helped me to evolve as a Developer.
                        In my free time, I surf through internet to learn more about technology.
                        I’m currently enhancing my knowledge on realtime communication (Including : voice, video and data Sharing), apart from these
                        i like to gather knowledge on businesses and politics all over the world.</p>


                    <p> I'm inspired by people who seek creativity in technology and keen to learn something new.
                        If that sounds like you, let's get connect and have some chat.</p>
                </div>


            </div>
        </div>
    )
}

export default AboutPage