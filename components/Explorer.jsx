import React,{useState} from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronDown
} from "@fortawesome/free-solid-svg-icons";

import Link from 'next/link';


const Explorer = () => {

    const [portfolioOpen, setPortfolioOpen] = useState(true);

    return (
        <div>
            <h4 className='text-white'>EXPLORER</h4>
            <p onClick={()=>setPortfolioOpen(!portfolioOpen)} className='mt-5'>
                <span>
                    <FontAwesomeIcon
                        icon={faChevronDown}
                        style={!portfolioOpen ? { transform: 'rotate(-90deg)',color:'white',transition:'transform 0.2s' } : {color:'white'}}
                    />
                </span>
                <span className='font-bold ml-2 text-white'>PORTFOLIO</span>
            </p>
            <div style={portfolioOpen?{display:'block'}:{display:'none'}} className='ml-5 mt-2'>
                <Link href="/">
                    <div className='flex items-center mt-1 text-white cursor-pointer'>
                        <Image
                            src="/react_icon.svg"
                            alt="React Icon"
                            height={18}
                            width={18}
                        />
                        <p className='ml-2'>home.jsx</p>
                    </div>
                </Link>
                <Link href="/about">
                    <div className='flex items-center mt-1 text-white cursor-pointer'>
                        <Image
                            src="/html_icon.svg"
                            alt="React Icon"
                            height={18}
                            width={18}
                        />
                        <p className='ml-2'>about.html</p>
                    </div>
                </Link>
                <Link href="/contact">
                    <div className='flex items-center mt-1 text-white cursor-pointer'>
                        <Image
                            src="/css_icon.svg"
                            alt="React Icon"
                            height={18}
                            width={18}
                        />
                        <p className='ml-2'>contact.css</p>
                    </div>
                </Link>
                <Link href="/projects">
                    <div className='flex items-center mt-1 text-white cursor-pointer'>
                        <Image
                            src="/js_icon.svg"
                            alt="React Icon"
                            height={18}
                            width={18}
                        />
                        <p className='ml-2'>projects.js</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Explorer