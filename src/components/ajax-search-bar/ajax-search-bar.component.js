import React, { useState, useRef, useEffect } from 'react';
import './ajax-search-bar.scss';
import { Link } from 'react-router-dom';
import SvgIcon from '../svg-icon/svg-icon.component';
import { AjaxLoaderBallDrop } from './ajax-loader.component';
import mainApi from '../../redux/apis/main-api';

import { CSSTransition } from 'react-transition-group';
import Popup from '../popup/popup.component';
import CardSmall from '../cards/card-small.component';

const AjaxSearchBar = props => {
    const [isResultsVisible, setIsResultsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [responseData, setResponseData] = useState([]);
    const [isOpen, setOpen] = useState(false);
    const searchInput = useRef();

    let handler;

    const checkIsInputValid = target => {
        if (target.length > 1) {
            setIsResultsVisible(true);
        } else {
            setIsResultsVisible(false);
        }

        return target.length > 1;
    };

    const search = input => {
        clearTimeout(handler);

        const inputValue = input.target.value;

        let obj = {
            postType: 'event',
            s: inputValue
        };

        handler = setTimeout(() => {
            if (checkIsInputValid(inputValue)) {
                setIsLoading(true);
                mainApi
                    .post(`/search?/`, obj)
                    .then(response => {
                        setIsLoading(false);
                        setResponseData(response.data.data);
                        clearTimeout(handler);
                    })
                    .catch(error => {
                        setIsLoading(false);
                        clearTimeout(handler);
                    });
            }
        }, 500);
    };

    const clearInput = input => {
        input.target.value = '';
    };

    useEffect(() => {
        if (searchInput.current) searchInput.current.focus();
    }, [isOpen]);

    return (
        <div className="ajax-search">
            <button className="search-bar-button" aria-label="Search" onClick={() => setOpen(true)}>
                <SvgIcon icon="povecalo" />
            </button>

            <CSSTransition in={isOpen} timeout={200} classNames="slide-in" unmountOnExit>
                <Popup class="slide-in" closePopup={() => setOpen(false)}>
                    <div className="search-container">
                        <div className="flat-icon"></div>
                        <h3 className="title bold">Search events</h3>
                        <div className="input-holder">
                            <input
                                readOnly={isLoading}
                                name="searchbar"
                                onBlur={e => clearInput(e)}
                                onKeyUp={e => search(e)}
                                className="search-field"
                                type="text"
                                autoComplete="off"
                                ref={searchInput}
                            />

                            <label htmlFor="searchbar" className="placeholder">
                                Event name
                            </label>
                        </div>

                        <div className={`results-view ${!isResultsVisible ? 'hidden' : ''}`}>
                            {isLoading ? (
                                <div className="ajax-loader">
                                    <AjaxLoaderBallDrop />
                                </div>
                            ) : (
                                <div className={`events-holder ${responseData.length === 0 ? 'empty' : ''}`}>
                                    {responseData.length > 0 ? (
                                        <>
                                            <h4 className="title">
                                                We found <span className="result">{responseData.length}</span> results
                                            </h4>
                                            <div className="row">
                                                {responseData.map((item, index) => {
                                                    return (
                                                        <div className="col-sm-12" key={index}>
                                                            <CardSmall item={item} />
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <h5 className="title">Event not found</h5>
                                            <h6 className="text-center">Please try with a different keyword</h6>
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </Popup>
            </CSSTransition>
        </div>
    );
};

export default AjaxSearchBar;
