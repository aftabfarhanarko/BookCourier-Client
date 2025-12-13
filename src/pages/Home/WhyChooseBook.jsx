import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const ModernFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "How do I create an account?",
      answer:
        "Click the Sign Up button in the top right corner and follow the registration process.",
    },
    {
      question: "I forgot my password. What should I do?",
      answer:
        "Click on Forgot Password on the login page and follow the instructions sent to your email.",
    },
    {
      question: "How do I update my profile information?",
      answer:
        "Go to My Account settings and select Edit Profile to make changes.",
    },
    {
      question: "What types of books can I order through BookCourier?",
      answer:
        "You can order a wide range of books including fiction, non-fiction, academic textbooks, children's books, and popular novels available in our collection.",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Delivery usually takes 2-5 business days depending on your location within Bangladesh. We aim to deliver your books as quickly as possible.",
    },
    {
      question: "Is there a delivery fee?",
      answer:
        "Delivery fees may vary based on your location and the size of your order. Please check the checkout page for exact shipping costs before placing your order.",
    },
    {
      question: "Can I return or exchange a book?",
      answer:
        "Yes, you can request a return or exchange within 7 days of receiving the book if it is damaged or incorrect. Contact our support team for assistance.",
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="  mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - FAQ Items */}
          <div className="order-2 lg:order-1 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <button
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? -1 : index)
                  }
                  className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-semibold text-lg text-gray-800 group-hover:text-orange-500 transition-colors duration-200">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`flex-shrink-0 w-6 h-6 text-orange-500 transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 pt-0">
                    <div className="h-px bg-gradient-to-r from-indigo-200 to-purple-200 mb-4"></div>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Header Content */}
          <div className="order-1 lg:order-2 space-y-6 lg:pl-8">
            <div className="inline-block">
              <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold tracking-wide uppercase">
                Questions & Answers
              </span>
            </div>

            <h1 className="text-3xl   font-bold text-gray-900 leading-tight">
              Have any{" "}
              <span className="bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent">
                questions?
              </span>
              <br />
              Find answers here.
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Learn the correct procedure for collecting your library ticket
              book to ensure a smooth and hassle-free experience. Follow these
              steps carefully to avoid any delays or issues during the process.
            </p>

            {/* Decorative Elements */}
            <div className="flex gap-4 pt-4">
              <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
              <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              <div className="w-8 h-1 bg-gradient-to-r from-pink-500 to-red-500 rounded-full"></div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center p-4 bg-white rounded-xl shadow-md">
                <div className="text-3xl font-bold text-indigo-600">
                  {faqs.length}
                </div>
                <div className="text-sm text-gray-500 mt-1">FAQs</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-md">
                <div className="text-3xl font-bold text-purple-600">24/7</div>
                <div className="text-sm text-gray-500 mt-1">Support</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-md">
                <div className="text-3xl font-bold text-pink-600">100%</div>
                <div className="text-sm text-gray-500 mt-1">Helpful</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernFAQ;
