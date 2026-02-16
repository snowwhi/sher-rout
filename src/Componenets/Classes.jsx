import React, { useState } from 'react';
import 'remixicon/fonts/remixicon.css';

const classesData = [
  {
    id: 1,
    category: "Design",
    title: "Modern UI/UX Principles",
    mentor: "Sarah Ahmed",
    duration: "8 Weeks",
    students: "120",
    price: "Free",
    icon: "ri-layout-masonry-line"
  },
  {
    id: 2,
    category: "Development",
    title: "React & Tailwind Mastery",
    mentor: "Zain Raza",
    duration: "12 Weeks",
    students: "85",
    price: "Member Only",
    icon: "ri-code-s-slash-line"
  },
  {
    id: 3,
    category: "Marketing",
    title: "Digital Growth Strategy",
    mentor: "Ali Khan",
    duration: "4 Weeks",
    students: "200",
    price: "Free",
    icon: "ri-rocket-2-line"
  }
];

const Classes = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'Design', 'Development', 'Marketing'];
  const filteredClasses = filter === 'All' ? classesData : classesData.filter(c => c.category === filter);

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-rose-600 font-bold uppercase tracking-widest text-sm">Our Academy</span>
          <h2 className="text-4xl font-black text-gray-900 mt-2">Explore Our <span className="text-rose-600">Classes</span></h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Upgrade your skills with our expert-led sessions designed for the modern community.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                filter === cat 
                ? 'bg-rose-600 text-white shadow-lg shadow-rose-200' 
                : 'bg-white text-gray-600 hover:text-rose-600 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredClasses.map((item) => (
            <div key={item.id} className="group bg-white rounded-3xl p-8 border border-gray-100 hover:border-rose-200 hover:shadow-2xl hover:shadow-rose-100 transition-all duration-300">
              
              {/* Icon & Category */}
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-gray-50 text-rose-600 rounded-2xl flex items-center justify-center text-3xl group-hover:bg-rose-600 group-hover:text-white transition-colors duration-300">
                  <i className={item.icon}></i>
                </div>
                <span className="bg-rose-50 text-rose-600 text-xs font-bold px-3 py-1 rounded-full uppercase">
                  {item.category}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm mb-6 flex items-center gap-2">
                <i className="ri-user-smile-line"></i> Mentor: {item.mentor}
              </p>

              {/* Stats */}
              <div className="flex justify-between items-center pt-6 border-t border-gray-50 text-gray-400 text-sm">
                <div className="flex items-center gap-1">
                  <i className="ri-time-line text-rose-600"></i> {item.duration}
                </div>
                <div className="flex items-center gap-1">
                  <i className="ri-group-line text-rose-600"></i> {item.students}
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full mt-8 py-3 bg-gray-900 text-white rounded-xl font-bold group-hover:bg-rose-600 transition-colors flex items-center justify-center gap-2">
                Join Class <i className="ri-arrow-right-line"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;