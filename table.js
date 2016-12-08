
function buildCalcTable() {

  startIncline = 1;
  endIncline = 10;
  table="<table border='1' width='100%'><tr><th bgcolor='#ffffff'>kph</th><th>pace</th>";

  for (incline = startIncline; incline<endIncline+1; incline++)
    table += "<th>" + incline + "%</th>";
  table+="</tr>"

  for (speed = 800; speed < 2001; speed+=20) {
    iSpeed = speed/100;
    iPace = toPace( eval(60/iSpeed));
    table += "<tr><td>" + iSpeed + "</td><td bgcolor=\"" + getBGColour(iPace) + "\">" + iPace + "</td>";
    
    for (incline = startIncline; incline<endIncline+1; incline++)  
    {
      eSpeed = iSpeed+iSpeed*(incline)*9/200;
      eSpeed = Math.round(accuracy*eSpeed)/accuracy;
      ePace = toPace( eval(60/eSpeed));
      table += "<td bgcolor=\"" + getBGColour(ePace) + "\">" + ePace + "</td>";
      //console.log(incline,"% @", iSpeed, iPace, "equiv:", eSpeed, ePace);
      }
      table += "</tr>";
  }
  table += "</table>";

  document.getElementById("table_div").innerHTML = table;
}