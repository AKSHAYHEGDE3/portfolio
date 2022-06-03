import React, { useState } from 'react'
import Menu from './Menu'
import styles from '../styles/menu.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSliders
} from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';

const Navbar = () => {
    const [openModal, setOpenModal] = useState(false)
    return (
        <>
            <div className={`${styles.mobNav} mt-2`}>
                <FontAwesomeIcon onClick={() => setOpenModal(!openModal)}
                    icon={faSliders}
                    style={{
                        color: 'white', fontSize: "2rem", marginLeft: "90%"
                    }}
                />
                {
                    openModal &&
                    <div className={`${styles.mobModal} p-3`}>
                        <Link href="/">
                            <div className='flex items-center mt-1 text-white justify-end cursor-pointer'>
                                <img
                                    src="/react_icon.svg"
                                    alt="React Icon"
                                    height={18}
                                    width={18}
                                />
                                <p className='ml-2'>home.jsx</p>
                            </div>
                        </Link>
                        <Link href="/about">
                            <div className='flex items-center mt-1 text-white justify-end cursor-pointer'>
                                <img
                                    src="/html_icon.svg"
                                    alt="React Icon"
                                    height={18}
                                    width={18}
                                />
                                <p className='ml-2'>about.html</p>
                            </div>
                        </Link>
                        <Link href="/contact">
                            <div className='flex items-center mt-1 text-white justify-end cursor-pointer'>
                                <img
                                    src="/css_icon.svg"
                                    alt="React Icon"
                                    height={18}
                                    width={18}
                                />
                                <p className='ml-2'>contact.css</p>
                            </div>
                        </Link>
                        <Link href="/projects">
                            <div className='flex items-center mt-1 text-white justify-end cursor-pointer'>
                                <img
                                    src="/js_icon.svg"
                                    alt="React Icon"
                                    height={18}
                                    width={18}
                                />
                                <p className='ml-2'>projects.js</p>
                            </div>
                        </Link>
                    </div>
                }
            </div>
            <div className={`${styles.navb} flex bg-[#252526] overflow-x-auto `}>
                <Menu icon="/react_icon.svg" filename="home.jsx" path="/" />
                <Menu icon="/html_icon.svg" filename="about.html" path="/about" />
                <Menu icon="/css_icon.svg" filename="contact.css" path="/contact" />
                <Menu icon="/js_icon.svg" filename="projects.js" path="/projects" />
            </div>
        </>
    )
}

export default Navbar