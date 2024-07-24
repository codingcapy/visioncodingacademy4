
const popup         = document.getElementById('pop-up');    

// const closeButton  = document.getElementById("close-pop-up");
const okButton =  document.getElementById("ok-button");

// closeButton.addEventListener('click', function (){
//     popup.style.display = "none";
// });

popup.addEventListener('click', function(){    
    popup.style.display = "none";
});

okButton.addEventListener('click', function(){    
    popup.style.display = "none";
});