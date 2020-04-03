var eventDate, userYear, userMonth, userDate, userHours, userMinutes, userSeconds, userMil, currentDate, diff, 
    hours, mins, sec, days;

function setEvent(){
       currentTime();   
}


function currentTime(){
    
    userYear = document.getElementById("inputYear").value;
    console.log(userYear);
    userMonth = document.getElementById("inputMonth").value;
    console.log(userMonth);
    userDate = document.getElementById("inputDate").value;
    console.log(userDate);
    userHours = document.getElementById("inputHours").value;
    console.log(userHours);
    userMinutes = document.getElementById("inputMinutes").value;
    console.log(userMinutes);
    userSeconds = 0;
    userMil = 0;
    
    //setting the user input as an event date
    eventDate = new Date(userYear, (userMonth - 1), userDate, userHours, userMinutes, userSeconds, userMil);
    console.log(eventDate);

    //getting todays date
    currentDate = new Date();
    console.log(currentDate);
    
    //getting the difference to start the countdown
    diff = eventDate - currentDate;
    console.log(diff);
    
    //formatting the diff to present it
    hours = Math.floor((diff % (60*60*24*1000))/(60*60*1000));
    mins = Math.floor((diff % (60*60*1000))/(60*1000));
    sec = Math.floor((diff % (60*1000))/(1000));
    days = Math.floor(diff/(60*60*24*1000));
    console.log(days, hours, mins, sec);
    
    //if mins is 8mins then display it as 08mins
    hours = hours < 10 ? "0" + hours : hours;
    days = days < 10 ? "0" + days : days;
    mins = mins < 10 ? "0" + mins : mins;
    sec = sec < 10 ? "0" + sec : sec;
    
    
    //Showing the countdown 
    document.getElementById("outputDays").textContent = days; 
    document.getElementById("outputHours").textContent = hours; 
    document.getElementById("outputMins").textContent = mins; 
    document.getElementById("outputSecs").textContent = sec; 
    
    setInterval(currentTime, 1000);

    
}   



    
