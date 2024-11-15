import React, { useState } from "react";

function Login({ setIsAuthenticated }) {
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <>
      <div className="profile-containe flex flex-col text-center mx-5">
        <div className="flex justify-center mt-10">
          <img
            className="w-28 rounded-3xl animate__animated animate__bounce"
            src="https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Ftest1-emgndhaqd0c9h2db.a01.azurefd.net%2Fimages%2F164517ee-d738-42b1-b9ce-2903a24e18d9.png"
            alt="Profile"
          />
        </div>

        <div className="flex flex-col items-center text-center mx-5">
          <div className="relative flex gap-2 justify-center rounded-lg bg-black mt-10 w-full max-w-sm">
            <div
              className={`p-2 cursor-pointer w-1/2 z-10 text-white transition duration-300 ${
                isLogin ? "text-gray-100" : "text-gray-500"
              }`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </div>
            <div
              className={`p-2 cursor-pointer w-1/2 z-10 text-white transition duration-300 ${
                !isLogin ? "text-gray-100" : "text-gray-500"
              }`}
              onClick={() => setIsLogin(false)}
            >
              Register
            </div>
            <div
              className={`absolute left-0 bottom-0 h-10 w-1/2 z-1 rounded-lg bg-[#455B83]/[.80] transition-transform duration-300 ease-in-out ${
                isLogin ? "translate-x-0" : "translate-x-full"
              }`}
            />
          </div>

          <form
            className="flex flex-col gap-4 mt-8 w-full max-w-sm"
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            <input
              type="email"
              placeholder="Email"
              required
              className="p-2 rounded-lg border border-gray-300 focus:outline-none"
            />
            {isLogin ? null : (
              <input
                type="name"
                placeholder="Name"
                className="p-2 rounded-lg border border-gray-300 focus:outline-none"
                required
              />
            )}
            <button
              type="submit"
              className="py-5 px-6 mx-auto bg-[#cfd7ee]/[.20] text-white rounded-lg hover:bg-[#cfd7ee]/[.50]"
            >
              →
            </button>
          </form>
        </div>
      </div>

      <div className="animate__animated animate__fadeInRight">
        <img
          className="w-screen"
          src="https://as2.ftcdn.net/v2/jpg/05/26/52/71/1000_F_526527151_xsfyOxjCQwASvCNVFpgNM4KyIuqApcnb.jpg"
          alt="Background"
        />
      </div>
    </>
  );
}

export default Login;
