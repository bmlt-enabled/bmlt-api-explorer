// import React, {useState, useEffect} from 'react'
// import axios from 'axios'
// import jsonpAdapter from 'axios-jsonp'

// function ServerVersion(props) {

//   const ServerInfoApi = 'https://' + props.serverUrl + '/client_interface/jsonp/?switcher=GetServerInfo'

//   // Get data from api
//   const [serverInfo, setServerInfo] = useState([])
//   const [connection, setConnection] = useState('')
  
//   useEffect(() => {
//     const fetchData = async () => {

//       await axios({
//         url: ServerInfoApi,
//         adapter: jsonpAdapter
//       }).then((res) => {
//         console.log(res.data)
//         setServerInfo(res.data)
//         setConnection('Connection Successful')
//       }).catch((error) => {
//         setConnection('Connection Failed')
//       })
//     }
//     fetchData();

//   },[ServerInfoApi]);
//   return (
//     <section onChange={props.onChange}>
//     <div id="server-info">
//     {
//       {
//         'Connection Failed': <p className="font-weight-bold">{connection}</p>
//       }[connection] ||
//       <div>
//       {serverInfo.map(info => (
//         <p className="text-primary">Server Version: ({info.version})<span className="font-weight-bold ml-3">{connection}</span></p>
//         ))}
//       </div>
//     }
//     </div>
//   </section>
//   )
// }

// export default ServerVersion