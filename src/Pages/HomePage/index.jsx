import React from "react"
import { useState } from "react"
import { EachDay } from "../../Components/EachDay"
import "./HomePage.scss"

export const HomePage = () => {
    // const [selectedDate, setSelectedDate] = useState()
    const [resetDate, setResetDate] = useState(" 09 / 09 / 22")



    const getTodayDate = () => {
        let number = new Date().toLocaleString('en-EN', { timeZone: 'UTC', day: "2-digit" })
        let month = new Date().toLocaleString('en-EN', { timeZone: 'UTC', month: "2-digit" })
        let year = new Date().toLocaleString('en-EN', { timeZone: 'UTC', year: "2-digit" })

        setResetDate(number + " / " + month + " / " + year)
    }


    const getAllDateOfMonth = (year, month) => {
        let date = new Date(year, month)
        let allDaysName = []
        let allDaysNumber = []
        let allMonth = []
        while (date.getMonth() === month) {
            date.setDate(date.getDate() + 1)
            allDaysName.push(new Date(date).toLocaleString('en-EN', { timeZone: 'UTC', weekday: "short" }))
            allDaysNumber.push(new Date(date).toLocaleString('en-EN', { timeZone: 'UTC', day: "2-digit" }))
            allMonth.push(new Date(date).toLocaleString('en-EN', { timeZone: 'UTC', month: "long" }))
        }
        return [allDaysName, allDaysNumber, allMonth]
    }


    let [allDaysName, allDaysNumber, allMonth] = getAllDateOfMonth(2022, 8) // actual month - 1 because it start at 0 

    // let allDays = []
    // allDays.push( allDaysName, allDaysNumber, allMonth)
    // console.log(allDays)

    return (
        <div className="homePageContainer">
            <div className="card">
                <div className="infoCardContainer">
                    <h1>Shedule Response</h1>
                    <div className="selectedDateContainer">
                        <p>Date</p>
                        <div className="selectedDate">
                            <p>{resetDate}</p>
                        </div>
                    </div>
                    <div className="monthInfo">
                        <p>July 2022</p>
                        <div>
                            <p>-</p>
                            <p>-</p>
                        </div>
                    </div>
                </div>
                <div className="calendarContainer">
                    <div className="calendar">
                        {
                            allDaysNumber && allDaysNumber.map((eachDay, index) => (
                                <EachDay key={`${eachDay}-${index}`} dayNumber={eachDay}/>
                            ))
                        }
                    </div>
                </div>
                <div className="buttonContainer">
                    <button onClick={getTodayDate}>Shedule</button>
                    <button>Cancel</button>
                </div>
            </div>
        </div>
    )
}