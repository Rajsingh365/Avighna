import React from 'react';
import { Link } from 'react-router-dom';

function TermsAndConditions() {
  return (
    <div className="p-4 h-auto bg-[radial-gradient(circle_at_50%_75%,#FFBA08,#F48C06)] ">
      <div className="bg-white py-8 px-12 rounded-md text-gray-500">
      <h1 className="text-2xl font-bold mb-4">Terms and Conditions</h1>
      <p className="mb-2">
        Welcome to our website! By accessing and using this site, you agree to comply with the following terms and conditions:
      </p>
      <ol className="list-decimal ml-6 mb-4">
        <li className="mb-2">
          <strong className='text-black'>Use of Content:</strong> All content on this website is for informational/religious purposes only. You may not reproduce, distribute, or modify any material without our consent.
        </li>
        <li className="mb-2">
          <strong className='text-black'>Privacy:</strong> We respect your privacy. Please review our <Link to={"/privacy-policy"} className="text-blue-500 hover:underline">Privacy Policy</Link> for details on how we collect, use, and protect your personal information.
        </li>
        <li className="mb-2">
          <strong className='text-black'>Disclaimer:</strong> The information provided on this site is accurate to the best of our knowledge, but we make no warranties or guarantees regarding its accuracy or completeness.
        </li>
        {/* Add more relevant points specific to your website */}
      </ol>
      <p className="mb-4">
        If you have any questions or concerns, please <Link to={"/contact-us"} className="text-blue-500 hover:underline">contact us</Link>.
      </p>
      </div>
    </div>
  );
}

export default TermsAndConditions;
