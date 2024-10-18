let star = "";

for  (let i =0; i < 5; i++){
    for(let x = 0; x <= i; x++){
        star += "*";
    }
    star += "\n";
}
console.log(star)

let starX = "";
for(let y = 5; y > 0; y--){
    for( let z=0; z <  y; z++){
        starX = starX + "*";
    }
    starX += "\n";
}
console.log(starX)

let starJ = "";
for(let j = 0; j < 5; j++){
    for(let k = 5; k > j; k--){
        starJ += "*";
    }
    starJ += "\n";
}
console.log(starJ)

