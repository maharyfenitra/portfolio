import SocialMediaIcons from "../components/SocialMediaIcons"
import React from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from "framer-motion"
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Landing = ({ setSelectedPage }) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
    return (
        <section id="home" className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10">
            {/** Image Section */}
            <div className='md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32'>
                {isAboveMediumScreens ?
                    (<div className='relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 
                before:rounded-t-[40px] before:w-full before:max-w-[400px] before:h-full before:border-2 before:border-blue before:z-[-1]'>
                        <img alt="profile"
                            className='hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px] rounded-t-[40px]'
                            src="assets/profile-image.jpg"
                        />
                    </div>) : (<img alt="profile"
                        className='hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]
                        rounded-t-[40px]
                        '
                        src="assets/profile-image.jpg"
                    />)}
                </div>
                {/** Main section */}
                <div className="z-30 basis-2/5 mt-12 md:mt-32">
                    {/** Heading */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                        <p className='text-6xl font-playfair z-10 text-center md:text-start'>
                            Mahary RAFANOMEZANA
                        </p>
                        <p className='mt-10 mb-7 text-md text-center md:text-start'>
                        As a developer, I am exceptionally passionate and harbor a profound curiosity for the latest emerging technologies. Over the course of numerous years, I have meticulously honed my skills within the agile framework, showcasing remarkable adaptability to ever-changing project environments. With a strong open-minded ethos, I eagerly embrace new challenges, seeing them as invaluable opportunities for perpetual learning and professional growth. Additionally, I thrive in collaborative settings, leveraging excellent communication skills to work effectively with others. I am adept at fostering strong team dynamics and facilitating productive collaboration towards achieving shared goals.
                        </p>
                    </motion.div>
                    {/** CALL TO ACTIONS */}
                    <motion.div
                        className='flex mt-5 justify-center md:justify-start '
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                        <AnchorLink 
                            className='bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
                            hover:bg-blue hover:text-white transition duration-500'
                            onClick={()=>setSelectedPage("contact")}
                            href="#contact"
                        >
                            Contact me
                        </AnchorLink>
                        <AnchorLink 
                            className='rounded-r-sm bg-gradient-rainbow py-0.5 pr-0.5'
                            onClick={()=>setSelectedPage("contact")}
                            href="#contact"
                        >
                            <div className='bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center font-playfair px-10'>
                                Let's talk.
                            </div>
                        </AnchorLink>
                    </motion.div>
                    <motion.div
                        className='flex mt-5 justify-center md:justify-start '
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{delay: 0.4, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                        <SocialMediaIcons/>
                    </motion.div>
                </div>
        </section>
    )
}

export default Landing
