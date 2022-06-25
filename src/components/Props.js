import React, {useState} from 'react'; 
import './App.css';

function Props() { 

  return (
    <div style={{paddingLeft: '20px'}}>
      <header style={{fontSize: '20pt', widht: '100%', borderBottom: '1px solid black'}}> Props in React </header>
      <p> Sometimes we want to send data our components so that we can re use them for multiple things. </p>
      <p>To do this we give it props. </p> 
      <p> Here is for example a custom component that takes a name and renders it in a card component. </p>
      <br /> 
      <Card name="Jorge" /> 
      <br /> 
    </div>
  );
}

const Card = ({name}) => {
    return (
        <div style={{border: '1px solid black', 
                    display: 'flex', 
                    justifyContent:'center', 
                    borderRadius: '100px', width: '200px'}}> 
            My name is: {name}
        </div>  
    )
}

export default Props;
