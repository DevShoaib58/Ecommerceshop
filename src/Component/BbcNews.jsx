import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BbcNews = () => {
    const [data, setData] = useState([])
    const fetchUserData = () => {
        // fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=abf1d39c4cd5409c944176ef0b5c62da")
        fetch("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=abf1d39c4cd5409c944176ef0b5c62da")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setData(data.articles)
                // console.log('data: ', data);
            })
    }

    useEffect(() => {
        fetchUserData()
    }, [])
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <marquee width="100%" direction="left" height="100px">
                        {data.map((obj, index) => {
                            return (
                                <>
                                    <p className="" key={index}>{obj.title}</p>
                                </>
                            )
                        })}
                    </marquee>
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">BBC News</h1>
                    <div className="flex flex-wrap -m-4">
                        {data.map((e, index) => {
                            return (
                                <>
                                    <div className="p-4 md:w-1/3">
                                        <div key={index} className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                            <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={e.urlToImage !== null ? e.urlToImage : "https://via.placeholder.com/400"} alt="blog" />
                                            <div className="p-6">
                                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{e.source.name}</h2>
                                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{e.title}</h1>
                                                <p className="leading-relaxed mb-3">{e.description}</p>
                                                <div className="flex items-center flex-wrap ">
                                                    <Link target="blank" to={e.url} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More</Link>
                                                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                            <circle cx="12" cy="12" r="3"></circle>
                                                        </svg>1.2K
                                                    </span>
                                                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                        </svg>6
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>)
                        })}

                    </div>
                </div>
            </section>
        </div>
    );
};

export default BbcNews;