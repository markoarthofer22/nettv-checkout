import App from "../App";
// pages
import IndexPage from "../pages/index/IndexPage";
import DefaultPage from "../pages/defaultPage/defaultPage.component";

export default [
    {
        component: App,
        routes: [
            {
                path: "/",
                exact: true,
                component: IndexPage,
            },
            {
                path: "/checkout/:id",
                exact: true,
                component: IndexPage,
            },
        ],
    },
];
