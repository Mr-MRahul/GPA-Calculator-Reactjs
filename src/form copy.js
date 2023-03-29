import React from 'react';

export default function Form(){

    const [formData,setFormData]=React.useState(
        {
            "Firstname":"",
            "lastname" :"",
            "isBachelor" : false,
            "employment": ""
        }
    )
    
    function handleEvent(event){
        const {name,value,type,checked}=event.target
        console.log(event)
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

    return(
        <form>
            <input type="text" name="Firstname" placeholder="FirstName" onChange={handleEvent} value={formData.Firstname}/>
            <input type="text" name="lastname" placeholder="LastName" onChange={handleEvent} value={formData.lastname}/>
            <input type="checkbox" id="Bachelor" checked={formData.isBachelor} onChange={handleEvent} name="isBachelor"/>
            <label htmlFor="Bachelor">Are you a Bachelor</label>
            <fieldset>
                <legend>Enter your Grades</legend>

                <input 
                    type="radio"
                    id="employed"
                    name="employment"
                    checked={ formData.employment==="employed"}
                    value="employed"
                    onChange={handleEvent}
                />
                <label htmlFor='employed'>employed</label>

                <input 
                    type="radio"
                    id="unemployed"
                    name="employment"
                    checked={ formData.employment==="unemployed"}
                    value="unemployed"
                    onChange={handleEvent}
                />
                <label htmlFor='unemployed'>unemployed</label>

            </fieldset>
            
        </form>
    )
}
