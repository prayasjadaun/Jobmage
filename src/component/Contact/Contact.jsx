import React from 'react'
import './contact.css'
function Contact() {
  return (
    <section className='contact' id='contact'>
        <div className='contact-headings'>
            <h1 className='contact-head'>Contact Us</h1>
            <p className='contact-subhead'>We are here to help you..</p>
        </div>
        <div className='contact-form-container'>
            <div className='contact-image'>
                <img src="https://img.freepik.com/free-vector/organic-flat-man-customer-support_23-2148893295.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1713052800&semt=ais" alt="contact" />
            </div>
            <form className='contact-form'>
            <h2 className='contact-query'>Ask your query</h2>
            <input type="text" placeholder='Enter your name' />
            <input type="email" placeholder='Enter your email' />
            <textarea rows='10' cols='30' name='Query' type='text' className='query' placeholder='Write your query'/>
            <button className='contact-btn'>Send</button>
            </form>
        </div>
      
    </section>
  )
}

export default Contact
