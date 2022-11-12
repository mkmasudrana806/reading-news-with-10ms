import React from 'react';
import Owner from '../Owner/Owner';
import './Activity.css';
const Activity = () => {
    return (
        <div>
            <div className='activity'>
            <div className='owner-info'>
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
            </div>
        </div>
    );
};

export default Activity;