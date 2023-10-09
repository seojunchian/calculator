/* SELECTION */
const seven          = document.querySelector("#seven");
const eight          = document.querySelector("#eight");
const nine           = document.querySelector("#nine");
const four           = document.querySelector("#four");
const five           = document.querySelector("#five");
const six            = document.querySelector("#six");
const one            = document.querySelector("#one");
const two            = document.querySelector("#two");
const three          = document.querySelector("#three");
const zero           = document.querySelector("#zero");

const divide         = document.querySelector("#divide");
const multiplication = document.querySelector("#multiplication");
const extraction     = document.querySelector("#extraction");
const addition       = document.querySelector("#addition");

const clear          = document.querySelector("#clear");
const backspace      = document.querySelector("#delete");

const screen         = document.querySelector("#screen");
const result         = document.querySelector("#result");

/* EVENT LISTENERS */
seven.addEventListener("click", () => {
    const processElement = document.createElement("span");
    processElement.textContent = 7;
    processElement.style.fontSize = "30px";
    result.appendChild(processElement);
})
eight.addEventListener("click", () => {
    const span = document.createElement("span");
    span.textContent = 8;
    span.style.fontSize = "30px";
    result.appendChild(span);
})
nine.addEventListener("click", () => {
    const span = document.createElement("span");
    span.textContent = 9;
    span.style.fontSize = "30px";
    result.appendChild(span);
})
four.addEventListener("click", () => {
    const span = document.createElement("span");
    span.textContent = 4;
    span.style.fontSize = "30px";
    result.appendChild(span);
})
five.addEventListener("click", () => {
    const span = document.createElement("span");
    span.textContent = 5;
    span.style.fontSize = "30px";
    result.appendChild(span);
})
six.addEventListener("click", () => {
    const span = document.createElement("span");
    span.textContent = 6;
    span.style.fontSize = "30px";
    result.appendChild(span);
})
one.addEventListener("click", () => {
    const span = document.createElement("span");
    span.textContent = 1;
    span.style.fontSize = "30px";
    result.appendChild(span);
})
two.addEventListener("click", () => {
    const span = document.createElement("span");
    span.textContent = 2;
    span.style.fontSize = "30px";
    result.appendChild(span);
})
three.addEventListener("click", () => {
    const span = document.createElement("span");
    span.textContent = 3;
    span.style.fontSize = "30px";
    result.appendChild(span);
})
zero.addEventListener("click", () => {
    const span = document.createElement("span");
    span.textContent = 0;
    span.style.fontSize = "30px";
    result.appendChild(span);
})

divide.addEventListener("click", () => {
    const processElement = document.createElement("span");
    processElement.textContent = "/";
    processElement.style.fontSize = "30px";
    result.appendChild(processElement);
})
multiplication.addEventListener("click", () => {
    const processElement = document.createElement("span");
    processElement.textContent = "*";
    processElement.style.fontSize = "30px";
    result.appendChild(processElement);
})
extraction.addEventListener("click", () => {
    const processElement = document.createElement("span");
    processElement.textContent = "-";
    processElement.style.fontSize = "30px";
    result.appendChild(processElement);
})
addition.addEventListener("click", () => {
    const processElement = document.createElement("span");
    processElement.textContent = "+";
    processElement.style.fontSize = "30px";
    result.appendChild(processElement);
})

clear.addEventListener("click", () => {

})
backspace.addEventListener("click", () => {

})