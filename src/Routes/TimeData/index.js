import React, { useState,useEffect } from "react"
import moment from 'moment'
const TimeData = () => {

    Date.prototype.addDays = function(days) {
        var dat = new Date(this.valueOf())
        dat.setMinutes(dat.getMinutes() + days);
        return dat
     }

    function getDates(startDate, stopDate) {
         var dateArray = new Array();
         var currentDate = startDate;
         
         while (currentDate <= stopDate) {
             dateArray.push(currentDate)
             currentDate = currentDate.addDays(3);
         }
         return dateArray;
    }
    
    

    var dateArray = getDates(new Date(2019, 4, 16, 15, 24, 30, 0), (new Date(2019, 4, 16, 15, 24, 30, 0)).addDays(10));
    const array1 = []
    var array2 = ["15:24","15:20","17:20","19:20"]
    for (let i = 0; i < dateArray.length; i ++ ) {
        let regdate = moment(dateArray[i]);
        let newRegDate = regdate.format('HH:mm')
         
        array1.push(newRegDate)
        
        
    }
    var aa = array1.filter(value => array2.includes(value))
    console.log(aa)
    
    return(
        <>
            <div style={{ margin:"10px" }}>
                <p>
                    시간 : 
                </p>
            </div>
        </>
    )
    
}

export default TimeData