import React, {useState, useEffect} from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import './side-panel.scss';
import SvgIcon from '../svg-icon/svg-icon.component';
import Hamburger from '../navigation/hamburger.component';

const SidePanel = props => {
    const [isNavOpen, setIsNavOpen] = useState(true);
    const history = useHistory();

    const toggleNav = e => {
        const target = e.target;
        e.stopPropagation();
        if (target.matches('.slide-in-nav') || e.keyCode === 27) {
            setIsNavOpen(!isNavOpen);
        }
    };

    const menu = [
        {
            ID: 1,
            name: 'Dashboard',
            link: '/',
            icon: 'dashboard'
        },
        {
            ID: 2,
            name: 'Računi',
            link: '/documents',
            icon: 'invoice'
        },
        {
            ID: 3,
            name: 'Ponude',
            link: '/offers',
            icon: 'invoice'
        },
        {
            ID: 4,
            name: 'Stranke',
            link: '/clients',
            icon: 'rokovnik'
        },
        {
            ID: 5,
            name: 'Artikli',
            link: '/products',
            icon: 'products'
        },
        {
            ID: 6,
            name: 'Putni nalozi',
            link: '/travel-expenses',
            icon: 'knjigica'
        }
    ];

    return (
        <div className={`side-panel ${isNavOpen ? 'open' : ''}`}>
            <div className="user flex v-align">
                <a href="/">
                    <div
                        id="user-logo"
                        className="user-logo"
                        style={{
                            backgroundImage: 'url(/assets/no-user-image.png)'
                        }}
                    ></div>
                </a>

                <div className="user-info">
                    <div className="user-drop rel">
                        <span className="dropdown" data-open="user-options">
                            Bok, user
                        </span>
                    </div>
                </div>
                <Hamburger isOpen={isNavOpen} onClickHandler={() => setIsNavOpen(!isNavOpen)} />
            </div>

            <ul className="nav-secondary">
                {menu.map(menuItem => {
                    return (
                        <li key={menuItem.ID} className="">
                            <NavLink to={menuItem.link}>
                                <SvgIcon icon={menuItem.icon} /> {menuItem.name}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
            <div className="respond-to"></div>
        </div>
    );
};

export default SidePanel;
