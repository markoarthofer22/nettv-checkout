import React from 'react';
import './popup.scss';

const Popup = ({ handleClose, children }) => {
    return (
        <div className="popup">
            <div className="popup-window">
                {children}
                <div onClick={() => handleClose(false)} className="popup-btn"></div>
            </div>
        </div>
    );
};

export default Popup;
