import Link from "@docusaurus/Link";
import clsx from "clsx";
import React from "react";
import styles from "../css/styles.module.css";

// Define the interface for the component's props
export interface QuickLinkProps {
  docName: string;
  title: string;
  content: string;
  icon: React.ReactNode;
  disabled?: boolean; // Optional prop, true by default
}

const QuickLink: React.FC<QuickLinkProps> = ({
  docName,
  title,
  content,
  icon,
  disabled = false, // Default to true if not specified
}) => {
  // Handle the conditional classes for active/inactive states
  const linkClasses = clsx("card", styles.card, {
    [styles.inactive]: !disabled,
  });

  // Conditional rendering based on 'activated' status
  if (disabled) {
    return (
      <div className={clsx("col col--4 margin-bottom--lg")} title="Coming soon">
        <div className={linkClasses}>
          <h3>
            <span className={clsx("margin-right--sm", styles.icon)}>
              {icon}
            </span>
            <span style={{ color: "grey" }}>{title}</span> {/* Grey out text */}
          </h3>
          <p style={{ color: "grey" }}>{content}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={clsx("col col--4 margin-bottom--lg")}>
      <Link className={linkClasses} to={docName}>
        <h3>
          <span className={clsx("margin-right--sm", styles.icon)}>{icon}</span>
          {title}
        </h3>
        <p>{content}</p>
      </Link>
    </div>
  );
};

export default QuickLink;
