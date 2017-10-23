import keys from "../../ActionTypeKeys";

export interface ISignInSuccessAction {
  readonly type: keys.SIGNIN_SUCCESS;
}

export interface ISignInInProgressAction {
  readonly type: keys.SIGNIN_INPROGRESS;
}

export interface ISignInFailAction {
  readonly type: keys.SIGNIN_FAIL;
  readonly payload: {
    readonly error: Error;
  };
}
