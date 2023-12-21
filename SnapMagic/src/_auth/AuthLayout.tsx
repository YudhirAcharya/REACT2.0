import { Outlet, Navigate } from "react-router-dom";

//outlet is goning to render the current page we are on here, signin or signup
const AuthLayout = () => {
  const isAuthenticated = false;
  return (
    <div>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className=" flex flex-1 justify-center items-center flex-col py-10">
            <Outlet />
          </section>
          <img
            src="/assets/images/side-img.svg"
            alt="logo"
            className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
          />
        </>
      )}
    </div>
  );
};

export default AuthLayout;
