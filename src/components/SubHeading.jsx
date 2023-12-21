import React, {useEffect} from 'react';
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';

const SubHeading = () => {
    const controls = useAnimation();
    const [ref,
        inView] = useInView({triggerOnce: false});

    useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.6,
                    delay: 0.2
                }
            });
        }
    }, [controls, inView]);

    return (
        <div
            ref={ref}
            className="w-full lg:px-28 md:px-28 sm:px-28 xs:px-5 lg:py-40 md:py-20 sm:py-20 xs:py-20">
            <div className="lg:px-52 md:px-28">
                <motion.p
                    initial={{
                    opacity: 0,
                    y: 20
                }}
                    animate={controls}
                    className="text-xs font-normal text-green-100">
                    Subheading
                </motion.p>
                <motion.h2
                    initial={{
                    opacity: 0,
                    y: 20
                }}
                    animate={controls}
                    className="lg:py-4 md:py-4 sm:py-4 xs:py-4 text-green-100 lg:text-4xl md:text-4xl sm:text-3xl xs:text-3xl max-w-lg">
                    Lorem ipsum dolor sit amet consectetur. Nibh ut nullam senectus sit vitae vitae
                    ultricies.
                </motion.h2>
                <motion.p
                    initial={{
                    opacity: 0,
                    y: 20
                }}
                    animate={controls}
                    className="pb-10 max-w-xl text-sm">
                    Lorem ipsum dolor sit amet consectetur. Lorem ut eu enim dolor in diam velit
                    diam. Pretium nulla eget mattis feugiat vel neque augue nisl vitae. Egestas sed
                    erat molestie cras accumsan purus tincidunt. Elementum ultrices quis est semper
                    donec tortor. Lacus.
                </motion.p>
                <button
                    className="group flex items-center rounded-full border-[1px] border-solid py-3.5 px-5 hover:bg-green-200 hover:text-white-100 transform transition-transform duration-300 ease-in-out hover:scale-105"
                    initial="initial"
                    animate="animate"
                    transition="transition">
                    CTA Button
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="12"
                        viewBox="0 0 28 12"
                        fill="none"
                        stroke="#2E4845"
                        className="ml-5 stroke:green-400 group-hover:stroke-white-400 group-active:stroke-white-400">
                        <path d="M0 6H26.5M26.5 6L21.5 1M26.5 6L21.5 11"/>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default SubHeading;
