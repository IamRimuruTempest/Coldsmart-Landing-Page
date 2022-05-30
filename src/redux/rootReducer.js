import { combineReducers } from "redux";
import metricsReducer from "./metrics/metricsReducer";

export const rootReducer = combineReducers({
  metrics: metricsReducer,
});
