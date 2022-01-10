import React from 'react';
import ReactDOM from 'react-dom';
import  './styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Home } from './pages/Home/Home';
import { Form } from './pages/Form/Form';
import { Header } from './components/Header/Header';


ReactDOM.render(
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/veiculos" element={<Home/>} />
    <Route path="/veiculos/form">
      <Route path=":movieId" element={<Form />} />
    </Route>
  </Routes>
</BrowserRouter>,
  document.getElementById('root')
);


