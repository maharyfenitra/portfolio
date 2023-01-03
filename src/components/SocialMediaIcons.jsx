import React from 'react'

const SocialMediaIcons = () => {
  return (
    <div className='flex justify-center md:justify-start my-10 gap-7'>
      <a className='hover:opacity-50 transition duration-500'
      href='ww.linkedin.com'
      target='_blank'
      rel='noreferrer'
      >
        <img alt="linkedin-link" src="assets/linkedin.png"/>
      </a>
      <a className='hover:opacity-50 transition duration-500'
      href='ww.twitter.com'
      target='_blank'
      rel='noreferrer'
      >
        <img alt="twitter-link" src="assets/twitter.png"/>
      </a>
      <a className='hover:opacity-50 transition duration-500'
      href='ww.facebook.com'
      target='_blank'
      rel='noreferrer'
      >
        <img alt="facebook-link" src="assets/facebook.png"/>
      </a>
      <a className='hover:opacity-50 transition duration-500'
      href='ww.github.com'
      target='_blank'
      rel='noreferrer'
      >
        <img alt="linkedin-link" src="assets/instagram.png"/>
      </a>
    </div>
  )
}



export default SocialMediaIcons
