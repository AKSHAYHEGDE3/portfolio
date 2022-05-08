import React from 'react'
import styles from '../styles/contact.module.css'

const Social = () => {
    return (
        <div className={styles.social}>
            <p className={`text-2xl font-bold text-white mb-3`}>Reach Out Via Socials</p>
            <p className='text-[#f9826c] text-lg font-bold'>{`.socials `}<span className='text-white'>{`{`}</span></p>
            <p className='my-1'>
                <span className={`${styles.media} text-white font-bold`}>&nbsp;&nbsp;&nbsp;linkedin: </span>
                <span className='text-[#f9826c] font-bold'>
                    <a className={styles.links} href="https://www.linkedin.com/in/akshay-hegde-47ba05206/" target="_blank" rel="noopener  noreferrer">
                    akshay-hegde
                    </a>
                </span>
                <span className='text-white font-bold'>;</span>
            </p>
            <p className='my-1'>
                <span className={`${styles.media} text-white font-bold`}>&nbsp;&nbsp;&nbsp;instagram: </span>
                <span className='text-[#f9826c] font-bold'>
                    <a className={styles.links} href="https://www.instagram.com/akshayhegde3/" target="_blank" rel="noopener  noreferrer">
                        akshayhegde3
                    </a>
                </span>
                <span className='text-white font-bold'>;</span>
            </p>
            <p className='my-1'>
                <span className={`${styles.media} text-white font-bold`}>&nbsp;&nbsp;&nbsp;twitter: </span>
                <span className='text-[#f9826c] font-bold'>
                    <a className={styles.links} href="https://twitter.com/AkshayHegde39" target="_blank" rel="noopener  noreferrer">
                    AkshayHegde39
                    </a>
                </span>
                <span className='text-white font-bold'>;</span>
            </p>
            <p className='my-1'>
                <span className={`${styles.media} text-white font-bold`}>&nbsp;&nbsp;&nbsp;github: </span>
                <span className='text-[#f9826c] font-bold'>
                    <a className={styles.links} href="https://github.com/AKSHAYHEGDE3" target="_blank" rel="noopener  noreferrer">
                    AKSHAYHEGDE3
                    </a>
                </span>
                <span className='text-white font-bold'>;</span>
            </p>
            <p className='my-1'>
                <span className={`${styles.media} text-white font-bold`}>&nbsp;&nbsp;&nbsp;mail: </span>
                <span className='text-[#f9826c] font-bold'>
                    <a className={styles.links} href="/" target="_blank" rel="noopener  noreferrer">
                    AkshayHegde39
                    </a>
                </span>
                <span className='text-white font-bold'>;</span>
            </p>
            <p className='my-1'>
                <span className={`${styles.media} text-white font-bold`}>&nbsp;&nbsp;&nbsp;whatsapp: </span>
                <span className='text-[#f9826c] font-bold'>
                    <a className={styles.links} href="/" target="_blank" rel="noopener  noreferrer">
                    7756944608
                    </a>
                </span>
                <span className='text-white font-bold'>;</span>
            </p>
            <p className='text-white text-lg font-bold'>{`}`}</p>
        </div>
    )
}

export default Social