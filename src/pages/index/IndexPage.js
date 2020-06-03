import React, { useEffect } from "react";
import Helmet from "react-helmet";
//redux
import { useDispatch, useSelector } from "react-redux";
import { withRouter, useParams } from "react-router-dom";
import { getDataForURL, setIsLoading } from "../../redux/globals/globals.actions";
import { selectPageData } from "../../redux/globals/globals.selectors";
import { selectCurrentStep } from "../../redux/navigation-steps/steps.selectors";
import { setCurrentNavigationStep } from "../../redux/navigation-steps/steps.actions";

//styles
import "./indexpage.scss";

//components
import NoPage from "../404/no-page.component";
import Container from "../../components/layout/container.component";
import ContainerFull from "../../components/layout/container-full.component";
import PackagesForm from "./FormSteps/Packages/Packages.form";
import SidePanel from "./SidePanel/sidePanel.component";
import PaymentInfo from "./FormSteps/PaymentInfo/paymentInfo.form";
import SubscriptionPlans from "./FormSteps/OptionPlans/subscriptionPlans.form";

const IndexPage = (props) => {
    const { history } = props;
    const data = useSelector(selectPageData);
    const { id } = useParams();
    const langCode = "de";
    const currentStep = useSelector(selectCurrentStep);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setIsLoading(false));
    }, [dispatch]);

    useEffect(() => {
        if (id) {
            dispatch(setCurrentNavigationStep("add"));
            dispatch(getDataForURL(history.location.pathname));
        } else {
            dispatch(getDataForURL(`products/?lang_code=${langCode}`));
        }
    }, [id, langCode]);

    const selectActiveStep = (_step, _response) => {
        let step = _step;

        switch (step) {
            case 1:
                return <SubscriptionPlans data={_response} />;
                break;

            case 2:
                return <PackagesForm data={_response} />;
                break;

            case 3:
                return <PackagesForm data={_response} />;

                break;
            case 4:
                return <PaymentInfo data={_response} />;

                break;

            default:
                return null;
                break;
        }
    };

    return !data.isError ? (
        <section className="index-page">
            <Helmet>
                <title>NetTVPlus</title>
            </Helmet>
            <ContainerFull>
                <div className={`form-holder ${currentStep === 1 ? "homepage" : ""}`}>
                    <div className={`form-holder--steps`}>{selectActiveStep(currentStep, data.response)}</div>
                </div>

                {currentStep > 1 && (
                    <div className="side-panel-holder">
                        <SidePanel />
                    </div>
                )}
            </ContainerFull>
        </section>
    ) : (
        <NoPage />
    );
};

export default withRouter(IndexPage);
