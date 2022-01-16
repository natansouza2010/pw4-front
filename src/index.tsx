import React from 'react';
import ReactDOM from 'react-dom';
import  './styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet
  
} from "react-router-dom";


import { Home } from './pages/Home/Home';
import { Form } from './pages/Form/Form';
import { Header } from './components/Header/Header';
import { Login } from './pages/Login/Login';
import {isAuthenticated} from './services/auth';

function RequireAuth({ children }: { children: JSX.Element }) {
  let auth = isAuthenticated()
  let location = useLocation();

  if (!auth) {
    
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}



ReactDOM.render(
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/veiculos/edit">
      <Route path=":id" element={
              <RequireAuth>
                <Form />
              </RequireAuth>
      
      } />
    </Route>
    <Route path="/veiculos/add" element={
        <RequireAuth>
            <Form />
        </RequireAuth>
    }/>
    <Route path="/login" element={<Login/>} />
  </Routes>
</BrowserRouter>,
  document.getElementById('root')
);


