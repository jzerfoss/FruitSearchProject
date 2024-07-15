const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];
let inputVal = input.value.toLowerCase();

function search(str) {
	let results = []; //sets results to be an empty array
	results = fruit.filter((eachFruit) => //reassigns results to be be a filtered list of the fruits array
		eachFruit.toLowerCase().includes(str)); // uses filtered results to check for match within string input
	return results;
}

function searchHandler(e) {
	inputVal = e.target.value.toLowerCase(); //sets input Value to value of event target and accounts for text format
	const results = search(inputVal); //assigns var to search function
	showSuggestions(results, inputVal); //executes show Suggestions function that takes in results and inputVal
}

function showSuggestions(results, inputVal) {
	suggestions.innerHTML = ""; //resets suggestions to an empty field on click
	results.forEach(result => { //iterates over each item in the results variable
		const li = document.createElement("li"); //creates li item
		li.textContent = result; //makes list of result items
		suggestions.appendChild(li); // appends list item to suggestions list
	});
	
	if (inputVal.length > 0) { //shows list of suggestions when there is an input value present
		suggestions.classList.add('has-suggestion'); //adds class to suggestion list to show list
	}
	else {
		suggestions.classList.remove('has-suggestions'); //if no input hides suggestion list
	}
	
}

function useSuggestion(e) { //runs on click event
	if (e.target.tagName === "LI") { // if click on list item code runs
		input.value = e.target.textContent; 
		suggestions.innerHTML = ""; // enpties list 
		suggestions.classList.remove('has-suggestions'); //hides list by removing class
	}
}

input.addEventListener('keyup', searchHandler); //event listener for key up, runs searchHandler()
suggestions.addEventListener('click', useSuggestion); // click event listener on suggestions that runs useSuggestion()