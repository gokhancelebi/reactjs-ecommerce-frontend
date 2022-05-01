import Container from "../../UI/Container";
import Header from "../../UI/Header";
import {useState} from "react";

import ShoppingCartLibrary from "../../../classes/ShoppingCartLibrary";

const ShoppingCart = (props) => {

    const [cartItems, setCartItems] = useState(ShoppingCartLibrary.getItems());
    const [activeTab, setActiveTab] = useState('cart');
    const onDeleteButtonClickHandler = (e) => {
        ShoppingCartLibrary.removeItem(e.target.id);
        setCartItems(ShoppingCartLibrary.getItems());
    }

    const decreaseQuantity = (e) => {
        let item = ShoppingCartLibrary.getItem(e.target.id);
        if (item.quantity > 1) {
            item.quantity = item.quantity - 1;
            ShoppingCartLibrary.updateItemQuantity(item.id, item.quantity);
            setCartItems(ShoppingCartLibrary.getItems());
        }
    }

    const increaseQuantity = (e) => {
        let item = ShoppingCartLibrary.getItem(e.target.id);
        item.quantity = item.quantity + 1;
        ShoppingCartLibrary.updateItemQuantity(item.id, item.quantity);
        setCartItems(ShoppingCartLibrary.getItems());
    }

    const quantityChangeHandler = (e) => {
        let item = ShoppingCartLibrary.getItem(e.target.id);
        item.quantity = e.target.value;
        ShoppingCartLibrary.updateItemQuantity(item.id, item.quantity);
        setCartItems(ShoppingCartLibrary.getItems());
    }

    return (
        <Container>
            <Header/>
            <div className=''>
                {activeTab === 'cart' && <div className='flex gap-2 items-center'><h1
                    className='cursor-pointer border border-black p-2 rounded'>Cart Page</h1> <h1 onClick={() => {
                    setActiveTab('address')
                }} className='cursor-pointer'>Addresses Page</h1></div>}
                {activeTab === 'address' && <div className='flex gap-2 items-center'><h1 onClick={() => {
                    setActiveTab('cart')
                }} className='cursor-pointer'>Cart Page</h1> <h1
                    className='border border-black p-2 rounded cursor-pointer'>Addresses Page</h1></div>}
            </div>

            <div className='flex flex-row md:flex-col'>
                    <div className='flex flex-col md:flex-row justify-between gap-10 md:gap-0'>

                        {activeTab === 'cart' &&
                        <div className='flex flex-row flex-wrap gap-5 w-full md:w-3/4'>
                            {
                                cartItems.map((item, index) => {
                                    return (
                                        <div className='w-full p-2 bg-gray-300 w-full flex justify-between' key={index}>
                                            <div className='flex flex-row gap-5'>
                                                <img src={item.image} alt={item.name} className='max-w-[10rem]'/>
                                                <div className='flex gap-5 flex-col'>
                                                    <h3>{item.name}</h3>
                                                    <p>${item.price + 'x' + item.quantity +  ' = $' + (item.price * item.quantity)}</p>
                                                    <div className="flex bg-gray-300">
                                                        <div
                                                            className='px-1 cursor-pointer flex justify-center items-center bg-gray-500 text-white'
                                                            id={item.id}
                                                            onClick={decreaseQuantity}>
                                                            -
                                                        </div>
                                                        <div>
                                                            <input type="number" className='max-w-[3rem] py-2 text-center '
                                                                   name='quantity'
                                                                   value={item.quantity} min={1} id={item.id}
                                                                   onChange={quantityChangeHandler}/>
                                                        </div>
                                                        <div
                                                            className='px-1 cursor-pointer flex justify-center items-center  bg-gray-500 text-white'
                                                            id={item.id}
                                                            onClick={increaseQuantity}>
                                                            +
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className='px-2 cursor-pointer h-5' id={item.id}
                                                 onClick={onDeleteButtonClickHandler}>x
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        }
                        {
                            activeTab === 'address' && <div>
                                <div className="flex flex-col md:flex-row gap-5">
                                    <div className='flex gap-5 flex-col border border-black p-2 max-w-[20rem] cursor-pointer'>
                                        <h2>Mugla/Turkey (selected) </h2>
                                        <p>
                                            Mugla/ Turkey
                                            Mugla/ Turkey
                                            Mugla/ Turkey
                                            Mugla/ Turkey
                                            Mugla/ Turkey
                                        </p>
                                    </div>
                                    <div className='flex gap-5 flex-col border border-black p-2 max-w-[20rem] cursor-pointer'>
                                        <h2>Mugla/Turkey (selected) </h2>
                                        <p>
                                            Mugla/ Turkey
                                            Mugla/ Turkey
                                            Mugla/ Turkey
                                            Mugla/ Turkey
                                            Mugla/ Turkey
                                        </p>
                                    </div>
                                </div>
                            </div>
                        }
                        <div className='w-full md:w-1/4 md:pl-10 flex flex-col gap-5'>
                            <h2>Total: {ShoppingCartLibrary.getTotalPrice()}</h2>
                            <div>
                                <input type="checkbox" name='accept-rights'/> Accept the rights
                            </div>
                            <button
                                className='border border-black p-2 w-full hover:bg-gray-300 hover:border-gray-300 rounded'>Buy
                            </button>
                        </div>
                    </div>
                </div>



        </Container>
    );
}

export default ShoppingCart;