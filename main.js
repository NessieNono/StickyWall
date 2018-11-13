const main = document.getElementById("main"); 

(function() {
	'use strict';
	console.log("This is the Effy function.");
	makeNote();
}());


function makeNote() { 
	let note = createElement("div", "", {class: "note"});
	let close_button = createElement("button", "", {class:"invisible-button"});
	close_button.addEventListener("click", function() { 
		//note.style.display = "none";
	});





	// fill in the note with some text 
		// console.log(list); // [{author, published comment}, {}]
    note.appendChild(createElement("p", "no one commented on this post yet.", {class: "meta-data"}));

	note.appendChild(close_button);
	main.appendChild(note);
	console.log("created and appended note element");


}




// ---------------------- Put in a diff Module ----------------------- //
/**
 * You don't have to use this but it may or may not simplify element creation
 * 
 * @param {string}  tag     The HTML element desired
 * @param {any}     data    Any textContent, data associated with the element
 * @param {object}  options Any further HTML attributes specified
 */
function createElement(tag, data, options = {}) {
    const el = document.createElement(tag);
    el.textContent = data;
   
    // Sets the attributes in the options object to the element
    return Object.entries(options).reduce(
        (element, [field, value]) => {
            element.setAttribute(field, value);
            return element;
        }, el);
}