import * as React from "react";
import { Route, Switch } from "react-router-dom";
import Error404Page from "../components/errors/Error404Page";
import HomePage from "../components/home/HomePage";
import SignedInPage from "../components/signedIn/SignedInPage";
import SignUpPage from "../components/signUp/SignUpPage";
import AuthenticateRoute from "./AuthenticateRoute";
import { homePath, signedInPath, signUpPath } from "./paths";
import RedirectIfAuthenticated from "./RedirectIfAuthenticated";

interface IRoutesProps {
  readonly isAuthenticated: boolean;
}

export default function Routes(props: IRoutesProps) {
  return (
    <Switch>
      <RedirectIfAuthenticated
        exact={true}
        path={homePath}
        component={HomePage}
        redirectPath={signedInPath}
        isAuthenticated={props.isAuthenticated}
      />

      <AuthenticateRoute
        authenticatePath={signUpPath}
        path={signedInPath}
        component={SignedInPage}
        isAuthenticated={props.isAuthenticated}
      />

      <RedirectIfAuthenticated
        path={signUpPath}
        component={SignUpPage}
        redirectPath={signedInPath}
        isAuthenticated={props.isAuthenticated}
      />

      <Route component={Error404Page} />
    </Switch>
  );
}
