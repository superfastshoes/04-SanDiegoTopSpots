// Use the $.getJSON method to download the contents of topspots.json
// Iterate through the top spots and creat rows for each spot
// Create a link to the location using long. lat. coord.

$(document).ready(function(){
		
	var topSpots;

	$.getJSON("topspots.json", function(data){	
		topSpots = data;
		console.log(topSpots);
		
	$(data).each(function(index, value){
		
		var htmlTable;
		//For loop to go through all of the data
		for (j = 0; j < data.length; j+=1){
			
			var place = topSpots[j];			

			htmlTable += "<tr>";
			htmlTable += "<td>" + place.name + "</td>";
			htmlTable += "<td>" + place.description + "</td>";

			// Create a button here that will link to the location on goggle maps
			htmlTable += "<td>" + "<button type='button' >" +
			"<a href=https://www.google.com/maps?q=" + place.location[0] + "," + place.location[1] + 
			">Go to Google Maps" + "</a>" + "</button>" + "</td>";
			htmlTable += "</tr>";
			
		}	
		$("tbody").html(htmlTable);		
	});

	//value.name will get name of the place
	//value.description
	//value.location	
   });
});
// **** Have a play with the Google Maps Javascript API and see if you 
//can draw all the locations in the JSON file into markers on an 
//embedded Google Maps element. (Difficult!) ****