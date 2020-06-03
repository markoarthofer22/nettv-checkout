import React, { useEffect } from "react";
import Helmet from "react-helmet";

//redux
import { useDispatch, useSelector } from "react-redux";
import { withRouter, useHistory } from "react-router-dom";
import { setIsLoading } from "../../redux/globals/globals.actions";
import { selectAllCountryIDs } from "../../redux/globals/globals.selectors";
import { selectCurrentStep } from "../../redux/navigation-steps/steps.selectors";
import { setCurrentNavigationStep } from "../../redux/navigation-steps/steps.actions";

//styles
import "./indexpage.scss";

//components
import NoPage from "../404/no-page.component";
import ContainerFull from "../../components/layout/container-full.component";
import PackagesForm from "./FormSteps/Packages/Packages.form";
import SidePanel from "./SidePanel/sidePanel.component";
import PaymentInfo from "./FormSteps/PaymentInfo/paymentInfo.form";
import SubscriptionPlans from "./FormSteps/OptionPlans/subscriptionPlans.form";

const IndexPage = (props) => {
  const history = useHistory();
  const currentStep = useSelector(selectCurrentStep);
  const dispatch = useDispatch();
  const queryString = require("query-string");

  useEffect(() => {
    dispatch(setIsLoading(false));
  }, [dispatch]);

  useEffect(() => {
    let queryParams = queryString.parse(history.location.search);

    if (!queryParams.lang_code || queryParams.lang_code === "") {
      console.log("nema lang code");
      queryParams = {
        ...queryParams,
        lang_code: "other",
      };

      let url = `${history.location.pathname}?${queryString.stringify(
        queryParams
      )}`;
      history.push(url);
    }
  }, []);

  useEffect(() => {
    let queryParams = queryString.parse(history.location.search);

    if (
      queryParams.product_code !== undefined &&
      queryParams.product_code !== ""
    ) {
      dispatch(setCurrentNavigationStep(2));
    } else {
      dispatch(setCurrentNavigationStep(1));
    }
  }, []);

  const selectActiveStep = (_step) => {
    let step = _step;

    switch (step) {
      case 1:
        return <SubscriptionPlans />;
        break;

      case 2:
        return <PackagesForm />;
        break;

      case 3:
        return <PackagesForm />;

        break;
      case 4:
        return <PaymentInfo />;

        break;

      default:
        return null;
        break;
    }
  };

  return (
    <section className="index-page">
      <Helmet>
        <title>NetTVPlus</title>
      </Helmet>
      <ContainerFull>
        <div className={`form-holder ${currentStep === 1 ? "homepage" : ""}`}>
          <div className={`form-holder--steps`}>
            {selectActiveStep(currentStep)}
          </div>
        </div>

        {currentStep > 1 && (
          <div className="side-panel-holder">
            <SidePanel />
          </div>
        )}
      </ContainerFull>
    </section>
  );
};

export default withRouter(IndexPage);
