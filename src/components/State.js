import React, {useState} from 'react'; 
import './App.css';

function App() {
  const [name, setName] = useState(''); 

  return (
    <div style={{paddingLeft: '20px'}}>
      <header style={{fontSize: '20pt', widht: '100%', borderBottom: '1px solid black'}}> React State </header>
      <p> State is the most important thing to remember about react. </p>
      <p> We use state as a viarble by way of the 'useState{`()`}' hook. </p>
      <p> Each hook comes with the variable to make, and a set function to update the state. </p>
      <p> The name of the variable can be anything, but the set functions should generally start with 'set'. </p>
      <p> In this exmplae wee create a state variable named "name", and use a set functions called 'setName' </p>
      <p> The State is initilized to '', so an empty string, it can be anything else like an int or bool. </p>
      
      <p> Here is how it looks: {name} </p>
      <p> Not very interesintg, lets update it. </p>
      <label for="name"> Type Name: </label>
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Type name" /> 
      
      <br /> 
    </div>
  );
}

export default App;
