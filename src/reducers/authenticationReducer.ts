import ActionTypeKeys from "../actions/ActionTypeKeys";
import ActionTypes from "../actions/ActionTypes";
import initialState from "./initialState";

export default function authenticationReducer(
  state = initialState.isAuthenticated,
  action: ActionTypes
) {
  switch (action.type) {
    case ActionTypeKeys.SIGNIN_SUCCESS:
      return onSignIn();
    case ActionTypeKeys.SIGNOUT_SUCCESS:
      return onSignOut();
    default:
      return state;
  }
}

function onSignIn() {
  return true;
}

function onSignOut() {
  return false;
}
