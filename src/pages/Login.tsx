import React from "react";
import "../assets/css/user.css";
import Header from "../components/includes/Header";
import Navigation from "../components/includes/Navigation";
import Footer from "../components/includes/Footer";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
      <div id="content">
        <LoginForm />
      </div>
  );
};

export default Login;
