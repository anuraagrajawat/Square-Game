let x = document.getElementById(1);

x.addEventListener("mouseenter",function(){
    let randomNo = Math.floor(Math.random()*100);
    x.innerHTML = randomNo;
})
x.addEventListener("mouseleave",function(){
    x.innerHTML = "1";
})


let y = document.getElementById(2);

let clr = "red";
y.addEventListener("mouseenter",function(){
    if(clr =="red"){
        y.style.backgroundColor="red";
        clr ="green";
    }
    else{
        y.style.backgroundColor="green";
        clr ="red";
    }   
})
y.addEventListener("mouseleave",function(){
    y.style.backgroundColor="white";
})


let a = document.getElementById(3);

a.addEventListener("mouseenter", function() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    a.style.backgroundColor = `rgb(${r},${g},${b})`;
});

a.addEventListener("mouseleave",function(){
    a.style.backgroundColor="white";
})

let b = document.getElementById(4);

b.addEventListener("click",function(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    a.style.backgroundColor = `rgb(255,${g},255)`;
    x.style.backgroundColor =`rgb(255,255,${b})`;
    y.style.backgroundColor = `rgb(${r},255,255)`;
})
b.addEventListener("mouseleave",function(){
    a.style.backgroundColor = "white";
    x.style.backgroundColor ="white";
    y.style.backgroundColor = "white";
})

