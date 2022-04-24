const ProductFilterSideBar = props => {

    let classNames = 'flex flex-col md:pr-4';

    if (props.className) {
        classNames += ` ${props.className}`;
    }

    return (
        <div className={classNames}>
            <div className='mb-4 pb-4 border-b border-b-gray-500'>
                <h3 className='pb-3'>Categories</h3>
                <ul>
                    <li>
                        <input type="checkbox" id="checkbox1" name="checkbox1"/> Products
                    </li>
                    <li>
                        <input type="checkbox" id="checkbox2" name="checkbox2"/> Services
                    </li>
                </ul>
            </div>


            <div className='mb-4 pb-4 border-b border-b-gray-500'>
                <h3 className='pb-3'>Platforms</h3>
                <ul>
                    <li>
                        <input type="checkbox" id="checkbox1" name="checkbox1"/> Wordpress
                    </li>
                    <li>
                        <input type="checkbox" id="checkbox2" name="checkbox2"/> Opencart
                    </li>
                </ul>
            </div>

            <div className='mb-4 pb-4 border-b border-b-gray-500'>
                <h3 className='pb-3'>Languages</h3>
                <ul>
                    <li>
                        <input type="checkbox" id="checkbox1" name="checkbox1"/> English
                    </li>
                    <li>
                        <input type="checkbox" id="checkbox2" name="checkbox2"/> Spanish
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default ProductFilterSideBar;