import React, { useEffect } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import { setCurrentNavigationStep } from "../../../../redux/navigation-steps/steps.actions";

//styles
import "./paymentinfo.scss";

// components
import Button from "../../../../components/buttons/button.component";
import SvgIcon from "../../../../components/svg-icon/svg-icon.component";
import { Link } from "react-router-dom";

const PaymentInfo = props => {
  const dispatch = useDispatch();

  const goForward = _type => {
    dispatch(setCurrentNavigationStep("add"));
  };

  const goBack = _type => {
    dispatch(setCurrentNavigationStep("subtract"));
  };

  return (
    <section className="payment-info">
      <h1>Payment</h1>
      <div className="main-content">
        <div className="main-content--actions-box">
          <button onClick={e => console.log(e)} className="button-back">
            <SvgIcon icon="icon-arrow-left-1" />
            <span className="button-name">Nazad</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PaymentInfo;
