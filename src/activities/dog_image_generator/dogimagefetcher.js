/** 
@author CaptainCluster
https://github.com/CaptainCluster
*/
import { generateDefaultComponents } from "/src/html_components.js";
//This program uses multiple different free APIs. If you are interested
//in them, check this link out: https://apipheny.io/free-api/

if(document.readyState !== "loading") {
    mainFunction();
} else {
    document.addEventListener("DOMContentLoaded", function () {
    mainFunction();
    });
}

function mainFunction(){
    generateDefaultComponents();
    const fetchButton = document.getElementById("fetchButton");
    fetchButton.addEventListener("click", function(){
        fetchButtonEvent();
    });
    const resetButton = document.getElementById("resetButton");
    resetButton.addEventListener("click", function(){
        resetImages();
    });
}

async function fetchButtonEvent(){
    const rawData = await fetchData();
    const processedData = await processData(rawData);
    displayData(processedData);
}

function resetImages(){
    const body = document.getElementById("body");
    //We will go through every child of the body tag and 
    //remove all the save buttons and the dog images.
    for(let i = 0; i < body.childElementCount; i++){
        if(body.children[i].className == "saveButton"){
            body.children[i].remove();
            i--;
        } else if(body.children[i].className == "dogImageHolder"){
            body.children[i].firstChild.remove();
            body.children[i].remove();
            i--;
        }
    }
}

async function fetchData(){
    //Gets the raw data and returns it.
    const url = "https://dog.ceo/api/breeds/image/random";
    const res = await fetch(url);
    const rawData = await res.json();
    return rawData;
}

function processData(rawData){
    //Processes the raw data into a displayable form.
    //We precisely want the image file from what little data we fetched.
    const processedData = rawData.message;
    return processedData;
}

function displayData(processedData){
    //This module lets us display the processed data. We will create two tags 
    //(img and div). Div tag holds img tag, and body tag holds the div tag
    const dogImgElement = document.createElement("img");
    const dogImgElementHolder = document.createElement("div");
    const bodyHTML = document.getElementById("body");  

    dogImgElementHolder.className = "dogImageHolder";

    dogImgElement.src = processedData;
    //The class makes sizing the image easier in the CSS file. 
    dogImgElement.className = "dogImage";

    dogImgElementHolder.appendChild(dogImgElement);
    bodyHTML.appendChild(dogImgElementHolder);

    displaySaveImgButton(processedData);
}

function displaySaveImgButton(processedData){
    const bodyHTML = document.getElementById("body");
    const saveImgButton = document.createElement("button");
    //Class name helps us delete the button when necessary.
    saveImgButton.className = "saveButton"; 
    saveImgButton.textContent = "Save image";
    saveImgButton.addEventListener("click", function(){
        downloadUrl(processedData);
    });

    bodyHTML.appendChild(saveImgButton);
}

function downloadUrl(processedData){
    //The user is given a chance to download a .txt file which
    //contains the URL of the image they want to save.
    const savedData = new Blob([processedData], { type: "text/plain" });
    const url = window.URL.createObjectURL(savedData);

    const link = document.createElement("a");
    link.href = url;
    link.download = "savedDogImage.txt";
    link.click();
    
    window.URL.revokeObjectURL(url);
}
