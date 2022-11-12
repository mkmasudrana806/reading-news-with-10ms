import React from 'react';
import owner from '../../owner.png';
import './Owner.css';
const Owner = () => {
    return (
        <div>
           <div className='owner-info'>
           <img className='owner-image' src={owner} alt="" />
           <div>
            <h4 className='owner-name'>Masud Rana</h4>
            <p>Enginering student</p>
           </div>
           </div>
        </div>
    );
};

export default Owner;