import { NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { navConfig } from "./config-navigation";
import { paths } from "../paths";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout } from "../../redux/reducers/auth/authSlice";
import ThemeToggleButton from "./theme-changing-button";
// import { useAppSelector } from "src/redux/hooks";

const Header = () => {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const { user } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const pathname = location.pathname;
  return (
    <header className="relative  py-3 dark:bg-sky-950 bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 xl:px-0">
        <div className="flex h-16 items-center justify-between">
          <div className="">
            <NavLink className="block text-teal-600" to={paths.root}>
              <span className="sr-only">Home</span>
              <img src={logo} alt="Fast Bike" className="md:w-28" />
            </NavLink>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                {navConfig.map((navItem, index) => (
                  <li key={index}>
                    <NavLink
                      className={`text-gray-500 transition font-bold hover:text-sky-800  text-md uppercase ${
                        pathname === navItem.path && "text-sky-800"
                      } `}
                      to={navItem.path}
                    >
                      {navItem.title}
                    </NavLink>
                  </li>
                ))}
                {user && user.email && (
                  <li>
                    <NavLink
                      className={`text-gray-500 transition font-bold hover:text-sky-800  text-md uppercase  ${
                        pathname.includes(paths.account.root) && "text-sky-800"
                      } `}
                      to={paths.account.root}
                      onClick={() => setIsOpen((prev) => !prev)}
                    >
                      Dashboard
                    </NavLink>
                  </li>
                )}
              </ul>
            </nav>
          </div>

          <div className="md:hidden w-full">
            <ul
              className={`flex items-start flex-col gap-6 text-sm bg-white absolute h-screen top-0 z-20 w-72 shadow-lg border-r transition-all duration-300 pl-5 pt-7 ${
                isOpen ? "left-0" : "-left-80"
              }`}
            >
              {navConfig.map((navItem, index) => (
                <li key={index} className="w-full">
                  <NavLink
                    className={`text-gray-500 transition font-semibold hover:text-orange-500 hover:bg-gray-100 w-full px-3 py-2 text-md ${
                      pathname === navItem.path && "text-orange-600"
                    } `}
                    to={navItem.path}
                    onClick={() => setIsOpen((prev) => !prev)}
                  >
                    {navItem.title}
                  </NavLink>
                </li>
              ))}
              {user && user.email && (
                <li className="w-full">
                  <NavLink
                    className={`text-gray-500 transition font-semibold hover:text-orange-500 hover:bg-gray-100 w-full px-3 py-2 text-md ${
                      pathname.includes(paths.account.root) && "text-orange-600"
                    } `}
                    to={paths.account.root}
                    onClick={() => setIsOpen((prev) => !prev)}
                  >
                    Dashboard
                  </NavLink>
                </li>
              )}
            </ul>
          </div>

          <div className="flex items-center flex-row gap-4 xl:mr-[-81px] z-10">
            <ThemeToggleButton />
            {user && user._id ? (
              <div
                onClick={handleLogout}
                className="shadow-none rounded-none cursor-pointer bg-sky-800 px-2 md:px-5 py-2 md:py-3 text-xs md:text-sm font-semibold text-white"
              >
                Logout
              </div>
            ) : (
              <div className="flex gap-4">
                <NavLink to={paths.auth.login}>
                  {" "}
                  <div className="shadow-none rounded-none bg-sky-800 px-2 md:px-5 py-2 md:py-3 text-xs md:text-sm font-semibold text-white">
                    Login
                  </div>
                </NavLink>
                <NavLink to={paths.auth.signup}>
                  <div className="shadow-none rounded-none bg-sky-800 px-2 md:px-5 py-2 md:py-3 text-xs md:text-sm font-semibold text-white whitespace-nowrap">
                    Sign Up
                  </div>
                </NavLink>
              </div>
            )}
          </div>

          <div className="block md:hidden ml-3">
            <button
              className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {isOpen ? (
                <AiOutlineClose className="text-xl" />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Right side black overlay */}
      <div className="hidden lg:flex absolute top-0 right-0 w-full h-full bg-black max-w-[calc(100%-85%)]" />
    </header>
  );
};

export default Header;
