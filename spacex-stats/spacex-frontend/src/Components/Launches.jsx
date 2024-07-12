import React from "react";
import { gql, useQuery } from "@apollo/client";
import LaunchItem from "./LaunchItem";
import MissionKey from "./MissionKey";

const Launches = () => {
  const LAUNCHES_QUERY = gql`
    query LaunchesQuery {
      launches {
        date_local
        flight_number
        id
        name
        success
      }
    }
  `;

  const { loading, error, data } = useQuery(LAUNCHES_QUERY);
  

  return (
    <React.Fragment>
      <h1 className="display-4 my-3">Launches</h1>
      <MissionKey />
      {loading && <h1 className="display-3">Loading...</h1>}
      {!loading && error === undefined &&
        data.launches.map(({ date_local, flight_number, id, name, success }) => (
          <LaunchItem key={id} id={id} date={date_local} flight_number={flight_number} name={name} success={success}/>
        ))}
    </React.Fragment>
  );
};

Launches.propTypes = {};

export default Launches;
