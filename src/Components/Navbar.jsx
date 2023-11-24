import React from 'react'
import { Link } from 'react-router-dom'
import './NavbarStyle.css'
import { FaBars, FaTimes } from 'react-icons/fa'


const Navbar = () => {
    const [headerbgColor, setheaderbgColor] = React.useState(false)
    const [click, setClick] = React.useState(false)

    const handleClick = () => {
        setClick(prevclick => !prevclick);
    }

    const changeColor = () => {
        if (window.scrollY >= 100) {
            setheaderbgColor(true)
        } else {
            setheaderbgColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    return (
        <div className={headerbgColor ? 'header header-bg' : 'header'}>
            <h1 className='dev-logo'>Dev-Folio</h1>
            <nav className={click ? 'navbar active' : 'navbar'}>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/Projects'>Project</Link></li>
                    <li><Link to='/About'>About</Link></li >
                </ul>
            </nav>
            <div className='hamburger-icon' onClick={handleClick}>
                {click ?
                    <FaTimes size={25} style={{ color: 'white' }} /> :
                    <FaBars size={25} />
                }
            </div>
        </div>
    )
}

export default Navbar