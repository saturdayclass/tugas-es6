// variable var

x = "Sigit";
var x;
console.log(x);

// variable let

let y;
    y = "wahyudi";
console.log(y);

// variable const

const aku = "kamu";
    console.log(aku);

// template literals

function myName(nama){
    console.log(`namazaya ${nama}`)
}

myName("sigit wahyudi");

// array

const fruits = ["jeruk", "jambu", "melon", "semangka"];

    console.log(fruits[2]);

// desctrcuing array

const barang = [ "baju", "kardus", "meja", "kursi"];

const [ barang1, barang2, barang3, barang4] = barang;

console.log(barang3);

// object

const profile = {
    firstName: "Sigit",
    lastName: "Wahyudi",
    age: 18,
    isMerried: false,
    myHobby: ["code","coffe","sleep"]
};

console.log(`myName is ${profile.firstName} ${profile.lastName}
my age is ${profile.age} merried ${profile.isMerried}`);

// destrucing object

const fakultas = {
    FKI: "Fakultas Komunikasi dan Informatika",
    FK: "Fakultas Kedokteran",
    FEB: "Fakultas Ekonomi Bisnis",
    DLL: [ "FT", "FKIP", "FF"]
};

const { FKI, FK, FEB } = fakultas;
// saya tampilkan semua data di dalam data array menggunakan spread operator
const [ ...items ] = fakultas.DLL;

console.log(`hallo saya dari ${FKI}`);
console.log(`contoh fakultas lainnya yaitu ${items}`);

// spread operator

const hardware = [ "Graphic card", "RAM", "HDD", "SSD"];
    console.log(...hardware);

// function deklaration

function sayHelo(name) {
    console.log(`Halo ${name}`);
}

sayHelo("Sigit Wahyudi");

// function ekspresi

const hello = function(say) {
    console.log(`halo mas ${say}`);
}
hello("sigit");

// arrow function

const Car = myCar => {
    console.log(`my car ${myCar}`);
}
Car("porshe");

// syncronus

console.log("1");
console.log("2");
console.log("3");

// asyncronus

setTimeout(() => console.log("ini terakhir"),3000);
setTimeout(() => console.log("ini kedua"),2000);
setTimeout(() => console.log("ini pertama"),1000);

// callback

const boom = callback => {
    console.log("bom activated");
    setTimeout(() => {
        sound = "DUARNmax";
        callback(sound);
    }, 2000);
}

boom ((sound) => {
    console.log(sound);
})

// fetch

const photo = document.getElementById("hasil");
const role = document.getElementById("hasil2");
const id = document.getElementById("hasil3");
const name = document.getElementById("hasil4");
const email = document.getElementById("hasil5");

const reqApi = async() => {
    try{
        const req = await fetch("https://natours-raihan.herokuapp.com/api/v1/tours")
        const res = await req.json();

        photo.innerHTML = `photo : ${res.data.data[0].guides[0].photo}`;
        role.innerHTML = `role : ${res.data.data[0].guides[0].role}`;
        id.innerHTML = `id : ${res.data.data[0].guides[0]._id}`;
        name.innerHTML = `name : ${res.data.data[0].guides[0].name}`;
       email.innerHTML = `email : ${res.data.data[0].guides[0].email}`;
    } catch(error){
        document.write("Request API error");
    }
}

reqApi();
