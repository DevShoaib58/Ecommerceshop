import axios from "axios";
import { useEffect, useState } from "react";

const Post = () => {
    // we will Store the object in this useState
    const [post, setPost] = useState({})
    // this will initialise the first value 
    const [id, setId] = useState(1)
    useEffect(() => {
        axios
            // this will Add Dynamic Id every time You change the value
            .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                // console.log("data", res);
                setPost(res.data)
                // console.log('res.data: ', res.data);
            })
        // [id] is a dependance array which will render the commpnent onChange of the value in search Field
    }, [id])
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex w-full md:justify-start justify-center items-end m-9">
                    <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
                        <input type="text" value={id} onChange={(e) => setId(e.target.value)} id="hero-field" name="hero-field" className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                </div>
                <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">


                    <p className="leading-relaxed text-lg">Post Id : {post.id}</p>
                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">{post.title}</h2>
                    <p className="leading-relaxed text-lg">{post.body}</p>
                    <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
                    <p className="text-gray-500"></p>


                </div>
            </div>
        </section >
    );
};

/*
In this Section First Add API Link in axios using ${id}
*/

export default Post;