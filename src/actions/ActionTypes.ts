import {
  ISignInFailAction,
  ISignInInProgressAction,
  ISignInSuccessAction
} from "./authentication/signin";
import {
  ISignOutFailAction,
  ISignOutInProgressAction,
  ISignOutSuccessAction
} from "./authentication/signout";

type ActionTypes =
  | ISignInFailAction
  | ISignInInProgressAction
  | ISignInSuccessAction
  | ISignOutFailAction
  | ISignOutInProgressAction
  | ISignOutSuccessAction;

export default ActionTypes;
