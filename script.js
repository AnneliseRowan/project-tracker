
var todayDate = setInterval(function(){ 
    var today = moment();
    $("#time").text(today.format('MMMM Do YYYY, h:mm:ss a')); 
}, 1000);

$( function() {
    $( "#datepicker" ).datepicker({
      changeMonth: true,
      changeYear: false,
    });
});


