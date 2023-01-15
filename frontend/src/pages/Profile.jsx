import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useUserContext } from "../contexts/userContext";

const Profile = () => {
  const { user, setUser, setToken } = useUserContext();

  const handleLogout = () => {
    setUser({});
    setToken("");
  };
  return user.id ? (
    <div className="lg:flex">
      <aside
        id="sidebar"
        className="inset-0 z-20 flex-none  h-full w-72 lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-48 lg:block"
        aria-labelledby="sidebar-label"
      >
        <h4 id="sidebar-label" className="sr-only">
          Profile
        </h4>
        <div
          id="navWrapper"
          className="overflow-y-auto z-20 h-full bg-white scrolling-touch max-w-2xs lg:h-[calc(100vh-3rem)] lg:block lg:sticky top:24 lg:top-28 dark:bg-gray-900 lg:mr-0"
        >
          <nav
            id="nav"
            className="pt-16 px-1 pl-3 lg:pl-0 lg:pt-2 font-normal text-base lg:text-sm pb-10 lg:pb-20 sticky?lg:h-(screen-18)"
            aria-label="Docs navigation"
          >
            <ul className="mb-0 list-unstyled">
              <li className="mt-8">
                <h5 className="mb-2 text-sm font-semibold tracking-wide text-gray-900 uppercase lg:text-xs dark:text-white">
                  Profile
                </h5>
                <ul className="py-1 list-unstyled fw-normal small">
                  <li>
                    <Link
                      to="/profile"
                      data-sidebar-item=""
                      className="py-2 transition-colors duration-200 relative flex items-center flex-wrap hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                    >
                      Infos{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/profile/password"
                      data-sidebar-item=""
                      className="py-2 transition-colors duration-200 relative flex items-center flex-wrap hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                    >
                      Password{" "}
                    </Link>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={handleLogout}
                      data-sidebar-item=""
                      className="py-2 transition-colors duration-200 relative flex items-center flex-wrap hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                    >
                      Logout{" "}
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      <Outlet />
    </div>
  ) : (
    ""
  );
};

export default Profile;
