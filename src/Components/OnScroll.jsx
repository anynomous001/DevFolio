import React from 'react'

window.addEventListener('scroll', reveal)

function reveal() {
    var reveals = document.querySelectorAll('.reveal')

    for (let index = 0; index < reveals.length; index++) {
        var revealTop = reveals[index].getBoundingClientRect().top;
        var revealPoint = 100;
        var windowHeight = window.innerHeight;

        if (revealTop < windowHeight - revealPoint) {
            reveals[index].classList.add('active')
        } else {
            reveals[index].classList.remove('active')

        }

    }
}


const OnScroll = ({ children }) => {
    return (
        <div className='reveal'>
            {children}
        </div>
    )
}

export default OnScroll