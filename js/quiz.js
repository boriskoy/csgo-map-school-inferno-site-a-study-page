var answers = {
    "q1": ["Balcony", "BALCONY", "balcony"],
    "q2": ["Graveyard", "GRAVEYARD", "graveyard"],
    "q3": ["Pit", "PIT", "pit"],
    "q4": ["Truck", "TRUCK", "truck"],
    "q5": ["Library", "LIBRARY", "library"],
    "q6": ["Apartment", "APARTMENT", "apartment", "Apartments", "APARTMENTS", "apartments"],
    "q7": ["Default", "default", "DEFAULT", "main", "MAIN", "Main"],
    "q8": ["Back Site", "BACK SITE", "back site", "Back site", "back Site", "backsite", "BACKSITE", "Backsite"]
};

var score = 0;

function markAnswers() {
	$("input[type='text'], select").each(function() {
		console.log($.inArray(this.value, answers[this.id]));
	
	if($.inArray(this.value, answers[this.id]) === -1) {
		$(this).parent().append("<img class='result_pic' src='../images/close-128.png' />");
	} else {
		$(this).parent().append("<img class='result_pic' src='../images/mryfti.png' />");
		score++;
		}
	})
}

$("form").on("submit", function(e){
	e.preventDefault();
	markAnswers();
		function getScore() {
			return score;
		}
	$('#map').append("<p class='grade'>You got " + getScore() + " out of 8 right." + " " + "<a href='http://www.csgomapschool.com/inferno-a-quiz.html'>Try This Quiz Again.</a></p>");
	$(".submit").attr("disabled", true);
                    return true;
});