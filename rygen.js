//  Variabel

var p = "x";
p = "aku"
let q = "y";
q = "kamu"
const r = "kita";

console.log( p + " dan " + q + " adalah " + r );

//  Template Literal

const number = 8;
const number2 = 15;

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

const elemen = ["api", "air", "tanah", "udara"];

console.log(...elemen);

//  Function

function murid(a,b){
    return `namanya ${a} dan ${b}`;
}

console.log(murid('dody', 'rubi'));

//  arrow function 

const student28 = (name) => {
    return `my name is ${name}`
}

console.log(student28("Rigen"))

//  syncronus

console.log("satu");
console.log("dua");
console.log("tiga");

//  asyncronus

setTimeout(() => console.log("satu"), 3000);
setTimeout(() => console.log("dua"), 4000);
setTimeout(() => console.log("tiga"), 5000);

//  callback

const Alarm = callback => {
    console.log("Tunggu alarm berbunyi...");
    setTimeout(() => {
        bunyi = "NINUNINUNINU";
        callback(bunyi);
    }, 6000)
};

Alarm((cake) => {
    console.log(cake);
})

