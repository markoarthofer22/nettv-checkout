import React, { useEffect, useState } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import { setCurrentNavigationStep } from "../../../../redux/navigation-steps/steps.actions";
import { resetToInitialValues } from "../../../../redux/pricingTab/pricingTab.actions";
import { currentPricing } from "../../../../redux/pricingTab/pricingTab.selectors";
//styles
import "./paymentinfo.scss";

// components
import Button from "../../../../components/buttons/button.component";
import SvgIcon from "../../../../components/svg-icon/svg-icon.component";
import InputComponent from "../../../../components/input/input.component";

//hooks
import useForm from "react-hook-form";

const PaymentInfo = (props) => {
    const dispatch = useDispatch();
    const currentPriceValues = useSelector(currentPricing);
    const { register, handleSubmit, errors } = useForm();
    const [phoneNumber, setPhoneNumber] = useState();
    const [countryName, setCountryName] = useState();
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const handleData = (_data, e) => {
        e.preventDefault();
        setIsButtonDisabled(true);
    };

    const goToPreviousStep = () => {
        dispatch(setCurrentNavigationStep(2));
        const initialPricing = {
            currency: currentPriceValues.currency,
            headerValues: {
                name: currentPriceValues.headerValues.name,
                price: currentPriceValues.headerValues.price
            }
        };
        dispatch(resetToInitialValues(initialPricing));
    };
    return (
        <section className="payment-info">
            <div className="main-content">
                <div className="main-content--form">
                    <form noValidate={true} onSubmit={handleSubmit(handleData)} className="form-group" autoComplete="1">
                        <div className="form-item-container">
                            <div className={`form-item-floating ${errors.firstname && "invalid"}`}>
                                <InputComponent name="firstname" labelText="Ime" errorMessage={errors.firstname} register={register} required={{ required: "Ovo polje je obavezno" }} />
                            </div>

                            <div className={`form-item-floating ${errors.lastname && "invalid"}`}>
                                <InputComponent name="lastname" labelText="Prezime" errorMessage={errors.lastname} register={register} required={{ required: "Ovo polje je obavezno" }} />
                            </div>
                        </div>

                        <div className="form-item-container">
                            <div className={`form-item-floating ${errors.email && "invalid"}`}>
                                <InputComponent
                                    name="email"
                                    labelText="Email"
                                    errorMessage={errors.email}
                                    register={register}
                                    required={{
                                        required: "Ovo polje je obavezno",
                                        pattern: {
                                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                            message: "Molimo unesite valjanu e-mail adresu!"
                                        }
                                    }}
                                />
                            </div>
                            <div className="form-item-floating">
                                <span className="form-notice-text">Podatke o email-u i lozinki koje uneseš ovde koristićeš za pristup NetTV Plus uslugama</span>
                            </div>
                        </div>

                        <div className="form-item-container">
                            <div className={`form-item-floating ${errors.password && "invalid"}`}>
                                <InputComponent name="password" labelText="Lozinka" errorMessage={errors.password} register={register} required={{ required: "Ovo polje je obavezno" }} />
                            </div>

                            <div className={`form-item-floating ${errors.passwordRepeat && "invalid"}`}>
                                <InputComponent
                                    name="passwordRepeat"
                                    labelText="Ponovi lozinku"
                                    errorMessage={errors.passwordRepeat}
                                    register={register}
                                    required={{ required: "Ovo polje je obavezno" }}
                                />
                            </div>
                        </div>
                    </form>
                </div>

                <div className="main-content--actions-box">
                    <button onClick={(e) => goToPreviousStep(e)} className="button-back">
                        <SvgIcon icon="icon-arrow-left-1" />
                        <span className="button-name">Nazad</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PaymentInfo;
