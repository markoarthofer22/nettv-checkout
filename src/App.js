import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector, useStore } from "react-redux";
//Global scss
import "./css/App.scss";
//Google analytics
import GoogleAnalytics from "./components/google-analytics/google-analytics.component";
//Components
import Header from "./components/header/header.component";
import { selectIsLoading } from "./redux/globals/globals.selectors";

import GlobalLoader from "./components/loaders/global.loader.component";
//helmet
import Helmet from "react-helmet";
import ReactGA from "react-ga";
import Routes from "./routes/Routes";

// if (typeof window !== "undefined") {
//   ReactGA.initialize("UA-55087715-1");
//   ReactGA.ga("set", "anonymizeIp", true);
// }

export default function App(props) {
    const dispatch = useDispatch();
    const isError = useSelector(selectIsLoading);

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
