import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        navigate("/");
    }
  return (
    <div>
      <div>
        <section className="bg-black">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Login to your account
                </h1>

                <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                          required=""
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="remember"
                          className="text-gray-500 dark:text-gray-300"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="text-sm font-medium text-gray-500 hover:underline"
                    >
                      Forgot password?
                    </a>
                  </div>
                    <button
                      type="submit"
                                      className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-500 font-medium rounded-lg text-sm px-4 py-2"
                                      
                    >
                      Log in
                    </button>
                  <button className="flex items-center justify-center w-full mt-4 text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-500 font-medium rounded-lg text-sm px-4 py-2">
                    <svg
                      className="h-5 w-5 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                    >
                      <path
                        d="M9.827 24c0-1.524.253-2.986.705-4.356L2.623 13.604C1.082 16.734.214 20.26.214 24c0 3.737.868 7.261 2.407 10.388l7.904-6.051c-.447-1.364-.697-2.82-.697-4.337z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M23.714 10.133c3.312 0 6.303 1.173 8.653 3.093l6.836-6.827C35.036 2.773 29.695.533 23.714.533 14.427.533 6.445 5.844 2.623 13.604l7.909 6.039c1.822-5.532 7.017-9.511 13.182-9.511z"
                        fill="#EB4335"
                      />
                      <path
                        d="M23.714 37.867c-6.164 0-11.359-3.978-13.182-9.51l-7.909 6.038c3.822 7.76 11.804 13.071 21.091 13.071 5.732 0 11.204-2.035 15.311-5.848l-7.507-5.804c-2.118 1.334-4.785 2.052-7.804 2.052z"
                        fill="#34A853"
                      />
                      <path
                        d="M46.145 24c0-1.387-.214-2.88-.534-4.267H23.714v9.067h12.604c-.63 3.091-2.345 5.467-4.8 7.014l7.507 5.804c4.314-4.004 7.12-9.969 7.12-16.614z"
                        fill="#4285F4"
                      />
                    </svg>
                    <span>Sign in with Google</span>
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don't have an account yet?{" "}
                    <Link
                      to="/SignUp"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Sign up
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
