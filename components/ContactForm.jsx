import React, { useState, useRef } from 'react'
import styles from '../styles/contact.module.css'
import emailjs from 'emailjs-com';

const ContactForm = () => {

    const formRef = useRef();
    const [sent, setSent] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, formRef.current, process.env.PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setSent(true)
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    //console.log(process.env.SERVICE_ID)

    return (
        <div>
            {sent ? <p className='text-[#f9826c] text-lg'>Thank you for Contacting,<br />will reachout ASAP.</p> :
                <form ref={formRef} onSubmit={sendEmail} className={styles.form} >
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
            }
        </div>
    )
}

export default ContactForm