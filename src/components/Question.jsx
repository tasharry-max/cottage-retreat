import { useState } from 'react';
import { motion } from 'framer-motion';

const SingleQuestion = ({ number, question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleToggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const answerVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: 'auto', opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <>
      <motion.div
        className="bg-white border-b-1 border-white-300"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.article
          className="flex items-center lg:py-6 border-b-1 border-white-300"
          whileHover={{ scale: 1.03 }}
        >
          <div className="text-sm font-light leading-6">{number}</div>
          <motion.h4
            className="cursor-pointer lg:text-xl md:text-xl sm:text-sm xs:text-sm lg:pl-20 md:pl-20 sm:pl-10 xs:pl-10 pr-10 py-2 grow"
            onClick={handleToggleAnswer}
          >
            {question}
          </motion.h4>
          <ul>
            {!showAnswer && (
              <li>
                <motion.button
                  onClick={handleToggleAnswer}
                  whileHover={{ scale: 1.1 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <line x1="10.5" y1="2.18557e-08" x2="10.5" y2="21" stroke="#2E4845" />
                    <line y1="10.5" x2="21" y2="10.5" stroke="#2E4845" />
                  </svg>
                </motion.button>
              </li>
            )}
            {showAnswer && (
              <li>
                <motion.button
                  onClick={handleToggleAnswer}
                  whileHover={{ scale: 1.1 }}
                  className="flex self-end"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="1"
                    viewBox="0 0 22 1"
                    fill="none"
                  >
                    <line y1="0.5" x2="21.4521" y2="0.5" stroke="#2E4845" />
                  </svg>
                </motion.button>
              </li>
            )}
          </ul>
        </motion.article>
        <div className="pb-8">
          <hr></hr>
        </div>
        <motion.article
          className={`${showAnswer && ''}`}
          variants={answerVariants}
          initial="hidden"
          animate={showAnswer ? 'visible' : 'hidden'}
        >
          {showAnswer && (
            <div className="xl:pl-24 lg:pl-24 md:pl-10 sm:pl-10 xs:pl-10 max-w-screen-lg text-sm font-light leading-6">
              {answer}
            </div>
          )}
        </motion.article>
      </motion.div>
    </>
  );
};

export default SingleQuestion;
