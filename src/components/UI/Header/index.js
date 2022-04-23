import myAccountIcon from './../../../img/my-account.png';
import shoppigBagIcon from './../../../img/shopping-bag.png';
import wishListIcon from './../../../img/wishlist.png';
import {Link} from 'react-router-dom';


const Header = (props) => {

    return (
        <div className='flex flex-col gap-5'>
            <div className="flex justify-between items-center">
                <div className="header__logo">
                    <h1>CODE<b>RATIO</b></h1>
                </div>
                <div className="header__menu flex gap-5 justify-center items-center">
                    <div className="search-bar">
                        <input type="text" placeholder="Search"  className='border border-1 border-black p-0.5'/>
                        <button>
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                    <div className="header__menu-items">
                        <ul className='flex gap-5'>
                            <li>
                                <Link to="/login">
                                    <img src={myAccountIcon} alt=""/>
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <img src={wishListIcon} alt=""/>
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <img src={shoppigBagIcon} alt=""/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="header__navigation">
                <ul className="flex gap-10 justify-start p-2 px-4 bg-black text-white">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/c/products">Products</Link>
                    </li>
                    <li>
                        <Link to="/c/services">Services</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;