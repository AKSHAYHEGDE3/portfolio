import React,{useState,useRef} from 'react'
import Social from '../components/Social'
import styles from '../styles/contact.module.css'
import emailjs from 'emailjs-com';
import ContactForm from '../components/ContactForm';

const contact = () => {

  // const [name,setName]=useState('');
  // const [email,setEmail]=useState('');
  // const [msg,setMsg]=useState('');
  

 

  return (
    <div className={`${styles.contact}`}>
      <h2 className='text-white text-2xl text-center mt-8 font-bold md:w-[900px]'>Let&apos;s Grab Some Coffee</h2>
      <div className={`flex mt-4 ${styles.conc}`}>
        <div style={{ padding: '3% 0 3% 3%',width:'60%'}} className={`${styles.soc}`} >
          <Social />
        </div>
        <div className={`${styles.form_box}`} style={{ fontFamily:'JetBrains Mono', borderLeft: '3px solid #f9826c', lineHeight: '2rem', letterSpacing: '3px', padding: '1% 3% 3% 3%', margin: '3% 1% ' }}>
          <p className={`text-2xl font-bold text-white mb-3`}>Or Fill Out The Form</p>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default contact