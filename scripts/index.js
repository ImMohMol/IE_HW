function setHtmlValue() {
    let htmlValue = document.getElementById("htmlValue");
    let barInputValue = document.getElementById("htmlPercentBar");
    htmlValue.innerHTML = barInputValue.value + '<span>%</span>';
}

function setCssValue() {
    let cssValue = document.getElementById("cssValue");
    let barInputValue = document.getElementById("cssPercentBar");
    cssValue.innerHTML = barInputValue.value + '<span>%</span>';
}

function setJavascriptValue() {
    let javascriptValue = document.getElementById("jsValue");
    let barInputValue = document.getElementById("jsPercentBar");
    javascriptValue.innerHTML = barInputValue.value + '<span>%</span>';
}

let htmlValue = document.getElementById("htmlValue");
let htmlBarInputValue = document.getElementById("htmlPercentBar");
htmlBarInputValue.value = htmlValue.innerHTML.substring(0, 2);

let cssValue = document.getElementById("cssValue");
let cssBarInputValue = document.getElementById("cssPercentBar");
cssBarInputValue.value = cssValue.innerHTML.substring(0, 2);

let jsValue = document.getElementById("jsValue");
let jsBarInputValue = document.getElementById("jsPercentBar");
jsBarInputValue.value = jsValue.innerHTML.substring(0, 2);