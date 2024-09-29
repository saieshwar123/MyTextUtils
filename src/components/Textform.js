import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  function handleUpClick() {
    setText(text.toUpperCase());
    
    props.showAlert("changed to UpperCase!","success");
  }

  function handleOnChange(event) {
    setText(event.target.value);
  }

  function handleLowClick() {
    setText(text.toLowerCase());
    props.showAlert("changed to UpperCase!","success");
  }

  function handleClearClick() {
    setText("");
    props.showAlert("Cleared Text!","success");
  }
  function handleRemoveplacesClick() {
    setText(text.replace(/\s+/g, " ").trim());
    props.showAlert("Removed Extra Spaces!","success");
  }
  function handleCopytextClick() {
    
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
    props.showAlert("Text Copied","success");
  }

  // const check = (mode) => {
  //   if (mode === "dark") {
  //     return "light";
  //   } else {
  //     return "dark";
  //   }
  // };

  // const checkarr=(arr)=>
  // {
  //   if(arr.length===1 && arr[0]==="") return 0;
  //   else
  //   return arr.length;  
  // }
  return (
    <>
      <div className="container" style={{ color: props.mode}}>
        <h1 style={{ color: props.mode === "white" ? "black" : "white" } }>
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode,
              color: props.mode === "white" ? "black" : "white",
            }}
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button
        disabled={text.length===0}
          className={`btn btn-${'blue'} mx-1 my-1`}
          onClick={handleUpClick}
          >
          Convert to UpperCase
        </button>
        <button
        disabled={text.length===0}
          className={`btn btn-${props.mode}mx-1 my-1`}
          onClick={handleLowClick}
          >
          Convert to LowerCase
        </button>
        <button
        disabled={text.length===0}
          className={`btn btn-${props.mode}mx-1 my-1`}
          onClick={handleClearClick}
          >
          Clear Text
        </button>
        <button
        disabled={text.length===0}
          className={`btn btn-${props.mode}mx-1 my-1`}
          onClick={handleRemoveplacesClick}
        >
          Remove White Spaces
        </button>
        <button
        disabled={text.length===0}
          className={`btn btn-${props.mode}mx-1 my-1`}
          onClick={handleCopytextClick}
        >
          Copy Text
        </button>
      </div>

      <div
        className="container my-2"
        style={{ color: props.mode === "white" ? "black" : "white" }}
      >
        <h1>Your text summary</h1>
        <p>
          {text.split(/\s+/).filter((element)=>{ return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(/\s+/).filter((element)=>{ return element.length!==0}).length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter text in text box to preview it"}</p>
      </div>
    </>
  );
}
