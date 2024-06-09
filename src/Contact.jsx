// Contact.jsx
import React from 'react';
import { useState } from 'react';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { Button, Spin } from 'antd'
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
  const [spinning, setSpinning] = useState(false);
  const showLoader = () => {
    setSpinning(true);
    setTimeout(() => {
      setSpinning(false);
    }, 3000);
  };

  const notify = () => toast.success("Login successfully",
    {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "colored",


    });
  return (
    <div className=' bg-red-400' >

      <Button onClick={showLoader}>Show fullscreen for 3s</Button>
      <Spin spinning={spinning} fullscreen />
      <h2>Contact Page</h2>
      <p>Contact us at contact@example.com</p>
      <button className=' bg-blue-500 rounded-md' onClick={notify}>Notify !</button>
      <ToastContainer />
    </div>
  );
};

export default Contact;
