import React from "react";

function doSomething() {
  console.log("My name is aman danish");
}

function handleDblClick(){
    console.log('You double clicked')
}

function ParaInfo() {
  console.log("you clicked the paragraph");
}

function mouseOver() {
  console.log("Your mouse is over");
}

function Button() {
  return (
    <div>
      <button onClick={doSomething}>click me!</button>
      <p onClick={ParaInfo}>You are the famous one </p>
      <p onMouseOver={mouseOver}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        saepe quaerat dolorum incidunt provident similique voluptate cum eum
        ullam assumenda libero optio, recusandae sequi modi a autem eius
        exercitationem magnam.
      </p>
      <p onDoubleClick={handleDblClick}>You can do any thing and every things</p>
    </div>
  );
}

export default Button;
