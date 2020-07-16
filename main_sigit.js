

// variable var
var x = 'x';
    x = 'nama';

// variable let
let y = 'y';
    y = 'saya';

// variable const
const s = 'sigit';

console.log(`variable ${x} ${y} ${s}`)

// template literals
const fullName = 'Sigit Wahyudi';

console.log(`'template literals' nama saya ${fullName}`);

// array
const fruits = [ 'jeruk', 'mangga', 'lemon', 'semangka', 'melon'];

console.log(`array ${fruits[3]}`);

// desctrucing array
const sayuran = ['bayam', 'kubis', 'tomat', 'kankung'];

const [ sayuran1, sayuran2, sayuran3, sayuran4] = sayuran;

console.log(`dectrucing array ${sayuran3}`);

// object

let profilKu = {
    name: 'sigit',
    age: 18,
    object: true,
};

console.log(`nama saya ${profilKu.name} umur saya ${profilKu.age} object status ${profilKu.object}`);

// desctrucing object

const aku = {
    namaKu :'Sigit',
    usiaKu : 18,
    hobbyKu : ['rebahan', 'tiduran', 'code'],
};

const { namaKu, usiaKu } = aku;
const [ hobby1, hobby2, hobby3 ] = aku.hobbyKu;

console.log(`desctrucing object namaku ${namaKu} dan hobbyku ${hobby3}`);

// spread operator

const animal = ['kucing', 'anjing', 'kerbau', 'sapi'];

console.log(...animal);

// function deklarasi
function myName(...name) {
    return `my name is ${name}`;
}

console.log(myName('sigit', 'wahyudi'));
