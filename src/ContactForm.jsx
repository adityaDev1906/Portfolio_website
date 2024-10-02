import React, { useState } from 'react';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [msg, setMsg] = useState('');
    const [buttonText, setButtonText] = useState('Submit');

    const scriptURL = 'https://script.google.com/macros/s/AKfycbxEc5puPmbnqGh0Smp87CX4xRHIUecCr0E6Q1Xp_LB-WwBTFfzGC7haFBFRoVLnEx7MCA/exec';

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Submitted');

        const formData = new FormData();
        formData.append('Name', name);
        formData.append('Email', email);
        formData.append('Message', message);
        formData.append('Phone', phone);

        try {
            const response = await fetch(scriptURL, { method: 'POST', body: formData });
            if (response.ok) {
                setMsg('Message sent successfully!!');
                setTimeout(() => {
                    setMsg('');
                }, 5000);
                // Reset form fields
                setName('');
                setEmail('');
                setMessage('');
                setPhone('');
                setButtonText('Submit');
            } else {
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            console.error('Error!', error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="Name" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="email" name="Email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="text" name="Phone" placeholder="Your Phone no" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            <textarea name="Message" rows="4" placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)} />
            <button type="submit" className="btn btn2">{buttonText}</button>
            {msg && <p id="msg">{msg}</p>}
        </form>
    );
};

export default ContactForm;
