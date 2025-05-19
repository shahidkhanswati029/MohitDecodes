import { Router } from "express";
import {
  signupWithEmail,
  googleOAuth,
  githubOAuth,
  getMe,
} from "../controllers/authController.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = Router();

router.get("/signup/email", signupWithEmail);
router.get("/oauth/google", (req, res) => {
  const redirectUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.GOOGLE_CLIENT_ID}&redirect_uri=${process.env.GOOGLE_REDIRECT_URI}&response_type=code&scope=openid%20email%20profile&access_type=offline`;
  res.redirect(redirectUrl);
});

router.get("/oauth/google/callback", googleOAuth);

router.get("/oauth/github", (req, res) => {
  const redirectUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&redirect_uri=${process.env.GITHUB_REDIRECT_URI}&scope=user:email`;
  res.redirect(redirectUrl);
});

router.get("/oauth/github/callback", githubOAuth);
router.get("/me", verifyToken, getMe);

export default router;
