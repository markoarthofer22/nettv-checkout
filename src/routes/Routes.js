import App from "../App";
// pages
import IndexPage from "../pages/index/IndexPage";
import DefaultPage from "../pages/defaultPage/defaultPage.component";

export default [
  {
    component: App,
    routes: [
      {
        path: "/products/",
        exact: true,
        component: IndexPage,
      },
      {
        path: "/products/code/",
        exact: true,
        component: IndexPage,
      },
    ],
  },
];
