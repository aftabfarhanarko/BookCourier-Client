import React from "react";
import H1text from "../../utils/H1text";
import TextType from "../../utils/TextType";

const WhyChooseBook = () => {
  return (
    <div className=" grid grid-cols-1 gap-10 flex items-center justify-center  md:grid-cols-2">
      <div className="p-4 space-y-4">
        <div className="collapse collapse-arrow bg-gray-50 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title font-semibold text-lg text-gray-900 cursor-pointer select-none px-6 py-4">
            How do I create an account?
          </div>
          <div className="collapse-content text-gray-700 px-6 pb-6 pt-0 text-base leading-relaxed">
            Click the{" "}
            <span className="font-semibold text-blue-600">"Sign Up"</span>{" "}
            button in the top right corner and follow the registration process.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-gray-50 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold text-lg text-gray-900 cursor-pointer select-none px-6 py-4">
            I forgot my password. What should I do?
          </div>
          <div className="collapse-content text-gray-700 px-6 pb-6 pt-0 text-base leading-relaxed">
            Click on{" "}
            <span className="font-semibold text-blue-600">
              "Forgot Password"
            </span>{" "}
            on the login page and follow the instructions sent to your email.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-gray-50 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold text-lg text-gray-900 cursor-pointer select-none px-6 py-4">
            How do I update my profile information?
          </div>
          <div className="collapse-content text-gray-700 px-6 pb-6 pt-0 text-base leading-relaxed">
            Go to{" "}
            <span className="font-semibold text-blue-600">"My Account"</span>{" "}
            settings and select{" "}
            <span className="font-semibold text-blue-600">"Edit Profile"</span>{" "}
            to make changes.
          </div>
        </div>

        {/* New Questions */}
        <div className="collapse collapse-arrow bg-gray-50 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold text-lg text-gray-900 cursor-pointer select-none px-6 py-4">
            What types of books can I order through BookCourier?
          </div>
          <div className="collapse-content text-gray-700 px-6 pb-6 pt-0 text-base leading-relaxed">
            You can order a wide range of books including fiction, non-fiction,
            academic textbooks, children’s books, and popular novels available
            in our collection.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-gray-50 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold text-lg text-gray-900 cursor-pointer select-none px-6 py-4">
            How long does delivery take?
          </div>
          <div className="collapse-content text-gray-700 px-6 pb-6 pt-0 text-base leading-relaxed">
            Delivery usually takes 2-5 business days depending on your location
            within Bangladesh. We aim to deliver your books as quickly as
            possible.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-gray-50 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold text-lg text-gray-900 cursor-pointer select-none px-6 py-4">
            Is there a delivery fee?
          </div>
          <div className="collapse-content text-gray-700 px-6 pb-6 pt-0 text-base leading-relaxed">
            Delivery fees may vary based on your location and the size of your
            order. Please check the checkout page for exact shipping costs
            before placing your order.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-gray-50 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold text-lg text-gray-900 cursor-pointer select-none px-6 py-4">
            Can I return or exchange a book?
          </div>
          <div className="collapse-content text-gray-700 px-6 pb-6 pt-0 text-base leading-relaxed">
            Yes, you can request a return or exchange within 7 days of receiving
            the book if it is damaged or incorrect. Contact our support team for
            assistance.
          </div>
        </div>
      </div>

      <div>
        <p className=" text-sm text-primary font-medium">Questions & Answers</p>

        <h1 className="text-2xl md:text-3xl leading-tight lg:text-4xl text-secondary font-semibold">
          <TextType
            text={`Have any questions? Find answers here.`}
            typingSpeed={70}
            deletingSpeed={40}
            pauseDuration={2000}
            loop={true}
            showCursor={true}
            cursorCharacter="|"
          />
        </h1>
        <p>
          Learn the correct procedure for collecting your library ticket book to
          ensure a smooth and hassle-free experience. Follow these steps
          carefully to avoid any delays or issues during the process. This guide
          will help you understand what documents and information you need to
          present.
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default WhyChooseBook;
