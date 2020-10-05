import React, { Component } from 'react'

class Formats extends Component {
      state = {

        formats: []
      }
      componentDidMount() {
        fetch('http://ctna.org/main_server/client_interface/json/?switcher=GetFormats')
        .then(res => res.json())
        .then((data) => {
          this.setState({ formats: data })
        })
        .catch(console.log)
      }

      render() {
        
        const format = this.state.formats;

        console.log(format);
        return (
          <div className="formats">
            <h2>Available Formats</h2>
            <div className="row">
            {format.map((formats, i) => (
              <div className="col-md-1 col-sm-2 col-3 d-flex flex-column align-items-center my-3" key={formats.key_string}>
                <label htmlFor={formats.key_string}>{formats.key_string}</label>
                <input name={formats.key_string} type="checkbox" className="checkbox"/>
              </div>
      
            ))}
          </div>
        </div>
        )
      }
    }
    export default Formats