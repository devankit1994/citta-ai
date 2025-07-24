import type { RouteObject } from "react-router-dom";
import ActiveTeamsAndGroups from "../pages/ActiveTeamsAndGroups/ActiveTeamsAndGroups";
import AgenetsAndConnectors from "../pages/AgenetsAndConnectors/AgenetsAndConnectors";

const routes: RouteObject[] = [
  {
    path: "/active-teams-and-groups",
    element: <ActiveTeamsAndGroups />,
  },
  {
    path: "/agents-and-connectors",
    element: <AgenetsAndConnectors />,
  },
];

export default routes;
