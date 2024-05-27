import Link from "@docusaurus/Link";
import clsx from "clsx";
import React from "react";
import styles from "../css/styles.module.css";

export interface PathLinkProps {
  docName: string;
  title: string;
  content: string;
  icon: React.ReactNode;
}

const PathLink: React.FC<PathLinkProps> = ({
  docName,
  title,
  content,
  icon,
}) => {
  const linkClasses = clsx("card", styles.fullWidthCard);

  return (
    <Link className={linkClasses} to={docName}>
      <h3>
        <span className={clsx("margin-right--sm", styles.icon)}>{icon}</span>{" "}
        {title}
      </h3>
      <p>{content}</p>
    </Link>
  );
};

export default PathLink;
