import React from "react";
import { Link } from "react-router";
import { FaStar, FaShoppingCart, FaArrowRight } from "react-icons/fa";
import H1text from "../../utils/H1text";

const LetasCard = () => {
  const books = [
    {
      id: 1,
      title: "Flovely And Unicorn Erna",
      category: "Design Low Book",
      price: 30.0,
      originalPrice: 39.99,
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400",
      author: "Albert",
      authorImg: "https://i.pravatar.cc/150?u=albert",
      badge: null,
    },
    {
      id: 2,
      title: "Qple GPad With Retinay Sispla",
      category: "Design Low Book",
      price: 30.0,
      originalPrice: 39.99,
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=400",
      author: "Wilson",
      authorImg: "https://i.pravatar.cc/150?u=wilson",
      badge: "Hot",
      badgeColor: "bg-orange-500",
    },
    {
      id: 3,
      title: "Simple Things You To Save BOOK",
      category: "Design Low Book",
      price: 30.0,
      originalPrice: 39.99,
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=400",
      author: "Wilson",
      authorImg: "https://i.pravatar.cc/150?u=wilson2",
      badge: null,
    },
    {
      id: 4,
      title: "How Deal With Very Bad BOOK",
      category: "Design Low Book",
      price: 30.0,
      originalPrice: 39.99,
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400",
      author: "Esther",
      authorImg: "https://i.pravatar.cc/150?u=esther",
      badge: "-30%",
      badgeColor: "bg-teal-600",
    },
  ];

  return (
    <div className="max-w-11/12 mx-auto px-4 font-sans">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white">
          Bookle Top Books
        </h2>
        <Link to="/books">
          <button className="group relative px-8 py-2.5 rounded-full bg-orange-500 text-white font-bold tracking-wide shadow-lg hover:shadow-orange-500/40 transition-all duration-300 overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              Explore More <FaArrowRight />
            </span>
            <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-100 group-hover:bg-orange-400"></div>
          </button>
        </Link>
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {/* Book Cards */}
        {books.map((book) => (
          <div
            key={book.id}
            className="group bg-white dark:bg-gray-800 rounded-xl p-4 transition-all hover:shadow-lg border border-transparent hover:border-gray-200 dark:hover:border-gray-700 flex flex-col"
          >
            {/* Image Container */}
            <div className="relative mb-4 bg-gray-50 dark:bg-gray-700 rounded-lg p-4 h-64 flex items-center justify-center">
              <img
                src={book.image}
                alt={book.title}
                className="h-full object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105"
              />
              {book.badge && (
                <span
                  className={`absolute top-3 left-3 text-white text-xs font-bold px-2 py-1 rounded ${book.badgeColor}`}
                >
                  {book.badge}
                </span>
              )}
            </div>

            {/* Content */}
            <div className="flex-grow">
              <p className="text-gray-500 text-xs mb-1">{book.category}</p>
              <h3 className="font-bold text-gray-900 dark:text-white text-lg leading-tight mb-2 line-clamp-2">
                {book.title}
              </h3>

              <div className="flex items-center gap-3 mb-4">
                <span className="text-orange-500 font-bold text-lg">
                  ${book.price.toFixed(2)}
                </span>
                <span className="text-gray-400 text-sm line-through">
                  ${book.originalPrice.toFixed(2)}
                </span>
              </div>

              {/* Author & Rating */}
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <img
                    src={book.authorImg}
                    alt={book.author}
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {book.author}
                  </span>
                </div>
                <div className="flex text-orange-400 text-xs">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={
                        i < book.rating ? "text-orange-400" : "text-gray-300"
                      }
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button className="w-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white py-2.5 rounded-full font-semibold text-sm hover:bg-teal-600 hover:text-white transition-all flex items-center justify-center gap-2 mt-auto">
              <FaShoppingCart /> Add To Cart
            </button>
          </div>
        ))}

        {/* Promo Banner (5th Item) */}
        <div className="bg-teal-700 rounded-xl p-6 md:p-8 text-white flex flex-col justify-between relative overflow-hidden min-h-[400px] xl:min-h-auto">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-teal-600 rounded-bl-full opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-400 rounded-tr-full opacity-20"></div>

          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4 leading-tight">
              Find Your Next Books!
            </h3>
            <p className="mb-6 text-teal-100">And Get Your 25% Discount Now!</p>
            <button className="bg-white text-teal-800 px-6 py-2 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
              Shop Now <FaArrowRight />
            </button>
          </div>

          <div className="relative z-10 mt-6 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=300"
              alt="Student with books"
              className="object-cover rounded-lg transform translate-y-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetasCard;
