import { useEffect, useState } from "react";
import Page404 from "./Page404";

const Gallery = () => {
    const [img, setImg] = useState("car")
    const [res, setRes] = useState([])
    const Key = import.meta.env.VITE_API_URL_UNSPLASH_API_KEY;
    const fetchAPI = async () => {
        await fetch(`https://api.unsplash.com/search/photos?page=1&query=${img}&client_id=${Key}`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setRes(data.results)
                console.log('res: ', res);
            })

    }
    useEffect(() => {
        fetchAPI();
        // setImg("");
    }, [])
    const Submit = () => {
        fetchAPI();
    }


    return (
        <>

            <section type="form" className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto ">
                    <div className="w-full">
                        <h1 className="sm:text-3xl text-center text-2xl font-medium title-font text-gray-900 mb-4">Gallery </h1>
                    </div>
                    <div className="flex w-full justify-center items-end mb-10">
                        <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                            <label className="leading-7 text-sm text-gray-600">Search Here</label>
                            <input value={img} onChange={(e) => setImg(e.target.value)} type="text" name="hero-field" className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <button type="submit" onClick={Submit} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Search</button>
                    </div>
                    {res === 0 ? <Page404 title="Seach Agein With Correct Word" /> :
                        <div className="flex flex-wrap md:-m-2 -m-1">
                            <div className="flex flex-wrap w-100">
                                {res.map((obj, id) => {
                                    return (
                                        <div key={id} className="md:p-2 p-1 w-1/2 mt-20">
                                            <img className="mb-10 w-full object-cover h-full object-center block" src={obj.urls.small} alt={obj.alt_description} />
                                            <a type="button" className="absolute px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" href={obj.urls.small} target="blanck" download={obj.urls.small}>Download</a>
                                            {/* <img className="w-full object-cover h-full object-center block" src="https://placehold.co/600x400" alt="val.alt_description" /> */}
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                    }
                </div>
            </section>

        </>
    );
};

export default Gallery;