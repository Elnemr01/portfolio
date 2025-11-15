import React from 'react'
import './style.css'
import { Title } from '../commonTitle/Title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrain, faCode, faGaugeHigh, faLaptopCode, faLink, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons'

export const WhatICanDo = () => {
    return (
        <section className='mySection'>
            <Title text={'What I can do'}/>
            <div className="skills container">
                <div className="item">
                    <h1>
                        <FontAwesomeIcon icon={faLaptopCode} className='icon'/> 
                        <span>Responsive Web Design</span>
                    </h1>
                    <p>I craft responsive layouts that adapt beautifully to any device.</p>
                </div>
                {/* item 2 */}
                <div className="item">
                    <h1>
                        <FontAwesomeIcon icon={faCode} className='icon'/> 
                        <span>Frontend Development</span>
                    </h1>
                    <p>Building interactive UIs using React, HTML, CSS, and JavaScript.</p>
                </div>
                {/* item 3 */}
                <div className="item">
                    <h1>
                        <FontAwesomeIcon icon={faGaugeHigh} className='icon'/>
                        <span>Performance Optimization</span>
                    </h1>
                    <p>I focus on writing clean code and optimizing for speed and accessibility.</p>
                </div>
                {/* item 4 */}
                <div className="item">
                    <h1>
                        <FontAwesomeIcon icon={faLink} className='icon'/>
                        <span>API Integration</span>
                    </h1>
                    <p>Seamlessly connecting frontend interfaces with backend data.</p>
                </div>
                {/* item 5 */}
                <div className="item">
                    <h1>
                        <FontAwesomeIcon icon={faPuzzlePiece} className='icon'/> 
                        <span>Component-Based Architecture</span>
                    </h1>
                    <p>Creating reusable, maintainable React components.</p>
                </div>
                {/* item 6 */}
                <div className="item">
                    <h1>
                        <FontAwesomeIcon icon={faBrain} className='icon'/> 
                        <span>Continuous Learning</span>
                    </h1>
                    <p>I stay up-to-date with the latest frontend technologies and trends.</p>
                </div>
            </div>
        </section>
    )
}
