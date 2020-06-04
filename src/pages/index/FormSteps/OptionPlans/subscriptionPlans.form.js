import React, { useEffect, useState } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import { setCurrentNavigationStep } from "../../../../redux/navigation-steps/steps.actions";
import { getDataForURL } from "../../../../redux/globals/globals.actions";

//styles
import "./subscriptionPlans.scss";

// components
import Button from "../../../../components/buttons/button.component";
import SvgIcon from "../../../../components/svg-icon/svg-icon.component";
import { Link, useParams, useHistory } from "react-router-dom";
import Container from "../../../../components/layout/container.component";

const SubscriptionPlans = (props) => {
    const history = useHistory();
    const [data, setData] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        let url = `/products/${history.location.search}`;
        dispatch(getDataForURL(url)).then((response) => {
            setData(response.data);
        });
    }, []);

    const selectNewPackage = (e) => {
        e.preventDefault();
        let packageID = e.currentTarget.getAttribute("packageid");
        let packageLangCode = e.currentTarget.getAttribute("langCode");

        let url = `/products/code/${packageLangCode ? `?lang_code=${packageLangCode}` : history.location.search}&product_code=${packageID}`;
        history.push(url);
        dispatch(setCurrentNavigationStep("add"));
    };

    return (
        <section className="subscription-plans">
            <Container>
                <div className="main-content">
                    <h3 className="page-title-long">Izaberi paket</h3>
                    <div className={`subscription-cards ${data && data.length === 4 ? "four-columns" : "three-columns"}`}>
                        {data &&
                            data.map((item, index) => {
                                const { title, meta } = item;
                                const { attributes, base_price, currency, market, product_code, language_code } = meta;

                                return (
                                    <div className={`subscription-card gradient${index}`} key={index}>
                                        <div className="subscription-card--header">
                                            <span className={`title color${index}`}>{title}</span>

                                            <span className="price">
                                                {base_price} {currency}
                                            </span>
                                        </div>

                                        <div className="subscription-card--content">
                                            {attributes.map((item, index) => (
                                                <div className="option" key={index}>
                                                    <SvgIcon icon="icon-gear-b" />
                                                    <span className="value">{item}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="subscription-card--actions">
                                            <Button
                                                title="Naruči"
                                                customClass="button-blue"
                                                clicked={(e) => selectNewPackage(e)}
                                                attributes={{
                                                    packageid: product_code,
                                                    langCode: language_code,
                                                }}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>
                <div className="notification-box">
                    <ul className="notification-box--list">
                        <li className="notification-box--list-item">Usluga NetTV Plusa nije dostupna na teritoriji EX-Yu.</li>
                        <li className="notification-box--list-item">
                            Tehničke podatke u vezi sa pristupom NetTV Plus usluzi i njenim korišćenjem možeš pronaći <Link to="https://nettvplus.com/Pomoc/Sistemski-Zahtevi/a30565-Sistemski-zahtevi.html">ovde</Link>.
                        </li>
                        <li className="notification-box--list-item">Sve cene iskazane su sa uračunatim porezom.</li>
                    </ul>
                </div>
            </Container>
        </section>
    );
};

export default SubscriptionPlans;
