// Rekursif : Memanggil fungsi(dirinya) sendiri sampai mencapai batasnya
// untuk memberhentikan rekursif maka kita perlu menambahkan basecase
function panggilAngka(n){
    // Awal basecase
    if(n === 0) return;
    // Akhir basecase
    console.log(n);
    return panggilAngka(n-1);
}

panggilAngka(10);


// Bisa digunakan dalam faktorial
function faktorial(a){
    if(a === 0) return 1;
    return a * faktorial(a-1);
}
console.log(faktorial(5));

// Setiap looping bisa kita ganti menjadi rekursif tetapi tidak sebaliknya

function panggilYou(n){
    for(let i = n; i<10; i++) {
        console.log(i);
    }
}
panggilYou(5);

console.log("FaktorialYou")
function faktorialYou(s){
    let hasil = 1;
    for(let i = s; i>0; i--){
        hasil *= i;
    }
    return hasil;
}
console.log(faktorialYou(5));


