let links = document.querySelectorAll(".navigator a")
let bodyId = document.querySelector("body").id
for(let link of links){
    if (link.dataset.active == bodyId){
        link.classList.add("active");
    }
}