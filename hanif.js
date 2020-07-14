//variable
var firstName = 'Hanif';
console.log(firstName);

let lastName = 'Kumara';
console.log(lastName);

const fullName = 'Hanif Kumara';
console.log(fullName);

//Template Literals
const umur = 19;
console.log(`Nama saya ${fullName}, Umur saya ${umur}`);

//Array
const makanan = [ 'Diwan', 'Makan', 'Bakso' ];

//Destructing Array
const minuman = [ 'Es Teh', 'Es Kopi', 'Jus Jambu' ];

const [ menu1, menu2, menu3 ] = minuman;
console.log(menu3);

//Object
let profile = {
	name: 'Fathoni Novantoro',
	age: 18,
	hobby: 'Valir'
};

console.log(profile.name);

//Destructring Object
let posts = {
	title: 'first post',
	body: 'my first post'
};

let { title, body } = posts;
console.log(title, body);

//Spread Operator
const merkHP = [ 'Samsul', 'SNSV', 'Oviv', 'Oddo' ];
const [ merk1, merk2, merk3, merk4 ] = merkHP;
console.log(merk2);

//Rest Parameter
function cobaRestParameter(...tes) {
	return `Coba Rest Parameter ${tes}`;
}

console.log(cobaRestParameter('tes1', 'tes2', 'tes3', 'tes4'));

//Function
//Function Declaration
function declaration() {
	return 'Ini adalah function declaration';
}
console.log(declaration());

//Function Expression
const expression = function() {
	return 'Ini adalah function expression';
};
console.log(expression());

//IIFE (Immediately Invoked Function Expression)
(function() {
	console.log('Auto Execute');
})();

//Arrow Function
arrow = (opoHayoo) => {
	return `Ini adalah Arrow ${opoHayoo}`;
};

console.log(arrow('Function'));

//Syncronus
console.log('Siji');
console.log('Loro');
console.log('Telu');

//Asyncronus
setTimeout(() => console.log('Siji'), 3000);
setTimeout(() => console.log('Loro'), 2000);
setTimeout(() => console.log('Telu'), 1000);

//Callback
const getCoffe = (callback) => {
	let coffe = null;
	console.log('Tunggu sedelok...');
	setTimeout(() => {
		coffe = 'Kopi wes Siap';
		callback(coffe);
	}, 3900);
};

getCoffe((coffe) => {
	console.log(coffe);
});
