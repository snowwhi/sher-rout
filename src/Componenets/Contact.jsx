import React, { useState } from 'react';
import 'remixicon/fonts/remixicon.css'
const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
  // simple ui update not actual sending
    setTimeout(() => setStatus('Message Sent!'), 1500);
  };

  return (
    <section className="bg-white py-20 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row shadow-2xl rounded-3xl overflow-hidden border border-gray-100">
        
        {/* Left Side: Contact Info */}
        <div className="lg:w-1/3 bg-gray-900 p-10 text-white flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-400 mb-10">
              Have questions about membership or our upcoming events? Drop us a line and our team will get back to you within 24 hours.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-rose-600/20 text-rose-500 flex items-center justify-center rounded-full">
                  <span className="text-xl">📍</span>
                </div>
                <span>123 Innovation Way, Punjab, PK</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-rose-600/20 text-rose-500 flex items-center justify-center rounded-full">
                  <span className="text-xl">📧</span>
                </div>
                <span>hello@community.org</span>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800">
            <p className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-4">Follow Us</p>
            <div className="flex gap-4">
  {[
    { name: 'twitter', icon: 'ri-twitter-x-line' },
    { name: 'instagram', icon: 'ri-instagram-line' },
    { name: 'facebook', icon: 'ri-facebook-box-line' },
    { name: 'linkedin', icon: 'ri-linkedin-box-line' }
  ].map((social) => (
    <div 
      key={social.name} 
      className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-rose-600 text-gray-400 hover:text-white cursor-pointer transition-all duration-300"
      title={social.name}
    >
      <i className={`${social.icon} text-xl`}></i>
    </div>
  ))}
</div>
          </div>
        </div>

        {/* Right Side: Actual Form */}
        <div className="lg:w-2/3 p-10 bg-white">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-gray-700 font-semibold mb-2">Full Name</label>
              <input 
                type="text" 
                placeholder="Khadija Hanif"
                className="p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-600/20 focus:border-rose-600 transition-all"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-semibold mb-2">Email Address</label>
              <input 
                type="email" 
                placeholder="khadijahanif@example.com"
                className="p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-600/20 focus:border-rose-600 transition-all"
                required
              />
            </div>

            <div className="md:col-span-2 flex flex-col">
              <label className="text-gray-700 font-semibold mb-2">Subject</label>
              <select className="p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-600/20 focus:border-rose-600 transition-all">
                <option>General Inquiry</option>
                <option>Membership Support</option>
                <option>Donation Question</option>
                <option>Resource Access</option>
              </select>
            </div>

            <div className="md:col-span-2 flex flex-col">
              <label className="text-gray-700 font-semibold mb-2">Your Message</label>
              <textarea 
                rows="5"
                placeholder="How can we help you?"
                className="p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-600/20 focus:border-rose-600 transition-all"
                required
              ></textarea>
            </div>

            <div className="md:col-span-2 flex items-center justify-between mt-4">
              <span className={`text-sm font-lg ${status.includes('Sent') ? 'text-green-600' : 'text-gray-500'}`}>
                {status}
              </span>
              <button 
                type="submit"
                className="bg-rose-600 hover:bg-rose-700 text-white px-10 py-4 rounded-xl font-bold shadow-lg shadow-rose-200 transition-all active:scale-95"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;