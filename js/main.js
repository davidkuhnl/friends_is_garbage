
/*
	It's much convenient to use jQuery than pure javascript since it already wraps some javascript functions into much more user firendly blocks.
	In general anything starting with $( is jQuery.
	Each statement in javascript should end with ;
	Text is enclosed in "", or ''. They are interchangable and sometimes you have to use both if you want to have quotes in the text.
	But you can mich pure javascript code with jQuery as you want.
*/

// This is a jQuery specific function. Anything inside the {} will be executed once the page fully loads.
// it makes sure that if you use any parts of the page in your script, they are already loaded, otherwise your functions wont work. For instance I cannot bing a click event to something which is not there yet.
$(function() {

	// You can for example say what should happen if someone clicked on the button.
	//You just select the button using jQuery and its ID
	$("#alert_button").on("click", function(){
		// Here I am saying to call the function I defined below with some parameter.
		someone_clicked_the_button("You clicked! It works.");
	});
	
	// You can do multiple of things like that in the main jQuery function.
	$("#yellow_button").on("click", function(){
		make_div_yellow();
	});
	
	// You can also use the other selector types the same way as in CSS to select multiple things at once.
	// If I want to do something if any of the buttons is clicked
	$("button").on("click", function(){
		// I can also define my code already here, but if there's more code it tends to be messy and functions are preffered.
		
		//If you for instance want to add extra row to your layout with some specific class you can do:
		// Create new row in variable
		let new_row = $('<div class="row">This is new row</div>');
		// Add it class
		new_row.addClass('brand_new_row');
		// Add the new row to the page
		$("#main-cont").append(new_row);
	});


});

//This is plain javascript function
function someone_clicked_the_button(som_value){
	alert(som_value);
}

//You can also use the functions to change things on your page

function make_div_yellow(){
	// You can define variables using keyword let. Like this.
	let my_div = $("#my_favorite_column");
	
	// I've selected the tag and stored it in the variable so I can now do this:
	my_div.css("background-color", "yellow");
	// But I could also do just this:
	$("#my_favorite_column").css("background-color", "yellow");
}

