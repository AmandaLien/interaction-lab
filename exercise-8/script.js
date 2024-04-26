function updateTime() {


    let today = new Date();
    console.log(today);
  
  
  
    //// DATE ////
    let thisMonth = today.getMonth();
    console.log(thisMonth);
  
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    console.log(months[thisMonth]);
  
    let thisDate = today.getDate();
    console.log(thisDate);
  
  
    let thisWeekday = today.getDay();
    console.log(thisWeekday);
  
    let days = ["Sun", "Mon", "Tues", "Wed" , "Thurs", "Fri", "Sat"];
    console.log(days[thisWeekday]);
  
    let thisYear = today.getFullYear();
    console.log(thisYear);
  
  
    let dateElem = document.getElementById("dateHere");
  
    dateElem.innerHTML = days[thisWeekday] + " " + (thisMonth + 1)+ "/" + thisDate;
  
  
    //// TIME ////
  
    let thisHour = today.getHours();
    console.log(thisHour);
  
    let thisMinute = today.getMinutes();
    console.log(thisMinute);
  
    let thisSecond = today.getSeconds();
    console.log(thisSecond);
  
    if(thisSecond < 10) {
      thisSecond = "0" + thisSecond;
    }
  
    if(thisMinute < 10) {
      thisMinute = "0" + thisMinute;
    }
  
    if(thisHour < 10) {
      thisHour = "0" + thisHour;
    }
    
    
    let timeOfDay = document.getElementById("timeDay");
    
    if(thisHour < 12){
      timeOfDay.innerHTML = "AM";
    }
    else{
      timeOfDay.innerHTML = "PM";
      thisHour = thisHour - 12;
    }
    
    let timeElem = document.getElementById("timeHere");
    timeElem.innerHTML = thisHour + ":" + thisMinute + ":" + thisSecond; 
  
  }
  
setInterval(updateTime, 1000);