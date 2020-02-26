const elContent = document.getElementById("content");

const email = "dandismuke@gmail.com";
const github = "https://github.com/GuyFromHere";
const linkedin = "https://www.linkedin.com/in/dan-dismuke-526a646b/";
const phone = "503-953-2152";
const resume = "https://drive.google.com/file/d/131nR7UHCex7TX3JZpOUk_LcjRWvBym6l/view?usp=sharing";
const aboutText = `<p>
    Hello! My name is Dan. I am from the Bay Area originally but I have 
    spent most of my life along the I5 corridor in Oregon. I grew up 
    playing video games with my brother and I have had a lifelong fascination
    with technology. As a child I also loved to write stories. These
    creative impulses led me to initially pursue theatre and music in
    college. Despite this, surprisingly, I graduated with a degree in
    French. When that proved to be a futile career path I
    went back to college to learn more about computers.
</p>
<p>
    Programming seemed the natural avenue for all of my interests but I
    didn't have the math credits to get in to the Computer Science
    program. I got an Associate's in Computer Information Systems
    instead. That put me on track for over a decade in the tech support
    and IT fields. While I enjoy my current career, it doesn't scratch my 
    creative itch.
</p>
<p>
    I recognize that no matter what job I have, there will be days that
    I hate. Rather than chase a dream job only to experience the
    disappointment of realizing that I hate it (sometimes) I want to
    pursue work that satisfies me. When I enjoy what I <em>do</em>, 
    I can find fulfillment in my day even when I would rather be buried in my sheets.
    I love making things. I love solving problems. Most of all I love having 
    concrete proof of my effort at the end of a long day. Coding is all of those things.
</p>
<p>
    Outside of work I still love video games and music but I don't have much time
    for them these days. I live in Milwaukie, Oregon with my wife, two kids, two dogs,
    and one obnoxious cat. 
</p>`;

const getAbout = () => {
	elContent.innerHTML = "";
	elContent.innerHTML = `
    <h1>About Me</h1>
    <img src="assets/images/aboutme.jpg" id="aboutImg">
        ${aboutText}
    `;
};

const getContact = () => {
	elContent.innerHTML = "";
	elContent.innerHTML = `
    <h1>Contact</h1>
        <div id="contact">
            <div class='email'>
                <h4>Email:</h4>
                ${email}
            </div>
            <div class='phone'>
                <h4>Phone:</h4>
                ${phone}
            </div>
            <div class='github'>
                <h4>GitHub:</h4>
                <a href='${github}' target='_blank'>GuyFromHere</a>
            </div>
            <div class='linkedin'>
                <h4>LinkedIn:</h4>
                <a href='${linkedin}' target='_blank'>LinkedIn</a>
            </div>
            <div class='resume'>
                <h4>Resume:</h4>
                <a href='${resume}' target='_blank'>Download</a>
            </div>
        </div>
	</div >`;
};

const projects = [
	{
		url: "https://adamwheeler81.github.io/project1/",
		title: "Project one for Bootcamp. A gluten-free recipe searcher using th Spoonacular API.",
		img: "assets/images/gluten.png",
		id: "imgGluten",
		header: "Gluten-Tootin"
	},
	{
		url: "https://unit15project2.herokuapp.com/",
		title:
			"Project two for Bootcamp. A full featured new app using MySql, Node, Passport, Handlebars, and the NewsApi API.",
		img: "assets/images/tickr.png",
		id: "imgTickr",
		header: "Tickr"
	},
	{
		url: "https://guyfromhere.github.io/weather-dash",
		title:
			"Weather dashboard. Uses AJAX and the OpenWeather API to get current weather information by city name.",
		img: "assets/images/weather.png",
		id: "imgWeather",
		header: "Weather Dashboard"
	},
	{
		url: "https://guyfromhere.github.io/day-planner/",
		title: "Day planner app.",
		img: "assets/images/planner.png",
		id: "imgPlanner",
		header: "Day Planner"
	},
	{
		url: "https://guyfromhere.github.io/",
		title: "Minesweeper game built in vanilla javascript and HTML.",
		img: "assets/images/minesweeper.png",
		id: "imgMinesweeper",
		header: "Minesweeper"
	},
	{
		url: "https://guyfromhere.github.io/fart-button/",
		title: "A simple app I built with my son as a learning exercise.",
		img: "assets/images/fart.png",
		id: "imgFart",
		header: "Fart Button"
	},
	{
		url: "https://guyfromhere.github.io/ZedSaid/",
		title: "An app to track my daughter's ridiculous insults.",
		img: "assets/images/zed.png",
		id: "imgZed",
		header: "Zed Said"
	}
];

const getPortfolio = () => {
	let portfolioDivStart = `<h1>Portfolio</h1 >
                            <div id="portfolio">`;
	let portfolioDivEnd = `</div>`;
	projects.forEach(item => {
		portfolioDivStart += `
        <a href="${item.url}"
            target="_blank"
            title="${item.title}"
        >
            <div class="portfolio">
                <img src="${item.img}" class="cardImg" id="${item.id}">
                <div class="portfolioCard">${item.header}</div>
            </div>
        </a>`;
	});
	portfolioDivStart += portfolioDivEnd;
	elContent.innerHTML = portfolioDivStart;
};

document.getElementById("btnAbout").addEventListener("click", () => {
	getAbout();
});

document.getElementById("btnContact").addEventListener("click", () => {
	getContact();
});

document.getElementById("btnPortfolio").addEventListener("click", () => {
	getPortfolio();
});
