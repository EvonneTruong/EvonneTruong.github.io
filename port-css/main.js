function startTime() {
	var today = new Date();
	var d = today.getDate();
	var y = today.getFullYear();
	var h = today.getHours();
	var min = today.getMinutes();
	var sec = today.getSeconds();
	dow = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
	mo = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
	min = checkTime(min);
	sec = checkTime(sec);
	document.getElementById('dt').innerHTML =
	dow[today.getDay()] + ", " + mo[today.getMonth()] + " " + d + ", " + y + "&nbsp;&nbsp;&nbsp;&nbsp" + h + ":" + min + ":" + sec;
	var t = setTimeout(startTime, 500);}
function checkTime(i) {
	if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
	return i;}
