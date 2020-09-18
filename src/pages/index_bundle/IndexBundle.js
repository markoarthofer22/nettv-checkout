import React, { useState, useEffect } from "react";
import Helmet from "react-helmet";
import { CSSTransition } from "react-transition-group";

//redux
import axios from "../../redux/apis/main-api";
import { useDispatch } from "react-redux";
import { withRouter, useHistory } from "react-router-dom";
import { setIsLoading, setHeaderType, setUserTZ, setUserIP, setUserOriginCountry } from "../../redux/globals/globals.actions";
import { setInitialValues } from "../../redux/pricingTab/pricingTab.actions";
import { setCurrentNavigationStep } from "../../redux/navigation-steps/steps.actions";

//styles
import "../index/indexpage.scss";

//components
import ContainerFull from "../../components/layout/container-full.component";
import SidePanel from "../index/SidePanel/sidePanel.component";
import GlobalLoader from "../../components/loaders/global.loader.component";
import BundlePayout from "./BundlePayout/BundlePayout.form";
import Dialog from "../../components/dialog/dialog.component";
const IndexBundle = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const queryString = require("query-string");
    const [cssTransitionIsOpen, setCssTransitionIsOpen] = useState(false);
    const [bundleError, setBundleError] = useState({
        isDialogOpen: false,
        title: "",
        message: ""
    });
    const [isViewVisible, setIsViewVisible] = useState(false);

    useEffect(() => {
        dispatch(setIsLoading(false));
    }, [dispatch]);

    useEffect(() => {
        const promiseFunction = new Promise((resolve) => {
            setCssTransitionIsOpen(false);
            resolve();
        });

        promiseFunction.then(() => {
            setCssTransitionIsOpen(true);
        });
    }, []);

    useEffect(() => {
        let queryParams = queryString.parse(history.location.search);

        if (queryParams.hash !== undefined && queryParams.hash !== "") {
            dispatch(setHeaderType("bundle"));
            dispatch(setCurrentNavigationStep(1));
            mapBundleData(queryParams.hash);
        } else {
            window.location = "https://sbb-shop.ea93.work/paketi";
        }
    }, [history.location]);

    const mapBundleData = (_hash) => {
        axios
            .get(`/products/bundle`, {
                params: {
                    hash: _hash,
                    lang_code: localStorage.getItem("lang_code")
                }
            })
            .then((response) => {
                setIsViewVisible(true);
                const data = response.data;
                const {
                    variation_name,
                    contract_duration,
                    duration_id,
                    expenses,
                    pricing,
                    subscription_duration,
                    total_saving,
                    total_sum_discount,
                    total_sum_no_discount,
                    variation_id,
                    is_promotion,
                    has_box,
                    contract_duration_tooltip
                } = data.variation[0];

                dispatch(setUserIP(data.origin));
                dispatch(setUserTZ(data.originTZ));
                dispatch(setUserOriginCountry(data.originCountry.toLowerCase()));

                const initialPricing = {
                    currency: data.meta.currency,
                    productCountryCode: data.meta.language_code,
                    mainProductId: data.meta.product_code,
                    variationProductId: variation_id,
                    variationProductName: variation_name,
                    variantDurationID: duration_id,
                    paymentType: has_box ? "plan_box" : "plan_variation",
                    headerValues: {
                        name: data.title,
                        price: data.meta.base_price,
                        subscriptionDuration: subscription_duration,
                        contractLength: contract_duration,
                        contractLengthText: contract_duration_tooltip,
                        isPromotion: is_promotion
                    },

                    paymentValues: {
                        subscriptionFullPrice: pricing.subscription_price,
                        subscriptionDiscountPrice: pricing.subscription_discount_price,
                        boxPrice: pricing.box_price,
                        boxPriceDiscount: pricing.box_discount_price,
                        additionalExpenses: expenses,
                        totalPrice: total_sum_discount ? total_sum_discount : total_sum_no_discount,
                        totalDiscount: total_saving
                    },
                    available: {
                        availableDevices: has_box ? [...data.meta.additional.devices, "box"] : data.meta.additional.devices,
                        features: data.meta.additional.features
                    }
                };

                dispatch(setInitialValues(initialPricing));
            })
            .catch((error) => {
                if (error) {
                    setIsViewVisible(false);
                    setBundleError({
                        isDialogOpen: true,
                        title: error.response.data.msg,
                        message: "Paket nije pronađen, bit ćete preusmjereni na stranicu paketa!"
                    });
                }
            });
    };

    return (
        <>
            <GlobalLoader />
            <section className="index-page">
                <Helmet>
                    <title>NetTVPlus | Bundle</title>
                </Helmet>
                <ContainerFull>
                    <div className={`form-holder full-width`}>
                        {isViewVisible && (
                            <CSSTransition
                                in={cssTransitionIsOpen}
                                timeout={500}
                                classNames={{
                                    enterActive: "animate__fadeIn",
                                    exitActive: "animate__fadeOut"
                                }}
                                unmountOnExit
                            >
                                <div className={`form-holder--steps  animate__animated`}>
                                    <BundlePayout />
                                </div>
                            </CSSTransition>
                        )}
                    </div>

                    <div className="side-panel-holder">
                        <SidePanel />
                    </div>
                </ContainerFull>
            </section>
            <Dialog
                title={bundleError.title}
                message={bundleError.message}
                isShowing={bundleError.isDialogOpen}
                okCallback={() => {
                    window.location = "https://sbb-shop.ea93.work/paketi";
                }}
            />
        </>
    );
};

export default withRouter(IndexBundle);
