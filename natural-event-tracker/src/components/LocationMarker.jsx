import { Icon } from "@iconify/react";
import fireIcon from "@iconify/icons-mdi/fire-alert";
import stormIcon from "@iconify/icons-mdi/flash-alert";
import volIcon from "@iconify/icons-mdi/volcano";
import iceIcon from "@iconify/icons-mdi/snowflake-alert";
import PropTypes from "prop-types";

const LocationMarker = ({ lat, lng, onClick, type }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      {type === "fire" && <Icon icon={fireIcon} className="fire-icon" />}
      {type === "storm" && <Icon icon={stormIcon} className="storm-icon" />}
      {type === "volcano" && <Icon icon={volIcon} className="vol-icon" />}
      {type === "ice" && <Icon icon={iceIcon} className="ice-icon" />}
    </div>
  );
};

LocationMarker.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default LocationMarker;
