// src/pages/OAuthSuccess.jsx
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserAndToken } from "../components/redux/userSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const OAuthSuccess = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get("token");

      if (!token) return navigate("/signup");

      try {
        const res = await axios.get("http://localhost:5000/api/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });

        dispatch(setUserAndToken(res.data.user));
        navigate("/"); // Go to homepage or chat
      } catch (error) {
        console.error("Error fetching user:", error);
        navigate("/signup");
      }
    };

    fetchUser();
  }, []);

  return <p>Logging you in...</p>;
};

export default OAuthSuccess;
