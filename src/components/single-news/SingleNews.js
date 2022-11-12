import React from 'react';
import './SingleNews.css';
const SingleNews = (props) => {
    console.log(props.news);
    const {type,title,details,image,date,reading_time,id} = props.news;
    return (
        <div className='single-news'>
            <div>
            <img src={image} alt="" />
            <h3>Type: {type}</h3>
            <h4 className='text-ellipsis-1'>{title}</h4>
            <p className='text-ellipsis-2'>{details}</p>
            <p><b>Published Date:</b> {date}</p>
            <p><b>Read in: {reading_time}min</b></p>
            <button>Read</button>
            </div>
        </div>
    );
};

export default SingleNews;