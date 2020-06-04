import React, { useState } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import { setInitialValues, resetToInitialValues } from "../../../../../redux/pricingTab/pricingTab.actions";

const MonthSubscriptionItem = (props) => {
    const { data, metaData } = props;
    const { name, price, price_discount, description } = data;
    const dispatch = useDispatch();
    const [isActive, setIsActive] = useState(null);

    console.log(metaData);

    const setProductAsActive = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const promiseFunction = new Promise((resolve, reject) => {
            setIsActive(null);
            document.querySelectorAll(".month-variations--item > .checkbox").forEach((item, index) => {
                item.classList.remove("active");
            });
            document.querySelectorAll(".month-variations--item").forEach((item, index) => {
                item.classList.remove("active", "disabled");
            });
            resolve();
        });

        promiseFunction.then(() => {
            setIsActive(true);
            document.querySelectorAll(".month-variations--item").forEach((item, index) => {
                if (!item.classList.contains("active")) {
                    item.classList.add("disabled");
                }
            });

            const initialPricing = {
                currency: metaData.meta.currency,
                mainProductId: metaData.meta.product_code,
                headerValues: {
                    name: metaData.title,
                    price: metaData.meta.base_price,
                    subscriptionDuration: parseInt(name)
                },
                paymentValues: {
                    subscriptionDiscountPrice: price_discount,
                    subscriptionFullPrice: price,
                    totalPrice: price
                }
            };
            dispatch(resetToInitialValues(initialPricing));
        });
    };

    return (
        <div onClick={(e) => setProductAsActive(e)} className={`month-variations--item ${isActive === null ? "" : isActive ? "active" : ""}`}>
            <div className={`checkbox ${isActive ? "active" : ""}`}>
                <span className="filled"></span>
            </div>

            <div className="content">
                <h3 className="title">{name}</h3>
                <p className="text">{parseInt(name) > 5 ? "meseci" : "meseca"}</p>
            </div>
        </div>
    );
};

export default MonthSubscriptionItem;
