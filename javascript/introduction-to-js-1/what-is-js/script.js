document.addEventListener("DOMContentLoaded", function() {

// Funtion: creates a new paragraph and appends it to the bottom of the HTML body	
	function createParagraph() {
		let para = document.createElement ('p');
		para.textContent = 'You clicked the button!';
		document.body.appendChild(para);
	}


// Get references to all the buttons on the page in a array format
	const buttons = document.querySelectorAll('button');

// Loop through all the buttons and add a click event listener to each one

// When any button is pressed, the createParagraph() functioon will be run
	for(let i = 0; i < buttons.length ; i++){
		buttons[i].addEventListener('click', createParagraph);
	}

});

