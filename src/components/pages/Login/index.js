import {useState, useEffect} from "react";
import Container from "../../UI/Container";
import Header from "../../UI/Header";
import Footer from "../../UI/Footer";
import Form from "../../UI/Form";

const LoginPage = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('loggedInInformation'));

    useEffect(() => {
        if (isLoggedIn === 'true'){
            window.location.href = '/';
        }
    }, [isLoggedIn]);

    const handleLogin = (e) => {
        e.preventDefault();
        setIsLoggedIn('true');
        localStorage.setItem('loggedInInformation', 'true');
    }

    return (
        <>
            {isLoggedIn === 'false' &&
                <div>
                    <Container className='gap-5 my-5'>
                        <Header/>
                        <Form onSubmit={handleLogin} className='max-w-4xl mx-auto'>
                            <input className='form-control' type="text" placeholder="Username"/>
                            <input className='form-control' type="password" placeholder="Password"/>
                            <button className='form-control'>Login</button>
                        </Form>
                    </Container>
                    <Footer/>
                </div>
            }
        </>
    );
};

export default LoginPage;