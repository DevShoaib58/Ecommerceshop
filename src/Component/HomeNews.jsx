import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomeNews = () => {
    const [data, setData] = useState([])
    const fetchUserData = async () => {
        // fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=abf1d39c4cd5409c944176ef0b5c62da")
        await fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=abf1d39c4cd5409c944176ef0b5c62da")
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
                        {data.map((obj) => {
                            return (
                                <>
                                    <p key={obj}>{obj.title}</p>
                                </>
                            )
                        })}
                    </marquee>
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Leatest News</h1>
                    {data.length > 0 ?
                        <div className="flex flex-wrap -m-4">
                            {data.map((e) => {
                                return (
                                    <>
                                        <div key={e} className="p-4 md:w-1/3">
                                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={e.urlToImage !== null ? e.urlToImage : "https://placehold.co/600x400"} alt="blog" />
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
                        :
                        <div className="container m-auto flex items-center justify-center w-full h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                            <div role="status">
                                <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    }
                </div>
            </section>
        </div>
    );
};

export default HomeNews;