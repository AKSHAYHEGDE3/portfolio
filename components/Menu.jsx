import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '../styles/menu.module.css'
import Link from 'next/link';


const Menu = ({ icon, filename, path }) => {

    const router = useRouter();

    return (
        <>
            <Link href={path}>
                <div className={`${styles.menu} ${router.pathname === path && styles.active}`}>
                    <Image src={icon} alt={filename} height={18} width={18} />
                    <p className='ml-1'>{filename}</p>
                </div>
            </Link>
        </>
    )
}

export default Menu