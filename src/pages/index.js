import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={`margin-top--lg ${styles.buttons}`}>
          <Link
            className="button button--secondary button--lg margin-horiz--xs"
            to="https://play.google.com/store/apps/details?id=com.opendatacam">
            For Android 📲
          </Link>
          <Link
            className="button button--secondary button--lg margin-horiz--xs"
            to="https://play.google.com/store/apps/details?id=com.opendatacam">
            For Jetson 💻 
          </Link>
          <Link
            className="button button--secondary button--lg margin-horiz--xs"
            to="docs/intro">
            Get Started 📃
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
