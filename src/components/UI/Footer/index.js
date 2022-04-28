import Container from '../../UI/Container';

const Footer = props => {

    return (
        <div className='bg-gray-800 text-white py-5'>
            <Container>
                <div className='flex flex-col md:flex-row'  gap-2>
                    <div className='flex flex-col gap-2'>
                        <h3>About</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptatum, quisquam.
                        </p>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <h3>About</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptatum, quisquam.
                        </p>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <h3>About</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptatum, quisquam.
                        </p>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <h3>About</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptatum, quisquam.
                        </p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3>About</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptatum, quisquam.
                        </p>
                    </div>
                </div>
                <div>
                    &copy; Copyright {new Date().getFullYear()} DEMO<b>COMMERCE</b>
                </div>
            </Container>
        </div>
    )
}

export default Footer;