import Container from "../../UI/Container";
import Header from "../../UI/Header";
import MyAccount from "../../UI/MyAccount";
import Footer from "../../UI/Footer";
import Pagination from "../../UI/Pagination";
const Orders = (props) => {
    const orders = [
        {
            id: 1,
            date: "12/12/2019",
            total: "12.00",
            status: "Pending",
            items: [
                {
                    id: 1,
                    name: "Item 1",
                    price: "12.00",
                    quantity: 1,
                },
                {
                    id: 2,
                    name: "Item 2",
                    price: "12.00",
                    quantity: 1,
                },
            ],
        },
        {
            id: 2,
            date: "12/12/2019",
            total: "12.00",
            status: "Pending",
            items: [
                {
                    id: 1,
                    name: "Item 1",
                    price: "12.00",
                    quantity: 1,
                },
                {
                    id: 2,
                    name: "Item 2",
                    price: "12.00",
                    quantity: 1,
                },
            ],
        },
        {
            id: 3,
            date: "12/12/2019",
            total: "12.00",
            status: "Pending",
            items: [
                {
                    id: 1,
                    name: "Item 1",
                    price: "12.00",
                    quantity: 1,
                },
                {
                    id: 2,
                    name: "Item 2",
                    price: "12.00",
                    quantity: 1,
                },
            ],
        }
    ]
    const onPageChangeHandler = (page) => {
        console.log(page);
    }
    return (
        <>

            <Container>
                <Header/>
                <MyAccount title='Orders' activeTab='orders'>
                    <div className='flex flex-col gap-2'>
                        {orders.map(order => (
                            <div key={order.id} className='border border-black p-5'>
                                <h2>Order #{order.id}</h2>
                                <div className='my-4'>
                                    <ul className='flex flex-col gap-4'>
                                        {order.items.map(item => (
                                            <li key={item.id} className='flex flex-col gap-4 bg-blue-50 p-2 '>
                                                <div>{item.name}</div>
                                                <div className='flex gap-5'>
                                                    <div>Price: {item.price}</div>
                                                    <div>Quantity: {item.quantity}</div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className='flex gap-10 justify-between flex-col md:flex-row'>
                                    <div className='flex gap-10'>
                                        <p>Date: {order.date}</p>
                                        <p>Total: {order.total}</p>
                                        <p>Status: {order.status}</p>
                                    </div>
                                    <div>
                                        <button className='bg-blue-500 text-white p-2 rounded'>Download</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Pagination currentPage={1} totalPages='5' onPageChange={onPageChangeHandler}/>
                </MyAccount>
            </Container>
            <Footer/>
        </>

    )
}

export default Orders;