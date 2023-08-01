/** 
@author CaptainCluster
https://github.com/CaptainCluster
*/
import { generateDefaultComponents } from "/src/html_components.js";

if(document.readyState !== "loading") {
    mainFunction();
} else {
    document.addEventListener("DOMContentLoaded", function () {
    mainFunction();
    });
}

function mainFunction(){
    generateDefaultComponents();
    const suggestButton = document.getElementById("suggestButton");
    suggestButton.addEventListener("click", function(){
        suggestionButtonEvent();
    });
}

async function suggestionButtonEvent(){
    const rawData = await fetchData();
    const processedData = await processData(rawData);
    displayData(processedData);
}

async function fetchData(){
    const url = "https://www.boredapi.com/api/activity";
    const res = await fetch(url);
    const rawData = await res.json();
    return rawData;
}

async function processData(rawData){
    const processedData = rawData.activity;
    return processedData;
}

function displayData(processedData){
    const activitySuggestionElement = document.getElementById("activitySuggestion");
    activitySuggestionElement.textContent = processedData;
}