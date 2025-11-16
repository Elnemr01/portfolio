import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './card.css'
import React from 'react'

export const ProjectCard = ({project}) => {
    return (
        <div className="card">
            <div className="data">
                <h1 className="name">{project.name}</h1>
                <div className="description">
                    {
                        project.description.map((des,i)=> <p key={i}>{des}</p>)
                    }
                </div>
                <div className="btns">
                    {project.demo && <a className='demo' href={project.demo} target='_blank'>
                        <FontAwesomeIcon icon={faExternalLinkAlt}/>
                        <span>live preview</span>
                    </a>}
                    {project.repo && <a className='repo' href={project.repo} target='_blank'>
                        <FontAwesomeIcon icon={faGithub}/>
                        <span>gihub repo</span>
                    </a>}
                </div>
            </div>
        </div>
    )
}
