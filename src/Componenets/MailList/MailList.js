import React from 'react';
import  "./MailList.css"

const mailList = () => {
    return (
        <div className='mail'>
        <h1 className='mailTitle'>Save time,save money!</h1>
         <span>Sign Up and We"ll send the best deals to you.</span>   
        <div className="mailInputContainer">
        <input type="text"  placeholder='Your Email'/>
        <button>Subscribe</button>
        
        </div>
         </div>
    );
};

export default mailList;