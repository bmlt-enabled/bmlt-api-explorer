import React, {useContext} from 'react'
import Header from './partials/Header'
import Sidebar from './partials/Sidebar'
import QueryScreen from './partials/QueryScreen'
import {Globalcontext} from '../context/GlobalContext'
import { QueryProvider } from '../context/QueryContext'
import QueryButton from '../components/query-string/QueryButton';

function Layout() {

  const {isMatched, root_server_url} = useContext(Globalcontext)

    return (
      <QueryProvider>
        <Header />
          <>
            {isMatched === false ?
            <div className="container">
              <h2 className="text-center">Please Select A Root Server</h2>
            </div>
            : 
            <div className="main-wrapper">
              {root_server_url !== null ?
                <div className="query-container">
                  <QueryButton />
                </div>
                :
                <>
                </>
              }
              <div className="container"> 
                <div className="row">
                  <div className="col-md-4">
                    <Sidebar />
                  </div>
                  <div className="col-md-8">
                    <QueryScreen />
                  </div>
                </div>
                </div>
            </div>
            }
          </>
        {/* <Footer/> */}
      </QueryProvider>
    )
  }
// }

export default Layout
