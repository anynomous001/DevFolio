import React from 'react'
import { PiHandWaving } from 'react-icons/pi'
import profile from '../assets/profile.jpg'
import './AboutPageStyle.css'

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

                    <p>I’m a Frontend Developer from Kolkata (India).
                        I completed Frontend Carrer Path from Scrimba. </p>


                    <p> I learned my craft by building various projects, Scrimba's Wholesome community helped me to evolve as a Developer.
                        In my free time, I surf through internet to learn more about technology to stay relevant.
                        I’m currently learning more about advanced frontend stuffs and tooling, apart from these
                        i like reading about tech articles and blogs.</p>


                    <p> I'm inspired by people who seek creativity in technology and keen to learn something new.
                        If that sounds like you, let's get connect and have some chat.</p>
                </div>


            </div>
        </div>
    )
}

export default AboutPage