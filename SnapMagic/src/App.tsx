import "./globals.css";
import { Route, Routes } from "react-router-dom";
import SigninForm from "./_auth/forms/SigninForm";
import { Home } from "./_root/pages";
import SignupForm from "./_auth/forms/SignupForm";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";

const App = () => {
  return (
    <main className=" flex h-screen">
      {/*public routes*/}
      <Routes>
        <Route element={<AuthLayout />}>
          <Route
            path="/sign-in"
            element={<SigninForm />}
          ></Route>
          <Route
            path="/sign-up"
            element={<SignupForm />}
          ></Route>
        </Route>

        {/*private routes*/}
        <Route element={<RootLayout />}>
          <Route index element={<Home />}></Route>
        </Route>
      </Routes>
    </main>
  );
};

export default App;
