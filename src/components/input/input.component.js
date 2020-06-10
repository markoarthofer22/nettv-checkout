/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Tooltip from "../tooltip/tooltip.component";

import "./input.scss";

const InputComponent = ({ type, name, inputClass, required, errorMessage, register, labelText, onEveryChange, inputValue, tooltip, disabled }) => {
    return (
        <>
            <label htmlFor={name ? name : null} className={`floating-label ${tooltip ? "flexed" : ""}`}>
                {labelText} {tooltip && <Tooltip title={tooltip} styles="custom-tooltip" />}
            </label>
            <input
                type={type ? type : "text"}
                disabled={disabled}
                required
                name={name ? name : null}
                autoComplete="0"
                className={`${inputClass ? inputClass : "input-default"} ${errorMessage && "invalid"}`}
                error={errorMessage ? errorMessage.message : null}
                value={inputValue ? inputValue.toString() : undefined}
                ref={register ? register({ ...required }) : null}
                onChange={(e) => (onEveryChange ? onEveryChange(e) : null)}
            />
            {errorMessage && <span name={name ? name : null} error={errorMessage && errorMessage.message} />}
        </>
    );
};

export default InputComponent;
