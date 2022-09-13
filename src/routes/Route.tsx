import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RequireAuth } from "react-auth-kit";
// import SecureComponent from "./SecureComponent";
import SignIn from "../components/SignIn/SignIn";

const RouteComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/signIn"} element={<SignIn />} />
        <Route
          path={"/secure"}
          element={
            <RequireAuth loginPath={"/signIn"}>
              <></>
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteComponent;
