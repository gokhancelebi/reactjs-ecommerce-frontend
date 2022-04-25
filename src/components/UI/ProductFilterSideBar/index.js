const ProductFilterSideBar = props => {

    let classNames = 'flex flex-col md:pr-4 pb-26';

    if (props.className) {
        classNames += ` ${props.className}`;
    }

    return (
        <div className={classNames}>
            <div className='mb-4 p-2 pb-4 border-b border-b-gray-500 bg-gray-200'>
                <h3 className='pb-3'>Platforms</h3>
                <ul className='pb-3'>
                    <li>
                        <input type="checkbox" id="checkbox2" name="checkbox2"/> Laravel
                    </li>
                    <li>
                        <input type="checkbox" id="checkbox1" name="checkbox1"/> Wordpress
                    </li>
                    <li>
                        <input type="checkbox" id="checkbox2" name="checkbox2"/> Opencart
                    </li>
                </ul>
            </div>


            <div className='mb-4 p-2 pb-4 border-b border-b-gray-500 bg-gray-200'>
                <h3 className='pb-3'>Platforms</h3>
                <ul className='pb-3'>
                    <li>
                        <input type="checkbox" id="checkbox2" name="checkbox2"/> Laravel
                    </li>
                    <li>
                        <input type="checkbox" id="checkbox1" name="checkbox1"/> Wordpress
                    </li>
                    <li>
                        <input type="checkbox" id="checkbox2" name="checkbox2"/> Opencart
                    </li>
                </ul>
            </div>



            <div className='mb-4 p-2 pb-4 border-b border-b-gray-500 bg-gray-200'>
                <h3 className='pb-3'>Platforms</h3>
                <ul className='pb-3'>
                    <li>
                        <input type="checkbox" id="checkbox2" name="checkbox2"/> Laravel
                    </li>
                    <li>
                        <input type="checkbox" id="checkbox1" name="checkbox1"/> Wordpress
                    </li>
                    <li>
                        <input type="checkbox" id="checkbox2" name="checkbox2"/> Opencart
                    </li>
                </ul>
            </div>



            <div className='mb-4 p-2 pb-4 border-b border-b-gray-500 bg-gray-200'>
                <h3 className='pb-3'>Platforms</h3>
                <ul className='pb-3'>
                    <li>
                        <input type="checkbox" id="checkbox2" name="checkbox2"/> Laravel
                    </li>
                    <li>
                        <input type="checkbox" id="checkbox1" name="checkbox1"/> Wordpress
                    </li>
                    <li>
                        <input type="checkbox" id="checkbox2" name="checkbox2"/> Opencart
                    </li>
                </ul>
            </div>

            <div className='mb-4 p-2 pb-4 border-b border-b-gray-500 bg-gray-200'>
                <h3 className='pb-3'>Platforms</h3>
                <ul className='pb-3'>
                    <li>
                        <input type="checkbox" id="checkbox2" name="checkbox2"/> Laravel
                    </li>
                    <li>
                        <input type="checkbox" id="checkbox1" name="checkbox1"/> Wordpress
                    </li>
                    <li>
                        <input type="checkbox" id="checkbox2" name="checkbox2"/> Opencart
                    </li>
                </ul>
            </div>

            <div className='mb-4 p-2 pb-4 border-b border-b-gray-500 bg-gray-200'>
                <h3 className='pb-3'>Platforms</h3>
                <ul className='pb-3'>
                    <li>
                        <input type="checkbox" id="checkbox2" name="checkbox2"/> Laravel
                    </li>
                    <li>
                        <input type="checkbox" id="checkbox1" name="checkbox1"/> Wordpress
                    </li>
                    <li>
                        <input type="checkbox" id="checkbox2" name="checkbox2"/> Opencart
                    </li>
                </ul>
            </div>

            <div className='mt-4 sticky bg-white p-2 border border-gray-200'>
                <button className='w-full bg-blue-500 text-white hover:border-black hover:text-white p-2'>Search</button>
            </div>

        </div>
    )
}

export default ProductFilterSideBar;