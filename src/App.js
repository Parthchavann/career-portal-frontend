import React, { useState } from 'react';
import './App.css';

function App() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [response, setResponse] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let tempErrors = {};

        if (!formData.name) tempErrors.name = 'Please enter your name';
        if (!formData.email) tempErrors.email = 'Please enter your email';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = 'Please enter a valid email';
        if (!formData.message) tempErrors.message = 'Please enter your message';

        setErrors(tempErrors);
        if (Object.keys(tempErrors).length > 0) return;

        setResponse(`✓ Message sent successfully! Thank you, ${formData.name}. We will contact you at ${formData.email} soon.`);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="container">
            <div className="header">
                <h1>Global Wheel House: Passion2Paychecks</h1>
            </div>

            <div className="form-section">
                <h2>Contact Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`form-input ${errors.name ? 'validation-error' : ''}`}
                            placeholder="Enter your name"
                        />
                        {errors.name && <div className="error-message">{errors.name}</div>}
                    </div>

                    <div className="form-group">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`form-input ${errors.email ? 'validation-error' : ''}`}
                            placeholder="Enter your email"
                        />
                        {errors.email && <div className="error-message">{errors.email}</div>}
                    </div>

                    <div className="form-group">
                        <label className="form-label">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className={`form-input form-textarea ${errors.message ? 'validation-error' : ''}`}
                            placeholder="Enter your message"
                        />
                        {errors.message && <div className="error-message">{errors.message}</div>}
                    </div>

                    <button type="submit" className="submit-btn">
                        Send Message
                    </button>
                </form>
            </div>

            <div className="response-section">
                <h2>Server Response</h2>
                <div className="response-box">
                    {response || 'Fill out and submit the form to see the server response here.'}
                </div>
            </div>
        </div>
    );
}

export default App;