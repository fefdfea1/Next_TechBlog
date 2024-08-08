import { faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export default function FrameWork() {
  return (
    <div>
      <h3 className="hoverModalCategory">FrameWork</h3>
      <span>
        <Link href={""}>
          <FontAwesomeIcon icon={faReact} />
        </Link>
        React
      </span>
    </div>
  );
}
