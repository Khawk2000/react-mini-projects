import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import fireIcon from "@iconify/icons-mdi/fire-alert";
import stormIcon from "@iconify/icons-mdi/flash-alert";
import volIcon from "@iconify/icons-mdi/volcano";
import iceIcon from "@iconify/icons-mdi/snowflake-alert";
import { Icon } from "@iconify/react/dist/iconify.js";

const Search = ({ setSearchItems }) => {
  const [fire, setFire] = useState(true);
  const [storm, setStorm] = useState(true);
  const [vol, setVol] = useState(true);
  const [ice, setIce] = useState(true);

  useEffect(() => {
    const searchTerms = [];
    if (fire) {
      searchTerms.push("fire");
    } else {
      const index = searchTerms.indexOf("fire");
      searchTerms.splice(index, index);
    }
    if (storm) {
      searchTerms.push("storm");
    } else {
      const index = searchTerms.indexOf("storm");
      searchTerms.splice(index, index);
    }
    if (ice) {
      searchTerms.push("ice");
    } else {
      const index = searchTerms.indexOf("ice");
      searchTerms.splice(index, index);
    }
    if (vol) {
      searchTerms.push("vol");
    } else {
      const index = searchTerms.indexOf("vol");
      searchTerms.splice(index, index);
    }
    setSearchItems(searchTerms);
  }, [fire, storm, ice, vol]);

  return (
    <div className="search-container">
      <h3>Filter by: </h3>
      <input
        type="checkbox"
        id="fire"
        name="fire"
        value="fire"
        defaultChecked
        onChange={() => setFire(!fire)}
      />
      <label htmlFor="fire">
        <Icon icon={fireIcon} className="fire-icon legend" /> WildFires
      </label>
      <br />
      <input
        type="checkbox"
        id="storm"
        name="storm"
        value="Car"
        defaultChecked
        onChange={() => setStorm(!storm)}
      />
      <label htmlFor="storm">
        {" "}
        <Icon icon={stormIcon} className="storm-icon legend" /> Severe Storms
      </label>
      <br />
      <input
        type="checkbox"
        id="vol"
        name="vol"
        value="Boat"
        defaultChecked
        onChange={() => setVol(!vol)}
      />
      <label htmlFor="vol">
        {" "}
        <Icon icon={volIcon} className="vol-icon legend" />
        Active Volcanos
      </label>
      <br />
      <input
        type="checkbox"
        id="ice"
        name="ice"
        value="Boat"
        defaultChecked
        onChange={() => setIce(!ice)}
      />
      <label htmlFor="ice">
        <Icon icon={iceIcon} className="ice-icon legend" /> Ice Storms
      </label>
    </div>
  );
};

Search.propTypes = {
  setSearchItems: PropTypes.func,
};

export default Search;
