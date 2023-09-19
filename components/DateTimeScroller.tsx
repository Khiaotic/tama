export function updateDateTimeScroller(date){
    /////suffixes for days like 1st, 2nd, 3rd, 4th///////
 const originialNumericSuffixes = ["th","st","nd","rd"] 

 //////day, month, and year components//////////
 ///javascript retrieves day of the month
 const day = date.getDate()
 ////javascript gets full month long form
 const month = date.toLocaleDateString(undefined, { month: "long"})
 /////javascript gets the year
const year = date.getFullYear()

/////dietermine original suffix needed for the day//////
const determineDaySuffix =
 originialNumericSuffixes[(day % 10) <= 3 && (day % 100 - day % 10 !== 10) ? day % 10 : 0] 

const formattedDate = `${date.toLocaleDateString(undefined, { weekday: "long" })} || ${month} ${day}${determineDaySuffix},${year}`

return formattedDate
}

function updateDateTime(){
    const currentDateTimeElement = document.getElementById('currentDateTimeScroller')

    if (currentDateTimeElement) {
const currentDate = new Date()
const formattedDate = updateDateTimeScroller(currentDate)
currentDateTimeElement.textContent = formattedDate

    }
}

///immdediately display/////
setInterval(updateDateTime, 1000 )
updateDateTime()



