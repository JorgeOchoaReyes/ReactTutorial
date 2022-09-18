import React, {useState} from 'react'; 
import './App.css';

function Props() { 
  const [name, setName] = useState("Jorge");

  return (
    <div>
      <header> Props in React </header>
      <div style={{padding: '0px 10px'}}>
        <p className="important"> Sometimes we want to send data our components so that we can reuse them for multiple things. </p>
        <p style={{fontWeight: 'bold'}}> To do this we give it props (short for property)! If components are functions, you can think of props as the arguments of the functions. </p> 
        <p> Here is for example a custom component that takes a given state prop "Jorge" and renders it in a card component. </p>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Type name" /> 
        <br/> 
        <br/> 
        <Card name={name} /> 
        <div className='space'/> 
        <br/>
      </div>
    </div>
  );
}

const Card = ({name}) => {
    
    return (
        <div class="card"
            style={{display: 'flex',
                    border: '1px solid black',
                    alignItems: 'center',
                    justifyContent:'center',
                    borderRadius: '100px',
                    height: '50px',
                    width: '200px'}}> 
            My name is: {name}
        </div>  
    )
}

export default Props;
