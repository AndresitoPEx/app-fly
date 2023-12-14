import { Link } from "react-router-dom"

const Logo = () => {
    return (
        <div className="flex items-center">
            <figure className="w-1/3 sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/4 mx-auto">
                <Link to="/">
                    <img className="w-full" src="https://i.postimg.cc/LsKBsxX9/log2.png" alt="" />
                </Link>
            </figure>
        </div>
    )
}

export default Logo
