
import { useState } from 'react';
import '../Styles/Contactus.css';
import ContactImage from '../Assets/ContactUs.png';

const Contactus = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className='contact-page'>
            <div
                className='contact-hero'
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.70)), url(${ContactImage})`
                }}
            >
                <div className='contact-hero-content'>
                    <p>WE WOULD LOVE TO HEAR FROM YOU</p>
                    <h1>Get in Touch</h1>
                    <p>
                        Have a question or want to share your experience?
                        Send us a message.
                    </p>
                </div>
            </div>

            <div className='contact-content'>
                <div className='contact-info'>
                    <h2>Contact The Italian Cut</h2>
                    <p>
                        Whether you have a question about our menu,
                        a suggestion, or a general inquiry, feel free
                        to contact us using the form.
                    </p>

                    <div className='contact-detail'>
                        <h3>Questions</h3>
                        <p>We are happy to answer your questions.</p>
                    </div>

                    <div className='contact-detail'>
                        <h3>Reservations</h3>
                        <p>Get in touch with us for reservation inquiries.</p>
                    </div>

                    <div className='contact-detail'>
                        <h3>Feedback</h3>
                        <p>Your feedback helps us improve our service.</p>
                    </div>
                </div>

                <div className='contact-form-container'>
                    <h2>Send Us a Message</h2>

                    {submitted ? (
                        <div className='success-message'>
                            <h3>Thank You!</h3>
                            <p>Your message has been submitted successfully.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <label>Your Name</label>
                            <input
                                type='text'
                                placeholder='Enter your name'
                                required
                            />

                            <label>Email Address</label>
                            <input
                                type='email'
                                placeholder='Enter your email'
                                required
                            />

                            <label>Your Message</label>
                            <textarea
                                placeholder='Write your message here...'
                                rows='5'
                                required
                            ></textarea>

                            <button type='submit'>Send Message</button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contactus;
