import Container from "../../UI/Container";
import Header from "../../UI/Header";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
// import {useEffect} from "react";

const ProductSingle = props => {



    return (
        <>
            <Container>
                <Header />
                <div className="flex justify-between">
                    <div className='w-full md:w-1/2'>
                        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                            <SwiperSlide><img src="https://via.placeholder.com/640x400" alt=""/></SwiperSlide>
                        </Swiper>
                    </div>
                    <div className='w-full md:w-1/2 md:pl-5'>
                        <div className="bg-gray-100 p-5 flex flex-col  gap-10">
                            <h1 className='text-2xl'>Product Single</h1>
                            <div className='flex gap-2'>
                                <div className="flex bg-gray-300 max-w-max">
                                    <div className='px-1 cursor-pointer flex justify-center items-center'>
                                        -
                                    </div>
                                    <div>
                                        <input type="text" className='max-w-[2rem] py-2' name='quantity'/>
                                    </div>
                                    <div className='px-1 cursor-pointer flex justify-center items-center'>
                                        +
                                    </div>
                                </div>
                                <button className='bg-orange-600 text-white p-2'>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col gap-10">
                        <div className="tab-titles">
                            <div className="tab-title active">Description</div>
                            <div className="tab-title" data-tab-id='reviews'>Reviews</div>
                        </div>
                        <div className="tab-contents">
                            <div className="tab-content active" id='description'>
                                Açıklama
                            </div>
                            <div className="tab-content" id='reviews'>
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