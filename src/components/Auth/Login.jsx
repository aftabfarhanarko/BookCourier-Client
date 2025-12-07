import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEyeSlash } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import useAuth from "../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "sonner";

const Login = () => {
  const [show, setShow] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { signUpUser, googleLogin } = useAuth();

  const locations = useLocation();
  const from = locations.state || "/";
  const navigate = useNavigate();

  const handelLogin = (data) => {
    const email = data?.email;
    const password = data.password;
    signUpUser(email, password)
      .then((res) => {
        console.log(res);
        toast.success("Login Successfully");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        toast.warning(err.code);
      });

    console.log(email, password);
  };

  const handelGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        toast.success("Login Successfully");
        navigate(from, { replace: true });
        console.log(res.user);
      })
      .catch((err) => {
        toast.warning(err.code);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen w-full">
      <div className="grid gap-8">
        <section
          id="back-div"
          className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl"
        >
          <div className="border-8 border-transparent rounded-xl bg-white dark:bg-gray-900 shadow-xl p-8 m-2">
            <h1 className="text-5xl font-bold text-center cursor-default dark:text-gray-300 text-gray-900">
              LogIn Now
            </h1>
            <form
              onSubmit={handleSubmit(handelLogin)}
              className="space-y-6 mt-6"
            >
              <div className=" relative">
                <label
                  htmlFor="email"
                  className="block mb-2 text-lg dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  {...register("email", { required: true })}
                  className="border p-3 pl-10 shadow-md dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 border-gray-300 rounded-lg w-full
         focus:ring-2 focus:ring-blue-500 transition transform hover:scale-105 duration-300"
                  type="email"
                  placeholder="Email"
                />
                {errors.email?.type === "required" && (
                  <p className="text-red-500 text-xs font-semibold mt-2">
                    Please Enter Your Valid Email
                  </p>
                )}
                <HiOutlineMail className="absolute left-3 top-15 transform -translate-y-1/2 text-gray-400 dark:text-gray-300 pointer-events-none w-5 h-5" />
              </div>

              <div className="relative">
                <label
                  htmlFor="password"
                  className="block mb-2 text-lg dark:text-gray-300"
                >
                  Password
                </label>
                <input
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern:
                      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
                  })}
                  className="border p-3 pl-10 shadow-md dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 border-gray-300 rounded-lg w-full
         focus:ring-2 focus:ring-blue-500 transition transform hover:scale-105 duration-300"
                  type={show ? "text" : "password"} // show true হলে text দেখাবে, false হলে password (তুমি আগে উল্টা ছিলে)
                  placeholder="Password"
                />
                <RiLockPasswordLine className="absolute left-3 top-15 transform -translate-y-1/2 text-gray-400 dark:text-gray-300 w-5 h-5 pointer-events-none" />

                <div
                  onClick={() => setShow(!show)}
                  className="absolute right-3 top-15 transform -translate-y-1/2 cursor-pointer z-10"
                >
                  {show ? (
                    <MdOutlineRemoveRedEye className="text-gray-400 dark:text-gray-300 w-4 h-4" />
                  ) : (
                    <FaRegEyeSlash className="text-gray-400 dark:text-gray-300 w-4 h-4" />
                  )}
                </div>

                {errors.password?.type === "required" && (
                  <p className="text-red-500 text-xs font-semibold mt-1">
                    Set Up Password
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500 text-xs font-semibold mt-1">
                    Password must be 6 characters or longer
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500 text-xs font-semibold mt-1">
                    Need uppercase, lowercase, digit & special character
                  </p>
                )}
              </div>

              <a
                href="#"
                className="text-blue-400 text-sm transition hover:underline"
              >
                Forget your password?
              </a>
              <button
                className="w-full p-3 mt-4 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="submit"
              >
                LOG IN
              </button>
            </form>
            <div className="flex flex-col mt-4 text-sm text-center dark:text-gray-300">
              <p>
                Don't have an account?{" "}
                <Link
                  to="/auth/rigester"
                  className="text-blue-400 transition hover:underline"
                >
                  Sign Up Now
                </Link>
              </p>
            </div>
            <div
              id="third-party-auth"
              className="flex justify-center gap-4 mt-5"
            >
              <button
                onClick={handelGoogleLogin}
                className="
    p-2 rounded-lg 
    shadow-lg 
    transition 
    transform 
    duration-300 
    hover:scale-105 
    hover:shadow-xl 
    hover:bg-gradient-to-r 
    hover:from-blue-400 
    hover:to-purple-600
    focus:outline-none
    focus:shadow-xl
    px-6
    focus:bg-gradient-to-r
    focus:from-blue-200
    focus:to-purple-300
    flex gap-2
  "
              >
                <img
                  className="w-6 h-6"
                  loading="lazy"
                  src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/"
                  alt="Google"
                />
                <span className=" text-white"> Google</span>
              </button>
            </div>
            <div className="mt-4 text-center text-sm text-gray-500">
              <p>
                By signing in, you agree to our{" "}
                <a
                  href="#"
                  className="text-blue-400 transition hover:underline"
                >
                  Terms
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-blue-400 transition hover:underline"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
