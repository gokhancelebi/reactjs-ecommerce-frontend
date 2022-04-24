import Header from "../../UI/Header";
import Container from "../../UI/Container";

const NotFound = (props) => {

    return (
        <div className="not-found">
            <Container className=''>
                <Header />
                <div className='text-center'>
                    <h1>404</h1>
                    <h2>Page not found</h2>
                </div>
            </Container>
        </div>
    )
}

export default NotFound;