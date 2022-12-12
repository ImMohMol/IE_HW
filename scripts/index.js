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

setHtmlValue();
setCssValue();
setJavascriptValue();
