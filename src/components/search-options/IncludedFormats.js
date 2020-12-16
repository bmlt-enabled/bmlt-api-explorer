import React, { useState, useEffect} from 'react'
import ReactTooltip from 'react-tooltip'

function IncludedFormats(props) {
  const FormatsApi = 'https://' + props.serverUrl + '/client_interface/jsonp/?switcher=GetFormats'

  // Get data from api
  const [formats, setFormats ] = useState([])

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
        FormatsApi
      )
      .then(setFormats)
      .catch(console.error);
    }
    fetchData();
  },[FormatsApi]);

  return (
    <section>
      <h2>Included Formats</h2>
      <div className="row" id="includedFormats">
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

export default IncludedFormats
