import React, { useEffect, useState } from 'react';
import SingleNews from '../single-news/SingleNews';
import './News.css';

const News = () => {
    const [allNews, setNews] = useState([]);
    useEffect( () => {
        fetch('news.json')
        .then(res => res.json())
        .then(data => setNews(data))
    }, [])
    return (
        <div className='news-container'>
            {
                allNews.map( news => <SingleNews news={news}></SingleNews>)
            }
        </div>
    );
};

export default News;