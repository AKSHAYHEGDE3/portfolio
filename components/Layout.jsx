import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import vs from '../public/vs_code_icon.png'
import insta_icon from '../public/insta.svg'
import linkedin_icon from '../public/linkedin.png'
import github_icon from '../public/github.png'
import twitter_icon from '../public/twitter.png'
import Navbar from './Navbar'
import Explorer from './Explorer'

const Layout = ({children}) => {
    return (
        <div className={styles.home}>
            <div className="flex h-[30px] bg-[#1f2428] px-4 py-1">
                <Image src={vs} width={20} style={{ height: '20px !important' }} />
                <p className='mx-auto text-white'>Akshay Hegde - Portfolio</p>
                <div className='flex h-[20px]'>
                    <div className='rounded-[50%] bg-yellow-400 h-[20px] w-[20px] mx-1'></div>
                    <div className='rounded-[50%] bg-red-600 h-[20px] w-[20px] mx-1'></div>
                    <div className='rounded-[50%] bg-green-500 h-[20px] w-[20px] mx-1'></div>
                </div>
            </div>
            <div style={{ height: "calc(100vh - 55px)" }} className={`flex `} >
                <div className={`bg-[#333333] w-[4.5vw] lg:p-3 sm:p-1 ${styles.media}`}>
                    <a href="https://www.instagram.com/akshayhegde3/" target="_blank" rel="noopener noreferrer"><div className='mt-3 cursor-pointer'><Image src={insta_icon} /></div></a>
                    <a href="https://www.linkedin.com/in/akshay-hegde-47ba05206/" target="_blank" rel="noopener noreferrer"><div className='mt-4 cursor-pointer'><Image src={linkedin_icon} /></div></a>
                    <a href="https://github.com/AKSHAYHEGDE3" target="_blank" rel="noopener noreferrer"><div className='mt-4 cursor-pointer'><Image src={github_icon} /></div></a>
                    <a href="https://twitter.com/AkshayHegde39" target="_blank" rel="noopener noreferrer"><div className='mt-4 cursor-pointer'><Image src={twitter_icon} /></div></a>
                </div>
                <div className={`${styles.explo} bg-[#252526] w-[15vw] p-2 `}>
                    <Explorer />
                </div>
                <div className={`bg-[#1e1e1e] w-[80.5vw] ${styles.main}`}>
                    <Navbar />
                   <main>{children}</main>
                </div>
            </div>
            <div className={`flex justify-between h-[3.5%] bg-[#007acc] px-4 text-white position: fixed; bottom-0 ${styles.footer} `}>
                <p>&copy; all rights reserved</p>
                <p>Thank You for visiting</p>
                <p>
                  powered by Next.Js
                </p>
            </div>
        </div>
    )
}

export default Layout