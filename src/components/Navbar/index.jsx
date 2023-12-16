import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { ShoppingCart } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import XMark from "@mui/icons-material/Close";



const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const activeStyle = "text-[#FFD700] sm:border-b-2 sm:border-[#FFD700] pb-1 transition duration-500 ease-in-out font-semibold";

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            // Actualizar el estado del menú según el ancho de la ventana
            setMenuOpen(false); // Cerrar el menú al cambiar el tamaño de la pantalla
        };

        // Llamar a handleResize al cargar la página
        handleResize();

        // Agregar un listener para manejar cambios de tamaño de ventana
        window.addEventListener("resize", handleResize);

        // Limpiar el listener cuando el componente se desmonta
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <nav className="text-white text-lg font-thin z-10 items-center mx-auto pr-10 pl-28 py-5">
            <div className="container mx-auto flex justify-between items-center">


                <div className="md:hidden">
                    {menuOpen ? (
                        <XMark
                            className="h-6 w-6 cursor-pointer transition duration-500 mx-4 ease-in-out hover:text-[#FFD700]"
                            onClick={toggleMenu}
                        />
                    ) : (
                        <MenuIcon
                            className="h-6 w-6 cursor-pointer transition duration-500 mx-4 ease-in-out hover:text-[#FFD700]"
                            onClick={toggleMenu}
                        />
                    )}
                </div>

                <ul
                    className={`hidden md:flex items-center gap-10 transition duration-500 ease-in-out`}
                >
                    <li>
                        <NavLink
                            className={({ isActive }) => (isActive ? activeStyle : undefined)}
                            to="/"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) => (isActive ? activeStyle : undefined)}
                            to="/about"
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) => (isActive ? activeStyle : undefined)}
                            to="/contact"
                        >
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) => (isActive ? activeStyle : undefined)}
                            to="/gallery"
                        >
                            Gallery
                        </NavLink>
                    </li>
                    <li>
                        <button className="flex items-center justify-center">
                            <ShoppingCart className="h-6 w-6 cursor-pointer" />
                        </button>
                    </li>
                </ul>
            </div>

            {/* Menú para pantallas pequeñas */}
            <ul
                className={`md:hidden flex flex-col items-center gap-4 ${menuOpen ? "flex" : "hidden"
                    }`}
            >
                <li>
                    <NavLink
                        className={({ isActive }) => (isActive ? activeStyle : undefined)}
                        to="/"
                        onClick={toggleMenu}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => (isActive ? activeStyle : undefined)}
                        to="/about"
                        onClick={toggleMenu}
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => (isActive ? activeStyle : undefined)}
                        to="/contact"
                        onClick={toggleMenu}
                    >
                        Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => (isActive ? activeStyle : undefined)}
                        to="/gallery"
                        onClick={toggleMenu}
                    >
                        Gallery
                    </NavLink>
                </li>
                <li>
                    <button
                        className="flex items-center justify-center"
                        onClick={toggleMenu}
                    >
                        <ShoppingCart className="h-6 w-6 cursor-pointer" />
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
