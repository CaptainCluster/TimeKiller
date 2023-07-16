/** 
@author CaptainCluster
https://github.com/CaptainCluster
*/
import { generateDefaultComponents } from "../html_components.js";

if(document.readyState !== "loading") {
    mainFunction();
} else {
    document.addEventListener("DOMContentLoaded", function () {
    mainFunction();
    });
}
function mainFunction(){
    generateDefaultComponents();
    const factButton = document.getElementById("factButton");
    factButton.addEventListener("click", function(){
        factButtonEvent();
    });
}

async function factButtonEvent(){
    const rawData = await fetchData();
    const processedData = await processData(rawData);
    displayData(processedData);
}

async function fetchData(){
    const url = "https://catfact.ninja/fact";
    const res = await fetch(url);
    const rawData = await res.json();
    return rawData;
}

async function processData(rawData){
    const processedData = rawData.fact;
    console.log(processedData)
    return processedData;
}

function displayData(processedData){
    const activitySuggestionElement = document.getElementById("catFact");
    activitySuggestionElement.textContent = processedData;
}