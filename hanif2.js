//variable
var jeneng = 'Hanif';
let jeneng2 = 'Hanif Kumara';
const jeneng3 = 'Hanif Kumara Kumara';

//template literals
console.log(`Nama panggilan saya ${jeneng}. Nama lengkap saya ${jeneng2}`);

//array
const heroDota = [ 'Phantom Assasin', 'Pudge', 'Juggernaut', 'Rikki', 'INVOKER' ];

//destructing array
[ heroGila1, heroGila2, heroGila3, heroGila4, heroGila5 ] = heroDota;
console.log(heroGila5);

//object
const hargaHP = {
	asus: 'Rp. 12.000.000',
	samsung: 'Rp. 10.000',
	xiaomi: 'Rp. 9.000.000'
};

//destructing object
const { asus, samsung, xiaomi } = hargaHP;
console.log(`Harga Hp ASUS :${asus}, Samsung :${samsung} dan Xiaomi :${xiaomi} `);

//spread operator
const kendaraan = [ 'motor', 'mobil', 'pesawat', 'kereta' ];
console.log(...kendaraan);

//rest parameter
const restParameter = (...hobby) => {
	return `Hoby saya ${hobby}`;
};
console.log(restParameter('salto', ' sepak bola', ' game'));

//function declaration
function deklarasi(none) {
	return `Coba function ${none}`;
}
console.log(deklarasi('deklarasi'));

//function expression
const expression = function() {
	return `ini function expression`;
};
console.log(expression());

//arrow function
const arrowFunction = (m) => `Arrow ${m}`;
console.log(arrowFunction('Function'));

//IIFFE
(function() {
	console.log('Opo iki??');
})();

//syncrhonous
console.log('tampil pertama');
console.log('tampil kedua');
console.log('tampil ketiga');

// asyncrnous
setTimeout(() => console.log('tarakhir'), 1900);
setTimeout(() => console.log('pertama'), 1500);
setTimeout(() => console.log('kedua'), 1600);

//callback
const ticketBioskop = (callback) => {
	let ticket = '';
	console.log('wait a minute...');
	setTimeout(() => {
		ticket = 'ticket is ready';
		callback(ticket);
	}, 3000);
};

ticketBioskop((ticket) => {
	console.log(ticket);
});

//fetch
const photo = document.getElementById('photo');
const role = document.getElementById('role');
const id = document.getElementById('id');
const name = document.getElementById('name');
const email = document.getElementById('email');

const requestGeni = async () => {
	try {
		const req = await fetch('https://natours-raihan.herokuapp.com/api/v1/tours');
		const res = await req.json();
		photo.innerHTML = res.data.data[0].guides[0].photo;
		role.innerHTML = res.data.data[0].guides[0].role;
		id.innerHTML = res.data.data[0].guides[0]._id;
		name.innerHTML = res.data.data[0].guides[0].name;
		email.innerHTML = res.data.data[0].guides[0].email;
	} catch (error) {
		console.log(error);
	}
};

requestGeni();
