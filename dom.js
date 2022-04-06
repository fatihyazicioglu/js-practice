let greeting = document.querySelector("#greeting")
greeting.addEventListener("click",domClick)

function domClick(){
    console.log("clicked");
    console.log(this.innerHTML = "changed because of clicking");
    this.style.color == "red" ? this.style.color = "black" : this.style.color ="red"
}

f