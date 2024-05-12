import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "We have The Tools",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Find all the <a href="/tools">CurseForge community tools</a> here, and
        if something is missing, don't be afraid to tell us about it, so that we
        can add it to this site.
      </>
    ),
  },
  {
    title: "CurseForge Games Support Information",
    description: (
      <>
        Find information about the games supported by CurseForge, and the
        platforms that they are available on.<br />
        <a href="/games">CurseForge Games</a>
      </>
    ),
  }
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--12")}>
      {Svg ?
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        : null}
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
