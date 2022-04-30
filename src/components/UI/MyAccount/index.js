import {Link} from "react-router-dom";

const MyAccount = (props) => {
  return (
      <div>
        <h1 className='text-2xl mb-4 bg-gray-100 p-2 text-center'>{props.title}</h1>
          <div className='flex gap-p flex-col md:flex-row'>
              <div className='flex flex-col gap-2 md:w-1/5 md:pr-5 mb-5'>
                  <Link className={'bg-blue-400 p-2 text-white rounded ' + (props.activeTab === 'orders' ? ' bg-blue-600' : '')} to='/my-account/orders'>Orders</Link>
                  <Link className={'bg-blue-400 p-2 text-white rounded ' + (props.activeTab === 'wishlist' ? ' bg-blue-600' : '')} to='/my-account/wishlist'>Wishlist</Link>
                  <Link className='bg-blue-400 p-2 text-white rounded' to='/my-account/log-out'>Log Out</Link>
              </div>
              <div className='md:w-4/5'>
                  {props.children}
              </div>
          </div>

      </div>
  );
};
export default MyAccount;