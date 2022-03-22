import React,{ useState, useEffect} from 'react';
import './App.css';
import Dropdown from "./Components/Dropdown";
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import Search from "./Components/Search";
import Content from "./Components/Content";
import Products from "./Components/Products";
import Half1 from './Components/Half1';
import Half2 from './Components/Half2';
import Page4 from './Components/Page4';
import Page5 from './Components/Page5';
import Page6 from './Components/Page6';
import Page8 from './Components/Page8';
import Footer from './Components/Footer';


function App() 
{
  const [isopen, setisopen]= useState(false);
  const toggle = () => {
    setisopen(!isopen);
  };
  return (
    <div className='min-h-screen justify-center py-10 sm: px-5'>
      <NavBar toggle={toggle} />
      <Dropdown isopen={isopen} toggle={toggle}/>
      <Search/>
      <Content/>
      <Hero/>
      <Products/>
      <Half1/>
      <Half2/>
      <Page4/>
      <Page5/>
      <Page6/>
      <Page8/>
      <Footer/>

    </div>
  )
}

export default App;