import React from 'react';
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';

import gallery1 from '../img/gallery-1.png';
import gallery2 from '../img/gallery-2.png';
import gallery3 from '../img/gallery-3.png';
import gallery4 from '../img/gallery-4.png';
import gallery5 from '../img/gallery-5.png';
import gallery6 from '../img/gallery-6.png';
import gallery7 from '../img/gallery-7.png';

const GalleryItem = ({src, alt}) => {
    const controls = useAnimation();
    const [ref,
        inView] = useInView();

    React.useEffect(() => {
        if (inView) {
            controls.start({scale: 1, opacity: 1});
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            initial={{
            scale: 0.8,
            opacity: 0
        }}
            animate={controls}
            transition={{
            duration: 0.5
        }}
            className="h-full flex object-cover object-center xl:aspect-auto sm:aspect-square xs:aspect-square">
            <img src={src} alt={alt}/>
        </motion.div>
    );
};

const Gallery = () => {
    return (
        <div className="w-full lg:px-28 md:px-28 sm:px-5 xs:px-5">
            {/* Desktop Layout */}
            <div className="lg:block md:hidden sm:hidden xs:hidden">
                <div className="flex items-stretch gap-5 pb-5">
                    <div className=" h-full object-cover object-center">
                        <GalleryItem src={gallery1} alt="cottage-gallery"></GalleryItem>
                    </div>
                    <div className=" h-full object-cover object-center">
                        <GalleryItem src={gallery2} alt="cottage-gallery"></GalleryItem>
                    </div>
                </div>
                <div className=" h-full object-cover object-center pb-5">
                    <GalleryItem src={gallery3} alt="cottage-gallery"></GalleryItem>
                </div>
                <div className="flex items-stretch gap-5 pb-5">
                    <div className=" h-full object-cover object-center">
                        <GalleryItem src={gallery4} alt="cottage-gallery"></GalleryItem>
                    </div>
                    <div className=" h-full object-cover object-center">
                        <GalleryItem src={gallery5} alt="cottage-gallery"></GalleryItem>
                    </div>
                </div>
                <div className="flex items-stretch gap-5 pb-5">
                    <div className=" h-full object-cover object-center">
                        <GalleryItem src={gallery6} alt="cottage-gallery"></GalleryItem>
                    </div>
                    <div className=" h-full object-cover object-center">
                        <GalleryItem src={gallery7} alt="cottage-gallery"></GalleryItem>
                    </div>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden md:flex">
                <div className="flex flex-col items-stretch gap-5 pb-5">
                    <GalleryItem src={gallery1} alt="cottage-gallery"/>
                    <GalleryItem src={gallery2} alt="cottage-gallery"/>
                    <GalleryItem src={gallery3} alt="cottage-gallery"/>
                    <GalleryItem src={gallery4} alt="cottage-gallery"/>
                    <GalleryItem src={gallery5} alt="cottage-gallery"/>
                    <GalleryItem src={gallery6} alt="cottage-gallery"/>
                    <GalleryItem src={gallery7} alt="cottage-gallery"/>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
