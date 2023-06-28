import { useEffect, useState } from "react";

const UserProfile = () => {
    const [block, setBlock] = useState('')

    const fetchUserData = () => {
        fetch("https://randomuser.me/api/")
            .then(response => {
                return response.json()
            })
            .then(res => {
                // console.log('data.results: ', res.results);
                setBlock(res.results[0])
            })
    }
    useEffect(() => {
        fetchUserData()
        // console.log(block);
    }, [])
    return (
        <div>
            {block &&
                <section style={{ background: block.gender == "male" ? 'blue' : 'pink', width: "500px" }} className="mx-auto text-gray-600 body-font m-4">
                    <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                        <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={block.picture.large} />
                        <div className="text-center lg:w-2/3 w-full">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Gender : {block.gender}</h1>
                            <p className="mb-4 leading-relaxed text-white">Title : {block.name.title}</p>
                            <p className="mb-4 leading-relaxed text-white"> {block.cell}</p>
                            <div className="flex justify-center">
                                <button onClick={() => { fetchUserData() }} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Refresh</button>

                            </div>
                        </div>
                    </div>
                </section>
            }
        </div>
    );
};

export default UserProfile;