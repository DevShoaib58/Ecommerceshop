import { useEffect, useState } from "react";

const Gallery = () => {
    const [img, setImg] = useState("car")
    const [res, setRes] = useState([])

    const fetchAPI = () => {
        fetch(`https://api.unsplash.com/search/photos?page=1&query=${img}&client_id=eJrGowlILBc7vmgyiBxiazUp8aXES8G-pA3yuxGQpis`)
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
    }, [])
    const Submit = () => {
        fetchAPI();
        setImg("car");
    }
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto ">
                    <div className="w-full">
                        <h1 className="sm:text-3xl text-center text-2xl font-medium title-font text-gray-900 mb-4">Gallery </h1>
                    </div>
                    <div className="flex w-full justify-center items-end mb-10">
                        <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                            <label className="leading-7 text-sm text-gray-600">Search Here</label>
                            <input value={img} onChange={(e) => setImg(e.target.value)} type="text" name="hero-field" className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <button onClick={Submit} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                    </div>
                    <div className="flex flex-wrap md:-m-2 -m-1">
                        <div className="flex flex-wrap w-100">
                            {res.map((obj) => {
                                return (
                                    <div key={obj.id} className="md:p-2 p-1 w-1/2">
                                        <img className="w-full object-cover h-full object-center block" src={obj.urls.small} alt="obj.alt_description" />
                                        {/* <img className="w-full object-cover h-full object-center block" src="https://placehold.co/600x400" alt="val.alt_description" /> */}
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Gallery;