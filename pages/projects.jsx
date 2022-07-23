import React from 'react'
import ProjectCard from '../components/ProjectCard'
import styles from '../styles/project.module.css'
import { projectLists } from '../data'

const projects = () => {
  return (
    <div className={`p-5 px-8 ${styles.main}`}>
        <h2 style={{fontFamily:'JetBrains Mono,monospace'}} className='text-white text-2xl font-bold'>
            Look What I&apos;ve Built
        </h2>
        <div className={` ${styles.contain} flex flex-wrap mt-5 `}>
          {
            projectLists.map((project,index)=>{
              return <ProjectCard key={index} project={project} />
            })
          }
        </div>
    </div>
  )
}

export default projects