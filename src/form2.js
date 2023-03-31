import React from "react"
import courses from "./data/course_data";
import "./App_new.scss"


export default function FormDown(props) {
  const { Branch, Semester, Regulations } = props;
  const [scores,setScores] = React.useState(Object.create(null))
  const [sgpa,setSgpa] = React.useState()

  function cal_gpa(){
    var gpa = 0

    for(var i=0;i<credits.length;i++){
      gpa+=scores[courses_d[i]]*credits[i]
    }

    gpa=gpa/(credits.reduce((a, b) => a + b, 0))
    return gpa
  }

  function handleClick(e){
    setSgpa(cal_gpa())

  }

  function checkItem(item) {
    if (
      item.Regulations === Regulations &&
      item.Semester === Semester &&
      item.Branch === Branch
    ) {
      return item;
    }
  }

  function option_mapper(item) {
    return <option value={item} label={item} key={item+'y'}></option>;
  }

  function select_mapper(item) {

    const score = ['choose',10,9,8,7,6,5,4,3,2,1]
    const options =  score.map(option_mapper)


    return(
      <>
        <label className="text1" htmlFor={item} key={item+"x"}>{item}</label>
      <div className="select">
      <select 
      name = {item}
      id = {item}
      key = {item+'z'}
      onChange = {handleEvent}
      
      >
       {options}
      </select>
        </div>
      </>
    )
  }

  const course = courses.find(checkItem).data;      //to retrieve course details and credits details
  const courses_d = course.courses
  const credits = course.credits

  const select_courses = courses_d.map(select_mapper)  //to create course_options
  
  function handleEvent(e){
    const {name,value} = e.target

    
    setScores((oldData)=>{
      return(
        {
          ...oldData,
          [name] : value
        }
        )
      }
      )
  }



  return (
    <>
      <p className="text1"  style={{"position":"relative","left":"0.5em"}}>Select Grades</p>
      {select_courses}
      <p
        className="text1 enter"
        onClick={() => {
          if (Object.keys(scores).length === credits.length) {
            handleClick();
          }
        }}
      >
        Enter
      </p>
      <h1  style={{"position":"relative","left":"0.5em","bottom":"1em"}}>{sgpa}</h1>
    </>
  );
}
