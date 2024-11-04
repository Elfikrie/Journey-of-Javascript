// Execution phase, hoisting and scope

console.log(nama);
var nama = "fikrie";

// 1. Kenapa bernilai undefined, itu karena fase yang pertama akan dilakukan ialah creation phase pada global context
// kemudian nama akan diiisi dengan = undifined
// nama function = fn()
// hoisting = seperti menaikkan/ menggerek bendera
// window = global window
// this = window

// execution phase



var nama1 = "Fikrie";
var umur = 22;

console.log(sayHello())

function sayHello(){
    return `hay nama saya ${nama1} dan saya ${umur} tahun`;
};

// function membuat local execution context
// Yang didalamnya terdapat creation dan execution phase
// Didalam local exectuion context kita dapat mengakses :
// window
// arguments
// hoisting


// Contoh 3

var nama3 = "El";
var username = "@elfikrie";

function cetakUrl(username){
    var instagramUrl = "https://instagram.com/";
    return instagramUrl + username;
};

console.log(cetakUrl(username));