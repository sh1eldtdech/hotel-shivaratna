import React from 'react';

const Terms = () => {
  return (
    <div className="pt-28 pb-20 px-6 md:px-12 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="font-serif text-4xl md:text-5xl text-gold mb-6">Terms and Conditions</h1>
        <div className="w-16 h-[1.5px] bg-gold mx-auto mb-6" />
        <p className="text-neutral-500 font-medium text-sm">Last Updated: July 15, 2026</p>
      </div>

      <div className="prose prose-gold max-w-none text-neutral-700 font-light space-y-8">
        <p className="text-base leading-relaxed">
          Welcome to the website of Shivaratna Hotel. By accessing or using our website and services, you agree to comply with the following Terms and Conditions.
        </p>

        <div className="space-y-4">
          <h2 className="font-serif text-2xl text-neutral-900">1. General Terms</h2>
          <ul className="list-disc pl-5 space-y-2 text-neutral-600">
            <li>All bookings, inquiries, reservations, and services are subject to availability and confirmation by the hotel.</li>
            <li>Guests are requested to provide accurate and complete information while making reservations or inquiries.</li>
            <li>The hotel reserves the right to modify, update, suspend, or discontinue any service, pricing, or policy without prior notice.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="font-serif text-2xl text-neutral-900">2. Financial Transactions and Policies</h2>
          <p className="leading-relaxed">
            Any financial transaction, payment-related inquiry, refund request, cancellation, adjustment, dispute resolution, or service-related matter shall be subject to:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-neutral-600">
            <li>Applicable hotel rules, regulations, and internal policies</li>
            <li>Current and future government rules, notifications, taxes, or legal implementations</li>
            <li>Weather conditions, natural disasters, landslides, road blockages, transportation disruptions, or other unforeseen circumstances</li>
            <li>Local authority restrictions, tourism regulations, safety advisories, or emergency conditions</li>
            <li>Technical issues, banking delays, payment gateway processing, or any direct or indirect operational factors involved</li>
          </ul>
          <p className="leading-relaxed mt-4">
            The hotel shall not be held responsible for delays, interruptions, losses, or inconveniences caused due to such external or unavoidable factors.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-serif text-2xl text-neutral-900">3. Website Usage</h2>
          <ul className="list-disc pl-5 space-y-2 text-neutral-600">
            <li>Users shall not misuse, disrupt, or attempt unauthorized access to the website or its services.</li>
            <li>Any unlawful activity, false booking, fraudulent transaction, or misuse of hotel information may result in denial of service and legal action where applicable.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="font-serif text-2xl text-neutral-900">4. Privacy</h2>
          <p className="leading-relaxed">
            User information collected through the website shall be handled in accordance with the Privacy Policy of Shivaratna Hotel.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-serif text-2xl text-neutral-900">5. Modifications to Terms</h2>
          <p className="leading-relaxed">
            Shivaratna Hotel reserves the right to update or revise these Terms and Conditions at any time without prior notice. Continued use of the website and services shall be considered acceptance of the updated terms.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-serif text-2xl text-neutral-900">6. Contact</h2>
          <p className="leading-relaxed">
            For any queries regarding these Terms and Conditions, users may contact Shivaratna Hotel through the official contact details provided on the website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
