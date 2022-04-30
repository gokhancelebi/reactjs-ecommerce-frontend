import Container from "../../UI/Container";
import Header from "../../UI/Header";
import {useState} from "react";

import ShoppingCartLibrary from "../../../classes/ShoppingCartLibrary";

const ShoppingCart = (props) => {

    const [cartItems, setCartItems] = useState(ShoppingCartLibrary.getItems());

    const onDeleteButtonClickHandler = (e) => {
        ShoppingCartLibrary.removeItem(e.target.id);
        setCartItems(ShoppingCartLibrary.getItems());
    }

    return (
        <Container>
            <Header />
            <h1>Cart Page</h1>
            <div className='flex flex-row md:flex-col'>
                <div className='flex flex-col md:flex-row justify-between gap-10 md:gap-0'>
                    <div className='flex flex-row flex-wrap gap-5 w-full md:w-3/4'>
                        {
                            cartItems.map((item, index) => {
                                return (
                                    <div className='w-full p-2 bg-gray-300 w-full flex justify-between' key={index}>
                                        <div className='flex flex-row gap-5'>
                                            <img src={item.image} alt={item.name} className='max-w-[10rem]'/>
                                            <div>
                                                <h3>{item.name}</h3>
                                                <p>${item.price}</p>
                                            </div>
                                        </div>
                                        <div className='px-2 cursor-pointer h-5' id={item.id} onClick={onDeleteButtonClickHandler}>x</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='w-full md:w-1/4 md:pl-10 flex flex-col gap-5'>
                        <h2>Total: {ShoppingCartLibrary.getTotalPrice()}</h2>
                        <div>
                            <input type="checkbox" name='accept-rights'/> Accept the rights
                        </div>
                        <button className='border border-black p-2 w-full hover:bg-gray-300 hover:border-gray-300 rounded'>Buy</button>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default ShoppingCart;