import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { bindActionCreators, Dispatch } from "redux";
import { signOut as signOutAction } from "../actions/authentication/authenticationActions";
import { homePath } from "../routes/paths";
import Routes from "../routes/Routes";
import { isBusy } from "../selectors";
import IStoreState from "../store/IStoreState";
import Header from "./header/Header";

import "./App.css";

interface IAppProps extends RouteComponentProps<any> {
  readonly isBusy: boolean;
  readonly isAuthenticated: boolean;
  signOut: () => (dispatch: Dispatch<IStoreState>) => Promise<void>;
}

class App extends React.Component<IAppProps> {
  constructor(props: IAppProps) {
    super(props);

    this.signOut = this.signOut.bind(this);
  }

  public render() {
    return (
      <div>
        <Header
          isBusy={this.props.isBusy}
          isAuthenticated={this.props.isAuthenticated}
          handleSignOut={this.signOut}
        />

        <div className="container-fluid">
          <Routes isAuthenticated={this.props.isAuthenticated} />
        </div>
      </div>
    );
  }

  private async signOut(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();

    await this.props.signOut();

    this.props.history.push(homePath);
  }
}

function mapStateToProps(state: IStoreState) {
  return {
    isAuthenticated: state.isAuthenticated,
    isBusy: isBusy(state)
  };
}

function mapDispatchToProps(dispatch: Dispatch<IStoreState>) {
  return {
    signOut: bindActionCreators(signOutAction, dispatch)
  };
}

// Casting to prevent error where used in index.ts that isBusy is mandatory, since it is being provided by Redux.
export default withRouter(
  connect<{}, {}, IAppProps>(mapStateToProps, mapDispatchToProps)(App)
) as React.ComponentClass<{}>;
