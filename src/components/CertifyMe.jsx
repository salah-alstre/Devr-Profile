import React from 'react';

const CertifyMe = () => {
  return (
    <div className="">
      <h2 className="text-3xl font-bold text-m mb-4 text-center">
        My Certifications
      </h2>
      <p className="text-gray-600 mb-4 text-center font-bold text-m">
        Explore all my certifications and acquired skills through the{' '}
        <span className="font-bold text-red-500">CertifyMe</span> platform
      </p>
      <a

        href="https://certify-me-eight.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-hidden rounded-lg border-2 border-red-500 hover:border-red-700 transition duration-300"
      >
        <img
          src="https://github.com/salah-alstre/CertifyMe/blob/main/public/Certify.png?raw=true"
          alt="CertifyMe"
          className="w-full h-auto"
        />
      </a>
    </div>
  );
};

export default CertifyMe;
