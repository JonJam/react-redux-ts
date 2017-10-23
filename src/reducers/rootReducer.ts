import { combineReducers } from "redux";
import IStoreState from "../store/IStoreState";
import isAuthenticated from "./authenticationReducer";
import pendingActions from "./pendingActionsReducer";

const rootReducer = combineReducers<IStoreState>({
  isAuthenticated,
  pendingActions
});

export default rootReducer;
