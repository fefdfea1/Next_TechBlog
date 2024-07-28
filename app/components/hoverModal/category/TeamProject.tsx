import { faMagnifyingGlassLocation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export default function TeamProject() {
  return (
    <div>
      <h3 className="hoverModalCategory">TeamProject</h3>
      <span>
        <Link href={"#"}>
          <FontAwesomeIcon icon={faMagnifyingGlassLocation} />
          OfficeFinder
        </Link>
      </span>
    </div>
  );
}
