// variabel
// var 
var pantai = "beach"

pantai = "segara"

console.log(pantai)

// let

let gunung = "giri"

gunung = "tawang"

console.log(gunung)

// const

const sayang = "love"

console.log(sayang)

// template literals

let bukit = "mongkrang"
let lokasi = "tawangmangu"

console.log(`bukit ${bukit} berada di daerah ${lokasi}`)

// array

const kabupaten = ["Sukoharjo", "Karanganyar","Boyolali", "Klaten"]

console.log(kabupaten[0])

// destruching array

const kota = ["Solo", "Semarang", "Bandung", "Surabaya", "Pasuruan"]

const [Solo,Semarang,Bandung,Surabaya,Pasuruan] = kota

console.log(Pasuruan)

// object

const desa = {
    nama: "Daleman",
    kecamatan: "Nguter",
    daerah: ["sukoharjo","wonogiri","klaten"]
}

console.log(desa.nama)

// destruching object

const saya = {
    jeneng: "Dio",
    umur: "16 tahun",
    hobby: ["Hiking", "Travelling", "Bermaindrum"]
}

const{jeneng, umur} = saya;
const [Hiking,Travelling,Bermanindrum] = saya.hobby
console.log(Hiking);

// spredoperat

const stadion = {
    bola: "ball",
    organisasi: "pssi"
}

const{...bola} = stadion
console.log(stadion)

// function

function laptop(...acer) {
    return `laptop ku adalah ${acer}`;
}

console.log(laptop("asus","hp","toshiba"))

// arrow function

const bus = (terminal) => {
    return `bis jurusan surabaya`
}

console.log(bus(Hiking))

// asyncronus

setTimeout(() => console.log("sebentar"), 3000)
setTimeout(() => console.log("mulai"), 1000)
setTimeout(() => console.log("mendarat"), 2000)

// callback

const pesawat = (callback) => {
    console.log("menunggu pesawat lepas landas")
    setTimeout(() => {
        datang = "pesawat mendarat"
        callback(datang)
    },4000)
}
pesawat((datang) => {
    console.log(datang)
})

fetch

// photo
const photo = document.getElementById("photo");

const requestApi1 = async () => {
    try{
        const req = await fetch("https://natours-raihan.herokuapp.com/api/v1/tours")
        
        const res = await req.json();

        photo.innerHTML =`<h1>${res.data.data[0].guides[0].photo}</h1>` 
    }
     catch(error){
         console.log(error)
     }
}


requestApi1();

// role

const role = document.getElementById("role");

const requestApi2 = async () => {
    // try
    try{
        const req = await fetch("https://natours-raihan.herokuapp.com/api/v1/tours")

        const res = await req.json();

        role.innerHTML = `<h2>${res.data.data[0].guides[0].role}</h2>`
    }
    // error
    catch(error){
        console.log(error)
    }
};

requestApi2();

const tes = document.getElementById("tes")

const requestApi3 = async () => {
    // try
    try{
    const req = await fetch ("https://natours-raihan.herokuapp.com/api/v1/tours")
    const res = await req.json()

    tes.innerHTML = `<h3>${res.data.data[0].guides[0]._id}</h3>`
}
// error
catch(error){
    console.log(error)
}
}

requestApi3()

// name
const name = document.getElementById("name")

const requestApi4 = async () => {
    // try
    try{
        const req = await fetch ("https://natours-raihan.herokuapp.com/api/v1/tours")
        const res = await req.json()

        name.innerHTML = `<h4>${res.data.data[0].guides[0].name}</h4>`
    }

    // error
    catch(error){
        console.log(error)
}
}

requestApi4()

// email
const email = document.getElementById("email")

const requestApi5 = async () => {
    // try
    try{
        const req = await fetch ("https://natours-raihan.herokuapp.com/api/v1/tours")
        const res = await req.json()

        name.innerHTML = `<h5>${res.data.data[0].guides[0].email}</h5>`
    }

    // error
    catch(error){
        console.log(error)
    }
}

requestApi5()