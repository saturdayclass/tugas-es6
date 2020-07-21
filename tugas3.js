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
    name: "Dio",
    umur: "16 tahun",
    hobby: ["Hiking", "Travelling", "Bermaindrum"]
}

const{name, umur} = saya;
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

// fetch

const element = document.getElementById("hasil");

const requestApi = async () => {
    try{
        const req = await fetch("https://natours-raihan.herokuapp.com/api/v1/tours")
        
        const res = await req.json()

        element.innerHTML =`<h1>${res.data.data[3].secretTour.guides}</h1>`
    }
     catch(error){
         console.log(error)
     }
}


requestApi();