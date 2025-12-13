import React, { useState, useEffect } from "react";
import { Star, ShoppingCart, TrendingUp, Eye, BadgeCheck } from "lucide-react";

const PremiumBookShowcase = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    // Listen for theme changes from localStorage
    const handleStorageChange = () => {
      setTheme(localStorage.getItem("theme") || "light");
    };

    // Check for theme changes
    const interval = setInterval(() => {
      const currentTheme = localStorage.getItem("theme") || "light";
      if (currentTheme !== theme) {
        setTheme(currentTheme);
      }
    }, 100);

    window.addEventListener("storage", handleStorageChange);

    return () => {
      clearInterval(interval);
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [theme]);

  const isDark = theme === "dark";

  const books = [
    {
      id: 1,
      name: "Old Man The Say",
      price: "$249",
      rating: 5,
      sold: "12,090",
      image:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
      badge: "Bestseller",
    },
    {
      id: 2,
      name: "The More",
      price: "$899",
      rating: 4,
      sold: "3,090",
      image:
        "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop",
      badge: "Popular",
    },
    {
      id: 3,
      name: "The Best Novels",
      price: "$399",
      rating: 3,
      sold: "7,090",
      image:
        "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop",
      badge: "Trending",
    },
    {
      id: 4,
      name: "Old Man",
      price: "$249",
      rating: 5,
      sold: "12,090",
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop",
      badge: "Hot Deal",
    },
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "fill-orange-400 text-orange-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className={`min-h-screen px-4 sm:px-6 lg:px-8 ${isDark ? '' : ''}`}>
      <div className="md:max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 mb-16">
          {/* Left Content */}
          <div className="flex-1 max-w-xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-amber-100 px-4 py-2 rounded-full">
              <TrendingUp className="w-4 h-4 text-orange-600" />
              <span className="text-orange-700 text-xs font-bold uppercase tracking-wider">
                Welcome
              </span>
            </div>

            <h2 className="text-3xl font-bold text-primary leading-tight">
              Top Selling Books in BookCourier Library
            </h2>

            <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
              Explore the books that our readers enjoy the most. These top picks
              have been loved and bought again and again. Find your next great
              read from the crowd's favorites!
            </p>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              <div className="space-y-1">
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                  1000+
                </div>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Happy Readers</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                  50K+
                </div>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Books Sold</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                  4.9★
                </div>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Average Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - Book Cards */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {books.map((book, index) => (
                <div
                  key={book.id}
                  onMouseEnter={() => setHoveredCard(book.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`group relative ${
                    isDark ? 'bg-gray-800' : 'bg-white'
                  } rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2`}
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`,
                  }}
                >
                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl -z-10"></div>

                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                      <BadgeCheck className="w-3 h-3" />
                      {book.badge}
                    </div>
                  </div>

                  {/* Verified Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-full p-2.5 shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-orange-50 to-amber-50">
                    <img
                      src={book.image}
                      alt={book.name}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                    />

                    {/* Overlay with Actions */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-center gap-3 transition-all duration-500 ${
                        hoveredCard === book.id ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <button className="bg-white text-orange-600 p-3 rounded-full shadow-lg hover:bg-orange-600 hover:text-white transition-all duration-300 transform hover:scale-110">
                        <Eye className="w-5 h-5" />
                      </button>
                      <button className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold flex items-center gap-2">
                        <ShoppingCart className="w-5 h-5" />
                        Buy Now
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-3">
                    <h3 className={`text-xl font-bold ${
                      isDark ? 'text-white' : 'text-gray-900'
                    } group-hover:text-orange-600 transition-colors duration-300`}>
                      {book.name}
                    </h3>

                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-2xl font-extrabold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                          {book.price}
                        </p>
                        <div className="flex items-center gap-1">
                          {renderStars(book.rating)}
                        </div>
                      </div>

                      <div className="text-right">
                        <div className={`text-xs ${
                          isDark ? 'text-gray-400' : 'text-gray-500'
                        } mb-1`}>
                          Total Sold
                        </div>
                        <div className="text-lg font-bold text-orange-600">
                          {book.sold}
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="pt-2">
                      <div className={`h-2 ${
                        isDark ? 'bg-gray-700' : 'bg-gray-200'
                      } rounded-full overflow-hidden`}>
                        <div
                          className="h-full bg-gradient-to-r from-orange-500 to-amber-500 rounded-full transition-all duration-1000"
                          style={{ width: `${(book.rating / 5) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default PremiumBookShowcase;