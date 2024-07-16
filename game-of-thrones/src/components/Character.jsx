import React from "react";

const Character = ({ char }) => {
  return (
    <div className="col-md-4">
      <div className="card text-white bg-primary mb-3">
        <div className="card-header">{char.fullName}</div>
        <div className="card-body">
          <img className="img-responsive w-100" src={char.imageUrl} alt="" />
          <p className="card-text mt-4">{char.title}</p>
        </div>
      </div>
    </div>
  );
};

export default Character;
