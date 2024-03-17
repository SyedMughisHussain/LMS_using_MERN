import React from 'react'

const Container = (props) => {
  return (
    <div style={{
        backgroundColor: "lightblue",
        padding: "30px",
        borderRadius: "10px",
    }}>
        <h3>Enrolled Course:  {props.course}</h3>
        <h3>Full Name: {props.name}</h3>
        <h3>Father Name:  {props.fatherName}</h3>
        <h3>Contact No: {props.phone}</h3>
    </div>
  )
}

export default Container