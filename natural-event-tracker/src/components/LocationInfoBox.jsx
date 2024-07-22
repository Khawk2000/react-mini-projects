import PropTypes from "prop-types";

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
      </ul>
    </div>
  );
};

LocationInfoBox.propTypes = {
  info: PropTypes.object,
};

export default LocationInfoBox;
