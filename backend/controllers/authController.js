// controllers/authController.js
import axios from "axios";
import User from "../models/UserModel.js";
import jwt from "jsonwebtoken";

const createToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

export const signupWithEmail = async (req, res) => {
  const { email } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User already exists" });

    user = await User.create({ email });

    const token = createToken(user);
    res.json({ token, user ,success:true,message:"welcome to mohitdecodes" });
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};
// Google OAuth callback handler
export const googleOAuth = async (req, res) => {
  const { code } = req.query;
  if (!code) return res.status(400).json({ msg: "No code provided" });

  try {
    // Step 1: Exchange code for access token
    const tokenRes = await axios.post("https://oauth2.googleapis.com/token", {
      code,
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      redirect_uri: process.env.GOOGLE_REDIRECT_URI,
      grant_type: "authorization_code",
    });

    const { access_token } = tokenRes.data;

    // Step 2: Get user info from Google
    const userInfoRes = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
      headers: { Authorization: `Bearer ${access_token}` },
    });

    const userInfo = userInfoRes.data;
    const googleId = userInfo.sub;
    const email = userInfo.email;
    const username = userInfo.name || userInfo.email.split("@")[0];
    const profilePhoto = userInfo.picture;

    // Step 3: Find or create user
    let user = await User.findOne({ googleId });

    if (!user) {
      user = await User.create({
        googleId,
        email,
        username,
        profilePhoto,
      });
    }

    // Step 4: Create JWT
    const token = createToken(user);

    // Step 5: Redirect to frontend with token
    // You can also pass user info via localStorage or query if needed
    res.redirect(`http://localhost:5173/?token=${token}`);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Google OAuth error", error: err.message });
  }
};


// GitHub remains unchanged



export const githubOAuth = async (req, res) => {
  const { code } = req.query;
  if (!code) return res.status(400).json({ msg: "No code provided" });

  try {
    // Step 1: Exchange code for access token
    const tokenRes = await axios.post(
      "https://github.com/login/oauth/access_token",
      {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      },
      { headers: { Accept: "application/json" } }
    );

    const { access_token } = tokenRes.data;

    // Step 2: Get basic user info
    const userInfo = await axios.get("https://api.github.com/user", {
      headers: { Authorization: `token ${access_token}` },
    });

    const githubId = userInfo.data.id;
    const avatar = userInfo.data.avatar_url;         // ✅ Actual profile photo URL
    const username = userInfo.data.login;            // ✅ GitHub username

    // Step 3: Get verified primary email
    const emailsRes = await axios.get("https://api.github.com/user/emails", {
      headers: { Authorization: `token ${access_token}` },
    });

    const primaryEmailObj = emailsRes.data.find(
      (emailObj) => emailObj.primary && emailObj.verified
    );
    const email = primaryEmailObj ? primaryEmailObj.email : "";

    // Step 4: Find or create user
    let user = await User.findOne({ githubId });

    if (!user) {
      user = await User.create({
        githubId,
        email,
        profilePhoto: avatar,
        username, // ✅ Save GitHub username
      });
    } else {
      // Optionally update profile photo and username in case they changed
      user.profilePhoto = avatar;
      user.username = username;
      await user.save();
    }

    // Step 5: Generate token
    const token = createToken(user);

    // ✅ Redirect with token (and optionally user info if needed)
    res.redirect(`http://localhost:5173/?token=${token}`);
    // res.status(201).json({user,message:"user created",success:true})
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "GitHub OAuth error", error: err.message });
  }
};


// Route Handler (Controller Function)
export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.userId); // req.userId must be set earlier by middleware
    res.json({ user });
  } catch (err) {
    res.status(401).json({ message: "Unauthorized" });
  }
};

