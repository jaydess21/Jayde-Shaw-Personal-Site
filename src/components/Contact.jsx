import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement the logic to send the email using your preferred method or service
    // For example, you can use an API to send the email or set up a server to handle email sending
    console.log('Form data:', formData);
    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
   
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div name='contact' className='w-full h-screen bg-[#ff99cc] flex justify-center items-center p-4'>
      <div className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8 flex flex-col justify-center w-full h-full items-center'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-500 text-white'>Contact</p>
          <p className='text-white py-2'>To send me an email, fill out the form below:</p>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            className='w-full bg-white p-2 text-pink-500 my-1'
            type="text"
            placeholder='Name'
            name='name'
            value={formData.name}
            onChange={handleChange}
          />
          <input
            className='w-full p-2 bg-white text-pink-500 my-1'
            type="email"
            placeholder='Email'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            className='w-full bg-white p-2 text-pink-500 my-1'
            name="message"
            rows="10"
            placeholder='Your message...'
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button
            type="submit"
            className='text-pink border-2 hover:bg-pink-500 hover:border-pink-500 px-4 py-3 my-8 mx-auto flex items-center'
          >
            Let's Collaborate
          </button>
       
        </form>
      </div>
    </div>
  );
};

export default Contact;
