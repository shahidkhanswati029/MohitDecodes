import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
// import useGetUSer from "./hooks/useGetUSer";

const Signup = () => {
  
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle Email Signup (no password or name)
  const handleEmailSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/api/auth/signup/email", {
        email,
      });

      if (response.success) {
        // Redirect to login page after successful signup
        navigate("/login");
      } else {
        alert(response.data.message|| "Error during signup.");
      }
    } catch (err) {
      console.error(err);
      alert(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle OAuth Signups (Google and GitHub)
  const handleOAuth = (provider) => {
    window.location.href = `http://localhost:5000/api/auth/oauth/${provider}`;
    navigate("/")
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 dark:bg-gray-900 dark:text-black">
      <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row max-w-4xl w-full">
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold mb-2">Welcome!</h2>
          <p className="mb-6 text-gray-600 text-lg">Let's create your Account</p>

          <label className="block mb-1 text-gray-700 text-sm font-medium">
            Enter your Email
          </label>
          <input
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />

          <button
            type="submit"
            onClick={handleEmailSignup}
            className={`w-full bg-gray-500 text-white font-medium py-2 rounded-md hover:bg-gray-600 transition mb-6 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Signing Up...' : 'Continue'}
          </button>

          <div className="flex items-center mb-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-3 text-sm text-gray-500">Or continue with</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              className="flex items-center justify-center gap-2 border border-gray-300 w-full px-4 py-2 rounded-md hover:bg-gray-100 transition"
              onClick={() => handleOAuth('github')}
            >
              <FaGithub /> Github
            </button>
            <button
              className="flex items-center justify-center gap-2 border border-gray-300 w-full px-4 py-2 rounded-md hover:bg-gray-100 transition"
              onClick={() => handleOAuth('google')}
            >
              <FaGoogle /> Google
            </button>
          </div>

          <p className="text-sm text-center mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 underline">
              Login
            </Link>
          </p>

          <p className="text-xs text-center mt-4 text-gray-500">
            By clicking continue, you agree to our{" "}
            <span className="underline">Terms of Service</span> and{" "}
            <span className="underline">Privacy Policy</span>.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 hidden md:block">
          <img
            src="./signup.jpg" // Place your image in public folder with this name
            alt="Signup visual"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
