
const greetBox = document.querySelector('.curr-time')
const msgBox = document.querySelector('.display-btn')

function updateTime() {
    const currTime = new Date()
    const hours = currTime.getHours()
    const minutes = currTime.getMinutes()
    const am_pm = hours >= 12 ? "PM":"AM"
    const hours12 = hours %12 || 12

    const printTime = `Current Time is ${hours12}:${minutes.toString().padStart(2,'0')} ${am_pm}`
    greetBox.textContent = printTime
    return hours
}

function alertBox(){
    const hours = new Date().getHours()
    if (hours>4 && hours<12){
        alert("Good Morning! Have an awesome start to the day")
    }
    else if (hours>=12 && hours<17){
        alert("Good Afternoon! Unwind and Chill")
    }
    else if (hours>=17 && hours<=22){
        alert("Good Evening! Soothe Yourself")
    }
    else {
        alert("Good Night! Sweet Dreams")
    }
    changeColor()
    function changeColor() {
        const colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "cyan", "magenta", "lime", "teal"];
        var newColor = colors[Math.floor(Math.random()*colors.length)]
        msgBox.style.backgroundColor = newColor

    }
}


updateTime()
msgBox.addEventListener("click", alertBox);        