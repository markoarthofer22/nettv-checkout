import App from "../App";
// pages
import IndexPage from "../pages/index/IndexPage";
import IndexFreeTrial from "../pages/index_free_trial/IndexFreeTrial";

export default [
    {
        component: App,
        routes: [
            {
                path: "/",
                exact: true,
                component: IndexPage
            },
            {
                path: "/products/",
                exact: true,
                component: IndexPage
            },
            {
                path: "/products/code/",
                exact: true,
                component: IndexPage
            },
            {
                path: "/free-trial/",
                exact: true,
                component: IndexFreeTrial
            }
        ]
    }
];
