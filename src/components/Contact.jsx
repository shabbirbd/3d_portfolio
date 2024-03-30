import emailjs from "@emailjs/browser";
import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { slideIn } from '../utils/motion';
import { EarthCanvas } from './canvas';

// template_pchpsgc
// service_8oyj91f
// tinn4jQwbmDeMPGi5

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false)
  const formRef = useRef();

  const handleChange = (e) => {
    const {name, value} = e.target;

    setForm({...form, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      "service_8oyj91f", 
      "template_pchpsgc",
      {
        from_name: form.name,
        to_name: "Shabbir",
        from_email: form.email,
        to_email: "shabbirhossainshah@gmail.com",
        message: form.message
      } ,
      "tinn4jQwbmDeMPGi5"
    ).then(()=>{
      setLoading(false);
      alert("Thank you! I'll get back to you as soon as possible");
      setForm({
        name: "",
        email: "",
        message: ""
      })
    },
      (error) => {
        setLoading(false);
        console.error(error);
        alert("Ahh, something went wrong. Please try again.");
      }
    )
  };

  return (
    <div className='ml:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div 
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-45'>Your Name</span>
            <input 
              type="text" 
              name="name" 
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-45'>Your Email</span>
            <input 
              type="email" 
              name="email" 
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-45'>Your Message</span>
            <textarea 
              rows={7}
              name="message" 
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          >
            {loading ? "Sending" : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div 
        variants={slideIn('right', "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas/>
      </motion.div> 
    </div>
  )
}

export default SectionWrapper(Contact, "contact")