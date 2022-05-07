import React from 'react'
import Menu from './Menu'

const Navbar = () => {
    return (
        <div className='flex bg-[#252526] overflow-x-auto'>
            <Menu icon="/react_icon.svg" filename="home.jsx" path="/" />
            <Menu icon="/html_icon.svg" filename="about.html" path="/about" />
            <Menu icon="/css_icon.svg" filename="contact.css" path="/contact" />
            <Menu icon="/js_icon.svg" filename="projects.js" path="/projects" />
        </div>
    )
}

export default Navbar