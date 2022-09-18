import React, {useState} from 'react'; 
import './App.css';
import screenshot from './ReactState.PNG'

function App() {
  const [name, setName] = useState("Alex");

  return (
    <div>
      <header> React State </header>
      <div style={{padding: '0px 10px'}}>
        <p className="important"> State is the most important thing to remember about React! </p>
        <p> We use state as a variable by way of the <strong>useState{`()`}</strong> hook. 
            We can think of this hook as a function that will return the information pertaining to the DOM's state when called. </p>
        <p style={{textDecoration: 'underline'}}> When calling the useState hook, we will be returned with an array of 2 elements: The state variable and a set state function </p>
        <img src={screenshot} alt="" title="LOOK AT THE USE STATE HOOK" height={{}} style={{display: 'block', margin: 'auto'}}/>
        <br/>
        <p> In this example we create a state variable named "name", and use a set functions called 'setName' </p>
        <p> The State is initilized to the string "Alex", but it can be any variable. </p>
        <p style={{display: 'inline'}}> Here is how it looks: <span style={{color: 'red', fontSize: '15pt'}}>{name}</span></p>
        <p> Not a very interesting name state, lets update it! </p>
        <label for="name"> Type Name: </label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Type name" /> 
        <br/>
        <p style={{fontWeight: 'bold'}}>Everytime you type in the box above, our "name" state variable changes. Whenever there is a change in our "name" state variable, it will be re-rendered.</p>
        <div className="space"/>
        <br/>
      </div>
    </div>
  );
}

export default App;
