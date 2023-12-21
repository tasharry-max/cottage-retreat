import {useState} from 'react';
import {motion} from 'framer-motion';
import Question from './Question';
import {questions} from './questions';

const FaqSection = () => {
    const [cards] = useState(questions);

    return (
        <motion.div
            className="xl:px-52 lg:px-52 md:px-28 sm:px-5 xs:px-5 lg:pt-40 md:pt-40 sm:pt-10 xs:pt-10"
            initial={{
            opacity: 0,
            y: 20
        }}
            animate={{
            opacity: 1,
            y: 0
        }}
            transition={{
            duration: 0.6,
            delay: 0.2
        }}>
            <motion.h3
                className="pb-5 lg:text-5xl md:text-5xl sm:text-3xl xs:text-3xl text-green-200"
                initial={{
                opacity: 0,
                y: 20
            }}
                animate={{
                opacity: 1,
                y: 0
            }}
                transition={{
                duration: 0.6,
                delay: 0.2
            }}>
                Heading text here...
            </motion.h3>
            <motion.p
                className="pb-12 text-sm max-w-lg leading-6"
                initial={{
                opacity: 0,
                y: 20
            }}
                animate={{
                opacity: 1,
                y: 0
            }}
                transition={{
                duration: 0.6,
                delay: 0.2
            }}>
                Lorem ipsum dolor sit amet consectetur. Malesuada sit consequat tristique
                consectetur sit tristique amet in. Etiam egestas elit vestibulum commodo.
            </motion.p>
            <motion.section className="grid grid-cols-1 gap-8 pb-10">
                {cards.map((card, index) => (<Question {...card} key={index}/>))}
            </motion.section>
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
        </motion.div>
    );
};

export default FaqSection;
