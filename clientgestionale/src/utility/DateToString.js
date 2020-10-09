export function dateToString(date){
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    if (month < 10) {
      month = "0" + month;
    }
    var day = date.getDate();
    if (day < 10) {
      day = "0" + day;
    }
    var localeDate = year + "-" + month + "-" + day;

    return localeDate;

}

export function timeToString(date){
  var hours = date.getHours();
    if (hours < 10) {
      hours = "0" + hours;
    }
    var minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    var localeTime = hours + ":" + minutes;
    
    return localeTime;
}