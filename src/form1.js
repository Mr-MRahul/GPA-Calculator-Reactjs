import React from 'react';
import regulations_data from './data_regulations';
import sem_data from "./sem_data"
import branch_data from "./branch_data"
import FormDown from './form2';

export default function FormUp(){

  function mapper(item){
    return (
      <option value={item.value} label={item.label}></option>
    )
  }

   const reg = regulations_data.map(mapper)
   const sem = sem_data.map(mapper)
   const branch = branch_data.map(mapper)

  var down = "";

    const [formData,setFormData]=React.useState(
        {
            "Regulations":"",
            "Semester":"",
            "Branch":"",
        }
    )
    
    if (
      formData.Branch !== "" &&
      formData.Regulations !== "" &&
      formData.Semester !== ""
    ) {
      down = (
        <FormDown
          Regulations={formData.Regulations}
          Branch={formData.Branch}
          Semester={formData.Semester}
        />
      );
    }

    function handleEvent(event){
        const {name,value,type,checked}=event.target
        console.log(event.target)
        setFormData(oldFormData=>{
            return(
                {
                    ...oldFormData,
                    [name]: type === "checkbox"? checked : value
                }
            )
        }
        )  
    }

    return (
      <form>
        <select
          id="regulations"
          value={formData.Regulations}
          onChange={handleEvent}
          name="Regulations"
        >
          {reg}
        </select>

        <select
          id="sem"
          value={formData.Semester}
          onChange={handleEvent}
          name="Semester"
        >
          {sem}
        </select>

        <select
          id="branch"
          value={formData.Branch}
          onChange={handleEvent}
          name="Branch"
        >
          {branch}
        </select>


        
        {down}


      </form>
    );
}
