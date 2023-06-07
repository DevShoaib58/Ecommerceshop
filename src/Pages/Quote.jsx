
import { useEffect, useState } from "react";

const Quote = () => {
    const [quote, setQuote] = useState(null);
    const fetchUserData = () => {
        fetch("https://api.adviceslip.com/advice")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setQuote(data)
                console.log(data);
                console.log(data.slip);
            })
    }
    useEffect(() => {
        fetchUserData();
    }, [])
    return (
        <>
            {quote == null ? <div>loading...</div> :
                <section className="text-gray-600 body-font">
                    <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                        <div className="text-center lg:w-2/3 w-full">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Quote of the Day</h1>
                            <p className="mb-8 leading-relaxed">Advice Number :{quote.slip.id}</p>
                            <p className="mb-8 leading-relaxed">{quote == null ? 0 : quote.slip.advice}</p>
                            <div className="flex justify-center">
                                <button onClick={() => { fetchUserData() }} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">New Quote</button>
                            </div>
                        </div>
                    </div>
                </section>
            }

        </>
    );
};

export default Quote;