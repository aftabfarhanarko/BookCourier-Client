import React from "react";
import H1text from "../../utils/H1text";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const ReaderTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Book Blogger",
      image: "https://i.pravatar.cc/150?u=sarah",
      quote: "BookCourier transformed how I buy books. The delivery is incredibly fast, and the packaging ensures every book arrives in pristine condition!",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Student",
      image: "https://i.pravatar.cc/150?u=michael",
      quote: "Found all my university textbooks here at unbeatable prices. The student discount was a huge bonus. Highly recommended!",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "Fiction Lover",
      image: "https://i.pravatar.cc/150?u=emily",
      quote: "The recommendation engine is spot on. I've discovered three of my new favorite authors thanks to the 'Similar Books' feature.",
      rating: 4
    }
  ];

  return (
    <div className="py-12">
      <H1text>Reader Stories</H1text>
      <p className="text-center text-gray-500 mb-10 mt-2">Hear from our community of book lovers</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((item) => (
          <div key={item.id} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg relative hover:-translate-y-2 transition-transform duration-300">
            <FaQuoteLeft className="text-4xl text-gray-200 dark:text-gray-700 absolute top-6 right-6" />
            
            <div className="flex items-center gap-1 text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={i < item.rating ? "text-yellow-400" : "text-gray-300"} />
              ))}
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6 italic relative z-10">"{item.quote}"</p>
            
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20" />
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white">{item.name}</h4>
                <p className="text-xs text-primary font-medium">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReaderTestimonials;
