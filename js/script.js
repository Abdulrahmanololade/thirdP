// var fname = document.getElementById('fname');
// var email = document.getElementById('email');

// function submit(){
// alert (fname.value)
// console.log(fname.value);
// if(fname.value == ""){
//     document.getElementById('fnameerror').innerHTML = 'Fullname field cannot be empty'
//  }
// else if(email.value == ""){
//     document.getElementById('emailerror').innerHTML = 'Email field cannot be empty'
//  }
//  else{
//      document.getElementById('success').innerHTML = 'Your input has been submited suceessfully'
//  }
// }


function changeTextBtn(){
    document.getElementById("demo").innerHTML = "Hello World!";
}



function changeColorBtn(){
    document.getElementById("colorDiv").style.backgroundColor = "red"
}



function validatePhone(){
    var phone = document.getElementById("phone");
    if(phone.value.length<11){
        document.getElementById("errorSpan").innerHTML = "phone value must be complete"
    }
    else{
        document.getElementById("success").innerHTML = "success!"
    }
}


function changeImage(imageSrc){
    document.getElementById("mainImage").src = imageSrc
}

function toggleDiv(){
    if(document.getElementById("toggleDiv").style.display="block"){
        document.getElementById("toggleDiv").style.display="none";
    }else{
        document.getElementById("toggleDiv").style.display="block";
    }
}
function showDiv(){
    document.getElementById("toggleDiv").style.display="block"
}




// document.getElementById("less").style.display="none"
// function show(){
//     document.getElementById("less").style.display="block"
// }

// function showLess(){
//     document.getElementById("less").style.display="none"
// }

document.getElementById("less").style.display="none";

function show(){
     var lessElement = document.getElementById("less");
     var showMoreLink = document.getElementById("showMore");

     lessElement.style.display = "block";
     showMoreLink.style.display = "none";

     lessElement.addEventListener("click", function() {
        lessElement.style.display = "none";
        showMoreLink.style.display = "inline";
     });
}