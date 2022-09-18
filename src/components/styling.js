import React, {useState} from 'react'; 
import './App.css';
import screenshot from './ReactStyling.png'

function style() { 

  return (
    <div>
      <header> Styling in React </header>
      <div style={{padding: '0px 10px'}}>
        <p className="important"> Styling can be done within the tags itself or in a css file.  </p>
        <p> Notice the <strong>style={`{{}}`}</strong> used below!</p>
        <p> For example, instead of styling a given paragraph tag in a CSS file, we can do it in-line within our javascript file:</p>
        <img src={screenshot} alt='' title="LOOK AT THE P TAG" height={{}} style={{display: 'block', margin: 'auto'}}/>
        <p style={{fontWeight: 'bold'}}> Most css styling can be added within these tags as properties, with the only difference being that it can not have any dashes in it.</p>
        <p> So for example, text-decoration would not work, so instead we do textDecoration.</p>
        <p style={{textDecoration: 'underline'}}> Here is textDecoration in action. </p>
        <p> Try to make this text be red and bolded by changing the code in the file called "styling.js"</p>
        <div className='space'/> 
        <br/>
      </div>
    </div>
  );
}

export default style;
