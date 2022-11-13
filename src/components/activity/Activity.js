import React, { useState } from 'react';
import Owner from '../Owner/Owner';
import './Activity.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Activity = (props) => {
    const {activity} = props;
    let reading_time = 0;
for(const news of activity){
    reading_time = reading_time + parseInt(news.reading_time);
}
//when use click break time,then below code will execute
const [breakTime, setBreakTime] = useState(0);
const handleClick = (event)=> {
   const newBreakTime = parseInt(event.target.innerText);
    setBreakTime(newBreakTime);
  }
//toast message
const showToastMessage = () => {
    toast.success('Activity Completed Successful!', {
    });
}
    return (
        <div>
            <div className='activity-info'>
                <Owner></Owner>
            <div className='activity'>
                <h4><span>55</span>kg weight</h4>
                <h4><span>5.9</span> Height</h4>
                <h4><span>21</span>yrs age</h4>
            </div>
            <h3>Add A Break time</h3>
            <div id='break-time' className='break-time'>
                <h4 onClick={handleClick}>10m</h4>
                <h4 onClick={handleClick}>15m</h4>
                <h4 onClick={handleClick}>20m</h4>
                <h4 onClick={handleClick}>25m</h4>
            </div>
            <div className='reading-time'>
            <h3 >Reading Time Details</h3>
           <div className='reading'>
            <h4><span>Reading Time</span></h4>
            <h4>{reading_time} min</h4>
           </div>
        <div className='break'>
            <h4><span>Break Time</span></h4>
            <h4>{breakTime} min</h4>
        </div>
            </div>
<div>
<button onClick={showToastMessage}
 className='btn-activity-completed'>Activity Compeleted</button>
  <ToastContainer />
</div>
            </div>
        </div>
    );
};

export default Activity;