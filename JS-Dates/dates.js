const show = function(value){
    console.log(value);
}


const date = new Date();
show(date)
show(date.toString())//Sat Dec 16 2023 19:17:33 GMT+0600 (Bangladesh Standard Time)
show(date.toUTCString())//Sat, 16 Dec 2023 13:16:54 GMT
show(date.toISOString())//2023-12-16T13:18:26.853Z

{
const d0 = new Date("2015-03-5");//Thu Mar 05 2015 00:00:00 GMT+0600 (Bangladesh Standard Time)
const d1 = new Date("2015-03");//Sun Mar 01 2015 06:00:00 GMT+0600 (Bangladesh Standard Time)
const d2 = new Date("2015");//Thu Jan 01 2015 06:00:00 GMT+0600 (Bangladesh Standard Time)
show(d0);
show(d1);
show(d2);
}


{//JavaScript Short Dates.
const d0 = new Date("03/25/2015");
const d1 = new Date("2015-3-25");
}

{//JavaScript Long Dates.
const d0 = new Date("Mar 25 2015");//Month and day can be in any order
const d1 = new Date("25 March 2015");//month can be written in full
const d3 = new Date("JANUARY, 25, 2015");//Commas are ignored. Names are case insensitive:
}

{//parsing date 
let msec = Date.parse("March 21, 2012");//returns the number of milliseconds between the date and January 1, 1970
show(msec)
const d = new Date(msec)
show(d)
}
/**********Get Date Methods***********
**************************************
getFullYear()	    Get year as a four digit number (yyyy)
getMonth()	        Get month as a number (0-11)
getDate()	        Get day as a number (1-31)
getDay()	        Get weekday as a number (0-6)
getHours()	        Get hour (0-23)
getMinutes()	    Get minute (0-59)
getSeconds()	    Get second (0-59)
getMilliseconds()	Get millisecond (0-999)
getTime()	        Get time (milliseconds since January 1, 1970)

*/
{
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const d = new Date("2021-03-25");
show(d.getMonth())//return 2 
let month = months[d.getMonth()];
show(month)//return march
show(d.getHours())//return 6
show(d.getUTCHours())//return 0
show(d.getMinutes())//return 0
show(d.getTime())
}
/******Set Date Methods*********
 *******************************/
const d = new Date();
d.setFullYear(2020,11,3);
d.setMonth(3)
d.setDate(30)
show(d)

