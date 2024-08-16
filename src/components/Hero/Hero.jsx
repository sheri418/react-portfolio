import React from "react";

import Typewriter from "typewriter-effect";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

const roles = [
  "Frontend Developer",
  "Programmer",
];

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hi, I'm Muhammad <br /> Sheraz
          <br />
         
            <span style={{ color: 'var(--color-primary)', fontSize: '52px', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
          
                            <Typewriter
                options={{
                  strings: roles,
                  autoStart: true,
                  loop: true,
                }}
              />
              
           
          </span>
        </h1>

      
        <p className={styles.description}>
          I'm a full-stack developer with 2 years of experience using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:sherazgoraya418@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heropic.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
