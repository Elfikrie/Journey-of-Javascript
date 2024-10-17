
function jumlahkanKubus(){
    let hasil = 0;
    for(let i = 0; i < arguments.length; i++){
        hasil += arguments[i];
    }
    return hasil;
}
console.log(jumlahkanKubus(3,4, 20,30));

let star= '';
for(let i = 0; i < 5; i++){
    for(let j =0; j<=i; j++){
    star += "*";
    }
    star += "\n";
}
console.log(star)

// let starX = "";
// for(let x = 5; x > 0; x-=1){
//     for(let y =5; y <= x; y-=1){
//     starX += "*";
//     }
//     starX += "n";
// }
// console.log(starX);

// for( let x = 10; x > 0; x--){
//     let line = "";
//     for(let y = 0; y < x; y++ ){
//         line += "*";
//     }
//     console.log(line)

// }

let starY = "";
for(let x = 0; x < 5; x++){
    for(let y = 0; y <= x; y++){
        starY += "*";
    }
    starY += "\n";
}
console.log(starY)

let starA = "";
for(let b = 5; b >=0; b--){
    for(let c = 0; c <= b; c++){
        starA += "*";
    }
    starA += "\n";
}
console.log(starA)
