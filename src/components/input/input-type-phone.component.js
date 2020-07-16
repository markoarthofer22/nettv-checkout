import React, { useState, useEffect } from "react";
import Select from "../select/select.component";
import "./input-phone.scss";
import _ from "underscore";

const InputTypePhone = ({ id, predefinedDialValue, predefinedValue, returnInputValue, register, required, name, errorMessage, countriesList }) => {
    const [countriesID, setCountriesID] = useState();
    const [countriesName, setCountriesName] = useState();
    const [countriesDial, setCountriesDial] = useState();
    const [inputValue, setInputValue] = useState("");

    const returnValueFromSelect = (name, value, valueNumber) => {
        setCountriesName(name);
        setCountriesID(value);
        setCountriesDial(valueNumber);
    };

    const checkForCountryPhone = (countryID) => {
        if (countryID === undefined && countriesDial === undefined) {
            return;
        }
        setInputValue(`+${countriesDial}`);
    };

    useEffect(() => {
        if (predefinedValue && predefinedDialValue) {
            let country = _.find(countriesList, (item) => item.dialing_code == predefinedDialValue);
            setCountriesID(country.iso);
            setCountriesName(country.country);
            setCountriesDial(country.dialing_code);
            setInputValue(predefinedValue);
        }
    }, [predefinedValue, predefinedDialValue]);

    useEffect(() => {
        if (predefinedValue && predefinedDialValue) return;
        checkForCountryPhone(countriesID);
    }, [countriesID]);

    useEffect(() => {
        if (inputValue) {
            document.getElementById(`${id ? id : "countries"}`).focus();
            if (returnInputValue) {
                returnInputValue(countriesID, countriesDial, countriesName);
            }
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
                <Select
                    title={predefinedDialValue && predefinedValue && countriesName}
                    data={countriesList}
                    placeholder="Odaberi državu"
                    selectClass={`select-countries ${Boolean(predefinedValue) ? "disabled" : ""}`}
                    returnValue={returnValueFromSelect}
                    isSearchable
                />
                <div className="countries-input-holder">
                    <input
                        disabled={Boolean(predefinedValue)}
                        type="text"
                        className={errorMessage && "invalid"}
                        error={errorMessage && errorMessage.message}
                        id={`${id ? id : "countries"}`}
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
