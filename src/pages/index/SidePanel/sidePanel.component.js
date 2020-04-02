import React, { useEffect } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";

//styles
import "./sidePanel.scss";

// components
import Tooltip from "../../../components/tooltip/tooltip.component";
import SvgIcon from "../../../components/svg-icon/svg-icon.component";

const SidePanel = props => {
  const dispatch = useDispatch();

  return (
    <section className="sidePanel">
      <div className="side-panel-box">
        <div className="package-section">
          <p className="cart-title">Izabrani paket</p>
          <div className="cart-row">
            <p className="package-name">STANDARD</p>
            <p className="package-price">
              19,90 <span className="currency">EUR</span>
            </p>
          </div>
          <div className="cart-row">
            <p className="light-cart-text">Trajanje pretplate</p>
            <p className="item-value">-</p>
          </div>
          <div className="cart-row">
            <p className="light-cart-text">
              Ugovorna obaveza
              <Tooltip
                title="Ponuda važi uz ugovornu obavezu od 24m"
                styles="custom-tooltip"
              />
            </p>
            <p className="item-value">-</p>
          </div>
        </div>

        <div className="package-section devices">
          <p className="cart-title">Dostupno na uređajima</p>
          <div className="devices-icons">
            <ul className="devices-icons--list">
              <li className="devices-icons--list-item">
                <SvgIcon icon="icon-instagram" iconclass="" />
                <span className="title">SMART TV</span>
              </li>
              <li className="devices-icons--list-item">
                <SvgIcon icon="icon-instagram" iconclass="" />
                <span className="title">RAČUNAR</span>
              </li>
            </ul>
          </div>

          <div className="cart-row">
            <p className="light-cart-text">Gledaj istovremeno na</p>
            <p className="item-value">2 UREĐAJA</p>
          </div>
          <div className="cart-row">
            <p className="light-cart-text">Instaliraj EON aplikaciju na</p>
            <p className="item-value">6 UREĐAJA</p>
          </div>
        </div>

        <div className="package-section payments">
          <p className="cart-title">Odmah za plaćanje</p>

          <div className="cart-row">
            <p className="light-cart-text">Pretplata</p>
            <p className="item-value">-</p>
          </div>
          <div className="cart-row">
            <p className="light-cart-text">BOX</p>
            <p className="item-value">-</p>
          </div>
          <div className="cart-row">
            <p className="light-cart-text">Dodatni troškovi</p>
            <p className="item-value">-</p>
          </div>
        </div>

        <div className="package-section total">
          <div className="cart-row">
            <p className="cart-title">Ukupno</p>
            <p className="item-value">-</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SidePanel;
