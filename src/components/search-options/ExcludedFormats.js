import React, { useState, useEffect} from 'react'
// import jsonpAdapter from 'axios-jsonp';
import ReactTooltip from 'react-tooltip'
// import fetchJsonp from 'fetch-jsonp'
// import axios from 'axios'
// import jsonp from 'axios-jsonp-pro'

// var fetchJsonp = require("fetch-jsonp")

function ExcludedFormats(props) {
  const FormatsApi = 'https://' + props.serverUrl + '/client_interface/jsonp/?switcher=GetFormats'

  const [formats, setFormats ] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      // js?
      let jsonpID = 0;

      function jsonp(url, timeout = 7500) {
        const head = document.querySelector('head');
        jsonpID = Math.round(Math.random() * 1000000000);

        console.log(jsonpID);

        return new Promise((resolve, reject) => {
          let script = document.createElement('script');
          const callbackName = `jsonpCallback${jsonpID}`;

          script.src = encodeURI(`${url}&callback=${callbackName}`);
          script.async = true;

          const timeoutId = window.setTimeout(() => {
            cleanUp();

            return reject(new Error('Timeout'));
          }, timeout);

          window[callbackName] = data => {
            cleanUp();

            return resolve(data);
          };

          script.addEventListener('error', error => {
            cleanUp();

            return reject(error);
          });

          function cleanUp() {
            window[callbackName] = undefined;
            head.removeChild(script);
            window.clearTimeout(timeoutId);
            script = null;
          }


          head.appendChild(script);
        });
      
      }
      console.log(jsonp)
      jsonp(
        FormatsApi
      )
      .then(setFormats)
      .catch(console.error);
    }
    fetchData();
  },[FormatsApi]);

  // function callback(data) {
  //   var dataFromServer = data;
  //   console.log(dataFromServer);
  //   }

  // var script = document.createElement('script');
  // script.src = FormatsApi + '&callback=?';
  // document.querySelector('head').appendChild(script);

  // console.log(script);

  // Get data from api
  
  
  
  // useEffect(() => {
  //   const fetchData = async () => {
  //       const response = await fetchJsonp(FormatsApi, {
  //         jsonpCallbackFunction: 'callback'
  //       })
  //       .then(function(response) {
  //         return response.json()
  //       }).then(function(json) {
  //         console.log('parsed json', json)
  //       })
  //       console.log(response.data);
  //       // return setFormats(result.data);
  //   }
  //   fetchData();
  // },[FormatsApi]);


  // useEffect(() => {
  //   const fetchData = async () => {
  //       await axios({
  //           url: FormatsApi,
  //           adapter: jsonpAdapter
  //       }).then((result) => {
  //           console.log(result.data);
  //           return setFormats(result.data);
  //       });
  //   }
  //   fetchData();
  // },[FormatsApi]);

  // useEffect(() => {
  //     const fetchData = async () => {
  //         axios.jsonp(FormatsApi)
  //         .then(function (response) {
  //           console.log(response);
  //           return setFormats(response.data);
  //         })
  //     }
  //     fetchData();
  //   },[FormatsApi]);
  
  return (
    <section>
      <h2>Excluded Formats</h2>
      <div className="row" id="ExcludedFormats">
        {formats.map(format => (
          <div className="col-4 col-md-2 d-flex align-items-center mb-2" key={format.key_string}>
          <input  type="checkbox" value={`&formats[]=${format.id}`} onChange={props.onChange}/>
          <ReactTooltip place="top" type="info" effect="solid" delayShow={700} id={`formats-label-${format.id}`}>
            <span>{format.name_string}</span>
          </ReactTooltip>
          <label className="ml-3 mb-0" data-tip data-for={`formats-label-${format.id}`}>{format.key_string}</label>
        </div>
        ))}
      </div>
    </section>
  )
}

export default ExcludedFormats