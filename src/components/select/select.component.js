import React, { useState, useEffect, useRef } from "react";
import _ from "underscore";
import SvgIcon from "../svg-icon/svg-icon.component";
import "./select.scss";

const Select = ({ title, data, selectClass, placeholder, label, returnValue, isSearchable }) => {
    const [isOpen, setOpen] = useState(false);
    const [selectedTitle, setSelectedTitle] = useState("");
    const [selectData, setSelectData] = useState(data);
    const searchInput = useRef();
    const mainInput = useRef();

    useEffect(() => {
        setSelectedTitle(title);
    }, [title]);

    useEffect(() => {
        /* if (isOpen) {
            searchInput.current.focus();
        } */

        function handleClickOutside(e) {
            if (mainInput.current.contains(e.target)) {
                // inside click
                return;
            }
            // outside click
            setOpen(false);
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    const toggleDropdown = (e) => {
        setOpen(!isOpen);
    };

    const selectItem = (e, name, value, valueNumber) => {
        e.stopPropagation();
        setOpen(false);
        setSelectedTitle(name);
        returnValue(name, value, valueNumber);
    };

    const searchTroughSelectData = (e) => {
        if (e.target.value.length !== 0) {
            let res = data.filter((item) => new RegExp(e.target.value, "i").test(item.country));
            setSelectData(res);
        } else {
            setSelectData(data);
        }
    };

    return (
        <div className={`select ${selectClass}`} ref={mainInput}>
            {/* <label className="select-label">{label}</label> */}
            <div
                className={`select-header ${isOpen ? "open" : ""} `}
                onClick={() => {
                    toggleDropdown();
                }}
            >
                {selectedTitle ? <div className="selected-item-title">{selectedTitle ? selectedTitle : ""}</div> : <div className="placeholder">{placeholder ? placeholder : ""}</div>}
                <SvgIcon iconclass={`icon-swiper-arrow ${isOpen ? "open" : ""} `} icon="icon-swiper-arrow" />
            </div>
            <div className={`select-list ${isOpen ? "open" : ""}`}>
                {isSearchable && (
                    <input ref={searchInput} type="text" autoComplete="off" name="search-select" id="search-select" className="search-select" onChange={(e) => searchTroughSelectData(e)} />
                )}
                {selectData.map((item, index) => {
                    return (
                        <li
                            className="select-item"
                            key={index}
                            data-value={item.dialing_code}
                            onClick={(e) => {
                                selectItem(e, item.country, item.iso, item.dialing_code);
                            }}
                        >
                            {item.country}
                        </li>
                    );
                })}
            </div>
        </div>
    );
};

export default Select;
