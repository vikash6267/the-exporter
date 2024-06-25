import React from 'react';

const ContactButton = ({ buttonColorClass }) => {
  const handleWhatsAppRedirect = () => {
    const phoneNumber = '7827992155'; // Your phone number
    const message = 'Hello, I would like to inquire about your services.'; // Your pre-defined message
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    window.open(url, '_blank'); // Open WhatsApp in a new tab
  };

  return (
    <button
      onClick={handleWhatsAppRedirect}
      className={`text-white w-full font-serif py-2 px-4 rounded ${buttonColorClass} hover:bg-opacity-75`}
    >
      Send Inquiry
    </button>
  );
};

export default ContactButton;
