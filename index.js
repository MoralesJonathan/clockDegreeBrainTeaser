function calculateDegrees(minute, hour) {

let minuteDegrees,
    hourDegrees;

minuteDegrees = minute * 6; 
hourDegrees = hour * 30; 

hourDegrees = hourDegrees+(minute * 0.5);

return minuteDegrees > hourDegrees ? minuteDegrees - hourDegrees : hourDegrees - minuteDegrees;

}

$('#calcBtn').click(function(){
    alert(calculateDegrees($('input[name="minute"]').val(),$('input[name="hour"]').val())+'°');
});
