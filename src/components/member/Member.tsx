import React, {FC} from "react";
import "./styles.css";

interface MemberProps {
  source: string;
}

const Member:FC<MemberProps> = ({source}) => {
  return (
    <div className="team-card">
      <img
        src={source}
        alt="Team Member"
        className="team-image img-fluid"
      />
      <div className="team-footer">
        <div className="col-sm-4">
          <h3>Marcos Barroso</h3>
        </div>

        <div className="col-sm-4">
          <h4>DRIVE</h4>
        </div>
        <div className="col-sm-4">
          <h1>C7</h1>
        </div>
      </div>
    </div>
  );
};

export default Member;
