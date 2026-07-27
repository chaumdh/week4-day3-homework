/* Cats */
var catCaptionText = ["Fluffy","Whiskers"];
var catDescText = [
    "2 years old female white siamese",
    "1 year old male orange tabby"
]
var catInfoText = [
    "Fluffy is a friendly and playful cat.",
    "Whiskers is a little shy. He likes to sun bathe by the window and watch birds."
]

/* Dogs */
var dogCaptionText = ["Luna","Buddy"];
var dogDescText = [
    "3 years old female golden retriever",
    "2 years old male black labrador"
]
var dogInfoText = [
    "Luna loves to play catch.",
    "Buddy is a cuddle bug."
]

/* Display */
displayGallery("cat-gallery", catCaptionText, catDescText);
displayGallery("dog-gallery", dogCaptionText, dogDescText);
infoBoxHandler();

/* HELPERS */
/* Gallery */
function displayGallery(galleryId, captionText, descText) {
    var photos = []; //Declare an empty array to store image element
    var fileNames = []; //Declare an empty element to store image file names
    var imageList = []; //Declare an empty array to store html list that contain an image
    var image; //Declare an empty variable to store the assembled image list codes
    var galleryName = galleryId.split("-")[0];
    var openList1 = "<li id='" + galleryName + "-photo";
    var openList2 = "'>"; //Declare a variable to contain open list tag
    var closeList = "</li>"; //Declare a variable to contain an close list tag
    var openFigure = "<figure>";
    var closeFigure = "</figure>";
    var openCaption = "<figcaption class='caption'>";
    var closeCaption = "</figcaption>";
    var openDesc1 = "<div class='description' id='" + galleryName + "-description";
    var openDesc2 = "'>";
    var closeDesc = "</div>";

    for (var i=0; i<captionText.length; i++) {
        fileNames.push(galleryName + (i+1)); //Create image file name and store in the array
        photos.push("<img src='images/"+fileNames[i]+".jpg'>"); //Assemble file name into image element and store in an array
        
        //Assemble the image element from the array with list element stored in variables
        image = openList1 + (i+1) + openList2 + openFigure + photos[i] 
            + openCaption + captionText[i] + closeCaption + closeFigure 
            + openDesc1 + (i+1) + openDesc2 + descText[i] + closeDesc + closeList; 
        imageList.push(image); //Store(push) the assembled list codes into an array
    }
    
    //Display all image codes stored in the array
    document.getElementById(galleryId).innerHTML = imageList.join("");
}

/* Info Box */
function infoBoxHandler() {
    var descriptions = document.querySelectorAll(".description");
    descriptions.forEach((desc) => {
        var id = desc.id[desc.id.length-1] - 1;
        console.log(desc);
        if (desc.id.startsWith("cat")) {
            desc.addEventListener("click", displayInfoBox.bind(null, catCaptionText[id], catInfoText[id]));
        } else {
            desc.addEventListener("click", displayInfoBox.bind(null, dogCaptionText[id], dogInfoText[id]));
        }
    });
}
function displayInfoBox(caption, info) {
    document.getElementById("info-heading").innerHTML = caption;
    document.getElementById("info-text").innerHTML = info;
    document.getElementById("info-link").innerHTML = "Click This To Close";
    document.getElementById("info-box").style.visibility = "visible";
    document.getElementById("info-link").addEventListener("click", resetInfoBox);
}
function resetInfoBox() {
    var box = document.getElementById("info-box");
    if (box.style.visibility == "visible") {
        box.style.visibility = "hidden";
    }
}