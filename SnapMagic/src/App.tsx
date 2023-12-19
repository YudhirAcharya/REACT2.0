import React from "react";
import "./globals.css";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public routes */}
        <Route
          path="/sign-in"
          element={<SigninForm />}
        ></Route>
        {/* private routes */}
        <Route index element={<Home />}></Route>
      </Routes>
    </main>
  );
};

export default App;
