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
}
