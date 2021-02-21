import React, {useState, useEffect, useContext} from 'react'
import './scss/App.scss'
import Layout from './layout/Layout'
import Header from './layout/partials/Header'
import Sidebar from './layout/partials/Sidebar'
import QueryScreen from './layout/partials/QueryScreen'
import {Globalcontext} from './context/GlobalContext'
// import Header from './layout/partials/Header'


function App() {
  const {isMatched} = useContext(Globalcontext)
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
        <Header />
        <div className="container">
          {isMatched === false ?
          <h2 className="text-center">Please Select A Root Server</h2>
          : 
          <div className="row">
          <div className="col-md-4">
            <Sidebar />
          </div>
          <div className="col-md-8">
            <QueryScreen />
          </div>
        </div>
        }
      </div>
      </div>
    }
   </>
  );
}

export default App;
