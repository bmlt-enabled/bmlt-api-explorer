// import React, { Component } from 'react'

// class Formats extends Component {
//       state = {

//         formats: []
//       }
//       componentDidMount() {
//         fetch('http://ctna.org/main_server/client_interface/json/?switcher=GetFormats')
//         .then(res => res.json())
//         .then((data) => {
//           this.setState({ formats: data })
//         })
//         .catch()
//       }

//       render() {
        
//         const format = this.state.formats;

//         console.log(format);
//         return (
//           <div className="formats">
//             <h2>Available Formats</h2>
//             <div className="row">
//             {format.map((formats, i) => (
//               <div className="col-md-1 col-sm-2 col-3 d-flex flex-column align-items-center my-3" key={formats.key_string}>
//                 <label htmlFor={formats.key_string}>{formats.key_string}</label>
//                 <input name={formats.key_string} type="checkbox" className="checkbox"/>
//               </div>
      
//             ))}
//           </div>
//         </div>
//         )
//       }
//     }
//     export default Formats

import React, {useState, useEffect} from 'react'
import axios from 'axios';


function Formats(props) {
  const FormatsApi = 'https://' + props.serverUrl + '/client_interface/json/?switcher=GetFormats'

  // Get data from api
  const [formats, setFormats ] = useState([])


  
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(FormatsApi)
      console.log(result.data)
      setFormats(result.data)
    }
    fetchData();


  }, []);


  return (
    <div className="row" id="includedFormats">
      {formats.map(format => (
        <div className="col-1 d-flex align-items-center justify-content-end" key={format.key_string}>
          <label className="mr-2 mb-0">{format.key_string}</label>
          <input type="checkbox" value={format.id} onChange={props.onChange}/>
        </div>
      ))}
      
    </div>
  )
}

export default Formats
