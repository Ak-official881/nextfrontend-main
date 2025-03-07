'use client';

import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Privacy Policy</h1>

      <p className="text-gray-600 mb-4">
        Welcome to <span className="font-semibold text-blue-600">eShopping</span>! Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 border-b-2 border-blue-400 pb-1">1. Information We Collect</h2>
      <p className="text-gray-600 mb-4">
        We collect basic user information such as name, email, and any data provided during account registration or while using our services.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 border-b-2 border-blue-400 pb-1">2. Use of Cookies</h2>
      <p className="text-gray-600 mb-4">
        We use cookies to enhance user experience, analyze site traffic, and improve functionality. You can manage cookie preferences through your browser settings.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 border-b-2 border-blue-400 pb-1">3. Data Security</h2>
      <p className="text-gray-600 mb-4">
        We take reasonable measures to protect your data from unauthorized access. However, no online transmission is 100% secure.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 border-b-2 border-blue-400 pb-1">4. Third-Party Services</h2>
      <p className="text-gray-600 mb-4">
        We may use third-party services for analytics or advertisements. These services may collect information as per their own privacy policies.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 border-b-2 border-blue-400 pb-1">5. Changes to This Policy</h2>
      <p className="text-gray-600 mb-4">
        We may update this Privacy Policy from time to time. Continued use of our services implies acceptance of any changes.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 border-b-2 border-blue-400 pb-1">6. Contact Us</h2>
      <p className="text-gray-600 mb-4">
        If you have any questions about this policy, feel free to contact us at{' '}
        <a href="mailto:support@eshopping.com" className="text-blue-500 font-semibold hover:underline">
          support@eshopping.com
        </a>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
