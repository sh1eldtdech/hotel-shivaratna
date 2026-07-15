import React from 'react';

const Privacy = () => {
  return (
    <div className="pt-28 pb-20 px-6 md:px-12 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="font-serif text-4xl md:text-5xl text-gold mb-6">Privacy Policy</h1>
        <div className="w-16 h-[1.5px] bg-gold mx-auto mb-6" />
        <p className="text-neutral-500 font-medium text-sm">Last Updated: July 15, 2026</p>
      </div>

      <div className="prose prose-gold max-w-none text-neutral-700 font-light space-y-8">
        <p className="text-base leading-relaxed">
          Welcome to the website of Shivaratna Hotel. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and hotel-related services.
        </p>

        <div className="space-y-4">
          <h2 className="font-serif text-2xl text-neutral-900">1. Information We Collect</h2>
          <p className="leading-relaxed">
            We may collect the following information from users and guests through our website, contact forms, booking forms, or inquiry submissions:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-neutral-600">
            <li>Full Name</li>
            <li>Email Address</li>
            <li>Contact Number / Phone Number</li>
            <li>Booking or Reservation Details</li>
            <li>Any additional information voluntarily provided by the user</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="font-serif text-2xl text-neutral-900">2. Purpose of Data Collection</h2>
          <p className="leading-relaxed">
            The information collected is used solely for hotel-related services and communication purposes, including:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-neutral-600">
            <li>Responding to inquiries and reservation requests</li>
            <li>Confirming bookings and providing hotel services</li>
            <li>Customer support and communication</li>
            <li>Improving user experience and website services</li>
            <li>Sending important updates related to reservations or services</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="font-serif text-2xl text-neutral-900">3. Data Sharing and Third Parties</h2>
          <p className="leading-relaxed">We respect your privacy.</p>
          <ul className="list-disc pl-5 space-y-2 text-neutral-600">
            <li>We do <strong>not</strong> sell, rent, trade, or share your personal information with any third party, business, marketing agency, or external organization.</li>
            <li>Your information is used strictly for internal hotel operations and customer service purposes only.</li>
            <li>Data may only be disclosed if required by applicable law, legal process, or government authority.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="font-serif text-2xl text-neutral-900">4. Cookies and Website Usage</h2>
          <p className="leading-relaxed">
            Our website may use basic cookies or analytics tools to improve website functionality and user experience. These cookies do not collect sensitive personal information.
          </p>
          <p className="leading-relaxed">
            Users may choose to disable cookies through their browser settings.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-serif text-2xl text-neutral-900">5. Changes to This Privacy Policy</h2>
          <p className="leading-relaxed">
            We reserve the right to update or modify this Privacy Policy at any time without prior notice. Updated versions will be posted on this page with the revised date.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-serif text-2xl text-neutral-900">6. Contact Us</h2>
          <p className="leading-relaxed">
            If you have any questions regarding this Privacy Policy or your personal information, please contact Shivaratna Hotel through the contact details available on the website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
