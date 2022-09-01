import React, { FC } from "react";
import {
  Routes,
  Route,
  Link,
  Navigate,
  Outlet,
} from 'react-router-dom';

interface GuardedRouteProps {
  isAllowed: boolean;
  redirectPath: string;
  children: any;
}

const GuardedRoute: FC<GuardedRouteProps> = ({
  isAllowed,
  redirectPath,
  children,
}) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default GuardedRoute;
