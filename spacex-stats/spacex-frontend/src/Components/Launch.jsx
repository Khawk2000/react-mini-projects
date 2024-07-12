import { Fragment } from "react";
import { gql, useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import Moment from "react-moment";
import classNames from "classnames";

function Launch() {
  const { id } = useParams();
  var name,
    flight_number,
    date_local,
    success,
    cores,
    core,
    flight,
    landing_success;

  const LAUNCH_QUERY = gql`
    query LaunchQuery($id: String) {
      launch(id: $id) {
        id
        flight_number
        success
        name
        date_local
        cores {
          core
          flight
          landing_success
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(LAUNCH_QUERY, {
    variables: { id },
  });

  if (error === undefined && !loading) {
    ({ name, flight_number, date_local, success, cores } = data.launch);
    [{ core, flight, landing_success }] = cores;
  }

  return (
    <Fragment>
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {name !== undefined && (
        <div>
          <h1>
            <span className="text-dark">Mission: </span>
            {name}
          </h1>
          <h4 className="mb-3">Launch Details</h4>
          <ul className="list-group">
            <li className="list-group-item">Flight Number: {flight_number}</li>
            <li className="list-group-item">
              Date of Launch:{" "}
              <Moment format="YYYY-MM-DD HH:mm">{date_local}</Moment>
            </li>
            <li className="list-group-item">
              Launch Status:{" "}
              <span
                className={classNames({
                  "text-success": success,
                  "text-danger": !success,
                })}
              >
                {success ? "Success" : "Failure"}
              </span>
            </li>
          </ul>
          <h4 className="my-3">Rocket Details</h4>
          <ul className="list-group">
            <li className="list-group-item">Rocket Core: {core}</li>
            <li className="list-group-item">Flight: {flight}</li>
            <li className="list-group-item">
              Landing Status:{" "}
              {success && (
                <span
                  className={classNames({
                    "text-success": landing_success,
                    "text-danger": !landing_success,
                  })}
                >
                  {landing_success ? "Success" : "Failure"}
                </span>
              )}
              {!success && <span>N/A</span>}
            </li>
          </ul>
        </div>
      )}
      <div className="text-center"><Link to='/' className="btn btn-primary my-5 ">Home</Link></div>
    </Fragment>
  );
}

export default Launch;
