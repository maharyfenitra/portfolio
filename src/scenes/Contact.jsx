import React from 'react'
import LineGradient from '../components/LineGradient';
import { useForm } from "react-hook-form"
import { motion } from "framer-motion"

const Contact = () => {
  const re =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const { register, trigger, formState: { errors } } = useForm();
  const onSubmit = async (e) => {
    const isValide = await trigger();
    if (!isValide) {
      e.preventDefault();
    }
  }
  return (
    <section id="contact" className='py-48'>
      {/** Heading */}
      <motion.div
        className='flex justify-end w-full'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 }
        }}
      >
        <div>
          <p className='font-playfair font-semibold text-4xl'>
            <span className='text-yellow'>CONTACT ME</span>  TO GET STARTED
          </p>
          <div className='flex md:justify-end'>
            <LineGradient width='w-1/2 mt-5' />
          </div>
        </div>
      </motion.div>
      {/** Form & Image */}
      <div className='md:flex md:justify-between gap-16 mt-5'>
        <motion.div
          className='basis-1/2 flex justify-center'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}>
            <img src="assets/contact-image.jpeg" alt="contact"/>
        </motion.div>
        <motion.div
            className='basis-1/2 mt-10 md:mt-0'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
        >
          <form
            target='_blank'
            onSubmit={onSubmit}
            action="https://formsubmit.co/4c37fda0866de80a1ae84fda0f1753f5"
            method="POST"
          >
            <input className='w-full bg-blue font-semibold placeholder-opaque-black p-3' type='text' placeholder='NAME' {...register("name",{
              required: true,
              maxLength: 100
            })}/>
            {errors.name && (<p className='text-red'>
              {errors.name.type === 'required' && 'This field is required'}
              {errors.name.type === 'maxLength' && 'Max length is 100 char.'}
            </p>)}
            <input className='w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5' type='text' placeholder='EMAIL' {...register("email",{
              required: true,
              pattern: re
            })}/>
            {errors.email && (<p className='text-red'>
              {errors.email.type === 'required' && 'This field is required'}
              {errors.email.type === 'pattern' && 'Invalid email address.'}
            </p>)}
            <textarea className='w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5' type='text' placeholder='MESSAGE' rows="4"  cols="50" {...register("message",{
              required: true,
              maxLength: 2000
            })}/>
            {errors.message && (<p className='text-red'>
              {errors.message.type === 'required' && 'This field is required'}
              {errors.message.type === 'pattern' && 'Max length is 2000 char.'}
            </p>)}
            <button
              type='submit'
              className='p-5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-500'
            >
              SEND ME A MESSAGE
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  )
}

export default Contact