
import { Fragment } from "react";
import { Link } from "react-router-dom";

const Products = (products) => {


    // const id = products
    return (
        <div>
            <h2 className="text-6xl text-center font-bold mt-10">Products</h2>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {products.products.map((e) => {
                            return (
                                <Fragment key={e.id}>
                                    <Link to={`/product/${e.id}`} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                        <div className="block relative h-48 rounded overflow-hidden">
                                            <img alt="ecommerce" className="object-contain object-center w-full h-full block" src={e.image} />
                                        </div>
                                        <div className="mt-4">
                                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">{e.category}</h3>
                                            <h2 className="text-gray-900 title-font text-lg font-medium">{e.title}</h2>
                                            <p className="mt-1">${e.price}</p>
                                        </div>
                                    </Link>
                                </Fragment>
                            )
                        })}


                    </div>
                </div>
            </section>
        </div>
    );
};

export default Products;