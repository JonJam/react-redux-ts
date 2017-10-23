import * as React from "react";
import {
  Redirect,
  Route,
  RouteComponentProps,
  RouteProps
} from "react-router-dom";

interface IRedirectIfAuthenticatedProps extends RouteProps {
  readonly isAuthenticated: boolean;
  readonly redirectPath: string;
  readonly component: React.ComponentClass<any> | React.StatelessComponent<any>;
}

export default function RedirectIfAuthenticated({
  component,
  redirectPath,
  isAuthenticated,
  ...rest
}: IRedirectIfAuthenticatedProps) {
  const Component = component;

  const render = (renderProps: RouteComponentProps<any>) => {
    let element = <Component {...renderProps} />;

    if (isAuthenticated) {
      element = (
        <Redirect
          to={{
            pathname: redirectPath,
            state: { from: renderProps.location }
          }}
        />
      );
    }

    return element;
  };

  return <Route {...rest} render={render} />;
}
