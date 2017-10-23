import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { bindActionCreators, Dispatch } from "redux";
import { signIn as signInAction } from "../../actions/authentication/authenticationActions";
import { signedInPath } from "../../routes/paths";
import IStoreState from "../../store/IStoreState";

interface ISignUpPageProps extends RouteComponentProps<any> {
  signIn: () => (dispatch: Dispatch<IStoreState>) => Promise<void>;
}

class SignUpPage extends React.Component<ISignUpPageProps> {
  constructor(props: ISignUpPageProps) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  public render() {
    return (
      <div className="row">
        <div className="col-12">
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.handleClick}
          >
            {"Sign up"}
          </button>
        </div>
      </div>
    );
  }

  private async handleClick() {
    await this.props.signIn();

    this.props.history.push(signedInPath);
  }
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch: Dispatch<IStoreState>) {
  return {
    signIn: bindActionCreators(signInAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
