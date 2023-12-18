import Navbar from "../Navbar";
import Logo from "../Logo";

const Header = () => {
  return (
    <header className="w-full">
      <div className="container mx-auto flex justify-between items-center px-10 md:px-10">
        {/* Logo a la izquierda */}
        <div className="flex-shrink-0">
          <Logo />
        </div>

        {/* Navbar a la derecha */}
        <div className="">
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
