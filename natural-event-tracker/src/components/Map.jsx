import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";
import PropTypes from "prop-types";
import { useState } from "react";

const Map = ({ eventData, searchItems }) => {
  const [locationInfo, setLocationInfo] = useState(null);
  const center = {
    lat: 42.3265,
    lng: -122.8756,
  };
  const zoom = 6;
  const markers = eventData.map((ev) => {
    if (ev.categories[0].id === 8 && searchItems.includes("fire")) {
      return (
        <LocationMarker
          key={ev.id}
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
          type="fire"
        />
      );
    } else if (ev.categories[0].id === 10 && searchItems.includes("storm")) {
      return (
        <LocationMarker
          key={ev.id}
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
          type="storm"
        />
      );
    } else if (ev.categories[0].id === 12 && searchItems.includes("vol")) {
      return (
        <LocationMarker
          key={ev.id}
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
          type="volcano"
        />
      );
    } else if (ev.categories[0].id === 15 && searchItems.includes("ice")) {
      return (
        <LocationMarker
          key={ev.id}
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
          type="ice"
        />
      );
    }
    return null;
  });
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${import.meta.env.VITE_GOOGLE_API_KEY}` }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
};

Map.propTypes = {
  eventData: PropTypes.array,
  searchItems: PropTypes.array,
};

export default Map;
