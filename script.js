x = document.querySelector("input")
z = document.querySelector("h1")

x.addEventListener("change",function (){
    if(x.value != "")
        z.innerText = "Cześć, "+x.value+"!";
    else
        z.innerText = "Cześć!"
})