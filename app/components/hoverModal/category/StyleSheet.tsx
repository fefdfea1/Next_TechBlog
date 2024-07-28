import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export default function StyleSheet() {
  return (
    <div>
      <h3 className="hoverModalCategory">Style Sheet</h3>
      <span>
        <Link href={""}>
          <FontAwesomeIcon icon={faCss3Alt} />
          CSS
        </Link>
      </span>
      <span>
        <Link href={""}>
          <FontAwesomeIcon icon={faCss3Alt} />
          CSS-IN-JS
        </Link>
      </span>
    </div>
  );
}
