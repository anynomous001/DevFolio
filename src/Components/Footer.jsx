import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaTwitter, FaPhone, FaMailBulk } from 'react-icons/fa'

import './FooterStyle.css'
const Footer = () => {
    return (

        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div>
                        <FaHome className='icons' />
                        <h4>My Address</h4>
                    </div>
                    <div>
                        <FaPhone className={'icons'} />
                        <p>9874353532</p>
                    </div>
                    <div>
                        <FaMailBulk className={'icons'} />
                        <p>Chakrobortypritam1@gmail.com</p>
                    </div>
                </div>
                <div className='right'>
                    <h4>About The Company</h4>
                    <p>Notice the use of %PUBLIC_URL% in the tags above.
                        It will be replaced with the URL of the `public` folder during the build.
                        Only files inside the `public` folder can be referenced from the HTML. </p>
                    <div>
                        <a href='https://twitter.com/Pritamchak001'>
                            <FaTwitter className={'icons'} />
                        </a>
                        <a href='https://www.linkedin.com/in/pritamchakroborty/'>
                            <FaLinkedin className={'icons'} />
                        </a>
                        <FaFacebook className={'icons'} />
                    </div>
                </div>

            </div>



        </div>

    )
}

export default Footer;