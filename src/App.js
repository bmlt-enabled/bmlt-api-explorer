import React, {useEffect, useContext} from 'react'
import './scss/App.scss'
import {Globalcontext} from './context/GlobalContext'
import Layout from './layout/Layout'
// import Header from './layout/partials/Header'


function App() {
  // const {isMatched} = useContext(Globalcontext)
  const {
    setTomato,
    isLoading,
  } = useContext(Globalcontext)
  
  useEffect(() => {
    setTomato();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <>
    {isLoading === true? 
      <div className="container">Page Loading</div>
      :
      <div className="App">
        <Layout/>
      </div>
    }
   </>
  );
}

export default App;
