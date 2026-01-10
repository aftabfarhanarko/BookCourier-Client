import React from "react";
import H1text from "../../utils/H1text";
import { FaCalendarAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const EventsCalendar = () => {
  const events = [
    {
      id: 1,
      title: "Book Launch: 'The Silent Echo'",
      date: "Oct 15",
      time: "6:00 PM",
      location: "Central Library Hall",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=300"
    },
    {
      id: 2,
      title: "Meet the Author: Stephen King",
      date: "Oct 22",
      time: "4:00 PM",
      location: "Virtual Event (Zoom)",
      image: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&q=80&w=300"
    },
    {
      id: 3,
      title: "Kids Storytelling Workshop",
      date: "Oct 28",
      time: "10:00 AM",
      location: "BookCourier Kids Corner",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=300"
    }
  ];

  return (
    <div className="py-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 px-4">
        <div>
           <H1text>Upcoming Events</H1text>
           <p className="text-gray-500 mt-2">Connect with authors and fellow readers</p>
        </div>
        <button className="hidden md:block text-primary font-semibold hover:underline">View All Events &rarr;</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.map((event) => (
          <div key={event.id} className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all">
            <div className="h-48 overflow-hidden relative">
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-center shadow-sm">
                <span className="block text-xs font-bold text-gray-500 uppercase">{event.date.split(' ')[0]}</span>
                <span className="block text-xl font-bold text-primary">{event.date.split(' ')[1]}</span>
              </div>
            </div>
            
            <div className="p-5">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                {event.title}
              </h3>
              
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <FaClock className="text-primary" /> {event.time}
                </div>
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-primary" /> {event.location}
                </div>
              </div>
              
              <button className="w-full mt-5 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors font-medium">
                Register Now
              </button>
            </div>
          </div>
        ))}
      </div>
       <button className="md:hidden w-full mt-6 text-primary font-semibold hover:underline text-center">View All Events &rarr;</button>
    </div>
  );
};

export default EventsCalendar;
