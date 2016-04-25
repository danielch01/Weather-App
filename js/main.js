$(document).ready(function(){
	var url = 'http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=15479faff13abf513e8a8a398ea6b294';
	$.getJSON(url, function(){
		$('#nav').html('JSON was a success!');
	});

	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(function(){
			$('#geo').html('getCurrentPosition was a success!');
		});
	}






});