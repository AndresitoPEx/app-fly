import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="bg-black text-white items-center mx-auto">
            <ul className="">
                <li className="inline-block px-2 py-2 md:px-4 lg:px-4 xl:px-4">
                    <NavLink to="/" activeClassName="text-yellow-400">Home</NavLink>
                </li>
                <li className="inline-block px-2 py-2 md:px-4 lg:px-4 xl:px-4">
                    <NavLink to="/about" activeClassName="text-yellow-400">About</NavLink>
                </li>
                <li className="inline-block px-2 py-2 md:px-4 lg:px-4 xl:px-4">
                    <NavLink to="/contact" activeClassName="text-yellow-400">Contact</NavLink>
                </li>
                <li className="inline-block px-2 py-2 md:px-4 lg:px-4 xl:px-4">
                    <NavLink to="/gallery" activeClassName="text-yellow-400">Gallery</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
