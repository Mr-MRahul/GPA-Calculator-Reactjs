import React from "react"
import courses from "./data/course_data";
import "./App_new.scss"
import ReactScrollableFeed from "react-scrollable-feed"

export default function FormDown(props) {

  
  const { Branch, Semester, Regulations } = props;

  var course,courses_d,credits,select_courses,obj_xyz={};
  const [scores,setScores] = React.useState(obj_xyz)
  const [sgpa,setSgpa] = React.useState(10)
  
  React.useEffect(()=>{
    // console.log(scores)
    setSgpa(cal_gpa())
  },[scores])
  
    React.useEffect(()=>{
    obj_xyz = courses_d.reduce((accumulator, value) => {
      return {...accumulator, [value]: 10};
    }, {});
    setScores(obj_xyz)
    },[props])
  
    function cal_gpa(){
      var gpa = 0
  
      if(credits){
  
        for(var i=0;i<credits.length;i++){
          gpa+=scores[courses_d[i]]*credits[i]
        }
        
        gpa=gpa/(credits.reduce((a, b) => a + b, 0))
        
      }
      return gpa
    }

    function checkItem(item) {
      if (
        item.Regulations === Regulations &&
        item.Semester === Semester &&
        item.Branch === Branch
      ) {
        
        return item;
      }
      else{
        return false;
      }
    }
  
    function val_grade(grade){
      switch(grade){
        case "A+": return 10;
        case "A": return 9;
        case "B": return 8;
        case "C": return 7;
        case "D": return 6;
        case "E": return 5;
        case "F": return 0;
        default:return 0;
      }
    }
  
    function option_mapper(item) {
      return <option value={val_grade(item)} label={item} key={item+'y'}></option>;
    }
  
    function select_mapper(item) {
  
      const score = ["A+","A","B","C","D","E","F"]
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
    
  course = courses.find(checkItem).data;      //to retrieve course details and credits details
  courses_d = course.courses
  credits = course.credits
  
  select_courses = courses_d.map(select_mapper) //to create course_options

  return (
    <>
      <p className="text1"  style={{"position":"relative","left":"0.5em"}}>Select Grades</p>
      {select_courses}
      <p
        className="enter"
      >
        SGPA
      </p>
      <h1 className="enter" style={{"position":"relative","left":"0.5em","bottom":"1em"}}>{sgpa}</h1>
    </>
  );
}

