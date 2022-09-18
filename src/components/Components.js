import React, {useState} from 'react'; 
import './App.css';
import screenshot from './ReactComponent.PNG'

function Componenets() { 

  return (
    <div>
      <header> Components in React </header>
      <div style={{padding: '0px 10px'}}>
        <p className="important"> Making components is fundamental to using React!  </p>
        <p> This file itself is a component. </p>
        <p> Creating a component is very easy, they are simply a function that have a return function. </p>
        <p> Here is an exmple of a custom component that returns text: </p>
        <ExampleComponent /> 
        <img src={screenshot} alt='' title="LOOK AT THE EXAMPLE COMPONENT" height={{}} style={{display: 'block', margin: 'auto'}}/>
        <p> • Non-standard html tags are not the usual teal color - they are a shade of green. </p>
        <p> • Custom components start with a capital letter. </p>
        <p> • The return call has to have its arguements wrapped in parenthesis like so: return{`(<p> example</p>)`}.</p>
        <br/> 
        <div className='space'/>
        <br/>
      </div>
    </div>
  );
}

const ExampleComponent = () => {
    return (
        <p style={{textAlign: 'center', fontSize: '20pt', color: 'red', fontWeight: 'bold'}}> I am a custom component, go ...     to line 27-31 in the 'Componenets.js' file to see me! </p>
    )
}

export default Componenets;
