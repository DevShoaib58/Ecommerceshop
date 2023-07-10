import { useState } from "react";

const Todo = () => {
    const [inputdata, setInputData] = useState("")
    const [data, setData] = useState([])

    const change = () => {
        setData([...data, inputdata])
        setInputData("")
    }
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Todo List </h1>
                    </div>
                    <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                        <div className="relative flex-grow w-full">
                            <label className="leading-7 text-sm text-gray-600">Todo</label>
                            <input value={inputdata} onChange={(e) => setInputData(e.target.value)} type="text" id="full-name" name="full-name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            {console.log('inputdata: ', inputdata)}
                        </div>
                        <button onClick={change} className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Add</button>
                    </div>
                    <div className="flex flex-col text-center w-full mb-12">
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base mt-10">{data.map((e) => {
                            return (
                                <>
                                    <li>{e}</li>
                                </>
                            )
                        })}</p>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Todo;