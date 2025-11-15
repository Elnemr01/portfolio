import React from 'react'
import './heroStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudDownload, faDownload, faFileDownload } from '@fortawesome/free-solid-svg-icons'
import { assets } from '../../assets/assets'

export const Hero = () => {
    return (
        <div className='hero'>
            <div className="container grid-Container">
                <div className="info">
                    <h1 className="name">Ahmed Abdo Elnemr</h1>
                    <h2 className="job">frontend developer</h2>
                    <p className="small-description">
                        I am interested in web development and skilled at building interactive and responsive web applications
                    </p>
                    <div className="download-resume">
                        <FontAwesomeIcon icon={faCloudDownload} className='download-icon'/>
                        <span>download resume</span>
                    </div>
                </div>
                <div className="picture flex justify-center items-center">
                    <img src={assets.darkLogo} alt="my personal picture" loading='lazy'/>
                </div>
            </div>
        </div>
    )
}
