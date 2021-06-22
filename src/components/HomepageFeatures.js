import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'You own the data!',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        OpenDataCam is not connected to the cloud, you’re in full control of when to gather it. Via the interface you can specify which areas of the picture objects should be counted. Also the camera tracks how things move through the frames. Via an easy export function you can access the tally and traces and use it in any thinkable way. Going all-in? Use the API to get access to the raw data points.
      </>
    ),
  },
  {
    title: 'Transparency',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        The discussion around the use of artificial intelligence in public space is ongoing. We believe OpenDataCam is a contribution to this discussion, as it offers an offline, transparent, thus privacy respecting alternative. Paramount to the open source access is the responsible use of this technology we request from every user.
      </>
    ),
  },
  {
    title: 'Privacy',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        As OpenDataCam is an experimental prototype with public facing applications, privacy is something we tried to bake into the design of the tool. After getting in touch with Sensor Labs privacy label, we’re currently finding ways to apply the label to OpenDataCam.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="padding-horiz--md">
        <h3 className="text--center">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
