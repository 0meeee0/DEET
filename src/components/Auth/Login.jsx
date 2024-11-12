import React, { useState } from "react";

function Login({ setIsAuthenticated }) {
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <>
      <div className="profile-container flex flex-col text-center mx-5">
        <div className="flex justify-center mt-10">
          <img
            className="w-28 rounded-3xl"
            src="https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Ftest1-emgndhaqd0c9h2db.a01.azurefd.net%2Fimages%2F164517ee-d738-42b1-b9ce-2903a24e18d9.png"
            alt="Profile"
          />
        </div>

        <div className="flex gap-2 justify-center bg-black mt-10">
          <div
            className={`p-2 cursor-pointer ${
              isLogin ? "bg-gray-300" : "bg-gray-400"
            }`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </div>
          <div
            className={`p-2 cursor-pointer ${
              !isLogin ? "bg-gray-300" : "bg-gray-400"
            }`}
            onClick={() => setIsLogin(false)}
          >
            Register
          </div>
        </div>

        <form
          className="flex flex-col gap-4 mt-8"
          onSubmit={(e) => {
            e.preventDefault();
              handleLogin();

          }}
        >
          <input
            type="text"
            placeholder="Email"
            className="p-2 rounded-lg border border-gray-300 focus:outline-none"
          />
          {!isLogin && (
            <input
              type="name"
              placeholder="name"
              className="p-2 rounded-lg border border-gray-300 focus:outline-none"
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

      <div className="mt-10">
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
