

albums={
	album0: {
		"name": "ley lines",
		"artist": "flor",
		"release": "September 6, 2019",
		"color": "#CFF0CF",
		"image": "ley_lines.jpg"
	},

	album1: {
		"name": "We Forgot We Were Dreaming",
		"artist": "Saint Raymond",
		"release": "April 6, 2021",
		"color": "#FFC000",
		"image": "wfwwd.jpg"
	},

	album2: {
		"name": "Lovely Little Lonely",
		"artist": "The Maine",
		"release": "April 7, 2017",
		"color": "#2F4F4F",
		"image": "lovely_little_lonely.jpg"
	},

	album3: {
		"name": "Vices & Virtues",
		"artist": "Panic! at the Disco",
		"release": "March 18, 2011",
		"color": "#622F22",
		"image": "vices.jpg"
	}
};



let page=document.getElementById("full_site");



let titleContainer=document.createElement("DIV");
titleContainer.classList.add("titleContainer");

let title=document.createElement("p");
title.classList.add("title");
title.innerText="Albums You Should Listen To";
titleContainer.appendChild(title);


page.appendChild(titleContainer);


for(let i=0;i<4;i++){
	let data=Object.values(albums)[i];
	data=Object.values(data);


	let container=document.createElement("DIV");
	container.classList.add("albumContainer");

	let text=document.createElement("DIV");
	text.classList.add("albumText");
	text.style.color = data[3];

	let aT=document.createElement("p");
	aT.classList.add("albumTitle");
	aT.innerText=data[0];
	if(i>1){
		aT.style.textShadow="none";
	}
	text.appendChild(aT);

	let aA=document.createElement("p");
	aA.classList.add("albumContent");
	aA.innerText="Artist: "+data[1];
	if(i>1){
		aA.style.textShadow="none";
	}
	text.appendChild(aA);

	let aR=document.createElement("p");
	aR.classList.add("albumContent");
	aR.innerText="Released: "+data[2];
	if(i>1){
		aR.style.textShadow="none";
	}
	text.appendChild(aR);

	container.appendChild(text);

	let img=document.createElement("img");
	img.classList.add("albumImage");
	img.src=data[4];
	container.appendChild(img);


	page.appendChild(container);
}


