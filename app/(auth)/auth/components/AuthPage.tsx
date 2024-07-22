"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import google from "../../../../public/images/googleLogo.png";

const API_BASE_URL = "http://localhost:3333";
const COGNITO_DOMAIN = "https://devhub.auth.eu-north-1.amazoncognito.com";
const COGNITO_CLIENT_ID = "1eporcbljpehfth1v7psdlq4ck";
const COGNITO_REDIRECT_URI = "http://localhost:3000";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmationCode, setConfirmationCode] = useState("");
  const [isConfirming, setIsConfirming] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const { theme } = useTheme();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    if (code) {
      handleGoogleCallback(code);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      if (isLogin) {
        if (!email) {
          setError("Email is required");
          return;
        }
        const response = await axios.post(
          `${API_BASE_URL}/cognito-auth/signin`,
          { usernameOrEmail: email, password }
        );
        console.log("Login successful", response.data);
        router.push("/");
      } else {
        if (isConfirming) {
          await axios.post(`${API_BASE_URL}/cognito-auth/confirm-signup`, {
            username,
            code: confirmationCode,
          });
          setIsLogin(true);
          setIsConfirming(false);
        } else {
          await axios.post(`${API_BASE_URL}/cognito-auth/signup`, {
            email,
            username,
            password,
            firstName,
            lastName,
          });
          setIsConfirming(true);
        }
      }
    } catch (err: any) {
      setError(err.response?.data?.message || "An error occurred");
    }
  };

  const toggleAuthMode = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLogin(!isLogin);
  };

  const handleGoogleSignIn = () => {
    const scopes = ["openid", "email", "profile"];
    const googleAuthUrl = `${COGNITO_DOMAIN}/oauth2/authorize?identity_provider=Google&redirect_uri=${encodeURIComponent(
      COGNITO_REDIRECT_URI
    )}&response_type=CODE&client_id=${COGNITO_CLIENT_ID}&scope=${encodeURIComponent(
      scopes.join(" ")
    )}`;
    window.location.href = googleAuthUrl;
  };

  const handleGoogleCallback = async (code: string) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/cognito-auth/google-callback`,
        { code }
      );
      console.log("Google sign-in successful", response.data);
      router.push("/");
    } catch (err) {
      console.error("Error during Google sign-in", err);
      setError("Failed to sign in with Google");
    }
  };

  return (
    <div
      className={`min-vh-100 d-flex align-items-center justify-content-center ${
        theme === "dark" ? "" : "bg-light"
      }`}
    >
      <div
        className={`card ${theme === "dark" ? "text-white" : "bg-white"}`}
        style={{
          maxWidth: "400px",
          backgroundColor:
            theme === "dark" ? "var(--box-2nd-color)" : undefined,
        }}
      >
        <div className="card-body p-5">
          <div className="text-center mb-4">
            <Image
              src="/images/logo.png"
              alt="CircleHub Logo"
              width={50}
              height={50}
            />
          </div>
          <h2 className="text-center mb-4">
            {isLogin ? "Login" : isConfirming ? "Confirm Sign Up" : "Sign Up"}
          </h2>
          <form onSubmit={handleSubmit}>
            {!isConfirming && (
              <>
                {isLogin ? (
                  <>
                    <div className="mb-3">
                      <input
                        type="email"
                        className={`form-control ${
                          theme === "dark" ? "bg-dark text-white" : ""
                        }`}
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="password"
                        className={`form-control ${
                          theme === "dark" ? "bg-dark text-white" : ""
                        }`}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="mb-3">
                      <input
                        type="text"
                        className={`form-control ${
                          theme === "dark" ? "bg-dark text-white" : ""
                        }`}
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        className={`form-control ${
                          theme === "dark" ? "bg-dark text-white" : ""
                        }`}
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="password"
                        className={`form-control ${
                          theme === "dark" ? "bg-dark text-white" : ""
                        }`}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        className={`form-control ${
                          theme === "dark" ? "bg-dark text-white" : ""
                        }`}
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        className={`form-control ${
                          theme === "dark" ? "bg-dark text-white" : ""
                        }`}
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                      />
                    </div>
                  </>
                )}
              </>
            )}
            {isConfirming && (
              <div className="mb-3">
                <input
                  type="text"
                  className={`form-control ${
                    theme === "dark" ? "bg-dark text-white" : ""
                  }`}
                  placeholder="Confirmation Code"
                  value={confirmationCode}
                  onChange={(e) => setConfirmationCode(e.target.value)}
                  required
                />
              </div>
            )}
            <button type="submit" className="btn btn-primary w-100 mb-3">
              {isLogin ? "Login" : isConfirming ? "Confirm" : "Sign Up"}
            </button>
          </form>
          <button
            onClick={handleGoogleSignIn}
            className={`btn ${
              theme === "dark" ? "btn-secondary" : "btn-light"
            } w-100 mb-3`}
          >
            <Image
              src={google}
              alt="Google Logo"
              width={20}
              height={20}
              className="me-2"
            />
            Sign in with Google
          </button>
          {error && <p className="text-danger text-center">{error}</p>}
          {!isConfirming && (
            <p className="text-center mt-3">
              {isLogin
                ? "Don't have an account? "
                : "Already have an account? "}
              <a href="#" onClick={toggleAuthMode} className="text-primary">
                {isLogin ? "Sign up here!" : "Login here!"}
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
