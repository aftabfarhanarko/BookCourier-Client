import React from "react";
import H1text from "../../utils/H1text";
import { FaPaperPlane, FaEnvelopeOpenText } from "react-icons/fa";

const NewsletterSignup = () => {
  return (
    <div className="py-12">
      <div className="bg-white dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-3xl p-8 md:p-12 text-center relative">
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 p-3 rounded-full border-2 border-gray-200 dark:border-gray-600">
          <FaEnvelopeOpenText className="text-4xl text-primary" />
        </div>
        
        <div className="mt-6 max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Subscribe to Our Newsletter</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Get the latest book releases, exclusive author interviews, and special offers delivered directly to your inbox.
            <span className="block font-semibold text-primary mt-1">Join 10,000+ subscribers today!</span>
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3 mt-6">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <button className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
              Subscribe <FaPaperPlane />
            </button>
          </form>
          
          <p className="text-xs text-gray-400 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;
