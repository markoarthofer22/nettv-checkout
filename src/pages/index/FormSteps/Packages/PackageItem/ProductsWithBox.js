import React, { useState } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import { setInitialValues } from "../../../../../redux/pricingTab/pricingTab.actions";

const ProductsWithBox = (props) => {
    const { index, item, metaData } = props;
    const dispatch = useDispatch();
    const [isActive, setIsActive] = useState(null);

    const setProductAsActive = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const promiseFunction = new Promise((resolve, reject) => {
            setIsActive(null);
            document.querySelectorAll(".box-variations--item > .checkbox").forEach((item, index) => {
                item.classList.remove("active");
            });
            document.querySelectorAll(".box-variations--item").forEach((item, index) => {
                item.classList.remove("active", "disabled");
            });
            resolve();
        });

        promiseFunction.then(() => {
            setIsActive(true);
            document.querySelectorAll(".box-variations--item").forEach((item, index) => {
                if (!item.classList.contains("active")) {
                    item.classList.add("disabled");
                }
            });
            setCurrentPrices();
        });

        const setCurrentPrices = (data) => {
            const { contract_duration, expenses, pricing, subscription_duration, total_saving, total_sum_discount, total_sum_no_discount, variation_id } = item;

            const currentPricing = {
                currency: metaData.meta.currency,
                mainProductId: metaData.meta.product_code,
                variationProductId: variation_id,
                headerValues: {
                    name: metaData.title,
                    price: metaData.meta.base_price,
                    subscriptionDuration: subscription_duration,
                    contractLength: contract_duration
                },
                paymentValues: {
                    subscriptionFullPrice: pricing.subscription_price,
                    subscriptionDiscountPrice: pricing.subscription_discount_price,
                    boxPrice: pricing.box_price,
                    boxPriceDiscount: pricing.box_discount_price,
                    additionalExpenses: expenses,
                    totalPrice: total_sum_discount,
                    totalDiscount: total_saving
                }
            };

            dispatch(setInitialValues(currentPricing));
        };
    };

    return (
        <div onClick={(e) => setProductAsActive(e)} className={`box-variations--item  ${index === 0 ? "featured" : ""} ${isActive === null ? "" : isActive ? "active" : ""} `}>
            <div className={`checkbox ${isActive ? "active" : ""}`}>
                <span className="filled"></span>
            </div>

            <div className="img-box">
                <img src={item.variation_image} alt={item.variation_name} />
            </div>
            <div className="content">
                <h3 className="title">{item.variation_name}</h3>
                <p className="text">{item.variation_description}</p>
            </div>
        </div>
    );
};

export default ProductsWithBox;
