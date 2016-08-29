
//question的constructor??
var Questions =function(questions){
	this.questions=questions;
}

var ingredients={
	strong: ['Glug of rum', 'slug of whisky', 'splash of gin'],
    salty: ['Olive on a stick', 'salt-dusted rim', 'rasher of bacon'],
    bitter: ['Shake of bitters', 'splash of tonic', 'twist of lemon peel'],
    sweet: ['Sugar cube', 'spoonful of honey', 'splash of cola'],
    fruity: ['Slice of orange', 'dash of cassis', 'cherry on top']
}


var Drink = function(ingredients){
	this.strong=ingredients.strong;
	this.salty=ingredients.salty;
	this.bitter=ingredients.bitter;
	this.sweet=ingredients.sweet;
	this.fruity=ingredients.fruity;
}
// var yourDrink = new Drink([])

var BartenderQ = new Questions([
	'Do ye like yer drinks strong?',
	'Do ye like it with a salty tang?',
	'Are ye a lubber who likes it bitter?',
	'Would ye like a bit of sweetness with yer poison?',
	'Are ye one for a fruity finish?',
	])

var BartenderQuestion = ""
for(var i=0; i< BartenderQ.questions.length; i++ ){
	BartenderQuestion += '<p>'+BartenderQ.questions[i]+'</p><div class="C">Ahoy! <input name=q' + i + '  value="true" type=radio> <br> Blegh!! <input name=q' + i + ' type=radio value="false"></div>';
}

$(".Q").append(BartenderQuestion)

var getRandomNum=function(){
	return Math.floor((Math.random()*3))
}

$("#sub").on("click",function(e){
	e.preventDefault();
	var userPreference = $('form').serializeArray();
	console.log(userPreference);

	if(userPreference.length!==5){
		alert("You have answer all the questions")
		return
	}

	else{
		var createDrink = new Drink({
				strong: (userPreference[0].value == "true") ? ingredients.strong[getRandomNum()] : false,
		        salty: (userPreference[1].value == "true") ? ingredients.salty[getRandomNum()] : false,
		        bitter: (userPreference[2].value == "true") ? ingredients.bitter[getRandomNum()] : false,
		        sweet: (userPreference[3].value == "true") ? ingredients.sweet[getRandomNum()] : false,
		        fruity: (userPreference[4].value == "true") ? ingredients.fruity[getRandomNum()] : false
		   });
			console.log(createDrink)
			//show user's drink
			//empty selections
			var yerDrink=""
			for(taste in createDrink){
				console.log(createDrink[taste])
				if(createDrink[taste]){
					yerDrink+=createDrink[taste]+", ";
				}
			}
			alert("Here is yer drink "+yerDrink.slice(0,-2))
	
	}
})

