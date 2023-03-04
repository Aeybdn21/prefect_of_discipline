import MainLayout from '@/src/Layouts/MainLayout';
import { Actions } from '@/src/redux/Actions';
import store from '@/src/redux/store';
import React from 'react' 
import { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { Link, BrowserRouter, Routes, Route} from "react-router-dom"; 
import Home from '../Home';
import StudentRecord from '../StudentRecord';
 

function App({appToken, information, case_parties }) {
  const states = useSelector((initState) => initState);
  const dispatch = useDispatch();

  useEffect(() => {
    userInformations();  
  },[])

  const userInformations = () => { 
    dispatch({type: Actions.USER_TOKEN, token: appToken});
    dispatch({type: Actions.USER_INFO_SUCCESS, data: information})
    dispatch({type: Actions.CASE_PARTIES, data: case_parties}); 
  }



  return (
    <MainLayout>   
      <Routes>
        <Route path="/page" element={<Home/>}/>
        <Route path="/page/home" element={<Home/>}/>
        <Route path="/page/student_record" element={<StudentRecord/>}/>
        <Route path="*" element={<NoMatch/>}/>
      </Routes>
    </MainLayout>
  )
}

function NoMatch() {
  return (
    <section className="home-section mx-3 bg-light rounded shadow">
          <div className="text">
      <h2>It looks like you're lost...</h2> 
      <p>
        <Link to="/page/home">Go to the home page</Link>
      </p>
    </div>
    </section>
  );
}
export default function RouteNavigation(props) {
  
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App {...props}/>
      </BrowserRouter>
    </Provider>
  )
}