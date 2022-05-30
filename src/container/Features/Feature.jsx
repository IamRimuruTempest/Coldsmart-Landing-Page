import React, { useState } from "react";
import { Flip } from "react-reveal";
import "./Features.scss";
import { db } from "../../firebase";
import { connect } from "react-redux";
import {
  sleepIqClicked,
  smartIqClicked,
  tempIqClicked,
  wearLinqClicked,
} from "../../redux/metrics/metricsAction";

const Feature = (props) => {
  const {
    feature,
    metricsState,
    tempIqClicked,
    sleepIqClicked,
    smartIqClicked,
    wearLinqClicked,
  } = props;

  let [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
    if (!show) {
      if (feature.metricsCode === "TEMP_IQ") {
        tempIqClicked(metricsState);
      } else if (feature.metricsCode === "SLEEP_IQ") {
        sleepIqClicked(metricsState);
      } else if (feature.metricsCode === "SMART_IQ") {
        smartIqClicked(metricsState);
      } else if (feature.metricsCode === "WEAR_LINQ") {
        wearLinqClicked(metricsState);
      }
    }
  };

  return (
    <div className="app__features-data">
      <img src={feature.img} alt="feature" />
      <h3>{feature.name}</h3>
      <p>{feature.description}</p>
      {feature.moreDescription ? (
        <button onClick={handleClick}>
          {feature.showDescription === true
            ? show
              ? "Show less"
              : "Show more"
            : ""}
        </button>
      ) : (
        ""
      )}

      {show ? <Flip top>{feature.moreDescription}</Flip> : ""}
    </div>
  );
};
const mapStateToProps = (state) => ({
  metricsState: state.metrics,
});

const mapDispatchToProps = (dispatch) => {
  return {
    tempIqClicked: (currentCount) => {
      dispatch(tempIqClicked(currentCount));
    },
    sleepIqClicked: (currentCount) => {
      dispatch(sleepIqClicked(currentCount));
    },
    smartIqClicked: (currentCount) => {
      dispatch(smartIqClicked(currentCount));
    },
    wearLinqClicked: (currentCount) => {
      dispatch(wearLinqClicked(currentCount));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Feature);
