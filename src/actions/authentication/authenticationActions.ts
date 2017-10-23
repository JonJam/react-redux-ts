import { Dispatch } from "redux";
import {
  signIn as signInToApi,
  signOut as signOutFromApi
} from "../../api/authenticationApi";
import IStoreState from "../../store/IStoreState";
import keys from "../ActionTypeKeys";
import {
  ISignInFailAction,
  ISignInInProgressAction,
  ISignInSuccessAction
} from "./signin";
import {
  ISignOutFailAction,
  ISignOutInProgressAction,
  ISignOutSuccessAction
} from "./signout";

export function signIn(): (dispatch: Dispatch<IStoreState>) => Promise<void> {
  return async (dispatch: Dispatch<IStoreState>) => {
    // Signal work in progress.
    dispatch(signInInProgress());

    try {
      await signInToApi();

      dispatch(signInSuccess());
    } catch (err) {
      dispatch(signInFail(err));
    }
  };
}

export function signOut(): (dispatch: Dispatch<IStoreState>) => Promise<void> {
  return async (dispatch: Dispatch<IStoreState>) => {
    // Signal work in progress.
    dispatch(signOutInProgress());

    try {
      await signOutFromApi();

      dispatch(signOutSuccess());
    } catch (err) {
      dispatch(signOutFail(err));
    }
  };
}

function signInInProgress(): ISignInInProgressAction {
  return {
    type: keys.SIGNIN_INPROGRESS
  };
}

function signInSuccess(): ISignInSuccessAction {
  return {
    type: keys.SIGNIN_SUCCESS
  };
}

function signInFail(error: Error): ISignInFailAction {
  return {
    payload: {
      error
    },
    type: keys.SIGNIN_FAIL
  };
}

function signOutInProgress(): ISignOutInProgressAction {
  return {
    type: keys.SIGNOUT_INPROGRESS
  };
}

function signOutSuccess(): ISignOutSuccessAction {
  return {
    type: keys.SIGNOUT_SUCCESS
  };
}

function signOutFail(error: Error): ISignOutFailAction {
  return {
    payload: {
      error
    },
    type: keys.SIGNOUT_FAIL
  };
}
