import React from 'react';
import 'remixicon/fonts/remixicon.css';

const resources = [
  {
    title: "Brand Guideline 2026",
    size: "4.2 MB",
    type: "PDF",
    icon: "ri-file-pdf-2-line",
    color: "text-rose-600"
  },
  {
    title: "Community Workshop Kit",
    size: "128 MB",
    type: "ZIP",
    icon: "ri-folder-zip-line",
    color: "text-blue-500"
  },
  {
    title: "Strategy Video Masterclass",
    size: "1.2 GB",
    type: "MP4",
    icon: "ri-video-line",
    color: "text-purple-500"
  }
];

const Resources = () => {
  return (
    <section className=" h-screen  w-full py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-4xl font-black text-gray-900">Digital <span className="text-rose-600">Resources</span></h2>
            <p className="text-gray-500 mt-2">Tools and assets to help you succeed.</p>
          </div>
          <div className="relative">
            <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
            <input 
              type="text" 
              placeholder="Search assets..." 
              className="pl-12 pr-6 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-rose-600/20 focus:border-rose-600 outline-none w-full md:w-80"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((item, index) => (
            <div key={index} className="group p-6 bg-gray-50 rounded-3xl border border-transparent hover:border-rose-200 hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between mb-8">
                <div className={`w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-3xl shadow-sm ${item.color}`}>
                  <i className={item.icon}></i>
                </div>
                <button className="text-gray-400 hover:text-rose-600 transition-colors">
                  <i className="ri-download-cloud-2-line text-2xl"></i>
                </button>
              </div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-rose-600 transition-colors">{item.title}</h3>
              <div className="mt-2 flex items-center gap-3 text-sm text-gray-500">
                <span className="font-bold text-gray-700">{item.type}</span>
                <span>•</span>
                <span>{item.size}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;