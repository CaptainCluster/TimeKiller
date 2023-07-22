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
    const jokeButton = document.getElementById("jokeButton");
    jokeButton.addEventListener("click", function(){
        jokeButtonProcess();
    });
}

async function jokeButtonProcess(){
    const data = await fetchData();
    displayData(data);
}

async function fetchData(){
    //This time we will not be fetching data from a JSON, thus things have
    //to be handled differently.
    let dadJoke = "";
    const url = "https://icanhazdadjoke.com/";
    await fetch(url)
        .then(response => response.text())
        .then(data =>{
            const parser = new DOMParser();
            const HTMLDocument = parser.parseFromString(data, "text/html");
            //The joke is contained in a p-tag that has the class "subtitle".
            //The class name is used multiple times, thus the div parent element
            //that contains the p-tag will be used to get precisely what we want.
            const parentDiv = HTMLDocument.querySelector(".card-content");
            const jokeHolderElement = parentDiv.querySelector(".subtitle");
            dadJoke = jokeHolderElement.textContent;
        });
    return dadJoke;
}


function displayData(data){
    const dadJokeHolderElement = document.getElementById("dadJoke");
    dadJokeHolderElement.textContent = data;
}