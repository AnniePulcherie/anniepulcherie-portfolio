import {sendForm } from '@emailjs/browser';
import React, { useRef } from 'react';
import { useState } from 'react';
import "../ressource/style/contact.css";
const Contact = () => {
    const [nom, setNom] = useState();
    const [email, setEmail] = useState("");
    const [message,setMessage] = useState("");

    const service_id ="service_e1wfmma";
    const template_id ="template_yilrovw";
    const api_key = "W08WFzYdtjThajzC7";
      
      const form = useRef();

      const sendEmail = (e) => {
        e.preventDefault();
    
        sendForm(service_id, template_id, form.current, {
            publicKey: api_key,
          })
          .then(
            () => {
              alert('Votre message a bien été envoyer');
              setNom('');
              setEmail('');
              setMessage('');
            },
            (error) => {
              console.log('FAILED...', error);
            },
          );
      };
    
    return (
        <div>
           <section className='contact'>
            <div className='content'>
                <h2>Contact moi</h2>
                <p>votre application web, mobile, logiciel</p>

            </div>
            <div className='container'>
                <div className='contactInfo'>
                    <div className='box'>
                        <div className='icon'><i class='bx bxs-map'></i></div>
                        <div className='text'>
                            <h3>Adresse</h3>
                            <p>Andranomadio Toamasina</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='icon'><i class='bx bxs-phone'></i></div>
                        <div className='text'>
                            <h3>Phone</h3>
                            <p>+261345055388</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='icon'><i class='bx bxs-envelope' ></i></div>
                        <div className='text'>
                            <h3>Email</h3>
                            <p>ranniepulcherie@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className='contactForm'>
                    <form ref={form} onSubmit={sendEmail}>
                        <h2>Send Message</h2>
                        <div className='inputBox'>
                            <input type="text" name='nom' value={nom} onChange={((e)=>{setNom(e.target.value);})} />
                            <span>Nom</span>
                        </div>
                        <div className='inputBox'>
                            <input type="text" name='email' value={email} onChange={((e)=>{setEmail(e.target.value);})} />
                            <span>Email</span>
                        </div>
                        <div className='inputBox'>
                            <textarea type="text" name='message' value={message} onChange={((e)=>{setMessage(e.target.value);})} />
                            <span>Type your message</span>
                        </div>
                        <div className='inputBox'>
                            <input type="submit"  value="Send"/>
                            
                        </div>
                        
                    </form>
                </div>
            </div>

           </section>
        </div>
    );
};

export default Contact;