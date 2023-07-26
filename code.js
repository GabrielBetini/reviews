const reviews = [
	{
		id: 1,
		name: 'Amanda Gomes',
		img: '/IMG/Image1.jpg',
		cargo: 'Designer',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatum ipsum quasi,quidem odit consectetur ea nisi dolor possimus cumque deserunt veniam architecto abtemporibus cupiditate? Ipsam reprehenderit saepe blanditiis.',
	},
	{
		id: 2,
		name: 'Julio Cezar',
		img: '/IMG/Image2.jpg',
		cargo: 'Programador Frontend',
		text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, placeat. Quaerat voluptates ipsum quos recusandae sequi facere, vero sapiente maiores voluptatum, facilis odio ipsa ullam veritatis similique quo dignissimos explicabo.',
	},
	{
		id: 3,
		name: 'Gabriel Betini',
		img: '/IMG/Image3.jpg',
		cargo: 'Programador Backend',
		text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, nesciunt tempore odio magnam eius repudiandae nobis at, vel accusamus nihil saepe hic quasi officiis dolor pariatur similique iste enim necessitatibus?',
	},
];

const img = document.getElementById('img');
const name = document.getElementById('name');
const cargo = document.getElementById('cargo');
const text = document.getElementById('text');

const btnPrevious = document.querySelector('.previous');
const btnNext = document.querySelector('.next');
const btnSurprise = document.querySelector('.surprise');

//set starting item
let currentItem = 0;

//load initial item
window.addEventListener('DOMContentLoaded', function () {
	showPerson(currentItem);
});

function showPerson(person) {
	const item = reviews[person];
	img.src = item.img;
	name.textContent = item.name;
	cargo.textContent = item.cargo;
	text.textContent = item.text;
}

btnNext.addEventListener('click', function () {
	currentItem++;

	if (currentItem > reviews.length - 1) {
		currentItem = 0;
	}
	showPerson(currentItem);
});

btnPrevious.addEventListener('click', function () {
	currentItem--;

	if (currentItem < 0) {
		currentItem = reviews.length - 1;
	}
	showPerson(currentItem);
});

btnSurprise.addEventListener('click', function () {
	currentItem = Math.floor(Math.random() * reviews.length);
	showPerson(currentItem);
	console.log(currentItem);
});
