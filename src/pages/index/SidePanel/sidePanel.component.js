import React, { useEffect, useState } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import { currentPricing } from "../../../redux/pricingTab/pricingTab.selectors";

//styles
import "./sidePanel.scss";

// components
import Tooltip from "../../../components/tooltip/tooltip.component";
import SvgIcon from "../../../components/svg-icon/svg-icon.component";

const SidePanel = (props) => {
    const dispatch = useDispatch();
    const currentPrices = useSelector(currentPricing);

    return (
        <section className="sidePanel">
            <div className="side-panel-box">
                <div className="package-section">
                    <p className="cart-title">Izabrani paket</p>
                    <div className="cart-row">
                        <p className="package-name">{currentPrices.headerValues.name}</p>
                        <p className="package-price">
                            {currentPrices.headerValues.price} <span className="currency">{currentPrices.currency}</span>
                        </p>
                    </div>
                    <div className="cart-row">
                        <p className="light-cart-text">Trajanje pretplate</p>
                        <p className="item-value">
                            {!currentPrices.headerValues.subscriptionDuration
                                ? "-"
                                : parseInt(currentPrices.headerValues.subscriptionDuration) > 0
                                ? currentPrices.headerValues.subscriptionDuration
                                : "-"}{" "}
                            {!currentPrices.headerValues.subscriptionDuration || parseInt(currentPrices.headerValues.subscriptionDuration) < 1
                                ? ""
                                : parseInt(currentPrices.headerValues.subscriptionDuration) > 21
                                ? "meseca"
                                : "meseci"}
                        </p>
                    </div>
                    <div className="cart-row">
                        <p className="light-cart-text">
                            Ugovorna obaveza
                            <Tooltip title="Ponuda važi uz ugovornu obavezu od 24m" styles="custom-tooltip" />
                        </p>
                        <p className="item-value">
                            {!currentPrices.headerValues.contractLength ? "-" : parseInt(currentPrices.headerValues.contractLength) > 0 ? currentPrices.headerValues.contractLength : "-"}{" "}
                            {!currentPrices.headerValues.contractLength || parseInt(currentPrices.headerValues.contractLength) < 1
                                ? ""
                                : parseInt(currentPrices.headerValues.contractLength) > 21
                                ? "meseca"
                                : "meseci"}
                        </p>
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

                        {!currentPrices.paymentValues.subscriptionFullPrice && !currentPrices.paymentValues.subscriptionDiscountPrice && <p className="item-value">-</p>}
                        {currentPrices.paymentValues.subscriptionFullPrice && !currentPrices.paymentValues.subscriptionDiscountPrice && (
                            <p className="item-value">
                                {parseFloat(currentPrices.paymentValues.subscriptionFullPrice).toFixed(2)} {currentPrices.currency}
                            </p>
                        )}
                        {currentPrices.paymentValues.subscriptionFullPrice &&
                            currentPrices.paymentValues.subscriptionDiscountPrice &&
                            (parseFloat(currentPrices.paymentValues.subscriptionFullPrice).toFixed(2) !== parseFloat(currentPrices.paymentValues.subscriptionDiscountPrice).toFixed(2) ? (
                                <p className="item-value">
                                    <span className="no-discount">
                                        {parseFloat(currentPrices.paymentValues.subscriptionFullPrice).toFixed(2)} {currentPrices.currency}
                                    </span>
                                    <span className="discount-price">
                                        {parseFloat(currentPrices.paymentValues.subscriptionDiscountPrice).toFixed(2)} {currentPrices.currency}
                                    </span>
                                </p>
                            ) : (
                                <p className="item-value">
                                    {parseFloat(currentPrices.paymentValues.subscriptionDiscountPrice).toFixed(2)} {currentPrices.currency}
                                </p>
                            ))}
                    </div>
                    <div className="cart-row">
                        <p className="light-cart-text">BOX</p>
                        {!currentPrices.paymentValues.boxPrice && !currentPrices.paymentValues.boxPriceDiscount && <p className="item-value">-</p>}
                        {currentPrices.paymentValues.boxPrice && !currentPrices.paymentValues.boxPriceDiscount && (
                            <p className="item-value">
                                {parseFloat(currentPrices.paymentValues.boxPrice).toFixed(2)} {currentPrices.currency}
                            </p>
                        )}
                        {currentPrices.paymentValues.boxPrice &&
                            currentPrices.paymentValues.boxPriceDiscount &&
                            (parseFloat(currentPrices.paymentValues.boxPrice).toFixed(2) !== parseFloat(currentPrices.paymentValues.boxPriceDiscount).toFixed(2) ? (
                                <p className="item-value">
                                    <span className="no-discount">
                                        {parseFloat(currentPrices.paymentValues.boxPrice).toFixed(2)} {currentPrices.currency}
                                    </span>
                                    <span className="discount-price">
                                        {parseFloat(currentPrices.paymentValues.boxPriceDiscount).toFixed(2)} {currentPrices.currency}
                                    </span>
                                </p>
                            ) : (
                                <p className="item-value">
                                    {parseFloat(currentPrices.paymentValues.boxPriceDiscount).toFixed(2)} {currentPrices.currency}
                                </p>
                            ))}
                    </div>
                    <div className={`cart-row ${currentPrices.paymentValues.additionalExpenses ? "two-row" : ""}`}>
                        <p className="light-cart-text" style={{ marginBottom: 10 + "px" }}>
                            Dodatni troškovi
                        </p>
                        {!currentPrices.paymentValues.additionalExpenses && <p className="item-value">-</p>}
                        {currentPrices.paymentValues.additionalExpenses &&
                            currentPrices.paymentValues.additionalExpenses.activation_price &&
                            (parseFloat(currentPrices.paymentValues.additionalExpenses.activation_price) > 0 ? (
                                <div className="sub-item-value">
                                    <span className="name">- Aktivacija</span>{" "}
                                    <span className="value">
                                        {parseFloat(currentPrices.paymentValues.additionalExpenses.activation_price).toFixed(2)} {currentPrices.currency}
                                    </span>
                                </div>
                            ) : (
                                <div className="sub-item-value">
                                    <span className="name">- Aktivacija</span> <span className="value">-</span>
                                </div>
                            ))}

                        {currentPrices.paymentValues.additionalExpenses &&
                            currentPrices.paymentValues.additionalExpenses.delivery_price &&
                            (parseFloat(currentPrices.paymentValues.additionalExpenses.delivery_price) > 0 ? (
                                <div className="sub-item-value">
                                    <span className="name">- Dostava</span>{" "}
                                    <span className="value">
                                        {parseFloat(currentPrices.paymentValues.additionalExpenses.delivery_price).toFixed(2)} {currentPrices.currency}
                                    </span>
                                </div>
                            ) : (
                                <div className="sub-item-value">
                                    <span className="name">- Dostava</span> <span className="value">-</span>
                                </div>
                            ))}
                    </div>
                </div>

                <div className="package-section total">
                    <div className="cart-row">
                        <p className="cart-title">Ukupno</p>
                        {currentPrices.paymentValues.totalPrice && (
                            <p className="item-value">
                                {parseFloat(currentPrices.paymentValues.totalPrice).toFixed(2)} {currentPrices.currency}
                            </p>
                        )}

                        {!currentPrices.paymentValues.totalPrice && <p className="item-value">-</p>}
                    </div>

                    {currentPrices.paymentValues.totalDiscount && parseFloat(currentPrices.paymentValues.totalDiscount) > 0 && (
                        <div className="cart-row blue">
                            <p className="cart-title">Uštedeli ste</p>
                            <p className="item-value">
                                {parseFloat(currentPrices.paymentValues.totalDiscount).toFixed(2)} {currentPrices.currency}
                            </p>
                        </div>
                    )}
                </div>

                <div className="cart-row">
                    <p className="notice">*Cene su sa uključenim VAT-om</p>
                </div>
            </div>
        </section>
    );
};

export default SidePanel;
