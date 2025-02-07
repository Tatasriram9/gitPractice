import React from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Faq from './components/Faq';
import './App.css';
import CareerPage from './components/Career';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
      <Navbar />
      <Faq/>
      <Home/>
      <CareerPage/>
    </>
  );
}
export default App;
