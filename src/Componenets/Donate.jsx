import React, { useState } from 'react';

const Donate = () => {
  const [amount, setAmount] = useState('50');

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
        
        {/* Visual/Image Side */}
        <div className="md:w-2/5 bg-gray-900 p-12 text-white flex flex-col justify-center">
          <div className="w-16 h-16 bg-rose-600 rounded-2xl flex items-center justify-center text-3xl mb-6">
            <i className="ri-heart-3-fill"></i>
          </div>
          <h2 className="text-3xl font-bold mb-4">Support Our Cause</h2>
          <p className="text-gray-400 leading-relaxed">
            Your contributions help us provide free workshops, maintain the community garden, and fund local student projects.
          </p>
          <div className="mt-8 pt-8 border-t border-gray-800 italic text-rose-500">
            "We rise by lifting others."
          </div>
        </div>

        {/* Form Side */}
        <div className="md:w-3/5 p-12">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Choose an amount</h3>
          
          <div className="grid grid-cols-3 gap-4 mb-8">
            {['10', '50', '100'].map((val) => (
              <button
                key={val}
                onClick={() => setAmount(val)}
                className={`py-4 rounded-2xl font-black transition-all ${
                  amount === val 
                  ? 'bg-rose-600 text-white shadow-lg shadow-rose-200' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                ${val}
              </button>
            ))}
          </div>

          <div className="relative mb-8">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
            <input 
              type="number" 
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Custom amount"
              className="w-full pl-10 pr-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-rose-600/20 focus:border-rose-600 outline-none"
            />
          </div>

          <button className="w-full py-5 bg-gray-900 text-white rounded-2xl font-bold text-lg hover:bg-rose-600 transition-all shadow-xl hover:shadow-rose-100 active:scale-95 mb-4">
            Proceed to Payment
          </button>
          
          <div className="flex justify-center gap-4 text-gray-400 text-sm">
            <span className="flex items-center gap-1"><i className="ri-shield-check-line text-rose-600"></i> Secure</span>
            <span className="flex items-center gap-1"><i className="ri-bank-card-line text-rose-600"></i> Cards/UPI</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;