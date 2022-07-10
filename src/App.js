import {Route, Routes} from "react-router-dom";
import React, {useEffect} from "react";

// import with lazyloading
const Home = React.lazy(() => import("./components/pages/Home"));
const LoginPage = React.lazy(() => import("./components/pages/Login"));
const CategoryPage = React.lazy(() => import("./components/pages/Category"));
const NotFound = React.lazy(() => import("./components/pages/NotFound"));
const ProductSingle = React.lazy(() => import("./components/pages/ProductSingle"));
const Orders = React.lazy(() => import("./components/pages/Orders"));
const WishList = React.lazy(() => import("./components/pages/WishList"));
const ShoppingCart = React.lazy(() => import("./components/pages/ShoppingCart"));
const Contact = React.lazy(() => import("./components/pages/Contact"));


const App = () => {

    useEffect(() => {
        if (!localStorage.getItem('loggedInInformation')) {
            localStorage.setItem('loggedInInformation', 'false');
        }
        document.title = "DEMO COMMERCE"

    }, []);

    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/c/:slug/:categoryId' element={<CategoryPage/>}/>
            <Route path='/p/:id' element={<ProductSingle/>}/>
            <Route path='/my-account/orders' element={<Orders/>}/>
            <Route path='/my-account/wishlist' element={<WishList/>}/>
            <Route path='/cart' element={<ShoppingCart/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/*' element={<NotFound/>}/>
        </Routes>
    );
};

export default App;