import React,{useState,useRef} from 'react'
import Social from '../components/Social'
import styles from '../styles/contact.module.css'
import emailjs from 'emailjs-com';

const contact = () => {

  // const [name,setName]=useState('');
  // const [email,setEmail]=useState('');
  // const [msg,setMsg]=useState('');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, form.current, process.env.PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  };

  console.log(process.env.SERVICE_ID)

  return (
    <div className={`${styles.contact}`}>
      <h2 className='text-white text-2xl text-center mt-8 font-bold md:w-[900px]'>Let's Grab Some Coffee</h2>
      <div className={`flex mt-4 ${styles.conc}`}>
        <div style={{ padding: '3% 0 3% 3%',width:'60%'}} className={`${styles.soc}`} >
          <Social />
        </div>
        <div className={`${styles.form_box}`} style={{ fontFamily:'JetBrains Mono', borderLeft: '3px solid #f9826c', lineHeight: '2rem', letterSpacing: '3px', padding: '1% 3% 3% 3%', margin: '3% 1% ' }}>
          <p className={`text-2xl font-bold text-white mb-3`}>Or Fill Out The Form</p>
          <form ref={form} onSubmit={sendEmail} className={styles.form} >
            <div className='flex' >
              <div className='mx-2 my-2'>
                <label className='mb-1 text-white' htmlFor="name">NAME</label>
                <input
                  style={{ fontFamily: 'JetBrains Mono' }}
                  className='mb-2 bg-[#1f2428] text-white border-0 p-1 w-[100%]'
                  type="text"
                  name="name"
                  id="name"
                  required
                />
              </div>
              <div className='mx-2 ml-4 my-2'>
                <label className='mb-1 text-white' htmlFor="email">EMAIL</label>
                <input
                  style={{ fontFamily: 'JetBrains Mono' }}
                  className='mb-2 bg-[#1f2428] text-white border-0 p-1 w-[100%]'
                  type="email"
                  name="email"
                  id="email"
                  required
                />
              </div>
            </div>
            <div className='mx-2 my-2'>
              <label className='mb-1 text-white' htmlFor="message">MESSAGE</label>
              <textarea
                style={{ fontFamily: 'JetBrains Mono' }}
                className='mb-2 bg-[#1f2428] text-white border-0 p-1 w-[100%]'
                name="message"
                id="message"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default contact