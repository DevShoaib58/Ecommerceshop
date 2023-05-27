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
        // console.log(users);
    }, [])
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">

                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">User Profile</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon </p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 lg:w-1/4 md:w-1/2">
                            <div style={{ background: block.gender == "male" ? 'blue' : 'pink' }}>
                                <img src={block.picture.large}></img>
                                {block.gender}
                                {block.name.title}
                                {block.name.first}
                                {block.cell}
                            </div>
                            <button onClick={() => { fetchUserData() }} className="mt-5 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
                        </div>

                    </div>
                </div>

            </section>
        </div>
    );
};

export default UserProfile;