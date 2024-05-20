import React from "react";
import clsx from "clsx";
import styles from "../css/styles.module.css";

function PageHeader(props) {
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <h1 className={clsx("hero__title")}>{props.title}</h1>
        <p className={clsx("hero__subtitle")}>{props.subtitle}</p>
      </div>
    </header>
  );
}

export default PageHeader;
