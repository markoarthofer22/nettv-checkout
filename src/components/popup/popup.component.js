import React, { useEffect } from 'react';
import SvgIcon from '../svg-icon/svg-icon.component';
import './popup.scss';

const Popup = props => {
    const { closePopup, children, customClassName } = props;

    useEffect(() => {
        function closeOnEsc(e) {
            if (e.keyCode === 27) {
                closePopup();
            }
        }

        document.addEventListener('keydown', closeOnEsc);
        return () => {
            document.removeEventListener('keydown', closeOnEsc);
        };
    }, [closePopup]);

    function handleClose(e) {
        if (e.target.id === 'popup' && closePopup) closePopup();
        else return;
    }

    return (
        <div id="popup" className={`popup ${customClassName}`} onClick={handleClose}>
            <div className="window">
                {closePopup && (
                    <button className="close-button close" onClick={e => closePopup()}>
                        <SvgIcon icon="icon-ios-close-empty" />
                    </button>
                )}
                {children}
            </div>
        </div>
    );
};

export default Popup;
