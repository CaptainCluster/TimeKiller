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
        jokeButtonProcess();
    });
}

async function jokeButtonProcess(){
    const rawData = await fetchData();
    const processedData = await processData(rawData);
    displayData(processedData);
}

async function fetchData(){
    const url = "https://api.chucknorris.io/jokes/random";
    const res = await fetch(url);
    const rawData = await res.json();
    return rawData;
}

function processData(rawData){
    const processedData = rawData.value;
    return processedData;
}

function displayData(processedData){
    const chuckNorrisJokeElement = document.getElementById("chuckNorrisJoke");
    chuckNorrisJokeElement.textContent = processedData;
}