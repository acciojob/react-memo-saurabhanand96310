// import { values } from "cypress/types/lodash";
import React, { useState } from "react";
const ReactMemo=()=>{
    const [value,setValue]=useState("");
    const [skills, setSkills]=useState([]);
    const handleSkill=()=>{
        // setSkills([...skills, value]);
        // setValue("");

        if (value.trim()) { // Ensure the input is not empty or whitespace
            setSkills([...skills, value]);
            setValue(""); // Clear the input field
        }
    }
    return(
        <div>
            <h3>React.memo</h3>
            <input value={value} onChange={(e)=>setValue(e.target.value)}></input>
            {/* <button onClick={()=>setSkills(value)}>Add Skill</button> */}
            <button onClick={handleSkill}>Add Skill</button>
            <ul>
               {/* { skills.map((skill,i)=>(
                    <li key={i}>{skill}</li>
                ))} */}
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li> // Add key for React's reconciliation
                ))}
            </ul>
        </div>
    )
}

export default ReactMemo;