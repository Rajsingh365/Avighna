import React from 'react';
import { Link } from 'react-router-dom';

function RefundPolicy() {
  return (
    <div className="p-4 h-auto bg-[radial-gradient(circle_at_50%_75%,#FFBA08,#F48C06)] ">
      <div className="bg-white py-8 px-12 rounded-md text-gray-500">
        <h1 className="text-2xl font-bold mb-4 text-black">Refund Policy</h1>
        <p className="mb-2">
        “Thank you for your contribution! We appreciate your support. Please note that all contributions are non-refundable.
        </p>
        <h2 className="text-lg font-semibold mb-2  text-black">Refunds</h2>
        <p className="mb-2">
          There's a strict no refund policy with us. However, remember that just like Lord Ganesha removes obstacles, we're committed to resolving any issues you may face.
        </p>
        <h2 className="text-lg font-semibold mb-2 text-black">Contact Us</h2>
        <p className="mb-4">
          If you have any questions or concerns regarding refunds or exchanges, please <Link to={"/contact-us"} className="text-blue-500 hover:underline">contact us</Link>.
        </p>
      </div>
    </div>
  );
}

export default RefundPolicy;
