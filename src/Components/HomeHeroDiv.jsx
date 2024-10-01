import React from 'react'
import { Link } from 'react-router-dom'
import './HomeHeroDiv.css'
import { BsGithub } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { FaSquareXTwitter } from "react-icons/fa6";

import resume from "../assets/Pritam'sresume.pdf"
import {
    FaLinkedinIn,
    FaCode
} from 'react-icons/fa'

const HomeHeroDiv = () => {
    return (
        <div className='HomeHeroDiv'>
            <div className='HomeHeroDiv-innerContainer'>
                <span className='small-tag'>Hi, I'm Pritam <FaCode className='facode' /></span>
                <h2>A <span className='visbyfont'>{`<FullStack Developer />`}</span> with a passion of  coding,
                    design and bringing ideas to
                    life.</h2>

                <div className='btn-container'>
                    <Link className='round-btn ' to='https://x.com/Pritamchak001 '><FaSquareXTwitter className='icon' /></Link>
                    <Link className='round-btn ' to='https://github.com/anynomous001 '><BsGithub className='icon' /></Link>
                    <a className='btn' href={resume} target="_blank" rel="noopener noreferrer">Resume</a>
                    <Link className='round-btn ' to='https://www.linkedin.com/in/pritamchakroborty/'><FaLinkedinIn className='icon' /></Link>
                    <Link className='round-btn ' to='https://mail.google.com/mail/mu/mp/354/#pr'><MdEmail className='icon' /></Link>
                </div>
            </div>
        </div>
    )
}

export default HomeHeroDiv