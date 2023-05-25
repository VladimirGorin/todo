import React from "react";
import "./NewTask.css";

export default function NewTask({ setInputValue, inputValue, setNewTask}) {
  let newTaskRef = React.createRef()



  const changeVlaue = () => {
    setInputValue(newTaskRef.current.value)
  }


  const checkForm = () => {
    if (inputValue === "" || inputValue !== inputValue.trim() || !inputValue ) {
      return (
        <button className="button-add" disabled>
          add
        </button>
      );
    } else {
      return (
        <button className="button-add" onClick={setNewTask}>
          add
        </button>
      );
    }
  };

  return (
    <div className="new-task">
      <input type="text" placeholder="Type task" ref={newTaskRef} onChange={changeVlaue} value={inputValue} />
      {checkForm()}

    </div>
  );
}
