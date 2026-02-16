import React from 'react';
import 'remixicon/fonts/remixicon.css';

const tiers = [
  {
    name: "Basic",
    price: "0",
    description: "Ideal for individuals just starting their journey.",
    features: ["Access to public resources", "Community forum access", "Weekly newsletter", "Public event invitations"],
    buttonText: "Join for Free",
    featured: false
  },
  {
    name: "Premium",
    price: "29",
    description: "Perfect for active members seeking growth.",
    features: ["All Basic features", "Exclusive monthly workshops", "Direct mentor messaging", "Early bird event tickets", "Certificate of completion"],
    buttonText: "Get Started",
    featured: true
  },
  {
    name: "Elite",
    price: "99",
    description: "For leaders and organizations making an impact.",
    features: ["All Premium features", "1-on-1 monthly coaching", "Host your own events", "VIP lounge access", "Featured member profile"],
    buttonText: "Contact Sales",
    featured: false
  }
];

const Membership = () => {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-rose-600 font-bold uppercase tracking-widest text-sm">Pricing Plans</span>
          <h2 className="text-5xl font-black text-gray-900 mt-2">Choose Your <span className="text-rose-600">Level</span></h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto text-lg">
            Support the community and unlock exclusive tools, resources, and mentorship.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {tiers.map((tier, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-[2.5rem] transition-all duration-500 ${
                tier.featured 
                ? 'bg-gray-900 text-white shadow-2xl shadow-rose-200 scale-105 z-10' 
                : 'bg-white text-gray-900 border border-gray-100 hover:border-rose-200 shadow-sm'
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-rose-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </span>
              )}

              <div className="mb-8">
                <h3 className={`text-xl font-bold mb-2 ${tier.featured ? 'text-rose-500' : 'text-gray-900'}`}>
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black">${tier.price}</span>
                  <span className={tier.featured ? 'text-gray-400' : 'text-gray-500'}>/month</span>
                </div>
                <p className={`mt-4 text-sm ${tier.featured ? 'text-gray-400' : 'text-gray-500'}`}>
                  {tier.description}
                </p>
              </div>

              <ul className="space-y-4 mb-10">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <i className={`ri-checkbox-circle-fill text-xl ${tier.featured ? 'text-rose-500' : 'text-rose-600'}`}></i>
                    <span className={tier.featured ? 'text-gray-300' : 'text-gray-700'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-2xl font-bold transition-all active:scale-95 ${
                tier.featured 
                ? 'bg-rose-600 hover:bg-rose-700 text-white shadow-lg shadow-rose-900/20' 
                : 'bg-gray-100 hover:bg-rose-600 hover:text-white text-gray-900'
              }`}>
                {tier.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Hint */}
        <p className="text-center mt-12 text-gray-500">
          All plans include a 14-day money-back guarantee. <a href="#" className="text-rose-600 font-semibold hover:underline">Learn more about our terms.</a>
        </p>
      </div>
    </section>
  );
};

export default Membership;