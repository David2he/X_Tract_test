import React from "react"
import "./eachDay.scss"
export const EachDay = (props, state) => {
    
    const testFunction =()=>{
        return props.dayNumber
    }

    return(
        <div className="eachDayContainer" onClick={testFunction}>
            <p>{props.dayNumber}</p>
        </div>
    )
}