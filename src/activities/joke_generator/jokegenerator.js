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
    const jokeButton = document.getElementById("jokeButton");
    jokeButton.addEventListener("click", function(){
        jokeButtonEvent();
    });
}
async function jokeButtonEvent(){
    const rawData = await fetchData();
    const processedData = await processData(rawData);
    displayData(processedData);
}

async function fetchData(){
    const url = "https://v2.jokeapi.dev/joke/Any?safe-mode";
    const res = await fetch(url);
    const rawData = await res.json();
    return rawData;
}

async function processData(rawData){
    //The jokes in the JSON file come in two types: single and twopart.
    //The types have to be handled differently to avoid issues.
    const jokeType = rawData.type;
    let processedData = [];
    if(jokeType == "single"){
        processedData = [rawData.joke];
    } else if(jokeType == "twopart"){
        processedData = [rawData.setup, rawData.delivery]
    }
    return processedData;
}

function displayData(processedData){
    const jokeElement = document.getElementById("joke");
    jokeElement.textContent = ""; //We want to have one joke at a time
    for(let i = 0; i < processedData.length; i++){
        //Separating the parts of the twopart-type joke with a space
        if(i != 0){
            processedData[i] = " " + processedData[i];
        }
        //Here we have the part the user sees, being made during the for-loop
        jokeElement.textContent = jokeElement.textContent + processedData[i];
    }
}
