import { Outlet, Navigate } from "react-router-dom";

//outlet is goning to render the current page we are on here, signin or signup
const AuthLayout = () => {
  const isAuthenticated = false;
  return (
    <div>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <div className="flex">
          <section className="flex flex-1  justify-center items-center flex-col py-10">
            <Outlet />
          </section>
          <img
            src="/assets/images/side-img.svg"
            alt="logo"
            className="block w-1/2 h-screen object-cover bg-no-repeat"
          />
        </div>
      )}
    </div>
  );
};

export default AuthLayout;
