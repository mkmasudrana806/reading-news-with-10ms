import React, { useEffect, useState } from 'react';
import Activity from '../activity/Activity';
import Article from '../articles/Article';
import News from '../News/News';
import './Portal.css';

const Portal = () => {
    // fake data load from json file
    const [allNews, setNews] = useState([]);
    const [activity, setActivity] = useState([]);
    useEffect( () => {
        fetch('news.json')
        .then(res => res.json())
        .then(data => setNews(data))
    }, [])

    // activity handle,when user press click read,then set new array
    const handleToActivity = (news) => {
        let newActivity = [];
        const exits = activity.find( activitynews => activitynews.id===news.id);
        // if not exits then added it to newActivity
       if(!exits){
           newActivity = [...activity, news];
           setActivity(newActivity);
       }
    }

    return (
        <div className='portal'>
            <div className='news-section'>
                <h2>Explore Awesome News</h2>
                <div className='news-container'>
               {
                allNews.map( news => <News 
                news={news}
                key={news.id}
                addToActivity={() => handleToActivity(news)}
                ></News>)
               }
                </div>
               <Article></Article>
            </div>
            <div className='selected-news-activity'>
                <div className='activity-container'>
                    <Activity activity={activity}></Activity>
                </div>
            </div>
        </div>
    );
};

export default Portal;