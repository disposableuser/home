    window.onload = setInterval(clock, 1000);

    function clock()
    {
      var d = new Date();

      var date = d.getDate();

      var month = d.getMonth();
      var montharr = ["January","February","March","April","May","June","July","August","September","October","November","December"];
      month = montharr[month];

      var day = d.getDay();
      var dayarr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
      day = dayarr[day];

      var hour =d.getHours();
      var min = d.getMinutes();
      var sec = d.getSeconds();

        hour = checkTime(hour);
        min = checkTime(min);
        sec = checkTime(sec);

      document.getElementById("date").innerHTML=day+" "+month+" "+date+nth(date);
      document.getElementById("time").innerHTML=hour+":"+min+":"+sec+"&nbsp;";
    }

    function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

    function nth(d) {
      if(d>3 && d<21) return 'th'; // proper english grammar
      switch (d % 10) {
            case 1:  return "st";
            case 2:  return "nd";
            case 3:  return "rd";
            default: return "th";
        }
    }
