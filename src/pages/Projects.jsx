import React from 'react'
import { projects } from '../assets/assets'
import { ProjectCard } from '../myComponents/projectCard/ProjectCard'
import { Title } from '../myComponents/commonTitle/Title'

const Projects = () => {
    return (
        <div className='allProjects'>
            <Title text={'Projects'}/>
            <div className="container projects my-11">
                {
                    projects.map((pro,i)=> <ProjectCard project={pro} key={i}/>)
                }
            </div>
        </div>
    )
}

export default Projects