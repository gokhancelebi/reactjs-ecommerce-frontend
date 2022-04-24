import Container from "../../UI/Container";
import Header from "../../UI/Header";
import ProductGrid from "../../UI/ProductGrid";
import ProductFilterSideBar from "../../UI/ProductFilterSideBar";
import Footer from "../../UI/Footer";

const Category = (props) => {

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


    return (
        <>
            <Container>
                <Header/>
                <h1 className='text-2xl'>
                   Services
                </h1>
                <div className='category flex flex-col md:flex-row justify-between'>
                    <ProductFilterSideBar className='w-full md:w-1/5'/>
                    <ProductGrid products={productList} className='w-4/5'/>
                </div>
            </Container>
            <Footer/>
        </>
    )
}

export default Category;