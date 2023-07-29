
let form = document.querySelector("form");
let idAttribute = 1;
function displayMeme(e){
  e.preventDefault();
  let memeList = document.querySelector("#meme-list");
  let image = document.querySelector("#imgURL").value;
  let topText = document.querySelector("#topText").value;
  let bottomText = document.querySelector("#bottomText").value;

  let memeDiv = document.createElement("div");
  memeDiv.classList.add("meme-content")
  memeDiv.setAttribute("id", idAttribute.toString() + "meme")

  let imageContainer = document.createElement("img");
  imageContainer.classList.add("photo");
  imageContainer.src = image;

  let topTextDiv = document.createElement("div");
  topTextDiv.classList.add("text-above");
  topTextDiv.append(topText)

  let bottomTextDiv = document.createElement("div");
  bottomTextDiv.classList.add("text-below");
  bottomTextDiv.append(bottomText)

  // let removeDiv = document.createElement('div');
  // removeDiv.classList.add("remove-div");
  // let removeText = document.createTextNode("Delete Meme")
  // removeDiv.appendChild(removeText);

  memeDiv.append(imageContainer);
  memeDiv.append(topTextDiv);
  memeDiv.append(bottomTextDiv);
  //memeDiv.append(removeDiv)
  memeList.append(memeDiv);

//function to remove meme from page (parent is memeList, child is memeContent)
let memeContent = document.querySelector(".meme-content");
memeContent.addEventListener("click", function(){
  memeList.removeChild(memeContent)
});
};



//function to clear input feilds
function clearInputs(){

};

//event listeners
form.addEventListener("submit", displayMeme);


/*
  https://developer.mozilla.org/en-US/docs/Web/API/Element/append
  https://www.youtube.com/watch?v=xR6d7CkXlPs add elements dynamically
  https://www.youtube.com/watch?v=R1liBYYF9k4 add elements dynamically with an action like click or submit

*/
/* NOT SURE WHY THIS WASNT WORKING WHEN APPENDED TO A DIV
  let memeFramework = `<div class="wrapper">
                        <img src="" alt="">
                        <div class="textAbove"></div>
                        <div class="textBelow"></div>
                      </div>`;
*/


