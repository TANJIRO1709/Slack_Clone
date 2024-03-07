import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Home from "./pages/Home";
//import Header from './pages/Header';
//import Sidebar from './pages/Sidebar';
import Layout from './pages/Layout';
function App() {
  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
