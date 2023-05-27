import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center shadow-lg">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

                        <span className="ml-3 text-xl">React Practice</span>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link to="/" className="mr-5 hover:text-gray-900">Home</Link>
                        <Link to="/news" className="mr-5 hover:text-gray-900">News</Link>
                        <Link to="/category" className="mr-5 hover:text-gray-900">Category</Link>

                    </nav>
                    <button className="inline-flex items-center text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-700 rounded text-base mt-4 md:mt-0">Go to Cart

                    </button>
                </div>
            </header>
        </div>
    );
};

export default Header;