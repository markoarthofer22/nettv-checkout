import React, { useState, useEffect } from "react";
import Select from "../select/select.component";
import "./input-phone.scss";
// const countries = require('../../JSON/countries_list.json');

const InputTypePhone = ({ returnInputValue, register, required, name, errorMessage, countriesList }) => {
    const [countriesID, setCountriesID] = useState();
    const [countriesName, setCountriesName] = useState();
    const [countriesNumber, setCountriesNumber] = useState();
    const [inputValue, setInputValue] = useState("");

    const returnValueFromSelect = (name, value, valueNumber) => {
        setCountriesName(name);
        setCountriesID(value);
        setCountriesNumber(valueNumber);
    };

    const checkForCountryPhone = (countryID) => {
        if (countryID === undefined && countriesNumber === undefined) {
            return;
        }
        setInputValue(`+${countriesNumber}`);
    };

    useEffect(() => {
        checkForCountryPhone(countriesID);
    }, [countriesID]);

    useEffect(() => {
        if (inputValue) {
            document.getElementById("countries").focus();
            returnInputValue(countriesID, inputValue, countriesName);
        }
    }, [inputValue]);

    const setInput = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <>
            <label htmlFor={name} className="floating-name">
                Broj telefona
            </label>
            <div className="form-item-phone">
                <Select data={countriesList} placeholder="Odaberi državu" selectClass="select-countries" returnValue={returnValueFromSelect} isSearchable />
                <div className="countries-input-holder">
                    <input
                        type="text"
                        className={errorMessage && "invalid"}
                        error={errorMessage && errorMessage.message}
                        id="countries"
                        required
                        name={name}
                        autoComplete="off"
                        ref={register ? register({ ...required }) : null}
                        value={inputValue}
                        onChange={(e) => setInput(e)}
                    />
                    <span name={name} error={errorMessage && errorMessage.message} />
                </div>
            </div>
        </>
    );
};

export default InputTypePhone;
