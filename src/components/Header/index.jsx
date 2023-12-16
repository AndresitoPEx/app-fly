import Navbar from "../Navbar";
import Logo from "../Logo";

const Header = () => {
  return (
    <header className=" text-white w-full">
      <div className="container mx-auto flex justify-between items-center ">
        {/* Logo a la izquierda */}
        <div className="">
          <Logo />
        </div>

        {/* Navbar a la derecha */}
        <div className="flex-grow flex justify-end">
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
