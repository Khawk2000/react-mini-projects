import PropTypes from "prop-types";
import Moment from "react-moment";

const LocationInfoBox = ({ info }) => {
  return (
    <div className="location-info">
      <h2>Event Location Info</h2>
      <ul>
        <li>
          ID: <strong>{info.id}</strong>
        </li>
        <li>
          Title: <strong>{info.title}</strong>
        </li>
        <li>
          Last Date Reported:{" "}
          <strong>
            <Moment format="MM/DD/YY">{info.date}</Moment> at{" "}
            <Moment format="HH:mm"></Moment>
          </strong>
        </li>
        <li>
          Description:{" "}
          <strong>{info.description ? info.description : "N/A"}</strong>
        </li>
      </ul>
    </div>
  );
};

LocationInfoBox.propTypes = {
  info: PropTypes.object,
};

export default LocationInfoBox;
