import React from 'react';
import regulations_data from './data/data_regulations';
import sem_data from "./data/sem_data"
import branch_data from "./data/branch_data"
import FormDown from './form2';
import "./App_new.scss"



export default function FormUp(){

  function mapper(item){
    return (
      <option value={item.value} label={item.label} key={item.key+"xx"}></option>
    )
  }

   const reg = regulations_data.map(mapper)
   const sem = sem_data.map(mapper)
   const branch = branch_data.map(mapper)

  const [down,setDown] = React.useState("")
  const [formData,setFormData]=React.useState(
      {
          "Regulations":"",
          "Semester":"",
          "Branch":"",
      }
  )
  
  React.useEffect(()=>{
    if (
      formData.Branch !== "" &&
      formData.Regulations !== "" &&
      formData.Semester !== ""
      ) {
      setDown (
        <FormDown

          Regulations={formData.Regulations}
          Branch={formData.Branch}
          Semester={formData.Semester}
        />
      );
    }
    // console.log("rahul")
  },[formData])


    function handleEvent(event){
        const {name,value,type,checked}=event.target
        // console.log(event.target)
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
      <>
      <form>
        <p className='text'  style={{"position":"relative","left":"0.6em"}}>Choose the Options</p>
        <div className='up'>
        <div className="select">
          <select
            id="regulations"
            value={formData.Regulations}
            onChange={handleEvent}
            name="Regulations"
          >
            {reg}
          </select>
        </div>

        <div className="select">
          <select
            id="sem"
            value={formData.Semester}
            onChange={handleEvent}
            name="Semester"
          >
            {sem}
          </select>
        </div>

        <div className="select">
          <select
            id="branch"
            value={formData.Branch}
            onChange={handleEvent}
            name="Branch"
          >
            {branch}
          </select>
        </div>
</div>

<div className='down'>
        {down}
</div>
  
      </form>
      </>
    );
}

