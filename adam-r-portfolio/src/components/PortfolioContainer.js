import React, { useState } from 'react';
import Navbar from './Navbar';
import About from './About';
import Project from './Project';
import Contact from './Contact';
import Resume from './Resume';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Project')
            return <Project />;
        if (currentPage === 'Contact')
            return <Contact />;
        return <Resume />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            {renderPage()}
        </div>
    );
}

