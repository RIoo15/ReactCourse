import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    console.log("Upper case was clicked" + text);
   let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLoClick = ()=>{
    console.log("Upper case was clicked" + text);
   let newText = text.toLowerCase();
    setText(newText)
  }
  const handleClearClick = ()=>{
    console.log("Upper case was clicked" + text);
   let newText = '';
    setText(newText)
  }

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  const handleOnChange = (event)=>{
console.log("Onchange")
setText(event.target.value)
  }
  const [text, setText] = useState("Enter text here");
  return (
    <>
    <div className="container" style={{color : props.mode=== 'dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode=== 'dark'?'grey':'white',
      color: props.mode=== 'dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>

    </div>
    <div className="container my-3" style={{color : props.mode=== 'dark'?'white':'#042743'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0? text:"Enter something in the textbox above to preview it"}</p>
    </div>
    </>
  )
}
