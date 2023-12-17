import Navbar from "../Navbar";
import Logo from "../Logo";

const Header = () => {
  return (
    <header className="w-full">
      <div className="container mx-auto flex justify-evenly items-center ">
        {/* Logo a la izquierda */}
        <div className="">
          <Logo />
        </div>

        {/* Navbar a la derecha */}
        <div className="mx-auto">
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
