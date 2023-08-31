

let countEl = document.getElementById("count-el");
let count = 0;
console.log(count);

function plusOnea(){
    count += 1;
    countEl.textContent = count;
}


function plusTwoa(){
    count += 2;
    countEl.textContent = count;
}


function plusFoura(){
    count += 4;
    countEl.textContent = count;
}



let countBl = document.getElementById("count-bl");
let countN = 0;
console.log(countN);

function plusOne(){
    countN += 1;
    countBl.textContent = countN
}


function plusTwo(){
    countN += 2;
    countBl.textContent = countN
}


function plusFour(){
    countN += 4;
    countBl.textContent = countN
}
let saveEl = document.getElementById("save-el");

function save(){
    let countstr = count + " - "
    saveEl.textContent += countstr
    countEl.textContent = 0
    count = 0
}
let saveBl = document.getElementById("save-bl");

function saveBtz(){
    let countNstrn = countN + " - "
    saveBl.textContent += countNstrn
    countBl.textContent = 0
    countN = 0
}
