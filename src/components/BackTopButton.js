import React, { useState, useEffect } from 'react';

function BackTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            console.log(window.pageYOffset)
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <div className={`back-top-button ${isVisible ? 'show' : ''}`} onClick={scrollToTop}>
            <i className="fa fa-angle-up" />
            <div className="back-to-top-text">TOP</div>
        </div>
    );
}

export default BackTopButton;
