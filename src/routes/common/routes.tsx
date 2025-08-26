import { AUTH_ROUTES, BASE_ROUTE, PROTECTED_ROUTES } from "./routePaths";

export const authenticationRoutePaths = [
  {
    path: AUTH_ROUTES.SIGN_IN,
    element: <></>,
  },

  {
    path: AUTH_ROUTES.SIGN_UP,
    element: <></>,
  },

  {
    path: AUTH_ROUTES.GOOGLE_OAUTH_CALLBACK,
    element: <></>,
  },
];

export const protectedRoutePaths = [
  {
    path: PROTECTED_ROUTES.WORKSPACE,
    element: <></>,
  },

  {
    path: PROTECTED_ROUTES.TASKS,
    element: <></>,
  },

  {
    path: PROTECTED_ROUTES.MEMBERS,
    element: <></>,
  },

  {
    path: PROTECTED_ROUTES.SETTINGS,
    element: <></>,
  },

  {
    path: PROTECTED_ROUTES.PROJECT_DETAILS,
    element: <></>,
  },
];

export const baseRoutePath = [
  {
    path: BASE_ROUTE.INVITE_URL,
    element: <></>,
  },
];
