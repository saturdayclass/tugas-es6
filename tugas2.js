// variabel

// var

var kamu = "anda";

kamu = "panjenengan";

console.log(kamu)

// let

let saya = "aku";

saya = "kulo";

console.log(saya)

// const

const mereka = "kalian"
console.log(mereka)

// template literals

let nama = "Raflidio"
let sekolah = "SMK Muhammadiyah 1 Sukoharjo"

console.log(`Nama saya adalah ${nama}
Saya sekolah di ${sekolah}`)

// array

const klubbola = ["Persis", "Persiharjo", "Manchaster United"]

console.log(klubbola[2])

// destrucing array

const pulau = ["jawa", "kalimantan", "Bali"]

const [jawa,kalimantan,bali] = pulau

console.log(jawa)

// object

const daerah = {
    nama:"provinsi",
    negara: "Indonesia",
    jenis: ["jateng", "jabar", "jatim"]
};

console.log(daerah.negara)

// destrucing object

const aku = {
    name: "Semeru",
    umur: "16 tahun",
    pendidikan: ["SD", "SMP", "SMK", "Kuliah"]
};

const{name, umur} = saya;
const [SD, SMP, SMK, Kuliah] = aku.pendidikan
console.log(SMK);

// spreadoperat

const hallo = {
    awak: "saya",
    hobby: "travelling",
};

const{...awak} = hallo
console.log(hallo)

// function

function profile(...nama) {
    return `jenengku yaiku ${nama}`;
}

console.log(profile("aku", "kepo", "koe", "wkwk"))

// arrow function

const hal = (sekolah) => {
    return `saya sekolah di`
};
console.log(hal(SMK))

// asyncronus

setTimeout(() => console.log("satu"), 3000)
setTimeout(() => console.log("dua"), 1000)
setTimeout(() => console.log("tiha"), 2000)

// callback

const kereta = (callback) => {
    console.log("Sedang menunggu kereta...")
    setTimeout(() => {
        tiba = "kereta tiba"
        callback(tiba)
    }, 3000 );
};

kereta((tiba) => {
    console.log(tiba)
}
)