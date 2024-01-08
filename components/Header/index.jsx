/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import Nav from './nav';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Rounded from '../../common/RoundedButton';
import Magnetic from '../../common/Magnetic';
import Link from 'next/link';

export default function index() {
  const header = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const button = useRef(null);

  useEffect(() => {
    if (isActive) setIsActive(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => {
          gsap.to(button.current, {
            scale: 1,
            duration: 0.25,
            ease: 'power1.out',
          });
        },
        onEnterBack: () => {
          gsap.to(
            button.current,
            { scale: 0, duration: 0.25, ease: 'power1.out' },
            setIsActive(false)
          );
        },
      },
    });
  }, []);

  return (
    <>
      <div ref={header} className={styles.header}>
        <div className={styles.logo}>
          {/* <div className={styles.name}>
            <p className={styles.dennis}>Ananya Singh</p>
          </div> */}
        </div>
        <div className={styles.nav}>
          <Magnetic>
            <Link href="/" className={styles.el}>
              <div>Home</div>
              <div className={styles.indicator}></div>
            </Link>
          </Magnetic>
          <Magnetic>
            <Link href="/portfolio" className={styles.el}>
              <div>Portfolio</div>
              <div className={styles.indicator}></div>
            </Link>
          </Magnetic>
          <Magnetic>
            <Link href="/about" className={styles.el}>
              <div>About</div>
              <div className={styles.indicator}></div>
            </Link>
          </Magnetic>
          <Magnetic>
            <Link href="/contact" className={styles.el}>
              <div>Contact</div>
              <div className={styles.indicator}></div>
            </Link>
          </Magnetic>
        </div>
      </div>
      <div ref={button} className={styles.headerButtonContainer}>
        <Rounded
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={`${styles.button}`}
        >
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ''
            }`}
          ></div>
        </Rounded>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
}
