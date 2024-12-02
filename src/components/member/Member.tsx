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
    </div>
  );
};

export default Member;
