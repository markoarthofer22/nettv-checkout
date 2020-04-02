import React, { useEffect } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import { setCurrentNavigationStep } from "../../../../redux/navigation-steps/steps.actions";

//styles
import "./subscriptionPlans.scss";

// components
import Button from "../../../../components/buttons/button.component";
import SvgIcon from "../../../../components/svg-icon/svg-icon.component";
import { Link } from "react-router-dom";
import Container from "../../../../components/layout/container.component";

const SubscriptionPlans = props => {
  return (
    <section className="subscription-plans">
      <Container>
        <div className="main-content">
          <h3 className="page-title-long">Izaberi paket</h3>
          <div className="subscription-cards">
            <div className="subscription-card gradient0">
              <div className="subscription-card--header">
                <span className="title green">BASIC</span>

                <span className="price">15,90 EUR</span>
              </div>
            </div>
          </div>
        </div>
        <div className="notification-box">
          <ul className="notification-box--list">
            <li className="notification-box--list-item">
              Usluga NetTV Plusa nije dostupna na teritoriji EX-Yu.
            </li>
            <li className="notification-box--list-item">
              Tehničke podatke u vezi sa pristupom NetTV Plus usluzi i njenim
              korišćenjem možeš pronaći{" "}
              <Link to="https://nettvplus.com/Pomoc/Sistemski-Zahtevi/a30565-Sistemski-zahtevi.html">
                ovde
              </Link>
              .
            </li>
            <li className="notification-box--list-item">
              Sve cene iskazane su sa uračunatim porezom.
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default SubscriptionPlans;
