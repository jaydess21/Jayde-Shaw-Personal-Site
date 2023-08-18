import React from 'react';

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#ff99cc] flex justify-center items-center p-4'>
      <div className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8 flex flex-col justify-center w-full h-full items-center'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-500 text-white-300'>Contact</p>
          <p className='text-white-300 py-4'>To send me a email click the email icon on the side</p>
        </div>
        <input className='bg-[#000000] p-2 text-pink-500' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#000000] text-pink-500' type="email" placeholder='Email' name='email' />
        <textarea className='bg-[#000000] p-2 text-pink-500' name="message" rows="10" placeholder='Coming soon.. Use Side Icons in the meantime, Thank you!'></textarea>
        <button className='text-pink border-2 hover:bg-pink-500 hover:border-pink-500 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
      </div>
    </div>
  );
};

export default Contact;
