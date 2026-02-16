import React from 'react';
import 'remixicon/fonts/remixicon.css';

const eventsData = [
  {
    id: 1,
    date: { day: '24', month: 'FEB' },
    time: '10:00 AM - 02:00 PM',
    title: "Community Tech Summit 2026",
    location: "Main Auditorium & Online",
    type: "Conference",
    tag: "Most Popular"
  },
  {
    id: 2,
    date: { day: '02', month: 'MAR' },
    time: '04:00 PM - 06:00 PM',
    title: "UI/UX Interactive Workshop",
    location: "Design Lab (Room 4)",
    type: "Workshop",
    tag: "Limited Seats"
  },
  {
    id: 3,
    date: { day: '15', month: 'MAR' },
    time: '06:00 PM - 08:00 PM',
    title: "Networking Dinner & Talk",
    location: "The Rose Garden Cafe",
    type: "Social",
    tag: "Free Entry"
  }
];

const Events = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-rose-600 font-bold uppercase tracking-widest text-sm flex items-center gap-2">
              <i className="ri-calendar-event-fill"></i> Save the Date
            </span>
            <h2 className="text-5xl font-black text-gray-900 mt-2">Upcoming <span className="text-rose-600">Events</span></h2>
            <p className="text-gray-500 mt-4 text-lg">
              Join our community gatherings, workshops, and seminars designed to foster growth and connection.
            </p>
          </div>
          <button className="text-rose-600 font-bold flex items-center gap-2 hover:gap-4 transition-all">
            View All Calendar <i className="ri-arrow-right-line"></i>
          </button>
        </div>

        {/* Events Container */}
        <div className="space-y-6">
          {eventsData.map((event) => (
            <div 
              key={event.id} 
              className="group relative bg-gray-50 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 border border-transparent hover:border-rose-200 hover:bg-white hover:shadow-2xl hover:shadow-rose-100 transition-all duration-500"
            >
              {/* Date Block */}
              <div className="flex-shrink-0 w-24 h-24 bg-gray-900 text-white rounded-2xl flex flex-col items-center justify-center group-hover:bg-rose-600 transition-colors duration-500">
                <span className="text-3xl font-black leading-none">{event.date.day}</span>
                <span className="text-xs font-bold uppercase mt-1 tracking-widest">{event.date.month}</span>
              </div>

              {/* Event Content */}
              <div className="flex-grow text-center md:text-left">
                <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-3">
                  <span className="text-xs font-bold py-1 px-3 bg-rose-100 text-rose-600 rounded-full uppercase tracking-tighter">
                    {event.type}
                  </span>
                  <span className="text-xs font-medium py-1 px-3 bg-gray-200 text-gray-600 rounded-full uppercase tracking-tighter">
                    {event.tag}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors">
                  {event.title}
                </h3>
                <div className="flex flex-wrap justify-center md:justify-start gap-6 text-gray-500 text-sm font-medium">
                  <span className="flex items-center gap-2">
                    <i className="ri-time-line text-rose-600"></i> {event.time}
                  </span>
                  <span className="flex items-center gap-2">
                    <i className="ri-map-pin-2-line text-rose-600"></i> {event.location}
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div className="flex-shrink-0 w-full md:w-auto">
                <button className="w-full md:w-auto px-8 py-4 bg-white border-2 border-gray-200 text-gray-900 font-bold rounded-xl hover:bg-rose-600 hover:border-rose-600 hover:text-white transition-all">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State / Newsletter CTA */}
        <div className="mt-20 p-12 bg-gray-900 rounded-[3rem] text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h4 className="text-2xl font-bold mb-2">Want to host an event?</h4>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">Our resources are available for community-led workshops and meetups.</p>
            <button className="bg-rose-600 hover:bg-rose-700 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-xl shadow-rose-900/20">
              Apply as Speaker
            </button>
          </div>
          {/* Decorative background circle */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-rose-600/10 rounded-full blur-3xl"></div>
        </div>

      </div>
    </section>
  );
};

export default Events;