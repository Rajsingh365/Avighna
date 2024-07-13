import React from 'react';
import { Link } from 'react-router-dom';

function PrivacyPolicy() {
  return (
    <div className="p-4 h-auto bg-[radial-gradient(circle_at_50%_75%,#FFBA08,#F48C06)] ">
      <div className="bg-white py-8 px-12 rounded-md text-gray-500">


        <h1 className="text-2xl font-bold mb-4 text-black">Privacy Policy</h1>
        <p className="mb-2">
          Welcome to our website! By accessing and using this site, you agree to comply with the following privacy policy:
        </p>
        <ol className="list-decimal ml-6 mb-4">
          <li className="mb-2">
            <strong className='text-black'>Information Collection:</strong> We collect certain information when you visit our website. This includes your Personal Information like email, telephone, total payment. 
          </li>
          <li className="mb-2">
            <strong className='text-black'>Use of Information:</strong> Your email is useful to us for updating you about Ganesh Chaturthi various events, etc. We collect the total payment to display your ranking on the leaderboard.
            <p><span className='font-bold'>Frequency of Updates: </span>It will be on daily basis if you miss to pay on that day.</p>
          </li>
          <li className="mb-2">
            <strong className='text-black'>Unsubscribe Option:</strong> You can <Link className="text-blue-500 hover:underline" to={"/contact-us"}>contact us</Link>. We will make the changes for you within 24 hours.
          </li>
          <li className="mb-2">
            <strong className='text-black'>Security Measures:</strong> We take appropriate security measures to protect your data.
          </li>
          <li className="mb-2">
            <strong className='text-black'>Third-Party Services:</strong> We may use third-party services that have their own privacy policies.
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

export default PrivacyPolicy;
