


import { useState } from "react";
import LoginForm from "./Login";
import RegisterForm from "./Register";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 via-green-700 to-green-500 px-4">

      <div className="w-full max-w-md bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8">

        <h1 className="text-3xl font-bold text-center text-green-700">
          Agri Kisan
        </h1>
        <p className="text-center text-gray-500 mt-1">
          {isLogin ? "Login with OTP" : "Register new account"}
        </p>

        {isLogin ? <LoginForm /> : <RegisterForm />}

        <p className="text-center text-sm mt-6">
          {isLogin ? "New user?" : "Already have an account?"}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="ml-1 text-green-600 font-semibold hover:underline"
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;
