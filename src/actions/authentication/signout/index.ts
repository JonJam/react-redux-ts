import keys from "../../ActionTypeKeys";

export interface ISignOutSuccessAction {
  readonly type: keys.SIGNOUT_SUCCESS;
}

export interface ISignOutInProgressAction {
  readonly type: keys.SIGNOUT_INPROGRESS;
}

export interface ISignOutFailAction {
  readonly type: keys.SIGNOUT_FAIL;
  readonly payload: {
    readonly error: Error;
  };
}
