import React, {useState, useEffect} from 'react';
import Select from '../select/select.component';
import './input-phone.scss';
const countries = require('../../JSON/countries_list.json');

const InputTypePhone = ({returnInputValue, register, required, name, errorMessage}) => {
    const [countriesID, setCountriesID] = useState();
    const [countriesName, setCountriesName] = useState();
    const [inputValue, setInputValue] = useState('');

    const returnValueFromSelect = value => {
        setCountriesID(value);
    };

    const checkForCountryPhone = countryID => {
        if (countryID === undefined) {
            return;
        }
        let result = countries.options.find(item => {
            return item.value === countryID;
        });

        setCountriesName(result.name);
        setInputValue(countries.callNumber[countryID]);
    };

    useEffect(() => {
        checkForCountryPhone(countriesID);
    }, [countriesID]);

    useEffect(() => {
        if (inputValue) {
            document.getElementById('countries').focus();
            returnInputValue(`${countriesID};${inputValue}`, countriesName);
        }
    }, [inputValue]);

    const setInput = e => {
        setInputValue(e.target.value);
    };

    return (
        <>
            <Select data={countries.options} placeholder="Choose Country" selectClass="select-countries" returnValue={returnValueFromSelect} isSearchable />
            <div className="countries-input-holder">
                <input
                    type="text"
                    className={errorMessage && 'invalid'}
                    error={errorMessage && errorMessage.message}
                    id="countries"
                    required
                    name={name}
                    autoComplete="off"
                    ref={register ? register({...required}) : null}
                    value={inputValue}
                    onChange={e => setInput(e)}
                />
                <label htmlFor={name} className="floating-name">
                    Your number
                </label>
                <span name={name} error={errorMessage && errorMessage.message} />
            </div>
        </>
    );
};

export default InputTypePhone;
