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
            <h1 className='dev-logo'>Code-Folio</h1>
        </div>
    )
}

export default Navbar