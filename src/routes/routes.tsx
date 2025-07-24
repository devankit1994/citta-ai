import type { RouteObject } from "react-router-dom";
import ActiveTeamsAndGroups from "../pages/ActiveTeamsAndGroups/ActiveTeamsAndGroups";
import AgentsAndConnectors from "../pages/AgentsAndConnectors/AgentsAndConnectors";

const routes: RouteObject[] = [
  {
    path: "/active-teams-and-groups",
    element: <ActiveTeamsAndGroups />,
  },
  {
    path: "/agents-and-connectors",
    element: <AgentsAndConnectors />,
  },
];

export default routes;
