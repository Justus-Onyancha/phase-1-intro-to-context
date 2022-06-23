// Your code here

// This functions load  `Array` elements into corresponding `Object` properties.

let createEmployeeRecord = (ecard) => {
    let employee 
   
    return employee = {
        firstName: ecard[0],
        familyName: ecard[1],
        title: ecard[2],
        payPerHour: ecard[3],
        timeInEvents:[],
        timeOutEvents:[]
    }
}

// Converts each nested Array into an employee record using createEmployeeRecord and accumulates it to a new Array.
let createEmployeeRecords = (cardsData) => {
    return cardsData.map(createEmployeeRecord)
 }

//  * Add an `Object` with keys to the `timeInEvents` `Array` on the record
//     `Object`:
//     * `type`: Set to `"TimeIn"`
//     * `hour`: Derived from the argument
//     * `date`: Derived from the argument

 let createTimeInEvent = (record, time )=>{
    let [date, hour] = time.split(' ')

    record.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })
    return record
}

let createTimeOutEvent = (record, time) =>{
    let [ date, hour ] = time.split(' ')
    record.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })
    return record
}

let hoursWorkedOnDate =(record, date)=>{
    let outEvent = record.timeOutEvents.find((e) =>{
        return e.date === date
    })

    let inEvent = record.timeInEvents.find((e) =>{
        return e.date === date
    })
    return (outEvent.hour - inEvent.hour )/100
}
