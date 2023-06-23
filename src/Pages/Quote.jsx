import { useEffect, useState } from "react";

const Quote = () => {
    const [quote, setQuote] = useState('')

    const fetchUserData = async () => {
        await fetch("https://api.adviceslip.com/advice")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setQuote(data.slip)
                console.log('data: ', data);
            })
    }
    const { id, advice } = quote;

    useEffect(() => {
        fetchUserData()
    }, [])
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-center mb-10 text-gray-900">Quote</h1>
                    <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                        <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">{id}</h1>
                        <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">{advice}</h1>
                        <button onClick={() => { fetchUserData() }} className="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">New Advice</button>
                    </div>
                </div>
            </section></>
    );
};

export default Quote;