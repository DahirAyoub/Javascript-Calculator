function additionOperator(currentvalue,newvalue){
    currentvalue=currentvalue+newvalue
    displayDiv.textContent=currentvalue
}

function subtractionOperator(currentvalue,newvalue){
    currentvalue=currentvalue-newvalue
    displayDiv.textContent=currentvalue
}

function multiplicationOperator(currentvalue,newvalue){
    currentvalue=currentvalue*newvalue
    displayDiv.textContent=currentvalue
}
function divisionOperator(currentvalue,newvalue){
    currentvalue=currentvalue/newvalue
    displayDiv.textContent=currentvalue
}

function displayUpdater(clicked){
    if(displayDiv.textContent==0){
        displayDiv.textContent=clicked.textContent
    }
    else if(displayDiv.textContent.includes(".")){
        displayDiv.textContent=displayDiv.textContent+clicked.textContent
    }
    else{
        displayDiv.textContent=displayDiv.textContent+clicked.textContent
    }
}

function operate(currentvalue,newvalue){
    if(operationClicked===divideDiv){
        divisionOperator(currentvalue,newvalue)
    } else if(operationClicked===multiplyDiv){
        multiplicationOperator(currentvalue,newvalue)
    } else if(operationClicked===subtractDiv){
        subtractionOperator(currentvalue,newvalue)
    } else if(operationClicked===additionDiv){
        additionOperator(currentvalue,newvalue)
    }
}

function clearOperator(){
    displayDiv.textContent=0
}

function percentOperator(currentvalue){
    displayDiv.textContent=currentvalue/100
}
function posnegOperator(currentvalue){
    displayDiv.textContent=currentvalue*-1
}
function decimalOperator(){
    if(!displayDiv.textContent.includes(".")){
        displayDiv.textContent=displayDiv.textContent+"."
    }
}
const acDiv=document.querySelector('#AC')
const pnDiv=document.querySelector('#PN')
const percentDiv=document.querySelector('#percent')
const divideDiv=document.querySelector('#divide')
const sevenDiv=document.querySelector('#seven')
const eightDiv=document.querySelector('#eight')
const nineDiv=document.querySelector('#nine')
const multiplyDiv=document.querySelector('#multiply')
const fourDiv=document.querySelector('#four')
const fiveDive=document.querySelector('#five')
const sixDiv=document.querySelector('#six')
const subtractDiv=document.querySelector('#subtract')
const oneDiv=document.querySelector('#one')
const twoDiv=document.querySelector('#two')
const threeDiv=document.querySelector('#three')
const additionDiv=document.querySelector('#addition')
const zeroDiv=document.querySelector('#zero')
const decimalDiv=document.querySelector('#decimal')
const equalDiv=document.querySelector('#equal')
const displayDiv=document.querySelector('#display')

numberArray=[zeroDiv,oneDiv,twoDiv,threeDiv,fourDiv,fiveDive,sixDiv,sevenDiv,eightDiv,nineDiv]
operationArray=[divideDiv,multiplyDiv,subtractDiv,additionDiv]

for(let i = 0; i < numberArray.length; i++){
    const clicked = numberArray[i]
    clicked.addEventListener('click',()=>{
        displayUpdater(clicked)
       
    })
}


for(let i=0;i<operationArray.length;i++){
    const operationClicked=operationArray[i]
    operationClicked.addEventListener('click',()=>{
        if(operationClicked===divideDiv){
            divisionOperator(displayDiv.textContent,clicked)

        }
    })
}

acDiv.addEventListener('click',()=>{
    clearOperator()
})

percentDiv.addEventListener('click',()=>{
    percentOperator(displayDiv.textContent)
})

pnDiv.addEventListener('click',()=>{
    posnegOperator(displayDiv.textContent)
})
decimalDiv.addEventListener('click',()=>{
    decimalOperator(displayDiv.textContent)
})