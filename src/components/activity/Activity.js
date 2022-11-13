import React from 'react';
import { act } from 'react-dom/test-utils';
import Owner from '../Owner/Owner';
import './Activity.css';
const Activity = (props) => {
    // array destructure and reading time calculate 
    const {activity} = props;
    let reading_time = 0;
for(const news of activity){
    reading_time = reading_time + parseInt(news.reading_time);
}
    return (
        <div>
            <div className='activity-info'>
                <Owner></Owner>
            <div className='activity'>
                <h4><span>75</span>kg weight</h4>
                <h4><span>6.5</span> Height</h4>
                <h4><span>25</span>yrs age</h4>
            </div>
            <h3>Add A Break time</h3>
            <div className='break-time'>
                <h4>10m</h4>
                <h4>15m</h4>
                <h4>20m</h4>
                <h4>25m</h4>
            </div>
            <div className='reading-time'>
            <h3 >Reading Time Details</h3>
           <div className='reading'>
            <h4><span>Reading Time</span></h4>
            <h4>{reading_time}min</h4>
           </div>
        <div className='break'>
            <h4><span>Break Time</span></h4>
            <h4>15min</h4>
        </div>
            </div>
<button className='btn-activity-completed'>Activity Compeleted</button>
            </div>
        </div>
    );
};

export default Activity;