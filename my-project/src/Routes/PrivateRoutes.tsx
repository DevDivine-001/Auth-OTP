import React, { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import signAcc from "../Global/jotai";

const PrivateRoute: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = signAcc();
  console.log(setState);
  console.log("private routers", state);
  return (
    <div>{state ? <div>{children}</div> : <Navigate to="/sign-in" />}</div>
  );
};

export default PrivateRoute;
