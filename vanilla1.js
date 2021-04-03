
let innerCon = document.querySelectorAll(".innerCls");
let hourTg = document.querySelector("#hour_Id");
let minTag = document.querySelector("#min_Id");
let secTag = document.querySelector("#sec_Id");
let btn = document.querySelector("#subBtn");
let switcher = "OFF";
btn.addEventListener('click' , (e) => {
    if(e.type === "click"){
        hourTg.classList.toggle("switcher");
    }
})


function update() {
    console.log(hourTg);
    secTag.classList.toggle("active");
    minTag.classList.remove("active");
    hourTg.classList.remove("active");
    //Let get the date:
    let myDate = new Date;
    let myHour = 0;
    if(hourTg.classList[1] === "switcher"){
        myHour = myDate.getHours();
    }
    else{
        myHour = ((myDate.getHours() + 11) % 12 + 1);
    }
    
    let myMin = myDate.getMinutes();
    let mySec = myDate.getSeconds();
    //We got it
    if(myMin === 60){
        minTag.classList.toggle("active");
        hourTg.classList.toggle("active");
    }
    hourTg.textContent = myHour;
    minTag.textContent = myMin;
    secTag.textContent = mySec;
}

setInterval(() => {
    update();
}, 1000);




