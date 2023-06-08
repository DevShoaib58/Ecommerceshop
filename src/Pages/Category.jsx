import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Category = () => {
    const [cat, setCat] = useState([])
    const fetchData = async () => {
        const response = await fetch("https://fakestoreapi.com/products/categories")
        if (!response.ok) {
            throw new Error('Data coud not be fetched!')
        } else {
            return response.json()
        }
    }
    useEffect(() => {
        fetchData()
            .then((res) => {
                setCat(res)
                // console.log('res: ', res);
            })
            .catch((e) => {
                console.log(e.message)
            })
    }, [])
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">All Category</h2>
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Master Cleanse Reliac Heirloom</h1>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {cat.map((obj) => {
                            return (
                                <>
                                    <div key={obj} className="p-4 md:w-1/3">
                                        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                            <div className="flex items-center mb-3">
                                                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                                    <svg fill="none" stroke="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                                    </svg>
                                                </div>
                                                <h2 className="text-gray-900 text-lg title-font font-medium uppercase">{obj}</h2>
                                            </div>
                                            <div className="flex-grow">
                                                <Link to={`/category/${obj}`} className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                                    <svg fill="none" stroke="currentColor" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                </>
                            )
                        })}
                    </div >
                </div>
            </section>
        </div>
    );
};

export default Category;