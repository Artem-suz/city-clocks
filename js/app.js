"use strict"
import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

const hoursArrows = document.querySelectorAll(".hr");
const minutesArrows = document.querySelectorAll(".mn");
const secondsArrows = document.querySelectorAll(".sc");
const deg = 6;
let timerId ;

function counting() {

    let date = new Date();
    let hours = date.getUTCHours();
    let minutes = date.getMinutes() * deg;
    let seconds = date.getSeconds() * deg;

    hoursArrows[0].style.transform = `rotateZ(${(hours + 3) * 30}deg)`;
    minutesArrows[0].style.transform = `rotateZ(${minutes}deg)`;
    secondsArrows[0].style.transform = `rotateZ(${seconds}deg)`;

    hoursArrows[1].style.transform = `rotateZ(${(hours + 5) * 30}deg)`;
    minutesArrows[1].style.transform = `rotateZ(${minutes}deg)`;
    secondsArrows[1].style.transform = `rotateZ(${seconds}deg)`;

    hoursArrows[2].style.transform = `rotateZ(${(hours + 8) * 30}deg)`;
    minutesArrows[2].style.transform = `rotateZ(${minutes}deg)`;
    secondsArrows[2].style.transform = `rotateZ(${seconds}deg)`;

    hoursArrows[3].style.transform = `rotateZ(${(hours + 10) * 30}deg)`;
    minutesArrows[3].style.transform = `rotateZ(${minutes}deg)`;
    secondsArrows[3].style.transform = `rotateZ(${seconds}deg)`;

    hoursArrows[4].style.transform = `rotateZ(${(hours + 7) * 30}deg)`;
    minutesArrows[4].style.transform = `rotateZ(${minutes}deg)`;
    secondsArrows[4].style.transform = `rotateZ(${seconds}deg)`;

    hoursArrows[5].style.transform = `rotateZ(${(hours + 11) * 30}deg)`;
    minutesArrows[5].style.transform = `rotateZ(${minutes}deg)`;
    secondsArrows[5].style.transform = `rotateZ(${seconds}deg)`;

    timerId = setTimeout(counting, 0);
};

function stopCounting() {
    clearTimeout(timerId);
};

function reset() {
    stopCounting();
    hoursArrows[0].style.transform = `rotateZ(${0}deg)`;
    minutesArrows[0].style.transform = `rotateZ(${0}deg)`;
    secondsArrows[0].style.transform = `rotateZ(${0}deg)`;

    hoursArrows[1].style.transform = `rotateZ(${0}deg)`;
    minutesArrows[1].style.transform = `rotateZ(${0}deg)`;
    secondsArrows[1].style.transform = `rotateZ(${0}deg)`;

    hoursArrows[2].style.transform = `rotateZ(${0}deg)`;
    minutesArrows[2].style.transform = `rotateZ(${0}deg)`;
    secondsArrows[2].style.transform = `rotateZ(${0}deg)`;

    hoursArrows[3].style.transform = `rotateZ(${0}deg)`;
    minutesArrows[3].style.transform = `rotateZ(${0}deg)`;
    secondsArrows[3].style.transform = `rotateZ(${0}deg)`;

    hoursArrows[4].style.transform = `rotateZ(${0}deg)`;
    minutesArrows[4].style.transform = `rotateZ(${0}deg)`;
    secondsArrows[4].style.transform = `rotateZ(${0}deg)`;

    hoursArrows[5].style.transform = `rotateZ(${0}deg)`;
    minutesArrows[5].style.transform = `rotateZ(${0}deg)`;
    secondsArrows[5].style.transform = `rotateZ(${0}deg)`;
};

function activeBtnStart() {
    this.firstElementChild.style.backgroundColor = "var(--color-green)";
    this.firstElementChild.style.color = "honeydew";
    btnStop.firstElementChild.style.backgroundColor = "var(--color-dark-grey)";
    btnStop.firstElementChild.style.color = "";
}

function activeBtnStop() {
    this.firstElementChild.style.backgroundColor = "var(--color-green)";
    this.firstElementChild.style.color = "honeydew"
    btnStart.firstElementChild.style.backgroundColor = "var(--color-dark-grey)"
    btnStart.firstElementChild.style.color = ""
}

function activeBtnReset() {
    btnStart.firstElementChild.style.backgroundColor = "var(--color-dark-grey)"
    btnStart.firstElementChild.style.color = ""
    btnStop.firstElementChild.style.backgroundColor = "var(--color-dark-grey)"
    btnStop.firstElementChild.style.color = ""
}

const btnStart = document.getElementById("start")
const btnStop = document.getElementById("stop")
const btnReset = document.getElementById("reset")

btnStart.addEventListener("click", counting)
btnStart.addEventListener("click", activeBtnStart)
btnStop.addEventListener("click", stopCounting)
btnStop.addEventListener("click", activeBtnStop)
btnReset.addEventListener("click", reset)
btnReset.addEventListener("click", activeBtnReset)

const btnScrollForward = document.getElementById("forward")
const btnScrollBack = document.getElementById("back")
btnScrollForward.addEventListener("click", forward)
btnScrollBack.addEventListener("click", back)
const container = document.getElementById("container")
const containerStyles = getComputedStyle(container)
let clockMargin = getComputedStyle(document.querySelector(".moscow-clock")).marginLeft
let scrollSize = parseInt(containerStyles.width) + (parseInt(clockMargin) * 2) - 6

let position = 0
const ul = document.querySelector(".clocks__wrapper")


function forward() {
   
    if (scrollSize == 511 && position >= -scrollSize * 4) {
        position -= scrollSize
        ul.style.transform = `translateX(${position}px)`
    } 
    else if (scrollSize != 511 && position != -scrollSize * 2) {
        position -= scrollSize
        ul.style.transform = `translateX(${position}px)`
    }

}

function back() {
    if (position != 0) {
        position += scrollSize
        ul.style.transform = `translateX(${position}px)`
    }

}