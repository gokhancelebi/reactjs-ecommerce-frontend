import Header from "../../UI/Header";
import Footer from "../../UI/Footer";
import Container from "../../UI/Container";
import ProductGrid from "../../UI/ProductGrid";

import {Swiper,SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import {useEffect} from "react";

const Home = (props) => {

    const productList = [
        {
            id: 1,
            name: "Product 1",
            price: "100",
            image: "https://via.placeholder.com/150"
        },
        {
            id: 2,
            name: "Product 2",
            price: "200",
            image: "https://via.placeholder.com/150"
        },
        {
            id: 3,
            name: "Product 3",
            price: "300",
            image: "https://via.placeholder.com/150"
        },
        {
            id: 4,
            name: "Product 4",
            price: "400",
            image: "https://via.placeholder.com/150"
        },
        {
            id: 5,
            name: "Product 5",
            price: "500",
            image: "https://via.placeholder.com/150"
        },
        {
            id: 6,
            name: "Product 6",
            price: "600",
            image: "https://via.placeholder.com/150"
        },
        {
            id: 7,
            name: "Product 7",
            price: "700",
            image: "https://via.placeholder.com/150"
        },
        {
            id: 8,
            name: "Product 8",
            price: "800",
            image: "https://via.placeholder.com/150"
        },
        {
            id: 9,
            name: "Product 9",
            price: "900",
            image: "https://via.placeholder.com/150"
        },
        {
            id: 10,
            name: "Product 10",
            price: "1000",
            image: "https://via.placeholder.com/150"
        },
        {
            id: 11,
            name: "Product 11",
            price: "1100",
            image: "https://via.placeholder.com/150"
        },
        {
            id: 12,
            name: "Product 12",
            price: "1200",
            image: "https://via.placeholder.com/150",
        }
    ];

    useEffect(() => {
        // add preload to head
        const preload = document.createElement("link");
        preload.rel = "preload";
        preload.href = "https://via.placeholder.com/1280x400";
        preload.as = "image";
        document.head.appendChild(preload);

    }, []);
    
    return (
        <>
            <Container>
                <Header/>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide><img src="https://via.placeholder.com/1280x400" alt="Big" className='w-full' /></SwiperSlide>
                </Swiper>
                <ProductGrid title='Latest' products={productList}  col='5' limit='5'/>
                <ProductGrid title='Featured' products={productList}  col='5' limit='5'/>
                <ProductGrid title='Offers' products={productList}  col='5' limit='5'/>
            </Container>
            <Footer/>
        </>
    )
}

export default Home