import {useState} from "react";

const ProductGrid = (props) => {

    return (
        <div className='grid gap-10 grid-cols-4'>
            {
                props.products.map((product, index) => {
                    return (
                        <div key={index}>
                            <div className="w-full">
                                <img loading='lazy' src={product.image} alt={product.name} className='w-full'/>
                            </div>
                            <div className="w-full text-center">
                                {product.name}
                            </div>
                            <div className="w-full text-center">
                                ${product.price}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductGrid;