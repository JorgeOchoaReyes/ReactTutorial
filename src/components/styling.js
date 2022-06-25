import React, {useState} from 'react'; 
import './App.css';

function style() { 

  return (
    <div style={{paddingLeft: '20px'}}>
      <header style={{fontSize: '20pt', widht: '100%', borderBottom: '1px solid black'}}> In Styling in React </header>
      <p> Styling can be done within the tags itself or in a css file.  </p>
      <p> Notice the 'style={`{{}}`}'</p>
      <p> Most css styling can be added within these tags, with the only difference being that it can not have any dashes in it.</p>
      <p> So for example, text-decoration would not work, so instead we do textDecoration</p>
      <p style={{textDecoration: 'underline'}}> Here is textDecoration in action. </p>
      <p> Try to make this text be red and bolded by changning the code in the file called "styling.js"</p>
      <br /> 
    </div>
  );
}

export default style;
