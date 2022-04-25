import Header from "../../UI/Header";
import Container from "../../UI/Container";
import {useEffect} from "react";

const NotFound = (props) => {
    // add noindex meta tag to page

    useEffect(() => {

        var meta = document.createElement('meta');
        meta.name = "robots";
        meta.content = "noindex";
        document.getElementsByTagName('head')[0].appendChild(meta);

    }, []);


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