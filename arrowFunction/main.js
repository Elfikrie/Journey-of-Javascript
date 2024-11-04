// Function expression
const tampilNama = function(nama){
    return 'halo'+ ' '+ nama;
}

console.log(tampilNama("Fikrie"))

// Arrow Function
const tampilNama2 = nama => 'Hello ' + nama;
console.log(tampilNama2("Fikrie"));

let mahasiswa = ['fikrie', "El Muqoffa", "Muhammad", "El Muqoffa", "El Muqoffa"];

// let jumlahHuruf = () => mahasiswa.map(nama => nama.length );
// console.log(jumlahHuruf());
let mhs1 = () => mahasiswa.map(nama => ({nama, jumlahHuruf : nama.length}))
console.log(mhs1())

let love = "i love you";
console.log(love.replace("you", "Dia"));