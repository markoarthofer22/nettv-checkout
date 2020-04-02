import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import ReactGA from 'react-ga';

const GoogleAnalytics = ({ history, location, title }) => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            ReactGA.ga('send', 'pageview', { title, page: location.pathname });
        }
    }, []);

    return null;
};

export default withRouter(GoogleAnalytics);
