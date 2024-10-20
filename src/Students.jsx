
 function Students(props) {
  return (
    <div className="student">
        <h1>Name: {props.name}</h1>
        <p>Age: {props.age}</p>
        <p>Student: {props.isstudent ? "yes" : "No"}</p>
        
    </div>
  )
}
Students.defaultProps={
    name:"Guest",
    age:0,
    isstudent:false
}
export default Students
