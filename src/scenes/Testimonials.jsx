import React from 'react'
import LineGradient from '../components/LineGradient';
import { motion } from 'framer-motion';

const Testimonials = () => {
    const testimonialStyles = `mx-auto relative max-w-[400px] h-[350px] flex flex-col 
    justify-end p-6 mt-48 before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2`
    return (
        <section id='testimonials' className='pt-32 pb-16'>
            {/** Heading */}
            <motion.div
                className='md:w-1/3 text-center md:text-left'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                }}
                
            >
                <p className='font-playfair font-semibold mb-5 text-red text-center'>
                CAREER SUMMARY
                </p>
                <LineGradient width='mx-auto w-2/4' />
                <p className='mt-10'>
                Since 2015, I started my adventure as a software developer. And since then I have learned to love my work. 
                I worked for different companies and I learned a lot and I continue to learn.
                </p>
            </motion.div>
            {/**Testimonials */}
            <div className='md:flex md:justify-between gap-8'>
                <motion.div
                    className={`bg-blue ${testimonialStyles} before:content-person1`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, scale: 1 }
                    }}
                >
                    <p className='font-playfair text-2xl'>JavaScript Developer</p>
                    <p className='text-left text-xl'>
                    Bocasay-Madagascar June 2022 to date
                    </p>
                        <ul className='list-square ml-7'>
                            <li>FrontEnd ReactJs Developer</li>
                            <li>Client-side graphql query creation</li>
                            <li>SQL query creation</li>
                            <li>End2End test</li>
                        </ul>
                    
                </motion.div>
                <motion.div
                    className={`bg-red ${testimonialStyles} before:content-person2`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, scale: 1 }
                    }}
                >
                    <p className='font-playfair text-2xl'>IT Developer</p>
                    <p className='text-left text-xl'>
                    Jovena-Madagascar July 2017 to May 2022
                    </p>
                    <p>
                        <ul className='list-square ml-7'>
                            <li>Develop specifications intended according to the needs of the company</li>
                            <li>Follow-up of development projects in collaboration with service providers</li>
                        </ul>
                    </p>
                </motion.div>
                <motion.div
                    className={`bg-yellow ${testimonialStyles} before:content-person3`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, scale: 1 }
                    }}
                >
                    <p className='font-playfair text-2xl'>Junior Developer</p>
                    <p className='text-left text-xl'>
                    Fuba Industries January 2015 to June 2017
                    </p>
                    <p className='text text-xl'>
                        <ul className='list-square ml-7'>
                            <li>Development of different Prestashop modules</li>
                            <li>User interface development</li>
                        </ul>
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default Testimonials
