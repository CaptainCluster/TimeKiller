/** 
@author CaptainCluster
https://github.com/CaptainCluster
*/
function generateDefaultComponents(){
    //Here we generate the default HTML tags

    //We store the activity name and the file as a key-value pair.
    //This allows us to keep things simple, when it comes to the 
    //upcoming forEach-loop.
    const activityNamesList = [
        {"Main Page" : "/src/index.html"},
        {"Activity Recommendator" : "/src/activities/activity_recommendator/activityrecommendator.html"},
        {"Cat Facts" : "/src/activities/cat_facts/catfacts.html"},
        {"Chuck Norris Jokes" : "/src/activities/chuck_norris_jokes/chucknorrisjokes.html"},
        {"Dad Jokes" : "/src/activities/dad_jokes/dadjokes.html"},
        {"Dog Image Fetcher" : "/src/activities/dog_image_generator/dogimagefetcher.html"},
        {"Joke Generator" : "/src/activities/joke_generator/jokegenerator.html"}
    ]
    loadSelectionTab(activityNamesList);
}

function loadSelectionTab(activityNamesList){
    const selectionTabHolder = document.querySelector(".selectionTab"); //ul-tag
    //Here we have a forEach-loop that generates the HTML page selector, allowing
    //the user to select different activities.
    activityNamesList.forEach(pair => {
        forEachLoopProcess(selectionTabHolder, pair);
    }); 
}

function forEachLoopProcess(selectionTabHolder, pair){
    const key = Object.keys(pair)[0];
    const value = pair[key];
    //We use a li-tag to display the entire selection, one line per activity
    //a-tags will provide user the hyperlink that they can click to move.
    const linkHolder = document.createElement("li");
    linkHolder.className = "activityLi";
    const selectableActivityElement = document.createElement("a");
    selectableActivityElement.className = "activityLink";

    selectableActivityElement.href =  value;
    selectableActivityElement.textContent = key + "\n"; 

    linkHolder.appendChild(selectableActivityElement);
    selectionTabHolder.appendChild(linkHolder);
}

export {generateDefaultComponents};