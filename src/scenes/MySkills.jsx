
import LineGradient from '../components/LineGradient';
import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import React from 'react'

const MySkills = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
    return (
        <section id="skills" className='pt-10 pb-24'>
            {/** Header and image section */}
            <div className='md:flex md:justify-between md:gap-16 mt-32'>
                <motion.div
                    className='md:w-1/3'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <p className='font-playfair font-semibold text-4xl'>
                        <span className='text-red'>SKILLS</span>
                    </p>
                    <LineGradient width='w-1/3' />
                    <p className='mt-10 mb-7'>
                    In my professional journey, I've mastered both backend and frontend development, utilizing advanced technologies like React, Next.js, Nest.js, and GraphQL. I'm adept at working within teams with complex workflows and proficient in Git for version control. With meticulous attention to detail and a commitment to staying updated with industry trends, I consistently deliver high-caliber results, ensuring seamless integration of cutting-edge functionalities and optimal user experiences.
                    </p>
                </motion.div>
                <div className='mt-16 md:mt-0'>
                    {isAboveMediumScreens ?
                        (<div className='relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 
                        before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]'>
                            <img alt="skills"
                                className='z-10'
                                src='assets/skills-image.png'
                            />
                        </div>) : <img alt="skills"
                            className='z-10'
                            src='assets/skills-image.png'
                        />}
                </div>
            </div>
            {/** Skills */}
            <div className='md:flex md:justify-between mt-16 gap-32'>
                {/** Experience */}
                <motion.div
                    className='md:w-1/3 mt-10'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                >
                    <div className='relative h-32'>
                        <div className='z-10'>
                            <p className='font-playfair font-semibold text-5xl'>01</p>
                            <p className='font-playfair font-semibold text-3xl mt-3'>Frontend</p>
                        </div>
                        <div className='w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]'></div>
                    </div>
                    <p className='mt-5'>
                    I'm skilled in web standards like HTML/CSS and vanilla JavaScript, ensuring adherence to best practices. Additionally, I excel in modern frameworks like ReactJS and Next.js, crafting dynamic web applications for today's development landscape.
                    </p>
                </motion.div>
                {/** Innovative */}
                <motion.div
                    className='md:w-1/3 mt-10'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                >
                    <div className='relative h-32'>
                        <div className='z-10'>
                            <p className='font-playfair font-semibold text-5xl'>02</p>
                            <p className='font-playfair font-semibold text-3xl mt-3'>Backend</p>
                        </div>
                        <div className='w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]'></div>
                    </div>
                    <p className='mt-5'>
                    I am equally passionate about backend development, particularly with frameworks like Nest.js. Additionally, I occasionally dedicate time to expanding my knowledge in Java, particularly focusing on Spring Boot, as I strive to continuously enhance my proficiency in backend development.
                    </p>
                </motion.div>
                {/** Imaginative */}
                <motion.div
                    className='md:w-1/3 mt-10'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                >
                    <div className='relative h-32'>
                        <div className='z-10'>
                            <p className='font-playfair font-semibold text-5xl'>03</p>
                            <p className='font-playfair font-semibold text-3xl mt-3'>Problem solving</p>
                        </div>
                        <div className='w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]'></div>
                    </div>
                    <p className='mt-5'>
                    I have a strong passion for algorithm design and problem-solving. Each challenge is an opportunity for me to enhance my skills and find creative solutions. With dedication and practice, I am continuously improving my ability to tackle diverse computational problems effectively.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default MySkills
