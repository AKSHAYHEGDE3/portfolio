import React,{useState} from 'react'
import styles from '../styles/project.module.css'
import Image from 'next/image'

const ProjectCard = ({project}) => {
  const [hovered,setHovered]=useState(false)
  return (
    <div style={hovered?{boxShadow: `${project.color} 0px 5px 15px`}:{}} className={styles.projectCard}
    onMouseOver={()=>setHovered(true)}
    onMouseOut={()=>setHovered(false)}
    >
      <img src={project.img} className={styles.projectImg}></img>
      <p style={{ color: project.color,fontWeight:'700' }} className='mt-2 text-lg text-center'>
        {project.title}
      </p>
      <p style={{ color: project.color }} className='w-[80%] mx-auto mt-2 h-[15%]'>
        {project.desc}
      </p>
      <div className={`flex justify-center ${styles.bttns}`}>
        <a href={project.demo} target="_blank" rel="noopener noreferrer"><button style={{ color: 'white', backgroundColor: project.color }} className={`${styles.btns} rounded-full text-center p-2 px-4 border-0 mx-2`}>Live Demo</button></a>
        <a href={project.code} target="_blank" rel="noopener noreferrer"><button style={{ color: project.color, border: `1px solid ${project.color}` }} className={`${styles.btns} rounded-full text-center p-2 px-4 mx-2`}>Source Code</button></a>
      </div>
    </div>
  )
}

export default ProjectCard