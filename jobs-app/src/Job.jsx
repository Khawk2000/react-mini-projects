import Moment from "react-moment";
import logo from "./assets/govlogo.png";
import { useState } from "react";

function Job({ job }) {
  const [open, setOpen] = useState(false);
  //console.log(job.MatchedObjectDescriptor.PositionSchedule[0].Code);
  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <div>
            <h3 className="card-title">
              {job.MatchedObjectDescriptor.PositionTitle} -{" "}
              <span className="text-muted font-weight-light">
                {job.MatchedObjectDescriptor.DepartmentName}
              </span>
            </h3>
            <h5 className="card-subtitle text-muted mb-2">
              <Moment format="YYYY/MM/DD">
                {job.MatchedObjectDescriptor.PublicationStartDate}
              </Moment>
            </h5>
            <div>
              <h6 className="mr-2">
                <span className="badge bg-secondary">
                  {job.MatchedObjectDescriptor.PositionSchedule[0].Code === 1
                    ? "Part Time"
                    : "Full Time"}
                </span>
              </h6>
              <h6>
                <span className="badge bg-secondary">
                  {job.MatchedObjectDescriptor.PositionLocation[0].LocationName}
                </span>
              </h6>
            </div>
            <a href={job.MatchedObjectDescriptor.ApplyURI[0]}>Apply Here</a>
          </div>
          <img
            className="d-none d-sm-block"
            src={logo}
            alt="Job Company: US Government"
            height={40}
            width={40}
          />
        </div>
        <button className="btn btn-primary mt-3" onClick={() => setOpen(!open)}>
          {!open ? "View Details" : "Hide Details"}
        </button>
        {open && (
          <div className="card-text mt-3">
            {job.MatchedObjectDescriptor.QualificationSummary}
          </div>
        )}
      </div>
    </div>
  );
}

export default Job;
