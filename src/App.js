import React from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Faq from './components/Faq';
function App() {
  return (
    <>
      <Navbar />
      <Faq/>
      <Home/>
    </>
  );
}
export default App;
