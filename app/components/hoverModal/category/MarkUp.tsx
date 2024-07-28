import { faHtml5, faMarkdown } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export default function MarkUp() {
  return (
    <div className="categoryBox">
      <h3 className="hoverModalCategory">MARK UP</h3>
      <span>
        <Link href={""}>
          <FontAwesomeIcon icon={faHtml5} />
          HTML
        </Link>
      </span>
      <span>
        <Link href={""}>
          <FontAwesomeIcon icon={faMarkdown} />
          MarkDown
        </Link>
      </span>
    </div>
  );
}
