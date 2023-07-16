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
        {"Main Page" : "../index.html"},
        {"Activity Recommendator" : "../activity_recommendator/activityrecommendator.html"},
        {"Cat Facts" : "../cat_facts/catfacts.html"},
        {"Dog Image Fetcher" : "../dog_image_generator/dogimagefetcher.html"}
    ]
    loadSelectionTab(activityNamesList);
}

function loadSelectionTab(activityNamesList){
    const selectionTabHolder = document.querySelector(".selectionTab"); //ul-tag
    //Here we have a for-loop that generated the HTML page selector, allowing
    //the user to select different activities.
    activityNamesList.forEach(pair => {
        const key = Object.keys(pair)[0];
        const value = pair[key];

    //We use a li-tag to display the entire selection, one line per activity
    //a-tags will provide user the hyperlink that they can click to move.
        const linkHolder = document.createElement("li");
        const selectableActivityElement = document.createElement("a");

        selectableActivityElement.href =  value;
        selectableActivityElement.textContent = key + "\n"; 

        linkHolder.appendChild(selectableActivityElement);
        selectionTabHolder.appendChild(linkHolder);
    }); 
}

export {generateDefaultComponents};