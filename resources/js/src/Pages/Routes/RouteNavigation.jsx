import MainLayout from '@/src/Layouts/MainLayout';
import store from '@/src/redux/store';
import React from 'react' 
import { Provider } from 'react-redux';
import { Link, BrowserRouter, Routes, Route} from "react-router-dom"; 
import Home from '../Home';
import StudentRecord from '../StudentRecord';
 

function App() {
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
export default function RouteNavigation() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  )
}