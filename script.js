const sec = document.querySelector(".secs")
const min = document.querySelector(".mins")
const hour = document.querySelector(".hours")

function tiktak(){
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let second = new Date().getSeconds();

    sec.style.transform = `rotate(${180 + (second*6)}deg)`
    min.style.transform = `rotate(${180 + (minute*6)}deg)`
    hour.style.transform = `rotate(${180 + (hour*30)}deg)`
}

setInterval(tiktak,1000);