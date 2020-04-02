import React from 'react';
import './hamburger.scss';

const Hamburger = props => {
    const { hamburgerClass, isOpen, onClickHandler } = props;

    return (
        <div
            className={`${hamburgerClass ? hamburgerClass : 'openMenu'} ${isOpen ? 'open' : ''}`}
            onClick={e => {
                onClickHandler(e);
            }}
        >
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Hamburger;
