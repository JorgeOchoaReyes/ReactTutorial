import React, {useState} from 'react'; 
import './App.css';

function Componenets() { 

  return (
    <div style={{paddingLeft: '20px'}}>
      <header style={{fontSize: '20pt', widht: '100%', borderBottom: '1px solid black'}}> Componenets in React </header>
      <p> Making components is probably the most important part of react.  </p>
      <p> This file is it self a component. </p>
      <p> Creating components is very easy, they are simply just a function that have a return function. </p>
      <p> Here is an exmple: </p>
      <ExampleComponent /> 
      <p> Notice that any html tags that are not the usual tags are teal color. </p>
      <p> Additionally, custom components start with a capital letter. </p>
      <p> Last note about custom components, the return call has to have its arguements wrapped in parenthesis.</p>
      <p> Like so: return{`(<p> example</p>)`}</p>

      <br /> 
    </div>
  );
}

const ExampleComponent = () => {
    return (
        <p> Here is a custom component, go to line 22-26 in the 'Componenets.js' file to see this component. </p>
    )
}

export default Componenets;
