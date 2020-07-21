//  Variabel

var a = "x";
a = "aku"
let b = "y";
b = "kamu"
const c = "kita";

console.log( a + " dan " + b + " adalah " + c );

//  Template Literal

const number = 4;
const number2 = 2;

console.log(`${number} ditambah ${number2} adalah ${number + number2}`);

//  Array

let drink = ["susu", "madu", "jahe"];

console.log(drink[0]);

//  Destructuring Array

let anime = ["Dragon Ball", "One Piece", "Naruto"];

let [D, O, N] = anime;

console.log(O);

//  Object

let hewan = {
    nama : "kucing",
    makanan : "ikan",
    hidup : "darat"
};

console.log( hewan.nama + " memakan " + hewan.makanan + " dan hidup di " + hewan.hidup );

//  Destructuring Object

const siswa = {
    nama : "Rygen",
    kelas : "XI-RPL",
    umur : 16 
};

const {nama, kelas, umur} = siswa;

console.log(nama)

//  Spread Operator

const elemen = ["angin", "es", "api", "tanah"];

console.log(...elemen);

//  Function

function murid(x,y){
    return `namanya ${x} dan ${y}`;
}

console.log(murid('dody', 'rubi'));

//  arrow function 

const student28 = (name) => {
    return `my name is ${name}`
}

console.log(student28("Rygen"))

//  syncronus

console.log("satu");
console.log("dua");
console.log("tiga");

//  asyncronus

setTimeout(() => console.log("three"), 3000);
setTimeout(() => console.log("two"), 4000);
setTimeout(() => console.log("one"), 5000);

//  callback

const Alarm = callback => {
    console.log("polisi datang");
    setTimeout(() => {
        bunyi = "NINUNINUNINU";
        callback(bunyi);
    }, 6000)
};

Alarm((bunyi) => {
    console.log(bunyi);
})

//  fetch

        //  photo

const photo = document.getElementById('photo');

const reqApi = async () => {
    try {
        const req = await fetch('https://natours-raihan.herokuapp.com/api/v1/tours')
        const res = await req.json();
        photo.innerHTML = `<h1>${res.data.data[0].guides[0].photo}</h1>`;
    } catch(error) {
        console.log(error);
    }
};

reqApi();

        //  role

const role = document.getElementById('role');

const reqApi2 = async () => {
    try {
        const req = await fetch('https://natours-raihan.herokuapp.com/api/v1/tours')
        const res = await req.json();
        role.innerHTML = `<h2>${res.data.data[0].guides[0].role}</h2>`;
    } catch(error) {
        console.log(error);
    }
};

reqApi2();

        //  _id

const id = document.getElementById('_id');

const reqApi3 = async () => {
    try {
        const req = await fetch('https://natours-raihan.herokuapp.com/api/v1/tours')
        const res = await req.json();
        id.innerHTML = `<h3>${res.data.data[0].guides[0]._id}</h3>`;
    } catch(error) {
        console.log(error);
    }
};

reqApi3();

        //  name

const name = document.getElementById('name');

const reqApi4 = async () => {
    try {
        const req = await fetch('https://natours-raihan.herokuapp.com/api/v1/tours')
        const res = await req.json();
        name.innerHTML = `<h4>${res.data.data[0].guides[0].name}</h4>`;
    } catch(error) {
        console.log(error);
    }
};

reqApi4();

        //  email

const email = document.getElementById('email');

const reqApi5 = async () => {
    try {
        const req = await fetch('https://natours-raihan.herokuapp.com/api/v1/tours')
        const res = await req.json();
        email.innerHTML = `<h4>${res.data.data[0].guides[0].email}</h4>`;
    } catch(error) {
        console.log(error);
    }
};

reqApi5();