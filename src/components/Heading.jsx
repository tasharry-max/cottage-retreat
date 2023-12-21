import React from 'react';
import mainImg from '../img/heading.png';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Heading = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });


  React.useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: 'easeOut' },
      });
    }
  }, [controls, inView]);

  return (
    <div className="w-full">
      <motion.h1
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        className="xl:pt-24 sm:pt-20 lg:pb-10 md:pb-10 sm:pb-8 xs:pb-8 xl:px-28 lg:px-28 md:px-28 sm:px-5 xs:px-5 text-green-100 lg:text-5xl md:text-4xl sm:text-4xl xs:text-4xl font-normal leading-[4rem] max-w-4xl"
      >
        Lorem ipsum dolor sit amet consectetur. Et at quam ac vitae.
      </motion.h1>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        className="lg:pl-28 md:pl-28 sm:pl-5 xs:pl-5"
      >
        <motion.img
          src={mainImg}
          alt="main"
          className="w-full h-auto lg:aspect-video xs:aspect-square object-cover object-center"
          initial={{ opacity: 0, scale: 1 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, scale: 1, transition: { duration: 2.5, ease: [0.6, -0.05, 0.01, 0.99] } },
          }}
        />
      </motion.div>
    </div>
  );
};

export default Heading;
