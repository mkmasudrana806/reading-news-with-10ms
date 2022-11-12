import React from 'react';
import News from '../News/News';
import Owner from '../Owner/Owner';
import './Portal.css';

const Portal = () => {
    return (
        <div className='portal'>
            <div className='news-section'>
                <h2>Explore Awesome News</h2>
            <News></News>
            </div>
            <div className='selected-news-activity'>
                <div className='activity-container'>
                    <Owner></Owner>
                </div>
            </div>
        </div>
    );
};

export default Portal;