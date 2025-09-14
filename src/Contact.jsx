import React from 'react'
import Header from './Header'
import ContactForm from './ContactForm'
import Footer from './Footer'

function Contact() {
    return (
        <>
            <Header />
            <div id="contact">
                <div className="contact-content">
                    <div className="row">
                        <div className="contact-left">
                            <h1 className="sub-title">Contact Me</h1>
                            <p><i className="fa-solid fa-paper-plane"></i>adityastark1111@gmail.com</p>
                            <p><i className="fa-solid fa-square-phone"></i>9304014672</p>
                            <div className="social-icons">
                                <a href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                                <a href="https://twitter.com/" target="_blank"><i className="fa-brands fa-twitter"></i></a>
                                <a href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                                <a href="https://www.linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                            </div>
                            <a href="images/Aditya_Kumar_2024.pdf" download className="btn btn2">Download CV</a>
                        </div>
                        <div className="contact-right">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact