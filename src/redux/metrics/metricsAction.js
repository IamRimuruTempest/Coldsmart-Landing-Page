import { doc, onSnapshot, setDoc } from "firebase/firestore";
import db from "../../firebase";
import {
  TEMP_IQ_CLICKED,
  SLEEP_IQ_CLICKED,
  SMART_IQ_CLICKED,
  WEAR_LINQ_CLICKED,
  METRICS_UPDATED_FROM_FIRESTORE,
} from "./metricsType";

export const listenToMetricsFromFirestore = () => {
  return (dispatch) => {
    onSnapshot(doc(db, "/metrics/metrics"), (doc) => {
      //   console.log("Metrics fetched:", doc.data());
      dispatch({
        type: METRICS_UPDATED_FROM_FIRESTORE,
        payload: doc.data(),
      });
    });
  };
};

export const tempIqClicked = (currentCounts) => {
  return (dispatch) => {
    const newCount = {
      ...currentCounts,
      tempIq_click_count: currentCounts.tempIq_click_count + 1,
    };

    setDoc(doc(db, "/metrics/metrics"), newCount)
      .then((res) => {
        dispatch({
          type: TEMP_IQ_CLICKED,
          payload: newCount.tempIq_click_count,
        });
      })
      .catch((err) => console.log("Error updating tempIq metrics"));
  };
};
export const sleepIqClicked = (currentCounts) => {
  return (dispatch) => {
    const newCount = {
      ...currentCounts,
      sleepIq_click_count: currentCounts.sleepIq_click_count + 1,
    };

    setDoc(doc(db, "/metrics/metrics"), newCount)
      .then((res) => {
        dispatch({
          type: SLEEP_IQ_CLICKED,
          payload: newCount.sleepIq_click_count,
        });
      })
      .catch((err) => console.log("Error updating sleepIq metrics"));
  };
};
export const smartIqClicked = (currentCounts) => {
  return (dispatch) => {
    const newCount = {
      ...currentCounts,
      smartIq_click_count: currentCounts.smartIq_click_count + 1,
    };

    setDoc(doc(db, "/metrics/metrics"), newCount)
      .then((res) => {
        dispatch({
          type: SMART_IQ_CLICKED,
          payload: newCount.smartIq_click_count,
        });
      })
      .catch((err) => console.log("Error updating smartIQ metrics"));
  };
};
export const wearLinqClicked = (currentCounts) => {
  return (dispatch) => {
    const newCount = {
      ...currentCounts,
      wearLinq_click_count: currentCounts.wearLinq_click_count + 1,
    };

    setDoc(doc(db, "/metrics/metrics"), newCount)
      .then((res) => {
        dispatch({
          type: WEAR_LINQ_CLICKED,
          payload: newCount.wearLinq_click_count,
        });
      })
      .catch((err) => console.log("Error updating Wear Linq metrics"));
  };
};
