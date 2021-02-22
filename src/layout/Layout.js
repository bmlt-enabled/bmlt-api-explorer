import React, {useContext} from 'react'
import Header from './partials/Header'
import Sidebar from './partials/Sidebar'
import QueryScreen from './partials/QueryScreen'
import {Globalcontext} from '../context/GlobalContext'
import { QueryProvider } from '../context/QueryContext'
import Footer from './partials/Footer'


function Layout() {

  const {isMatched} = useContext(Globalcontext)

    return (
      <QueryProvider>
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
        <Footer/>
      </QueryProvider>
    )
  }
// }

export default Layout
