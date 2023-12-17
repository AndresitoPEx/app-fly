import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="w-1/2 sm:w-1/5 lg:w-1/3 mx-auto">
      <figure className="w-full">
        <Link to="/">
          <img
            className="w-full "
            src="../logo.png"
            alt="Fly Alone"
          />
        </Link>
      </figure>
    </div>
  );
};

export default Logo;
