import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/configure.svg').default,
    description: (
      <>
        <code>JasonScriptingUtilities</code> has a extremely friendly User Interface, allowing you to focus on your goals and we&apos;ll do the chores.
      </>
    ),
  },
  {
    title: 'Supports Windows XP - Windows 10',
    Svg: require('../../static/img/devices.svg').default,
    description: (
      <>
        The Client built on C# allows for an endless of users, ranging from Windows XP to Windows 10.
      </>
    ),
  },
  {
    title: 'Constantly Being Updated',
    Svg: require('../../static/img/update.svg').default,
    description: (
      <>
        With the support from our Github Repository and Discord Server, this client is constantly being updated to ensure that quality of hte program.
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
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
