let quotes = ['Maybe Someday', 'Nothing', 'Neither', 'Nothing']
let btn = document.getElementById("btn")
let text = document.getElementById("text")

btn.addEventListener("click", handleClick)



function handleClick(){
	console.log(mkRndNum());
	mkRndNum();
	render();
};

function mkRndNum(){
	return Math.floor(Math.random()* (quotes.length))
};

function render(){
	text.innerHTML = quotes[mkRndNum()]

};
