import React from 'react';
import '../styles/styles.css';
import sleepshop from '../assets/sleepshop.jpg';


function Project() {
    return (
        <div className="projectcontainer">
            <h2>Projects:</h2>
            <div className="grid-container">
                <div className="grid-item" style={{ backgroundImage: `url(${sleepshop})` }}></div>
                
            </div>
        </div>
    );
}

export default Project;