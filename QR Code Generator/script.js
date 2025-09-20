const url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
const image = document.getElementById("qrImage");
const inpvalue = document.getElementById("qrval");
const imgBox = document.getElementById("imgBox")

function generateQR(){
    image.src = url + inpvalue.value;
    imgBox.classList.add("show-img")
}

