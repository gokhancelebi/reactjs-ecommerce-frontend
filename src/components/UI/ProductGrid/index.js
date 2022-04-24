import {Link} from "react-router-dom";

const ProductGrid = (props) => {

    let col = "md:grid-cols-4";

    if (props.col === "4") {
        col = "md:grid-cols-4";
    }

    if (props.col === "5") {
        col = "md:grid-cols-5";
    }

    let classNames = 'productgrid grid gap-10 grid-cols-1 sm:grid-cols-2 ' + col + ' w-full';

    if (props.className) {
        classNames += ' ' + props.className;
    }

    let title = false;

    if (props.title) {
        title = props.title;
    }

    return (
        <>
            {title && <h2 className="text-left text-2xl font-bold mb-4">{title}</h2>}
            <div className={classNames}>
                {
                    props.products.map((product, index) => {
                        if (props.limit && index >= props.limit) {
                            return false;
                        }
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
        </>

    )
}

export default ProductGrid;