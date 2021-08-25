import logo from './logo.svg';
import './App.css';
import SawoLogin from 'sawo-react'
import Sawo from "sawo"
import React, { useEffect } from 'react';


function App() {

//   useEffect(() => {
//     var config = {
//         // should be same as the id of the container created on 3rd step
//         containerID: 'sawo-container',
//         // can be one of 'email' or 'phone_number_sms'
//         identifierType: 'email',
//         // Add the API key copied from 5th step
//         apiKey: "b48e0838-0022-4dc3-87c2-c2dae749a0eb",
//         // Add a callback here to handle the payload sent by sdk
//         onSuccess: payload => {
//             console.log(payload)
//         },
//     }
//     let sawo = new Sawo(config)
//     sawo.showForm()
// }, [])


function sawoLoginCallback(payload) {
  console.log(payload)
}

const sawoConfig = {
  onSuccess: sawoLoginCallback, //required,
  identifierType: 'email', //required, must be one of: 'email', 'phone_number_sms',
  apiKey: 'b48e0838-0022-4dc3-87c2-c2dae749a0eb', // required, get it from sawo dev.sawolabs.com,
  containerHeight: '20rem', // the login container height, default is 230px
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <div id="sawo-container" style={{'height': '300px'}}></div> */}
        <SawoLogin config={sawoConfig}/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
