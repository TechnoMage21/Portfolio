import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css';

export default function Contact() {
    const [contact, setContact] = useState({
        fname: '',
        lname: '',
        contactNo: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({
        fname: '',
        lname: '',
        contactNo: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact({ ...contact, [name]: value });
    };

    const validateForm = () => {
        let formErrors = {};
        if (!contact.fname) formErrors.fname = 'First name is required';
        if (!contact.lname) formErrors.lname = 'Last name is required';
        if (!contact.contactNo) formErrors.contactNo = 'Contact number is required';
        else if (!/^\d{10}$/.test(contact.contactNo)) formErrors.contactNo = 'Contact number must be 10 digits';
        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!validateForm()) return;

        setIsSubmitting(true);
        console.log(contact);
        setContact({ fname: '', lname: '', contactNo: '' });

        toast.success(<CustomToast />, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            toastId: "success-toast",
            style: {
                background: '#fff',
                color: '#000',
                fontWeight: 'bold',
                border: '1px solid #ccc',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            },
        });

        setIsSubmitting(false);
    };

    const CustomToast = () => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <span role="img" aria-label="check" style={{ fontSize: '24px', marginRight: '8px' }}>✅</span>
            <div>Thank You For Contact</div>
        </div>
    );

    return (
        <div className='contact' id="contact">
            <ToastContainer />
            
            <form className="form" onSubmit={handleSubmit}>
                <h1 className='contact-heading'>Contact Me</h1>
                <input 
                    type="text" 
                    name="fname" 
                    placeholder='Enter Your First Name' 
                    value={contact.fname} 
                    onChange={handleChange} 
                    className={errors.fname ? 'input-error' : ''}
                />
                {errors.fname && <p className="error-message">{errors.fname}</p>}
                
                <input 
                    type="text" 
                    name="lname" 
                    placeholder='Enter Your Last Name' 
                    value={contact.lname} 
                    onChange={handleChange} 
                    className={errors.lname ? 'input-error' : ''}
                />
                {errors.lname && <p className="error-message">{errors.lname}</p>}
                
                <input 
                    type="tel" 
                    name="contactNo" 
                    placeholder='Enter Your Contact Number' 
                    value={contact.contactNo} 
                    onChange={handleChange} 
                    className={errors.contactNo ? 'input-error' : ''}
                />
                {errors.contactNo && <p className="error-message">{errors.contactNo}</p>}
                
                <button 
                    className='btn btn-success btn-contact' 
                    type="submit" 
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Submitting...' : 'Contact'}
                </button>
            </form>
        </div>
    );
}
