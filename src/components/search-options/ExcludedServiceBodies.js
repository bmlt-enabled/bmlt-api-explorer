import React, { useState, useEffect} from 'react'


function ExcludedServiceBodies(props) {
  const ServiceBodyApi = 'https://' + props.serverUrl + '/client_interface/jsonp/?switcher=GetServiceBodies'

  // Get data from api
  const [serviceBody, setServiceBody ] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {

      // Set JS for jsonp callback
      let jsonpID = 0;

      function jsonp(url, timeout = 7500) {
        const head = document.querySelector('head');

        // set unique identifier for function
        jsonpID = Math.round(Math.random() * 1000000000);

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

          // Define cleanup function
          function cleanUp() {
            window[callbackName] = undefined;
            head.removeChild(script);
            window.clearTimeout(timeoutId);
            script = null;
          }
          // append script inside <head>
          head.appendChild(script);
        });
      }
      
      jsonp(
        ServiceBodyApi
      )
      .then(setServiceBody)
      .catch(console.error);
    }
    fetchData();
  },[ServiceBodyApi]);

  return (
    <section>
      <h2>Excluded Service Bodies</h2>
      <div className="row" id="excludedServiceBodies">
        {serviceBody.map(body => (
          <div className="col-12 mb-2" key={body.id}>
            <input  data-layout={body.type} type="checkbox" value={`&services[]=-${body.id}`} onChange={props.onChange}/>
            <label className="ml-3 mb-0">{body.name}</label>
            
            
          </div>
        ))}
      </div>
    </section>
  )
}

export default ExcludedServiceBodies
