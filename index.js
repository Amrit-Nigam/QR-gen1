let imgbox = document.getElementById("imgbox");
let qrimg = document.getElementById("qrimg");
let qrtext = document.getElementById("qrtext");


qrtext.addEventListener("keyup", function (event) { 
  

    if (event.keyCode == 13) { 
        button.click(); 
    } 
}); 


function genqr(){
    if(qrtext.value.length > 0){
        console.log("works");
        qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
        imgbox.classList.add("show-img");
    }
}


