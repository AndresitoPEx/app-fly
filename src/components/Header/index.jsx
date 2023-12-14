import { Link } from "react-router-dom"
import Navbar from "../Navbar"
import Logo from "../Logo"

const Header = () => {
  return (
    <div className="flex justify-between items-center w-full fixed top-0 bg-black py-2">  
      <Logo />
      <Navbar />
    </div>
  )
}

export default Header
