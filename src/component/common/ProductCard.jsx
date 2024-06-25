import React from 'react';

const ProductCard = ({ imageUrl, title, category, index }) => {
    // Define button color based on index
    const buttonColorClass = index % 2 === 0 ? 'bg-[#5A5A5A]' : 'bg-[#df794d]';

    const handleWhatsAppRedirect = () => {
        const phoneNumber = '+917827992155'; // Your phone number
        const message = `Hello, I would like to inquire about the ${title}.`; // Message with the product title
        const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

        window.open(url, '_blank'); // Open WhatsApp in a new tab
    };

    return (
        <div className="rounded overflow-hidden shadow-lg bg-white text-center">
            <img src={imageUrl} alt="Product" className="w-full" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-[#33536B] font-fjalla">{title}</div>
                <p className="text-gray-700 text-base mb-2"><span className="font-bold">Category:</span> {category}</p>
                <button
                    onClick={handleWhatsAppRedirect}
                    className={`text-white w-full font-serif py-2 px-4 rounded ${buttonColorClass} hover:bg-opacity-75`}
                >
                    Send Inquiry
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
