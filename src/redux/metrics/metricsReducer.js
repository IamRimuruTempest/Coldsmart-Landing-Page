import {
  TEMP_IQ_CLICKED,
  SLEEP_IQ_CLICKED,
  SMART_IQ_CLICKED,
  WEAR_LINQ_CLICKED,
  METRICS_UPDATED_FROM_FIRESTORE,
} from "./metricsType";

const initialState = {
  tempIq_click_count: 0,
  sleepIq_click_count: 0,
  smartIq_click_count: 0,
  wearLinq_click_count: 0,
};

export const metricsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEMP_IQ_CLICKED:
      return {
        ...state,
        tempIq_click_count: action.payload,
      };
    case SLEEP_IQ_CLICKED:
      return {
        ...state,
        sleepIq_click_count: action.payload,
      };
    case SMART_IQ_CLICKED:
      return {
        ...state,
        smartIq_click_count: action.payload,
      };
    case WEAR_LINQ_CLICKED:
      return {
        ...state,
        wearLinq_click_count: action.payload,
      };
    case METRICS_UPDATED_FROM_FIRESTORE:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export default metricsReducer;
