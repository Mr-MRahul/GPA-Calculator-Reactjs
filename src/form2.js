import React from "react"
import courses from "./course_data";

export default function FormDown(props) {
  const { Branch, Semester, Regulations } = props;

  const {formData,setFormData} = React.useState({})

  function checkItem(item) {
    if (
      item.Regulations === Regulations &&
      item.Semester === Semester &&
      item.Branch === Branch
    ) {
      return item;
    }
  }

  function mapper(item) {
    return <option value={item.value} label={item.label}></option>;
  }

  const course = courses.find(checkItem);
  setFormData(old)


  const crc = course.map(mapper);

  return (
    <>
      <p>working</p>
    </>
  );
}
