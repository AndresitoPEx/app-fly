import { NavLink } from "react-router-dom";
import { useState } from "react";
import { ShoppingCart } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const activeStyle =
        "text-[#f5821f] sm:border-b-2 sm:border-[#f5821f] pb-1 transition duration-500 ease-in-out font-semibold";

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="bg-black text-white tracking-wide font-thin z-10 items-center mx-auto w-full justify-between">
            <div className="flex justify-between items-center">
                {/* Contenedor condicional para el icono de menú */}
                {window.innerWidth < 768 && (
                    <MenuIcon
                        className="h-6 w-6 md:hidden cursor-pointer transition duration-500 mx-4 ease-in-out hover:text-[#f5821f]"
                        onClick={toggleMenu}
                    />
                )}

                {/* Contenedor condicional para los enlaces */}
                {window.innerWidth >= 768 && (
                    <ul
                        className={`flex items-center gap-2 ${menuOpen ? "flex-col block w-full" : "hidden"
                            } md:flex-row md:w-auto md:gap-44 transition duration-500 ease-in-out md:flex md:items-center md:justify-center`}
                    >
                        <NavLink
                            className={({ isActive }) => (isActive ? activeStyle : undefined)}
                            to="/"
                        >
                            <li className="inline-block px-2 py-2 md:px-4 lg:px-4 xl:px-4">
                                Home
                            </li>
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => (isActive ? activeStyle : undefined)}
                            to="/about"
                        >
                            <li className="inline-block px-2 py-2 md:px-4 lg:px-4 xl:px-4">
                                About
                            </li>
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => (isActive ? activeStyle : undefined)}
                            to="/contact"
                        >
                            <li className="inline-block px-2 py-2 md:px-4 lg:px-4 xl:px-4">
                                Contact
                            </li>
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => (isActive ? activeStyle : undefined)}
                            to="/gallery"
                        >
                            <li className="inline-block px-2 py-2 md:px-4 lg:px-4 xl:px-4">
                                Gallery
                            </li>
                        </NavLink>

                    </ul>
                )}

                {/* Agregado para centrar los enlaces */}
                <div className="flex-grow"></div>

                <ul className="flex items-center gap-2 md:gap-5 transition duration-500 ease-in-out md:flex md:items-center md:justify-center md:w-auto">
                    <li className="flex items-center justify-center">
                        <button className="flex items-center justify-center">
                            <ShoppingCart className="h-6 w-6 cursor-pointer" />
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
