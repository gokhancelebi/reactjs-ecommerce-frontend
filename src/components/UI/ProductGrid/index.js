import {Link} from "react-router-dom";

const ProductGrid = (props) => {

    let classNames = 'grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full';

    if (props.className) {
        classNames += ' ' + props.className;
    }

    return (
        <div className={classNames}>
            {
                props.products.map((product, index) => {
                    return (
                        <div key={index}>
                            <Link to={'/p/' + product.id}>
                                <div className="w-full">
                                    <img loading='lazy' src={product.image} alt={product.name} className='w-full'/>
                                </div>
                                <div className="w-full text-center">
                                    {product.name}
                                </div>
                                <div className="w-full text-center">
                                    ${product.price}
                                </div>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductGrid;