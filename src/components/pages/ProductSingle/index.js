import Container from "../../UI/Container";
import Header from "../../UI/Header";

import {useState, useEffect} from "react";

// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import {Navigation} from "swiper";


const ProductSingle = props => {
    const [activeTab, setActiveTab] = useState(0);
    const [tabCoun] = useState(2);
    const [tabClasses, setTabClasses] = useState([]);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        makeTabsHidden();
    }, [activeTab]);


    const makeTabsHidden  = () => {
        let newTabs = [];
        for (let i = 0; i < tabCoun; i++) {
            newTabs.push('hidden');
        }
        newTabs[activeTab] = 'block';
        setTabClasses(newTabs);
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const quantityChangeHandler = (e) => {
        setQuantity(parseInt(e.target.value));
    };

    return (
        <>
            <Container>
                <Header/>
                <div className="flex justify-between">
                    <div className='w-full md:w-1/2'>
                        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                            <SwiperSlide><img src="https://via.placeholder.com/640x400" alt=""/></SwiperSlide>
                        </Swiper>
                    </div>
                    <div className='w-full md:w-1/2 md:pl-5 flex flex-col gap-5'>
                        <div className="bg-gray-100 p-5 flex flex-col  gap-10">
                            <h1 className='text-2xl'>Product Single</h1>
                            <div className='flex gap-2'>
                                <div className="flex bg-gray-300 max-w-max">
                                    <div className='px-1 cursor-pointer flex justify-center items-center' onClick={decreaseQuantity}>
                                        -
                                    </div>
                                    <div>
                                        <input type="number" className='max-w-[3rem] py-2 text-center' name='quantity' value={quantity}  min={1}  onChange={quantityChangeHandler}/>
                                    </div>
                                    <div className='px-1 cursor-pointer flex justify-center items-center' onClick={increaseQuantity}>
                                        +
                                    </div>
                                </div>
                                <button className='bg-orange-600 text-white p-2'>Add To Cart</button>
                            </div>
                        </div>
                        <div className="bg-gray-100 p-5 flex flex-col  gap-10">
                            lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, doloremque, eaque, eius, eveniet, impedit ipsam ipsum laboriosam molestiae nam natus neque nisi nostrum obcaecati omnis quae quam quas quia quisquam quod ratione repellendus repudiandae sint sit tempore voluptate voluptates.
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex md:flex-col gap-10">
                        <div className="tab-titles flex gap-2">
                            <div className="tab-title cursor-pointer border border-black p-2" onClick={() => setActiveTab(0)}>Description</div>
                            <div className="tab-title cursor-pointer border border-black p-2" onClick={() => setActiveTab(1)}>Reviews</div>
                        </div>
                        <div className="tab-contents border border-black p-2">
                            <div className={tabClasses[0]}>
                                <h2 className='text-2xl'>
                                    Description
                                </h2>
                                <div>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, doloremque, ea,
                                </div>
                            </div>
                            <div className={tabClasses[1]}>
                                Reviews
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
export default ProductSingle;