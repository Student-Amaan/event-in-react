import React from 'react'
function formSubmit(event){
    event.preventDefault()
console.log('form sumbited successfully')
}
function Form() {
  return (
    <div>
      <form onSubmit={formSubmit}>
        <input type="text" placeholder="write something" />
        <button>submit</button>
      </form>
    </div>
  );
}

export default Form