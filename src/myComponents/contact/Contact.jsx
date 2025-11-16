import React from 'react';
import { Title } from '../commonTitle/Title';
import './style_con.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faFacebookF, 
    faLinkedinIn, 
    faInstagram, 
    faWhatsapp, 
    faGithub 
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { contact } from '../../assets/assets';

export const Contact = () => {

    return (
        <div className='contact'>
            <Title text={'Contact'} />
            <div className="contact-container">
                <a href={contact.facebook} target="_blank" rel="noopener noreferrer" className="contact-icon">
                    <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="contact-icon">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="contact-icon">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="contact-icon">
                    <FontAwesomeIcon icon={faWhatsapp} />
                </a>
                <a href={contact.gmail} target="_blank" rel="noopener noreferrer" className="contact-icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
                <a href={contact.github} target="_blank" rel="noopener noreferrer" className="contact-icon">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
        </div>
    );
};
