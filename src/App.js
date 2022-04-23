import {Route,Routes} from "react-router-dom";
import React, {useEffect} from "react";

const Home = React.lazy(() => import('./components/pages/Home'));
const LoginPage = React.lazy(() => import('./components/pages/Login'));

const App = () => {

    useEffect(() => {
        if (!localStorage.getItem('loggedInInformation')) {
            localStorage.setItem('loggedInInformation', 'false');
        }
    }, []);

  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
  );
};

export default App;