import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaShoppingCart,
  FaHeadphonesAlt,
  FaArrowUp,
  FaBookOpen,
  FaBookReader,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-orange-100 mt-20 border-t">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FaBookReader className="h-6 w-6  text-primary" />
              <a className=" text-xl text-primary">BookCourier </a>
            </div>
            <p className="text-gray-600 max-w-xs">
              Bookland is a Book Store Ecommerce Website Template by DexignZone
              lorem ipsum dolor sit
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              {[FaFacebookF, FaYoutube, FaLinkedinIn, FaInstagram].map(
                (Icon, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-100 text-orange-500 cursor-pointer hover:bg-orange-200 transition"
                  >
                    <Icon />
                  </div>
                )
              )}
            </div>
          </div>

          {/* Our Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900">
              Our Links
            </h3>
            <ul className="space-y-3 text-gray-600">
              {[
                "About Us",
                "Contact Us",
                "Privacy Policy",
                "Pricing Table",
                "FAQ",
              ].map((link, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 cursor-pointer hover:text-orange-500 transition"
                >
                  <span className="text-orange-400">{">"}</span> {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Bookland ? */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900">
              Bookland ?
            </h3>
            <ul className="space-y-3 text-gray-600">
              {[
                "Bookland",
                "Services",
                "Book Details",
                "Blog Details",
                "Shop",
              ].map((link, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 cursor-pointer hover:text-orange-500 transition"
                >
                  <span className="text-orange-400">{">"}</span> {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900">
              Resources
            </h3>
            <ul className="space-y-3 text-gray-600">
              {["Download", "Help Center", "Shop Cart", "Login", "Partner"].map(
                (link, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 cursor-pointer hover:text-orange-500 transition"
                  >
                    <span className="text-orange-400">{">"}</span> {link}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16 text-gray-600">
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-orange-400 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">
                Get in Touch With Us
              </h4>
              <p>832 Thompson Drive, San Fransisco CA 94107, US</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaPhoneAlt className="text-orange-400 mt-1" />
            <div>
              <p>+123 345123 556</p>
              <p>+123 345123 556</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaEnvelope className="text-orange-400 mt-1" />
            <div>
              <p>support@bookland.id</p>
              <p>info@bookland.id</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-20 text-center text-gray-400 text-sm">
          Bookland Book Store Ecommerce Website - © 2025 All Rights Reserved
          &nbsp;|&nbsp; Made with{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          by <span className="text-orange-400 cursor-pointer">DexignZone</span>
        </div>
      </div>

      {/* Bottom Left Buttons */}
      <div className="fixed bottom-20 left-6 flex flex-col gap-4 z-50">
        <button
          aria-label="Support"
          className="w-12 h-12 bg-teal-400 rounded-full text-white flex items-center justify-center shadow-lg hover:bg-teal-500 transition"
        >
          <FaHeadphonesAlt />
        </button>
        <button
          aria-label="Cart"
          className="w-12 h-12 bg-green-500 rounded-full text-white flex items-center justify-center shadow-lg hover:bg-green-600 transition"
        >
          <FaShoppingCart />
        </button>
      </div>

      {/* Bottom Right Scroll To Top */}
      <button
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-20 right-6 w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center shadow-lg hover:bg-orange-500 transition"
      >
        <FaArrowUp className="text-white" />
      </button>
    </footer>
  );
}
