import React, {useState, useEffect, useContext} from 'react'
import './scss/App.scss'
import Layout from './layout/Layout'
import {Globalcontext} from './context/GlobalContext'
// import Header from './layout/partials/Header'


function App() {
  const {setTomato, isLoading} = useContext(Globalcontext)
  
  useEffect(() => {
    setTomato(false);
  },[]);

  return (
    <>
    {isLoading === true? 
      <div className="container">Page Loading</div>
      :
      <div className="App">
        <Layout />
      </div>
    }
   </>
  );
}

export default App;
