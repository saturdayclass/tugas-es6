// 01 variabel

// var
var oke = "hai";

oke = "hallo"

console.log(oke)

// let
let x = "2";

x = "200";

console.log(x);

// const
const nama = "kamu";
console.log(nama);

// template liters
const ikan = "wader";

console.log(`salah satu ikan di kali adalah ${ikan}`)

// array
const kabupaten = ["solo", "semarang", "surabaya"];

console.log(kabupaten[1])

// destrucing  array
const kota = ["jogja", "bantul", "sleman"]

const  [jogja, bantul, sleman] = kota;

console.log(jogja);

// object
const hewan = {
    nama: "sapi",
    makan: "rumput",
    jenis: ["jawa", "bali", "NTT"]
};

console.log(hewan.jenis[0]);

// destruching object

const kewan = {
    jeneng: "wedus",
    usia: "4 bulan",
    terotial: ["kalimantan", "Sumatra", "Sulawesi"],
};

const{ jeneng, terotial} = kewan;
const [kalimantan, sumatra, sulawesi] = kewan.terotial;
console.log(kalimantan);

// spreadoperat
const hallo = {
    aku: "hai",
    hobby: "halu",
};

const{...aku} = hallo;
console.log(hallo);
