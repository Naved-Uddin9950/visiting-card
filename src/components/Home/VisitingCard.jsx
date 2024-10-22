import React, { useRef } from 'react';
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaGlobe, FaShareAlt, FaFacebook, FaLinkedin, FaTwitter, FaGithub, FaBuilding, FaInstagram, FaYoutube } from 'react-icons/fa';
import { MdPhoneAndroid } from 'react-icons/md';
import html2pdf from 'html2pdf.js';

const VisitingCard = () => {
    const cardRef = useRef();

    const handleShare = () => {
        const url = window.location.href;
        navigator.clipboard.writeText(url);
        alert("Link copied to clipboard!");
    };

    const handleDownloadPDF = () => {
        const element = cardRef.current;
        html2pdf()
            .from(element)
            .save('VisitingCard.pdf');
    };

    const goto = (link) => {
        window.location.href = link;
    }

    const data = {
        name: 'Govind Agrawal',
        profile: 'https://tiimg.tistatic.com/employees_photo/2/46129.png',
        role: 'Relationship Manager - Business Development',
        company: 'Tradeindia (Infocom Network Private Ltd.)',
        website: 'https://www.tradeindia.com/',
        email: 'govind.agrawal@tradeindia.com',
        phone: '+917987225228',
        address: 'Plot No-93/94, Raina Tower, First Floor, Sec-136, Noida 201305'
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="p-6 bg-white shadow-lg dark:shadow-dark rounded-lg dark:bg-gray-900" ref={cardRef}>
                <div className="flex items-center mb-4">
                    <img src={data.profile} alt="Profile" className="w-24 h-24 rounded-full shadow-md object-cover" />
                    <div className="ml-4">
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{data.name}</h2>
                        <p className="text-gray-600 dark:text-gray-300">{data.role}</p>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-4'>
                    <div className='flex flex-col items-center gap-1'>
                        <FaPhone
                            className='w-10 h-10 bg-green-500 rounded-full p-2 cursor-pointer'
                            onClick={() => goto('tel:+917987225228')}
                        />
                        <h3>Call</h3>
                    </div>
                    <div className='flex flex-col items-center gap-1'>
                        <FaWhatsapp
                            className='w-10 h-10 bg-green-500 rounded-full p-2 cursor-pointer'
                            onClick={() => goto('https://wa.me/+917987225228')}
                        />
                        <h3>Whatsapp</h3>
                    </div>
                    <div className='flex flex-col items-center gap-1'>
                        <FaEnvelope
                            className='w-10 h-10 bg-green-500 rounded-full p-2  cursor-pointer'
                            onClick={() => goto('mailto:govind.agrawal@tradeindia.com')}
                        />
                        <h3>E-Mail</h3>
                    </div>
                </div>
                <div className="border-t border-gray-300 my-4"></div>
                <div className="text-gray-800 dark:text-gray-300 space-y-2">
                    <div className="flex items-center gap-2">
                        <FaBuilding /> {data.company}
                    </div>
                    <div className="flex items-center gap-2">
                        <FaGlobe /> <a href={`https://${data.website}`} target="_blank" rel="noopener noreferrer">{data.website}</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaEnvelope /> <a href={`mailto:${data.email}`}>{data.email}</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaPhone /> <a href={`tel:${data.email}`}>{data.phone}</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaMapMarkerAlt /> {data.address}
                    </div>
                </div>
                <div className="border-t border-gray-300 my-4"></div>
                <div className="flex justify-center gap-4 text-2xl">
                    <FaFacebook
                        className="text-blue-600 cursor-pointer"
                        onClick={() => goto('https://www.facebook.com/tradeindia')}
                    />
                    <FaLinkedin
                        className="text-blue-700 cursor-pointer"
                        onClick={() => goto('https://www.linkedin.com/tradeindia')}
                    />
                    <FaTwitter
                        className="text-blue-400 cursor-pointer"
                        onClick={() => goto('https://www.twitter.com/tradeindia')}
                    />
                    <FaInstagram
                        className="text-pink-500 cursor-pointer"
                        onClick={() => goto('https://www.instagram.com/tradeindia')}
                    />
                    <FaYoutube
                        className="text-red-500 cursor-pointer"
                        onClick={() => goto('https://www.youtube.com/tradeindia')}
                    />
                </div>
                <div className="border-t border-gray-300 my-4"></div>
                <div className="flex justify-between">
                    <button onClick={handleShare} className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">
                        <FaShareAlt className="inline mr-2" /> Share
                    </button>
                    <button onClick={handleDownloadPDF} className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600">
                        Convert to PDF
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VisitingCard;