import type { RouteObject } from "react-router-dom";
import Page1 from "../pages/Page1/Page1";
import Page2 from "../pages/Page2/Page2";

const routes: RouteObject[] = [
  {
    path: "/page1",
    element: <Page1 />,
  },
  {
    path: "/page2",
    element: <Page2 />,
  },
];

export default routes;
