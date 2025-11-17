import React from 'react'
import './heroStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudDownload, faDownload, faFileDownload, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { assets, personalData } from '../../assets/assets'

export const Hero = () => {
    return (
        <div className='hero'>
            <div className="container grid-Container">
                <div className="info">
                    <h1 className="name">{personalData.name}</h1>
                    <h2 className="job">{personalData.position}</h2>
                    <p className="small-description">
                        I am interested in web development and skilled at building interactive and responsive web applications
                    </p>
                    <a className="download-resume" href='/ahmed-elnemr-frontend.pdf' target='_blank'>
                        <FontAwesomeIcon icon={faFilePdf} className='download-icon'/>
                        <span>view resume</span>
                    </a>
                </div>
                <div className="picture flex justify-center items-center">
                    <img src={assets.personal} alt="my personal picture" loading='lazy'/>
                </div>
            </div>
        </div>
    )
}
