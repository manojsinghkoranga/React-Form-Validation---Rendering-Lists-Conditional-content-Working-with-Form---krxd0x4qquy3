
import React, { useState, useRef } from 'react';


function App() {
  const [error , setError] = useState('');
  const fnameRef = useRef();
  const emailRef = useRef();
  const [validEmail, setValidEmail] = useState(false);

  const [data, setData] = useState({fname: undefined, lname: undefined});


 const change = () => {
  if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(emailRef.current.value)) {
    setError(undefined);
    setValidEmail(false);
  } else {
    setError("Email is invalid");
    setValidEmail(true);
  }
 }

  return(
    <div className="App">
      <h1>How About Them Apples</h1>
      <form onSubmit={(event) => {
          event.preventDefault();
          setData({
            fname: fnameRef.current.value,
            lname: emailRef.current.value
          })
        }}
      >
        <fieldset>
          <label>
            <p>First Name</p>
            <input id='fname' name="name"  ref={fnameRef} required/>
            <br></br>
            <p>Email</p>
            <input id='lname' name="name" onChange={change}  ref={emailRef} required/>
            {error && <h2 style={{color: 'red'}}>{error}</h2>}
          </label>
        </fieldset>

        <button id='submit' type='submit' disabled={validEmail}>Submit</button>
      </form>
      {
        data.fname != undefined && (
          <div>
          <h1>{data.fname}</h1>
          <h2>{data.lname}</h2>
          </div>
        )
      }
    </div>
  )
}


export default App;