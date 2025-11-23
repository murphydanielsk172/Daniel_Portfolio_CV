import { motion } from 'framer-motion';
import React from 'react';
import { Tilt } from 'react-tilt';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="w-full">
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={`${title} icon`} className="w-14 h-14 object-contain" loading="lazy" />

        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        As a graduate with a 2:1 Honours degree in Electronic Engineering, I have developed strong
        proficiency in Python, C, C++, MATLAB, and SystemVerilog, alongside a solid understanding of
        Linux-based systems. I have gained hands-on experience with development and hardware
        platforms including Arduino, Raspberry Pi, ESP32, and FPGA, providing valuable insight into
        software–hardware integration. My expertise includes AI and machine learning solutions,
        digital systems, circuit design, and microelectronics. For my final-year research project, I
        applied AI to a Mars rover for obstacle detection and evasion, using a stereo depth camera
        and a CNN USB accelerator. I thrive in dynamic, fast-paced engineering environments where
        innovation and collaboration drive success.
      </motion.p>

      <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const WrappedAbout = SectionWrapper(About, 'about');

export default WrappedAbout;
