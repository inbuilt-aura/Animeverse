'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Animeverse" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.3, 5)}
        className="mt-[15px] font-normal sm:text-[32px] text-[18px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">ANIMEVERSE</span>is a vision of the next upcoming generation, combining virtual and mixed reality worlds with anime.It is an online network of 3D virtual anime worlds accessed through a browser or headset, where users can interact in real time.So c'mon, welcome yourself in this 
        world, because this is really the{' '}
        <span className="font-extrabold text-white">
          madness of the new verse,the Animeverse
        </span>{' '}
        of today, using only{' '}
        <span className="font-extrabold text-white">VR</span> devices you can
        easily explore the AnimeVerse world you want, turn your dreams into
        reality. Let's{' '}
        <span className="font-extrabold text-white">join</span> the madness
        of the animeverse by scrolling down
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.5, 2)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[16px] h-[26px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;