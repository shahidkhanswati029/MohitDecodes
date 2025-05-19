import { useState, useEffect } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { setUserAndToken } from "../components/redux/userSlice"; // adjust path as needed

const Signup = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const token = query.get("token");
    const email = query.get("email");
    const id = query.get("id");
    const username = query.get("username"); // Added username
    const photo = query.get("photo"); // Added photo

    if (token && email && id) {
      dispatch(
        setUserAndToken({
          token,
          user: { _id: id, email, username, photo }, // include all fields
        })
      );
      navigate("/", { replace: true }); // redirect and clean URL
    }
  }, [location.search, dispatch, navigate]);

  const handleEmailSignup = (e) => {
    e.preventDefault();
    if (!email) return alert("Please enter your email");
    window.location.href = `http://localhost:5000/api/auth/signup/email?email=${encodeURIComponent(
      email
    )}`;
  };

  const handleOAuth = (provider) => {
    window.location.href = `http://localhost:5000/api/auth/oauth/${provider}`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center  text-black bg-gray-100 px-4 dark:bg-gray-900 dark:text-black mt-4">
      <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row max-w-4xl w-full">
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold mb-2 text-gray-900 ">Welcome!</h2>
          <p className="mb-6 text-gray-600 dark:text-gray-300 text-lg">Let's login to your account</p>

          <label className="block mb-1 text-gray-700 dark:text-gray-300 text-sm font-medium">
            Enter your Email
          </label>
          <input
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          />

          <button
            type="submit"
            onClick={handleEmailSignup}
            className="w-full bg-gray-500 text-white font-medium py-2 rounded-md hover:bg-gray-600 transition mb-6"
          >
            Continue
          </button>

          <div className="flex items-center mb-4">
            <hr className="flex-grow border-gray-300 dark:border-gray-600" />
            <span className="mx-3 text-sm text-gray-500 dark:text-gray-400">Or continue with</span>
            <hr className="flex-grow border-gray-300 dark:border-gray-600" />
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              className="flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-600 w-full px-4 py-2 rounded-md bg-gray-100 dark:hover:bg-gray-700 transition"
              onClick={() => handleOAuth("github")}
            >
              <FaGithub /> GitHub
            </button>
            <button
              className="flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-600 w-full px-4 py-2 rounded-md bg-gray-100 dark:hover:bg-gray-700 transition"
              onClick={() => handleOAuth("google")}
            >
              <FaGoogle /> Google
            </button>
          </div>

          <p className="text-sm text-center mt-6 text-gray-700 dark:text-gray-300">
            dont have an account?{" "}
            <Link to="/signup" className="text-blue-600 underline">
              Login
            </Link>
          </p>

          <p className="text-xs text-center mt-4 text-gray-500 dark:text-gray-400">
            By clicking continue, you agree to our{" "}
            <span className="underline cursor-pointer">Terms of Service</span> and{" "}
            <span className="underline cursor-pointer">Privacy Policy</span>.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 hidden md:block">
          <img
            src="./login.PNG"
            alt="Signup visual"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
