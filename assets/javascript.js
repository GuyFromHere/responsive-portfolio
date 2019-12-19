//jshint esnext:true
const elContent = document.getElementById("content");

const getAbout = () => {
  elContent.innerHTML = "";
  elContent.innerHTML = `
    <h1>About Me</h1>
    <img src="assets/images/aboutme.jpg" id="aboutImg">
    <p>
        First and foremost, I am a husband and a father of two silly children and two equally silly dogs. 
        I am also an IT professional with a passion for coding. When I'm not solving problems with powershell 
        I like to dabble in javascript as well as Python game development. Last year I discovered a love of
        running and completed my first marathon in October. 
    </p>
    `;
};

const getContact = () => {
  elContent.innerHTML = "";
  elContent.innerHTML = `
    <h1>Contact</h1>
		<div id="contact">
			<form action="javascript:showForm();">
				<label>Name</label><br />
				<input type="text" id="name" placeholder="John Smith" /><br />
				<label>Email</label><br />
				<input
					type="text"
					id="email"
					placeholder="example@gmail.com"
				/><br />
				<label>Message</label><br />
				<textarea id="message"></textarea><br />
				<input type="submit" id="submit" />
			</form>
		</div>
	</div>
    `;
};

const getPortfolio = () => {
  elContent.innerHTML = `
    <h1>Portfolio</h1>
	<div id="portfolio">
		<a
			href="https://guyfromhere.github.io/"
			target="_blank"
			title="Minesweeper game built in vanilla javascript and HTML."
		>
            <div class="portfolio" >
                <img src="assets/images/minesweeper.png" class="cardImg" id="imgMinesweeper">
				<div class="portfolioCard">Minesweeper</div>
			</div>
		</a>
		<a
			href="https://guyfromhere.github.io/fart-button/"
			target="_blank"
			title="A simple app I built with my son as a learning exercise."
		>
            <div class="portfolio">
            <img src="assets/images/fart.png" class="cardImg" id="imgFart">
				<div class="portfolioCard">Fart Button</div>
			</div>
		</a>
		<a
			href="https://adamwheeler81.github.io/project1/"
			target="_blank"
			title="Project one for Bootcamp. A gluten-free recipe searcher using th Spoonacular API."
		>
            <div class="portfolio">
            <img src="assets/images/gluten.png" class="cardImg" id="imgGluten">
				<div class="portfolioCard">Gluten-Tootin;</div>
			</div>
		</a>
		<a
			href="https://guyfromhere.github.io/weather-dash/"
			target="_blank"
			title="Weather dashboard. Uses AJAX and the OpenWeather API to get current weather information by city name."
		>
            <div class="portfolio">
            <img src="assets/images/weather.png" class="cardImg" id="imgWeather">
				<div class="portfolioCard">Weather Dashboard</div>
			</div>
		</
		<a
			href="https://github.com/GuyFromHere/NoteTaker"
			target="_blank"
			title="Node, Express, EJS, MongoDB, Bootstrap. Another work-inspired project. A simple interface for documenting service calls and other useful information."
		>
            <div class="portfolio">
            <img src="assets/images/note.png" class="cardImg" id="imgNote">
				<div class="portfolioCard">Note Taker</div>
			</div>
		</a>
        
    </div>
    `;
};

function showForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  if (name && email) {
    alert("Name: " + name + "\nEmail:  " + email + "\nMessage: " + message);
  } else {
    alert("You must enter a name and an email.");
  }
}

document.getElementById("btnAbout").addEventListener("click", () => {
  getAbout();
});

document.getElementById("btnContact").addEventListener("click", () => {
  getContact();
});

document.getElementById("btnPortfolio").addEventListener("click", () => {
  getPortfolio();
});
