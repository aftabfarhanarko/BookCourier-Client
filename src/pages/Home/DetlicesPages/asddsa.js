
      <dialog
        ref={refene}
        className="bg-black/10 backdrop-blur-sm
             p-0 border-0  flex justify-center items-center w-full "
      >
        {/*  */}
        <div className=" bg-white  rounded-3xl shadow-2xl border border-gray-200 w-full max-w-md sm:max-w-lg md:max-w-xl p-6 sm:p-8 relative animate-in  duration-300">
          {/* Close Button */}
          <button
            onClick={handelCloseModal}
            className="absolute top-4  right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900 transition-all duration-200"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>2
          </button>

          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Please Complete Your Order
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Fill in your details to proceed
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5">
            {/* Name Field */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 font-semibold text-gray-700 text-sm">
                <svg
                  className="w-4 h-4 text-orange-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
                Your Name
                <span className="text-red-500">*</span>
              </label>
              <input
                {...register("name", { required: "Your Name is required" })}
                type="text"
                defaultValue={user?.displayName}
                readOnly
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-700 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 focus:bg-white outline-none transition-all duration-200"
              />
              {errors.name && (
                <p className="text-red-500 text-xs flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 font-semibold text-gray-700 text-sm">
                <svg
                  className="w-4 h-4 text-orange-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Your Email
                <span className="text-red-500">*</span>
              </label>
              <input
                {...register("email", { required: "Your Email is required" })}
                type="email"
                defaultValue={user?.email}
                readOnly
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-700 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 focus:bg-white outline-none transition-all duration-200"
              />
              {errors.email && (
                <p className="text-red-500 text-xs flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone Number Field */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 font-semibold text-gray-700 text-sm">
                <svg
                  className="w-4 h-4 text-orange-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Phone Number
                <span className="text-red-500">*</span>
              </label>
              <input
                {...register("phoneNumber", {
                  required: "Phone Number is required",
                  valueAsNumber: true,
                })}
                type="number"
                placeholder="e.g. 017XXXXXXXX"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white text-gray-700 placeholder:text-gray-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all duration-200"
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-xs flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>

            {/* Address Field */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 font-semibold text-gray-700 text-sm">
                <svg
                  className="w-4 h-4 text-orange-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                Your Address
                <span className="text-red-500">*</span>
              </label>
              <input
                {...register("address", {
                  required: "Please provide your address",
                })}
                type="text"
                placeholder="Your full address"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white text-gray-700 placeholder:text-gray-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all duration-200"
              />
              {errors.address && (
                <p className="text-red-500 text-xs flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {errors.address.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit(handelSeawdg)}
              type="button"
              className="w-full mt-6 py-2 rounded-xl font-bold text-lg text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Order Now
            </button>
          </form>
        </div>
      </dialog> 