import myAccountIcon from './../../../img/my-account.png';
import shoppigBagIcon from './../../../img/shopping-bag.png';
import wishListIcon from './../../../img/wishlist.png';
import searchIcon from './../../../img/search.png';
import {Link} from 'react-router-dom';

import {useState} from "react";

const Header = (props) => {

    const isLoggedInInformation = localStorage.getItem('loggedInInformation');

    let myAccountLink = '/login?redirect_to=/my-account/orders';

    if (isLoggedInInformation === 'true'){
        myAccountLink = '/my-account/orders';
    }

    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchInputClasses, setSearchInputClasses] = useState('hidden md:block');


    const onClickSearchBar = (e) => {

        if (isSearchOpen === false){
            setSearchInputClasses('block md:hidden');
            setIsSearchOpen(true);
        } else {
            setSearchInputClasses('hidden md:block');
            setIsSearchOpen(false);
        }
    }

    return (
        <div className='flex flex-col gap-5'>
            <div className="flex justify-between">
                <div></div>
                <div className="flex">
                    <Link to={myAccountLink}>
                        Orders
                    </Link>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-5 md:gap-0">
                <div className="header__logo">
                    <h1>DEMO<b>COMMERCE</b></h1>
                </div>
                <div className="header__menu flex flex-col md:flex-row justify-center md:justify-between gap-5 items-center">
                    <div className={searchInputClasses}>
                        <input type="text" placeholder="Search"  className='border border-1 border-black p-0.5 px-2'/>
                    </div>
                    <div className="header__menu-items">
                        <ul className='flex gap-5'>
                            <li className='md:hidden'>
                                <img src={searchIcon} alt="" style={{maxWidth:'20px'}} onClick={onClickSearchBar}/>
                            </li>
                            <li>
                                <Link to={myAccountLink}>
                                    <img src={myAccountIcon} alt=""/>
                                </Link>
                            </li>
                            <li>
                                <Link to="/my-account/wishlist">
                                    <img src={wishListIcon} alt=""/>
                                </Link>
                            </li>
                            <li>
                                <Link to="/cart">
                                    <img src={shoppigBagIcon} alt=""/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="header__navigation">
                <ul className="flex gap-10 justify-start p-2 px-4 bg-black text-white overflow-hidden scroll-auto">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/c/products/1">Products</Link>
                    </li>
                    {/*<li>*/}
                    {/*    <Link to="/c/services/2">Services</Link>*/}
                    {/*</li>*/}
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;