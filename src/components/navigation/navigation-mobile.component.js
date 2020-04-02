import React, { useState } from 'react';
import Navigation from '../navigation/navigation.component';
import { useSelector } from 'react-redux';
import { selectLanguages } from '../../redux/globals/globals.selectors';

import './navigation-mobile.scss';

const NavigationMobile = ({ children }) => {
    const languages = useSelector(selectLanguages);

    return (
        <>
            <div className="nav-holder">
                <ul className={`flagdrop-list`}>
                    {languages &&
                        languages.map(item => {
                            return (
                                <li
                                    key={item.lang}
                                    className="flagdrop-item"
                                    onClick={() => {
                                        //   setActiveFlag(item.lang);
                                        localStorage.setItem('lang', item.lang);
                                    }}
                                >
                                    <a href={`${item.link}`}>
                                        <img src={`/assets/flags/${item.lang}.jpg`} alt={item.lang} />
                                        <span>{item.name}</span>
                                    </a>
                                </li>
                            );
                        })}
                </ul>

                <Navigation />
            </div>
        </>
    );
};

export default NavigationMobile;
