import { faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function FrameWork() {
  return (
    <div>
      <h3 className="hoverModalCategory">FrameWork</h3>
      <span>
        <FontAwesomeIcon icon={faReact} />
        React
      </span>
    </div>
  );
}
