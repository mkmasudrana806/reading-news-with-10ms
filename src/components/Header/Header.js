import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faNewspaper } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className='header-sectoin'>
            <h2 className='heading'>
                <FontAwesomeIcon icon={faNewspaper}></FontAwesomeIcon> 10Min News Portal</h2>
            <div className='header-option'>
                <a href="#Home">Home</a>
                <a href="#About">About</a>
                <a href="#Contact">Contact</a>
            </div>
        </div>
    );
};

export default Header;