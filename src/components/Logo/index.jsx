import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="w-auto">
      <figure className="my-5">
        <Link to="/">
          <img
            className="w-full lg:w-1/3 mx-auto min-w-[120px] max-w-[150px]"
            src="../logo1ok.png"
            alt="Fly Alone"
          />
        </Link>
      </figure>
    </div>
  );
};

export default Logo;
