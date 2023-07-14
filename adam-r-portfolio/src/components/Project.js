import React from 'react';
import '../styles/styles.css';
import githubLogo from '../assets/github-mark.svg';
import sleepshop from '../assets/sleepshop.jpg';
import socialmedia from '../assets/socialmedia.jpg';
import notetaker from '../assets/notetaker.jpg';

function Project() {
    return (
        <div className="projectcontainer">
            <h2>Projects:</h2>
            <div className="grid-container">
                <div className="grid-item" style={{ backgroundImage: `url(${sleepshop})` }}>
                    <a href="https://github.com/Luis6400/SleepShop" target="_blank" rel="noopener noreferrer" className="github-link">
                        <img src={githubLogo} alt="GitHub Logo" className="github-logo" />
                    </a>
                    <a href="https://sleepshop.herokuapp.com/login" target="_blank" rel="noopener noreferrer" className="project-title">sleepshop</a>
                </div>
                <div className="grid-item" style={{ backgroundImage: `url(${socialmedia})` }}>
                    <a href="https://github.com/Adam-Riet/Social-Network-API" target="_blank" rel="noopener noreferrer" className="github-link">
                        <img src={githubLogo} alt="GitHub Logo" className="github-logo" />
                    </a>
                </div>
                <div className="grid-item" style={{ backgroundImage: `url(${notetaker})` }}>
                    <a href="https://note-taker-express-v1.herokuapp.com/notes" target="_blank" rel="noopener noreferrer" className="github-link">
                        <img src={githubLogo} alt="GitHub Logo" className="github-logo" />
                    </a>
                    <a href="https://github.com/Adam-Riet/Note-Taker" target="_blank" rel="noopener noreferrer" className="project-title">Note Taker</a>
                </div>

            </div>
            
            
        </div>
    );
}
 

export default Project;