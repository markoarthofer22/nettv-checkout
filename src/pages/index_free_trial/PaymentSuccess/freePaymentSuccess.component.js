import React from "react";

// redux
import { useSelector } from "react-redux";
import { existingTransactionResponse } from "../../../redux/pricingTab/pricingTab.selectors";

//styles
import "../../index_bundle/PaymentSuccess/paymentSuccess.scss";

const FreePaymentSuccess = (props) => {
    const existingTransaction = useSelector(existingTransactionResponse);

    return (
        <div class="order-wrap">
            {(existingTransaction.customer_name || existingTransaction.customer_surname) && (
            <div class="order-header">
                <h2>
                    Pozdrav <strong>{existingTransaction.customer_name} {existingTransaction.customer_surname}</strong>
                </h2>
                <p>
                    Tvoja pretplata je uspešna. Ispod možeš pogledati detalje pretplate, a na unetu email adresu ti je
                    poslat mail sa istim detaljima.
                </p>
            </div>
            )}
            <div class="order-row">
                <h4>Pregled porudžbine</h4>

                <ul class="order-list">
                    {existingTransaction.plan && (
                    <li class="border">
                        <p class="key">Plan:</p>
                        <p class="value">{existingTransaction.plan}</p>
                    </li>
                    )}
                    {existingTransaction.subscription_duration && (
                    <li class="border">
                        <p class="key">Trajanje pretplate:</p>
                        <p class="value">
                            {existingTransaction.subscription_duration} dana
                        </p>
                    </li>
                    )}
                    {existingTransaction.subscription_start && (
                    <li class="border">
                        <p class="key">Datum isteka:</p>
                        <p class="value">{existingTransaction.subscription_start}</p>
                    </li>
                    )}
                    {existingTransaction.subscription_end && (
                    <li class="border">
                        <p class="key">Datum isteka:</p>
                        <p class="value">{existingTransaction.subscription_end}</p>
                    </li>
                    )}
                    {existingTransaction.payment_type && (
                        <li class="border">
                            <p class="key">Način plaćanja:</p>
                            <p class="value">{existingTransaction.payment_type}</p>
                        </li>
                    )}
                    {existingTransaction.subscription_price && existingTransaction.subscription_price !== 0 && (
                    <li class="border">
                        <p class="key">Cena:</p>
                        <p class="value cl-2">{existingTransaction.subscription_price}</p>
                    </li>
                    )}
                </ul>

                <h4>Podaci o korisniku:</h4>
                <ul class="order-list">
                    {existingTransaction.customer_name && (
                        <li class="border">
                            <p class="key">Ime:</p>
                            <p class="value">{existingTransaction.customer_name}</p>
                        </li>
                    )}
                    {existingTransaction.customer_surname && (
                        <li class="border">
                            <p class="key">Prezime:</p>
                            <p class="value">{existingTransaction.customer_surname}</p>
                        </li>
                    )}
                    {existingTransaction.customer_email && (
                        <li class="border">
                            <p class="key">Email:</p>
                            <p class="value">{existingTransaction.customer_email}</p>
                        </li>
                    )}
                    {existingTransaction.customer_phone && (
                        <li class="border">
                            <p class="key">Telefon:</p>
                            <p class="value">{existingTransaction.customer_phone}</p>
                        </li>
                    )}
                    {existingTransaction.customer_country && (
                        <li class="border">
                            <p class="key">Zemlja:</p>
                            <p class="value">{existingTransaction.customer_country}</p>
                        </li>
                    )}
                </ul>

            </div>

            <div class="order-cta">
                <a href="https://moj.nettvplus.com/signin" class="order-btn">
                    Povratak
                </a>
            </div>

        </div>
    );
};

export default FreePaymentSuccess;
