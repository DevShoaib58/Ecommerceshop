import { useEffect, useState } from "react";

const UserProfile = () => {
    const [block, setBlock] = useState({ gender: "male", name: { title: "Mr", first: "no name", last: "no name" }, cell: "987789879879", picture: { large: "https://static.vecteezy.com/system/resources/thumbnails/006/487/917/small/man-avatar-icon-free-vector.jpg" } })

    const fetchUserData = () => {
        fetch("https://randomuser.me/api/")
            .then(response => {
                return response.json()
            })
            .then(res => {
                console.log('data.results: ', res.results);
                setBlock(res.results[0])
            })
    }
    useEffect(() => {
        fetchUserData()
        // console.log(block);
    }, [])
    return (
        <div>
            <section style={{ background: block.gender == "male" ? 'blue' : 'pink' }} className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={block.picture.large} />
                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Gender : {block.gender}</h1>
                        <p className="mb-4 leading-relaxed text-white">Title : {block.name.title}</p>
                        <p className="mb-4 leading-relaxed text-white"> {block.cell}</p>
                        <div className="flex justify-center">
                            <button onClick={() => { fetchUserData() }} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>

                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default UserProfile;