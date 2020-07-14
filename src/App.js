import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectIsLoading, selectAllCountryIDs } from "./redux/globals/globals.selectors";
import _ from "underscore";
//Global scss
import "./css/App.scss";
//Components
import Header from "./components/header/header.component";
import GlobalLoader from "./components/loaders/global.loader.component";
//helmet
import Helmet from "react-helmet";
import Routes from "./routes/Routes";
import { setUserOriginCountry } from "./redux/globals/globals.actions";

const getCookie = (name) => {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");

    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
};

export default function App(props) {
    const isError = useSelector(selectIsLoading);
    const dispatch = useDispatch();
    const allowedMarket = useSelector(selectAllCountryIDs);
    const [userIpID, setUserIpID] = useState();
    const lang_cookie = getCookie("originCountry");

    useEffect(() => {
        if (lang_cookie === null) {
            setUserIpID("other");
        } else {
            const customersCountryID = lang_cookie.toLowerCase();
            dispatch(setUserOriginCountry(customersCountryID));
            setUserIpID(_.findWhere(allowedMarket, { countryCode: customersCountryID }) ? _.findWhere(allowedMarket, { countryCode: customersCountryID }) : "other");
        }
    }, []);

    useEffect(() => {
        //for test
        if (localStorage.getItem("lang_code") === undefined) return;
        localStorage.setItem("lang_code", userIpID);
    }, [userIpID]);

    return (
        <>
            <Helmet>
                <meta name="geo.region" content="RS-01" />
                <meta name="geo.placename" content="" />
                <meta name="geo.position" content="45.60000;19.20000" />
                <meta name="ICBM" content="45.60000;19.20000" />
                {/*BASIC SEO PAGE NEEDS */}
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "url": "",
                            "name": "",
                        }
                    `}
                </script>
            </Helmet>

            <div className="wrapper">
                <>
                    <Header />

                    <Switch>
                        {Routes[0].routes.map((routes, index) => (
                            <Route key={index} path={routes.path} exact={routes.exact} component={routes.component} />
                        ))}
                    </Switch>
                </>
            </div>

            <GlobalLoader />
        </>
    );
}
