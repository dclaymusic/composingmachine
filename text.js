
//for loop could build a collection of cells on the fly
var cells = [];
var songImages = [];
var idNameIndex = 0;
var tempo = 1000;
var metronomeSpeed = 60;
var metronomeInc = 0;
var timer;

var bankChoice;
var isOpeningScreen = true;
var isPlaying = false;

const title = [
	[
		'The ',
		''
	],

	//Adjectives
	[
		'Big ',
		'Dull ',
		'Missing ',
		'Tiny ',
		'Little ',
		'Lonely ',
		'Tired ',
		'Caring ',
		'Totally Normal ',
		'Hairy ',
		'Nauseous ',
		'Eager ',
		'Shy ',
		'Musical ',
		'Crunchy ',
		'Quick ',
		'Forgetful ',
		'Bashful ',
		'Rusty ',
		'Loud ',
		'Disappointed ',
		'Tall ',
		'Fluffy ',
		'Irritating ',
		'Lazy ',
		'Green ',
		'Proper ',
		'Evil ',
		'Digital ',
		'Radiant ',
		'Sleepy ',
		'Creepy ',
		'Boring ',
		'Blue ',
		'Crazy ',
		'Red ',
		'Nutty ',
		'Super ',
		'Cute ',
		'Funny ',
		'Sad ',
		'Cool ',
		'Strong ',
		'Honest ',
		'Summer ',
		'Winter ',
		'Rogue ',
		'Microscopic ',
		'Secret ',
		'Bouncy ',
		'Tiny ',
		'Messy ',
		'Clean ',
		'Sticky ',
		'Diabolical ',
		'Sheepish ',
		'Mad ',
		'Awesome ',
		'Weird ',
		'Suspicious ',
		'Golden ',
		'Dusty ',
		'Stinky ',
		'Goofy  ',
		'Sleepy  ',
		'Hungry  ',
		'Unpleasant  ',
		'Humble  ',
		'Rude ',
		'Mean ',
		'Disastrous ',
		'Smart ',
		'Fearless ',
		'Heroic ',
		'Simple  ',
		'Excited  ',
		'Angry  ',
		'Annoying  ',
		'Happy  ',
		'Surprised  ',
		'Horrible  ',
		'Playful ',
		'Friendly ',
		'Retired ',
		'Thirsty ',
		'Emotional ',
		'Smooth ',
		'Glowing ',
		'Intelligent ',
		'Helpless ',
		'Useful ',
		'Helpful ',
		'Sloppy ',
		'Beautiful ',
		'Careful ',
		'Careless ',
		'Brave ',
		'Grateful ',
		'Outgoing ',
		'Quiet ',
		'Scared ',
		'Frowning ',
		'Humongous ',
		'Ridiculous ',
		'Perfect ',
		'Silent ',
		'Salty ',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		''
	],

	//Nouns
	[
		'Sneeze',
		'Unicorn',
		'Snowflake',
		'Human',
		'Spaceship',
		'Lizard',
		'Hawk',
		'Cricket',
		'Sloth',
		'Brother',
		'Flower',
		'Hot Dog',
		'Piano',
		'Cats',
		'Dogs',
		'Coconut',
		'Milk Carton',
		'Helicopter',
		'Orange',
		'Ukulele',
		'Skeleton',
		'Skunk',
		'Watermelon',
		'Coffee Cup',
		'Cracker',
		'Storybook',
		'Banana',
		'Bucket',
		'Cow',
		'Bus Driver',
		'Smoothie',
		'Amusement Park',
		'Reindeer',
		'Horse',
		'Pizza',
		'Waterfall',
		'Cheerleader',
		'Strawberry',
		'Memories',
		'Thing',
		'Hero',
		'Mom',
		'Babies',
		'Chicken Nugget',
		'Bells',
		'Palace',
		'Elf',
		'Tree',
		'Hippo',
		'Sandwich',
		'Burrito',
		'Spaghetti',
		'Pig',
		'Snakes',
		'Thing',
		'Sheep',
		'Ant',
		'Dude',
		'Puppy',
		'Fish',
		'Vegetable',
		'Teacup',
		'Dragon',
		'Apple',
		'Bird',
		'House',
		'Subway',
		'Bunny',
		'Kid',
		'Book',
		'House',
		'King',
		'Snail',
		'Orange',
		'Lion',
		'Student',
		'Schoolteacher',
		'Elephant',
		'Tiger',
		'Chicken',
		'Kitten',
		'Puppy',
		'Dinosaur',
		'Pony',
		'Robot',
		'Alien',
		'Clown',
		'Peanut',
		'Cookie',
		'Classmate',
		'Butter',
		'Bread',
		'Rice',
		'Marshmallow',
		'Bean',
		'Salt',
		'Pepper',
		'Soup',
		'Lemon',
		'Dad',
		'Grandpa',
		'Grandma',
		'Trash Can',
		'Guy',
		'Egg',
		'Computer',
		'Hedgehog',
		'Pencil',
		'Spider',
		'Firefly',
		'Hummingbird',
		'Truck',
		'Hat',
		'Rock',
		'Water Bottle',
		'Ice Cream',
		'Squid',
		'Chimes',
		'Pupusa'
	]
]

function randomInt(max)
{
	rand_val = Math.floor(Math.random() * Math.floor(max + 1))
	return rand_val;
}

function toggleSelect(n)
{
	let g = document.getElementById('go');

	if(isOpeningScreen)
	{
		let c1 = document.getElementById('bank1');
		let c2 = document.getElementById('bank2');
		let c3 = document.getElementById('bank3');

		bankChoice = n;
		g.onclick = toBankScreen;

		if(n == 1) { 
			c1.style.border = '4px solid red';
			c2.style.border = '4px solid transparent';
			c3.style.border = '4px solid transparent';
			g.innerHTML = 'Treble Clef';
		}

		if(n == 2) {
			c2.style.border = '4px solid red';
			c1.style.border = '4px solid transparent';
			c3.style.border = '4px solid transparent';
			g.innerHTML = 'Rhythm';
		}

		if(n == 3) {
			c3.style.border = '4px solid red';
			c1.style.border = '4px solid transparent';
			c2.style.border = '4px solid transparent';
			g.innerHTML = 'Solfege';
		}
	}
	else
	{
		g.onclick = writeSong;
		g.innerHTML = 'Compose';
		
		//selecting sound choices
		if(n == 1) {
			let i1 = document.getElementById('bc1a');
			let i2 = document.getElementById('bc1b');
			let i3 = document.getElementById('bc1c');
		}
	}

}

function toBankScreen() 
{

	isOpeningScreen = false;
	document.getElementById('credit').style.display = 'none';

	document.getElementById('soundbanks').style.display = 'none';
	document.getElementById('bankchoices').style.display = 'block';
	document.getElementById('go').innerHTML = 'Compose';
	document.getElementById('go').onclick = writeSong;

	//treble clef
	if(bankChoice == 1)
	{
		document.getElementById('bank1choices').style.display = 'block';
		document.getElementById('bank2choices').style.display = 'none';
		document.getElementById('bank3choices').style.display = 'none';
		cells.push('trest');
		//add onclicks to each image toggling

	}

	//rhythms
	if(bankChoice == 2)
	{
		document.getElementById('bank1choices').style.display = 'none';
		document.getElementById('bank2choices').style.display = 'block';
		document.getElementById('bank3choices').style.display = 'none';
		cells.push('rrest');
	}

	//solfege
	if(bankChoice == 3)
	{
		document.getElementById('bank1choices').style.display = 'none';
		document.getElementById('bank2choices').style.display = 'none';
		document.getElementById('bank3choices').style.display = 'block';
		cells.push('srest');
		//cells.push();
	}
}

/* THIS IS NOT WORKING PROPERLY */
function addSoundToBank(n)
{

	let label = n + '-labeled';
	let n2 = n + '2';
	let inArray = false;

	if(bankChoice == 1)
	{
		for(var i in cells) {
			if(cells[i] == n) { 
				inArray = true; 
				document.getElementById(label).style.border = '4px solid transparent';
				cells.splice(i, 1);
			}
			if(cells[i] == n2) { 
				inArray = true; 
				document.getElementById(label).style.border = '4px solid transparent';
				cells.splice(i, 1);
			}
		}

		if(!inArray) 
		{
			document.getElementById(label).style.border = '4px solid red';
			cells.push(n);
			cells.push(n2);
		}
	}

	else
	{
		for(var i in cells) {
			if(cells[i] == n) { 
				inArray = true; 
				document.getElementById(n).style.border = '4px solid transparent';
				cells.splice(i, 1);
			}
		}
		if(!inArray) 
		{
			document.getElementById(n).style.border = '4px solid red';
			cells.push(n);
		}
	}

}

function toOpeningScreen() {
	songImages = [];
	idNameIndex = 0;
	bankChoice = 0;
	isPlaying = false;
	// togglePlay();
	isOpeningScreen = true;
	document.getElementById('credit').style.display = 'block';
	document.getElementById('tempocontainer').style.display = 'none';
	document.getElementById('play').style.display = 'none';
	document.getElementById('play').innerHTML = 'Play';
	document.getElementById('title').innerHTML = 'The Composing Machine';
	document.getElementById('soundbanks').style.display = 'block';
	document.getElementById('bankchoices').style.display = 'none';
	document.getElementById('go').innerHTML = '(None Selected)';
	document.getElementById('go').onclick = null;
	document.getElementById("line1").style.display = 'none';
	document.getElementById("line2").style.display = 'none';
	document.getElementById('restart').style.display = 'none';
	document.getElementById('line1').style.display = 'none';
	document.getElementById('line2').style.display = 'none';
	cells = [];
	let img = document.querySelectorAll('img');
	images = Array.prototype.slice.call(img);
	images.forEach(function(i) {
		if(i.style.border == '4px solid red')
		{ i.style.border = '4px solid transparent'; }
	});
}

function writeSong()
{
	document.getElementById('tempocontainer').style.display = 'block';

	songImages = [];
	idNameIndex = 0;
	// isPlaying = true;
	// togglePlay();
	// document.getElementById('play').innerHTML = 'Play';
	document.getElementById('play').style.display = 'block';
	document.getElementById('bankchoices').style.display = 'none';
	document.getElementById('restart').style.display = 'block';
	document.getElementById('line1').style.display = 'block';
	document.getElementById('line2').style.display = 'block';
	document.getElementById('go').innerHTML = 'New Song';
	
	const line1 = document.getElementById("line1");
	line1.innerHTML = '';
	const line2 = document.getElementById("line2");
	line2.innerHTML = '';

	line1.style.display = 'block';
	line2.style.display = 'block';

	//clefs
	if(bankChoice != 3)
	{
				
		let thisClef;

		if(bankChoice == 1) { thisClef = 'img/tclef.png'; }
		else if(bankChoice == 2) { thisClef = 'img/rclef.png'; }

		let clef1 = document.createElement("img");
		clef1.className = 'notes';
		clef1.src = thisClef;
		line1.appendChild(clef1);
	
		let clef2 = document.createElement("img");
		clef2.className = 'notes';
		clef2.src = thisClef;
		line2.appendChild(clef2);
	}
	
	
	let thisSong = [];
	let sections = [];
	let r, thisForm, reuseA, totalSections;

	//Form 0 - AABA 20%
	//Form 1 - ABAB 20%
	//Form 2 - ABAC 30%
		//2.1 - C is new material 40%
		//2.2 - C is fragmented A 60%
	//Form 3 - ABCB 30%
		//3.1 - C is new material 40%
		//3.2 - C is fragmented A 60%

	let formWeight = [0.2, 0.4, 0.6, 1.0];

	r = Math.random();
	for(let i = 0; i < formWeight.length; i++)
	{
		if(i == 0) 
		{
			if(r <= formWeight[i] && r > 0)
			{ thisForm = i; break; }
		}
		else 
		{ 
			if(r <= formWeight[i] && r > formWeight[i-1])
			{ 
				thisForm = i; 
				//if Form 2 or 3, mark to reuse "A" block later
				if(i == 2 || i == 3)
				{
					r = Math.random();
					//60% weight towards fragmenting A block
					if(r <= 0.6) { reuseA = true; }
					else { reuseA = false; }
				}
				break; 
			}
		}
	}

	//total sections to build based on form type
	if(thisForm == 0 || thisForm == 1) { totalSections = 2; } 
	else { totalSections = 3; }

	//write measures for each section
	for(let i = 0; i < totalSections; i++)
	{
		//write a 4/4 measure
		let thisSection = [];

		//Random Choice
		
		for(let j = 0; j < 4; j++)
		{
			let thisBeat = cells[randomInt(cells.length - 1)];
			// let thisCell = document.getElementById(thisBeat);
			// if(bankChoice == 2 && thisCell.className == 'twobeats' && (j == 1 || j == 3))
			// {
			// 	thisBeat = 'rest';
			// 	console.log('boom');
			// }
			// if(thisBeat.length > 1) { thisBeat }
			thisSection.push(thisBeat);				
		}
		//thisSection.push('|');
		sections.push(thisSection);
	}

	//write sections to song
	if(thisForm == 0) { thisSong = [sections[0], sections[0], sections[1], sections[0]]}
	if(thisForm == 1) { thisSong = [sections[0], sections[1], sections[0], sections[1]]}
	if(thisForm == 2) { thisSong = [sections[0], sections[1], sections[0], sections[2]]}
	if(thisForm == 3) { thisSong = [sections[0], sections[1], sections[2], sections[1]]}

	//translate song to necessary images
	for(let i = 0; i < thisSong.length; i++)
    {
	
		for(let j = 0; j < 4; j++)
		{
			
			let imgName = thisSong[i][j];

			idNameIndex++;

			let img = document.createElement("img");
			img.className = 'notes';
			img.src = `img/` + imgName + '.png';
			if(i <= 1) { document.getElementById('line1').appendChild(img); }
			else { document.getElementById('line2').appendChild(img); }

			//add id and push to songImages array
			img.id = 'note' + idNameIndex;
			songImages.push('note' + idNameIndex);

			if(bankChoice != 3)
			{
				if(j == 3 && i < thisSong.length - 1) 
				{ 
					let img = document.createElement("img");
					img.src = 'img/bar.png';
					if(i <= 1) { document.getElementById('line1').appendChild(img); }
					else { document.getElementById('line2').appendChild(img); }
				}
				if(j == 3 && i == thisSong.length - 1) 
				{ 
					let img = document.createElement("img");
					img.src = 'img/end.png';
					if(i <= 1) { document.getElementById('line1').appendChild(img); }
					else { document.getElementById('line2').appendChild(img); }
				}
			}
			else
			{
				//if solfege, give it a border
				img.style.borderTop = '4px solid black';
				img.style.borderBottom = '4px solid black';
				img.style.borderLeft = '1px solid black';
				img.style.borderRight = '1px solid black';
			}

		}

    }

	writeTitle();
	resizeImages();

}

function togglePlay() {
	isPlaying = !isPlaying;


	if(isPlaying)
	{
		document.getElementById("tempo").disabled = true;
		metronomeInc = 0;
		timer = setInterval(metronome, tempo);
		document.getElementById('play').innerHTML = 'Stop';
	}
	else
	{
		document.getElementById("tempo").disabled = false;
		metronomeInc = 0;
		document.getElementById('play').innerHTML = 'Play';
		for(let i = 0; i < songImages.length; i++)
		{
			document.getElementById(songImages[i]).style.outline = 'none';
		}
		clearInterval(timer);
	}
}

function resetTimer()
{
	// metronomeInc = 0;
	// document.getElementById('play').innerHTML = 'Play';
	// for(let i = 0; i < songImages.length; i++)
	// {
	// 	document.getElementById(songImages[i]).style.outline = 'none';
	// }
	// clearInterval(timer);
}

function metronome()
{
	document.getElementById(songImages[metronomeInc]).style.outline = '4px red solid';
	document.getElementById(songImages[metronomeInc]).style.outlineOffset = '-4px';
	if(metronomeInc != 0) 
	{ 
		document.getElementById(songImages[metronomeInc-1]).style.outline = 'none';
	}
	metronomeInc++;
	if(metronomeInc == songImages.length)
	{
		setTimeout(togglePlay, tempo);
	}
}

function setTempo() 
{
	document.getElementById('tempo').oninput = function() {
		metronomeSpeed = this.value;
		tempo = (60/metronomeSpeed)*1000;
		document.getElementById('output').innerHTML = this.value + ' BPM';

	  }
}

function resizeImages()
{
	let h = window.innerHeight;

	var images = document.querySelectorAll('img'), // Fetch all images wih the 'myImg' class
	imageArray = Array.prototype.slice.call(images); // Use Array.prototype.slice.call to convert the NodeList to an array

	imageArray.forEach(function(img) { // Now itterate over each image in the array
	img.style.height = h*0.22 + 'px'; // Set the height and width
	});
}

function writeTitle()
{
	let thisTitle = title[0][randomInt(title[0].length-1)] + title[1][randomInt(title[1].length-1)] + title[2][randomInt(title[2].length-1)];
	document.getElementById("title").innerHTML = thisTitle;
}