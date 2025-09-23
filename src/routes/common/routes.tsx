import SignIn from "@/pages/auth/Sign-in";
import { AUTH_ROUTES, BASE_ROUTE, PROTECTED_ROUTES } from "./routePaths";
import SignUp from "@/pages/auth/Sign-up";
import GoogleOAuth from "@/pages/auth/GoogleOAuth";
import InviteUser from "@/pages/invite/InviteUser";
import ProjectDetails from "@/pages/workspace/ProjectDetails";
import Settings from "@/pages/workspace/Settings";
import Members from "@/pages/workspace/Members";
import Tasks from "@/pages/workspace/Tasks";
import WorkspaceDashboard from "@/pages/workspace/Dashboard";

export const authenticationRoutePaths = [
  {
    path: AUTH_ROUTES.SIGN_IN,
    element: <SignIn />,
  },

  {
    path: AUTH_ROUTES.SIGN_UP,
    element: <SignUp />,
  },

  {
    path: AUTH_ROUTES.GOOGLE_OAUTH_CALLBACK,
    element: <GoogleOAuth />,
  },
];

export const protectedRoutePaths = [
  {
    path: PROTECTED_ROUTES.WORKSPACE,
    element: <WorkspaceDashboard/>,
  },

  {
    path: PROTECTED_ROUTES.TASKS,
    element: <Tasks/>,
  },

  {
    path: PROTECTED_ROUTES.MEMBERS,
    element: <Members/>,
  },

  {
    path: PROTECTED_ROUTES.SETTINGS,
    element: <Settings/>,
  },

  {
    path: PROTECTED_ROUTES.PROJECT_DETAILS,
    element: <ProjectDetails/>,
  },
];

export const baseRoutePath = [
  {
    path: BASE_ROUTE.INVITE_URL,
    element: <InviteUser/>,
  },
];
