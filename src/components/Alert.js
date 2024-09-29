import React from "react";

const capitalize=(word)=>{

    const l=word.toUpperCase();
     return l.charAt(0)+word.slice(1);

}

export default function Alert(props) {
  return (
    <div style={{height:'50px'}}>
    {props.alert && <div>
      <div className={`alert alert-${props.alert.type}`} role="alert">
      <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
      </div>
    </div>}
    </div>

  );
}
