import React from 'react'
import { Title } from '../myComponents/commonTitle/Title'
import { personalData } from '../assets/assets'
import './pageStyle/about.css'
import { Contact } from '../myComponents/contact/Contact'

export const About = () => {
    return (
        <div className='about'>
            <Title text={'About'}/>
            <div className="container">
                <div className="main-info">
                    <h1 className="name">{personalData.name}</h1>
                    <h2>{personalData.position}</h2>
                    <h3 className='education'>Education : {personalData.education}</h3>
                    <p className="description">{personalData.description}</p>
                    <div className="experience">
                        <h3>experience :</h3>
                        {
                            personalData.experience.map((e,i)=> <p key={i}>- {e}</p>)
                        }
                    </div>
                </div>
            </div>
            <Contact/>
        </div>
    )
}
