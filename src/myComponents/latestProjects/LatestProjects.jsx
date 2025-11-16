import React from 'react'
import { Title } from '../commonTitle/Title'
import { projects } from '../../assets/assets'
import { ProjectCard } from '../projectCard/ProjectCard'
import { Link } from 'react-router'

export const LatestProjects = () => {
    return (
        <div className='latest-projects'>
            <Title text={'Latest projects'}/>
            <div className="container projects my-12">
                {
                    projects.slice(0,3).map((pro,i)=>
                        <ProjectCard project={pro} key={i}/>
                    )
                }
            </div>
        </div>
    )
}
