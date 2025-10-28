import React from "react";
import { useEffect } from "react";
import Authrouter from "./routes/auth.route.jsx";
import Mainrouter from "./routes/main.router.jsx";
import useAuthStore from "./stores/authstore.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const { authUser, verifyAuth, loading } = useAuthStore();

  useEffect(() => {
    verifyAuth();
  }, [verifyAuth]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return <Router>{authUser ? <Mainrouter /> : <Authrouter />}</Router>;
};

export default App;
