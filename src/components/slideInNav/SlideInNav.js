import React, { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import Navigation from '../navigation/navigation.component';
import FlagDropdown from '../flagDropdown/FlagDropdown';
import './slideinnav.scss';

const SlideInNav = ({ isOpen, handleClose }) => {
    useEffect(() => {
        document.addEventListener('keydown', handleClose);
        return () => {
            document.removeEventListener('keydown', handleClose);
        };
    }, [handleClose]);
    return (
        <CSSTransition in={isOpen} classNames="slide-in-nav" timeout={500} unmountOnExit>
            <div onClick={handleClose} className="slide-in-nav">
                <nav>
                    <div className="bar"></div>
                    <FlagDropdown />
                    <Navigation />
                </nav>
            </div>
        </CSSTransition>
    );
};

export default SlideInNav;
