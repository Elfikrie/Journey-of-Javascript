// Ruang Keluarga
function saklarKeluarga() {
    lampu1 = document.getElementById("lampu1");
    lampu2 = document.getElementById("lampu2");
    lampu3 = document.getElementById("lampu3");

    toogle1 = document.getElementById("toogle1");
   
    if (toogle1.checked) {
        lampu1.src = "assets/Images/on.gif";
        lampu2.src = "assets/Images/on.gif";
        lampu3.src = "assets/Images/on.gif";
    } else {
        lampu1.src = "assets/Images/off.gif";
        lampu2.src = "assets/Images/off.gif";
        lampu3.src = "assets/Images/off.gif";
    }
}
// Ruang Tamu
function saklarTamu() {
    lampu4 = document.getElementById("lampu4");
    lampu5 = document.getElementById("lampu5");
    lampu6 = document.getElementById("lampu6");
    lampu7 = document.getElementById("lampu7");

    toogle2 = document.getElementById("toogle2");

    if (toogle2.checked) {
        lampu4.src = "assets/Images/on.gif";
        lampu5.src = "assets/Images/on.gif";
        lampu6.src = "assets/Images/on.gif";
        lampu7.src = "assets/Images/on.gif";
    } else {
        lampu4.src = "assets/Images/off.gif";
        lampu5.src = "assets/Images/off.gif";
        lampu6.src = "assets/Images/off.gif";
        lampu7.src = "assets/Images/off.gif";
    }
}
// Ruang Makan
function saklarMakan() {
    lampu8 = document.getElementById("lampu8");

    toogle3 = document.getElementById("toogle3");

    if (toogle3.checked) {
        lampu8.src = "assets/Images/on.gif";
    } else {
        lampu8.src = "assets/Images/off.gif";
    }
    return lampu8;
}
// Ruang Tidur
function saklarTidur() {
    lampu9 = document.getElementById("lampu9");
    lampu10 = document.getElementById("lampu10");

    toogle3 = document.getElementById("toogle4");

    if (toogle4.checked) {
        lampu9.src = "assets/Images/on.gif";
        lampu10.src = "assets/Images/on.gif"
    } else {
        lampu9.src = "assets/Images/off.gif";
        lampu10.src = "assets/Images/off.gif";
    }
}