//  Variabel

var x = "x";
x = "aku"
let y = "y";
y = "dan"
const z = "kamu";

console.log( x + " " + y + " " + z );

//  Template Literal

const number = 5;
const number2 = 10;

console.log(`jika ${number} ditambah dengan ${number2} hasilnya ${number + number2}`);

//  Array

let tool = ["kipas", "remot", "tv"];

console.log(tool[2]);

//  Destructuring Array

let mhs = ["roni", "budi", "aji"];

let [mhs1, mhs2, mhs3] = mhs;

console.log(mhs2);

//  Object

let hewan = {
    nama : "kambing",
    makanan : "rumput",
    hidup : "darat"
};

console.log( hewan.nama + " memakan " + hewan.makanan + " dan hidup di " + hewan.hidup );

//  Destructuring Object

const siswa = {
    nama : "Rigen",
    kelas : "X-RPL",
    umur : 16 
};

const {nama, kelas, umur} = siswa;

console.log(nama)

//  Spread Operator

const food = ["roti", "kue", "daging", "sayur"];

console.log(...food);

