import React from "react"

const Test = (props) => {
  return(
      <li>
        <span>state: {props.state} age: {props.age} place: {props.children} </span>
        <button onClick = {props.deleteEvent}> DELETE </button>
        <input onChange = {props.addEvent} value = {props.children} />
      </li>
  )
}
export default Test
