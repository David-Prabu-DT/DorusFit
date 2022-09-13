import React from "react";
import { AuthProvider } from "react-auth-kit";
import RouteComponent from "./routes/Route";

function App() {
  return (
    <>
      <AuthProvider
        authType={"cookie"}
        authName={"_auth"}
        cookieDomain={window.location.hostname}
        cookieSecure={window.location.protocol === "https:"}
      >
        <RouteComponent />
      </AuthProvider>
    </>
  );
}

export default App;
