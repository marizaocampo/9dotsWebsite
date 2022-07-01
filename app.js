let quotes = ["Maybe Someday","No", "I Don't Think So" , "Believe Harder, and Try Again"]

// let maybeSomeday = "https://i.pinimg.com/originals/5f/d8/f9/5fd8f97e1434cb7112cde7c676100f85.jpg"
let maybeSomeday2 = "https://i.kym-cdn.com/photos/images/newsfeed/000/582/681/92e.gif"
let no = "https://c.tenor.com/47A61ZpinmsAAAAC/conch-spongebob-squarepants.gif"
let iDontThinkSo = "https://media.giphy.com/media/NcsEoyGjuLUYg/giphy.gif"
let believeHarder = "https://thumbs.gfycat.com/WigglyLinearAmurratsnake-max-1mb.gif"

let btn = document.getElementById("btn")
let text = document.getElementById("text")
let image = document.getElementById("image")
let images = [maybeSomeday2, no, iDontThinkSo, believeHarder]
// let randNum = Math.floor(Math.random()* quotes.length)


btn.addEventListener("click", handleClick)



function handleClick(){
	mkRndNum();
	render();
};

function mkRndNum(){
	return Math.floor(Math.random()* quotes.length)
};


function render(){
	var randNum = mkRndNum();
	text.innerHTML = quotes[randNum]
	image.innerHTML = `<img src=${images[randNum]}>`

};
