
const progress = document.getElementById("progress");
const circle = document.querySelectorAll(".circle");
const next = document.getElementById("next");
const prev = document.getElementById("prev");


let currentActive = 0;

next.addEventListener("click",() => {
    currentActive++;

    if(currentActive>circle.length){
        currentActive = circle.length;
    }
    
    update();
    console.log(currentActive)
})


prev.addEventListener("click",() => {
    currentActive--;
//en küçük 1 olduğu için 
    if(currentActive < 1){
        currentActive = 1
    }
    update();
    console.log(currentActive)
})


function update(){
    circle.forEach((circle,index) => {
        if(index < currentActive){
            circle.classList.add("active")
        }else{
            circle.classList.remove("active")
        }
    })
    const actives = document.querySelectorAll(".active")
    progress.style.width = (actives.length -1) / (circle.length -1) *100 + '%';
    
    if(currentActive === 1){
        prev.disabled = true
    
    }else if (currentActive === 4 ){
        next.disabled = true
   
    }else{
    next.disabled = false
    prev.disabled = false 
    
}
}








