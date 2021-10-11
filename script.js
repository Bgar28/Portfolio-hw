var mobileButton=document.getElementById("mobile-button")
var navBar=document.getElementById("nav-bar")
var closeButton=document.getElementById("close-button")

mobileButton.addEventListener("click", function(){
if(!navBar.classList.contains("open")){
    navBar.classList.add("open")
}
else{
    navBar.classList.remove("open")
}

})

closeButton.addEventListener("click", function(){
    if(navBar.classList.contains("open")){
        navBar.classList.remove("open")
    }
    
    })