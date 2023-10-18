import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

/**
 * Landing page with a simple gradient background and a hero asset.
 * Free to customize as you see fit.
 */
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.hero}>
          <div className={styles.heroBackground}>
            <div className={styles.heroBackgroundInner}>
              <Image
                src="/hero-gradient.png"
                width={1390}
                height={1390}
                alt="Background gradient from red to blue"
                quality={100}
                className={styles.gradient}
              />
            </div>
          </div>
          <div className={styles.heroAssetFrame}>
            <Image
              src="/cs2.jpg"
              width={860}
              height={540}
              alt="Hero asset, NFT marketplace"
              quality={100}
              className={styles.heroAsset}
            />
          </div>
          <div className={styles.heroBodyContainer}>
            <div className={styles.heroBody}>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleGradient}>
                  COUNTER STRIKE 2
                </span>
                <br />
                Limited Test Out Now
              </h1>
              <p className={styles.heroSubtitle}>
                <Link
                  className={styles.link}
                  href="/buy"
                  target="_blank"
                >
                  CsNet
                </Link>{" "}
                 gives you the flexiblity of buying and selling your items in a risk free and low fee enviroment.
              </p>

              <div className={styles.heroCtaContainer}>
                <Link className={styles.heroCta} href="/buy">
                  Get Started
                </Link>
                <Link
                  className={styles.secondaryCta}
                  href="https://www.counter-strike.net/cs2"
                  target="_blank"
                >
                  CS2 News
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

