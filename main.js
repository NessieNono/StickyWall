const exco1 = document.getElementById("item-1"); 
const exco2 = document.getElementById("item-2"); 

const content1 = document.getElementById("item-1-content"); 
const content2 = document.getElementById("item-2-content"); 

(function() {
  'use strict';
  content1.classList.toggle('hide');
  content2.classList.toggle('hide');
  // buttons are selected as exco1 and exco2 
  // attach an event listener to them so that they will print "hello"
  exco1.addEventListener("click", toggle_collapse1);
  exco2.addEventListener("click", toggle_collapse2);

}());

function toggle_collapse1() { 
	console.log("toggle_collapse1 executed")
	content1.classList.toggle('hide');
}

function toggle_collapse2() { 
	console.log("toggle_collapse2 executed")
	content2.classList.toggle('hide');
}