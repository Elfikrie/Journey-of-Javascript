// variabel global/global scope
// Javacscript menggunakan function scope
// Bisa mengakses variabel diluar fungsi dan tak bisa mengakses variabel dari luar fungsi
let a = 0;

function aa(){
    let b = 5; 
    console.log(b); 
    console.log(a) 
}
aa()
