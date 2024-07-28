import { faJava, faJs } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export default function Language() {
  return (
    <div>
      <h3 className="hoverModalCategory">Language</h3>
      <span>
        <Link href={""}>
          <FontAwesomeIcon icon={faJs} />
          Javascript
        </Link>
      </span>
      <span>
        <Link href={""}>
          <FontAwesomeIcon icon={faJava} />
          Java
        </Link>
      </span>
    </div>
  );
}
