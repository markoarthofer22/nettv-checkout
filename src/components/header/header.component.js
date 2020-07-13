import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

// styles
import "./header.scss";

// redux
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentStep } from "../../redux/navigation-steps/steps.selectors";
import { setCurrentNavigationStep } from "../../redux/navigation-steps/steps.actions";
import Logo from "../../../public/assets/nettv-logo.svg";

const Header = (props) => {
    const history = useHistory();
    const currentStep = useSelector(selectCurrentStep);
    const dispatch = useDispatch();

    return (
        <>
            <header className="header">
                <a href="https://sbb-shop.ea93.work/">
                    <img src={Logo} alt="Logo" className="logo" />
                </a>
            </header>
            <div className="navigation-bar">
                <ul className="navigation-bar--list">
                    <li className={`navigation-bar--list-item ${currentStep === 1 ? "active" : currentStep > 1 ? "completed" : ""}`}>
                        <span className="name">Paketi</span>
                    </li>
                    <li className={`navigation-bar--list-item ${currentStep === 2 ? "active" : currentStep > 2 ? "completed" : ""}`}>
                        <span className="name">Uređaji</span>
                    </li>
                    <li className={`navigation-bar--list-item ${currentStep === 3 ? "active" : currentStep > 3 ? "completed" : ""}`}>
                        <span className="name">Pretplata</span>
                    </li>
                    <li className={`navigation-bar--list-item ${currentStep === 4 ? "active" : currentStep > 4 ? "completed" : ""}`}>
                        <span className="name">Podaci</span>
                    </li>
                    <li className={`navigation-bar--list-item ${currentStep === 5 ? "active" : currentStep > 5 ? "completed" : ""}`}>
                        <span className="name">Plaćanje</span>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Header;
