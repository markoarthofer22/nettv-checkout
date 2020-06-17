import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector, useStore } from "react-redux";
import { selectIsLoading, selectAllCountryIDs } from "./redux/globals/globals.selectors";
import _ from "underscore";

//Global scss
import "./css/App.scss";
//Google analytics
import GoogleAnalytics from "./components/google-analytics/google-analytics.component";
//Components
import Header from "./components/header/header.component";
import GlobalLoader from "./components/loaders/global.loader.component";
//helmet
import Helmet from "react-helmet";
import ReactGA from "react-ga";
import Routes from "./routes/Routes";

//geoIp
const geoip2 = window.geoip2;

// if (typeof window !== "undefined") {
//   ReactGA.initialize("UA-55087715-1");
//   ReactGA.ga("set", "anonymizeIp", true);
// }

export default function App(props) {
    const dispatch = useDispatch();
    const isError = useSelector(selectIsLoading);
    const allowedMarket = useSelector(selectAllCountryIDs);
    const [userIpID, setUserIpID] = useState();

    useEffect(() => {
        geoip2.country((response) => {
            const customersCountryID = response.country.iso_code.toLowerCase();
            setUserIpID(_.findWhere(allowedMarket, { countryCode: customersCountryID }) ? _.findWhere(allowedMarket, { countryCode: customersCountryID }) : "de");
        });
    }, []);

    useEffect(() => {
        localStorage.setItem("lang_code", userIpID && userIpID.countryCode ? userIpID.countryCode : userIpID);
    }, [userIpID]);

    useEffect(() => {
        if (isError) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    }, [isError]);
    return (
        <>
            <Helmet>
                <meta name="geo.region" content="HR-01" />
                <meta name="geo.placename" content="" />
                <meta name="geo.position" content="45.813177;15.977048" />
                <meta name="ICBM" content="45.813177, 15.977048" />
                {/*BASIC SEO PAGE NEEDS */}
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "url": "",
                            "name": "",
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "telephone": "+385 1 48-98-555",
                                "contactType": "Customer service"
                            }
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

                    {/* <Footer /> */}
                </>
            </div>

            <GlobalLoader />
        </>
    );
}
