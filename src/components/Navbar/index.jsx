import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { ShoppingCart } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import XMark from "@mui/icons-material/Close";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeStyle =
    "text-[#D9A86C] sm:border-b-2 sm:border-[#D9A86C] pb-1 transition duration-500 ease-in-out font-semibold";

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setMenuOpen(false);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="text-gray-100 text-lg font-light z-10 items-center ml-40 flex relative">
      <div className="container flex justify-between items-center">
        <div className="md:hidden">
          {menuOpen ? (
            <XMark
              className="h-6 w-6 cursor-pointer transition duration-300 mx-4 ease-in-out transform hover:scale-110 hover:text-[#D9A86C]"
              onClick={toggleMenu}
            />
          ) : (
            <MenuIcon
              className="h-6 w-6 cursor-pointer transition duration-300 mx-4 ease-in-out transform hover:scale-110 hover:text-[#D9A86C]"
              onClick={toggleMenu}
            />
          )}
        </div>

        {/* Menú para pantallas grandes */}
        <ul
          className={`hidden md:flex items-center gap-10 transition duration-500 ease-in-out`}
        >
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeStyle : undefined
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeStyle : undefined
              }
              to="/gallery"
            >
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeStyle : undefined
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeStyle : undefined
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Icono del carrito para pantallas grandes */}
        <div className="hidden md:flex items-center">
          <button className="flex items-center justify-center">
            <ShoppingCart className="h-6 w-6 cursor-pointer" />
          </button>
        </div>

        {/* Menú para pantallas pequeñas */}
        <div
          className={`md:hidden absolute top-16 right-4 bg-black z-20 transition-all duration-300 ${
            menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
          } transform origin-top`}
        >
          <ul className={`flex flex-col items-center gap-2 pt-4 pb-6`}>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
                to="/"
                onClick={toggleMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
                to="/about"
                onClick={toggleMenu}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
                to="/contact"
                onClick={toggleMenu}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
                to="/gallery"
                onClick={toggleMenu}
              >
                Gallery
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Icono del carrito para pantallas pequeñas */}
        <div className="md:hidden flex items-center">
          <button
            className="flex items-center justify-center"
            onClick={toggleMenu}
          >
            <ShoppingCart className="h-6 w-6 cursor-pointer" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
