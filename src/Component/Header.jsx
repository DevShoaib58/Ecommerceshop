import { Link } from "react-router-dom";
const Header = () => {
    const headlink = [
        { title: "Home", path: "/" },
        { title: "News", path: "/news" },
        { title: "Category", path: "/category" },
        { title: "All News", path: "/allnews" },
        { title: "User Profile", path: "/userprofile" },
        { title: "Quote", path: "/quote" },
        { title: "Gallery", path: "/gallery" },
        { title: "Post", path: "/post" },
    ]
    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center shadow-lg">
                    <Link to={"/"} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <span className="ml-3 text-xl">Ecommerce</span>
                    </Link>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        {headlink.map((obj, id) => {
                            return (
                                <Link key={id} to={obj.path} className="mr-5 hover:text-gray-900">{obj.title}</Link>
                            )
                        })}


                    </nav>
                    <button className="inline-flex items-center text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-700 rounded text-base mt-4 md:mt-0">Go to Cart

                    </button>
                </div>
            </header>
        </>
    );
};

export default Header;