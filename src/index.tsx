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
    <Route path="/" element={<Home/>} />
    <Route path="/veiculos/edit">
      <Route path=":id" element={<Form />} />
    </Route>
    <Route path="/veiculos/add" element={<Form />}/>
  </Routes>
</BrowserRouter>,
  document.getElementById('root')
);


