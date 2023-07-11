import { Link } from "react-router-dom";
import { headlink } from "../Header";
import { Fragment } from "react";

const Footer = () => {
    return (
        <div>
            <footer className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg> */}
                            <span className="ml-3 text-xl">Tailblocks</span>
                        </a>
                        <p className="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
                    </div>
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-4/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav className="list-none mb-10">
                                {headlink.slice(0, 4).map((e, id) => {
                                    return <Fragment key={id}>
                                        <li>
                                            <Link to={e.path}>{e.title}</Link>
                                        </li>
                                    </Fragment>
                                })}
                            </nav>
                        </div>
                        <div className="lg:w-4/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase">Sub Menu</h2>
                            <nav className="list-none mb-10">
                                {headlink.slice(4, 9).map((e, id) => {
                                    return <Fragment key={id}>
                                        <li>
                                            <Link to={e.path}>{e.title}</Link>
                                        </li>
                                    </Fragment>
                                })}
                            </nav>
                        </div>

                    </div>
                </div>
                <div className="bg-gray-100">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-gray-500 text-sm text-center sm:text-left">© 2020 Tailblocks —
                            {/* <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@knyttneve</a> */}
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;