import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  authenticationRoutePaths,
  baseRoutePath,
  protectedRoutePaths,
} from "./common/routes";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<></>}>
          {baseRoutePath.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>

        <Route path="/" element={<></>}>
          <Route element={<></>}>
            {authenticationRoutePaths.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Route>
        </Route>

        {/* Protected Route */}
        <Route path="/" element={<></>}>
          <Route element={<></>}>
            {protectedRoutePaths.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Route>
        </Route>

        {/* Catch-all for undefined routes */}
        <Route path="*" element={<></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
