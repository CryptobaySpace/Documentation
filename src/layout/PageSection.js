import React from "react";
import clsx from "clsx";
import styles from "../css/styles.module.css";

function PageSection({ title, children }) {
  return (
    <section className={styles.features}>
      <div className={clsx("container", styles.container)}>
        <h1
          className={clsx(
            "hero__subtitle",
            "text--center",
            "justify-content--center",
            "font-weight--bold",
            "text-decoration--underline"
          )}
        >
          {title}
        </h1>
        <div className={clsx("row", styles.row)}>{children}</div>
      </div>
    </section>
  );
}

export default PageSection;
