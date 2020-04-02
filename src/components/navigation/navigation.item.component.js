/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.scss';

const NavigationItem = ({ item }) => {
    const [isOpen, setOpen] = useState(false);
    const [isNodesOpen, toggleSecondNav] = useState(false);

    const onMouseOver = e => {};

    const onMouseOut = e => {};

    const onClick = () => {
        setOpen(!isOpen);
    };

    const toggleNodes = e => {
        e.preventDefault();
        toggleSecondNav(!isNodesOpen);
    };

    let CustomComponent = false;
    let linkTo = true;

    return (
        // <li onClick={onClick} className={(isOpen ? 'open' : null) || (isNodesOpen ? 'open-box' : null)} onMouseEnter={props.item.children || CustomComponent ? onMouseOver : null} onMouseLeave={props.item.children || CustomComponent ? onMouseOut : null}>
        <li
            onClick={onClick}
            className={(isOpen ? 'open' : null) || (isNodesOpen ? 'open-box' : null)}
            onMouseEnter={item.children || CustomComponent ? onMouseOver : null}
            onMouseLeave={item.children || CustomComponent ? onMouseOut : null}
        >
            {linkTo && (
                <NavLink exact to={item.link}>
                    {item.name}
                    {(item.children || CustomComponent) && (
                        <div className="box">
                            <div
                                className="opener"
                                onClick={e => {
                                    toggleNodes(e);
                                }}
                            />
                        </div>
                    )}
                </NavLink>
            )}

            {!linkTo && (
                <a>
                    {item.title}
                    {(item.children || CustomComponent) && (
                        <div className="box">
                            <div
                                className="opener"
                                onClick={e => {
                                    toggleNodes(e);
                                }}
                            />
                        </div>
                    )}
                </a>
            )}

            {item.children && (
                <ul>
                    {item.children.map((item, index) => {
                        return <NavigationItem key={index} item={item} />;
                    })}
                </ul>
            )}
        </li>
    );
};

export default NavigationItem;
