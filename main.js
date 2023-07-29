
let form = document.querySelector("form");

function displayMeme(e){
  e.preventDefault();
  let memeList = document.querySelector("#meme-list");
  let image = document.querySelector("#imgURL").value;
  let topText = document.querySelector("#topText").value;
  let bottomText = document.querySelector("#bottomText").value;

  let memeDiv = document.createElement("div");
  let imageContainer = document.createElement("img")
  imageContainer.classList.add("photo")
  imageContainer.src = image;

  memeDiv.append(imageContainer);
  memeDiv.append(topText);
  memeDiv.append(bottomText);
  memeList.append(memeDiv);
}



//function to remove meme from page
// function removeMeme(){

// }

//event listeners
form.addEventListener("submit", displayMeme)
// memeList.addEventListener("click", removeMeme)

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








// topText.addEventListener("change", () => {
//   imageToCanvas(memeList,image,topText.value, bottomText.value)
// });

// bottomText.addEventListener("change", () => {
//   imageToCanvas(memeList,image,topText.value, bottomText.value)
// });

// /*make the image show up on the page(canvas element*/
// function imageToCanvas (canvas, img, topText, bottomText){
//   let canvasContext = canvas.getContext("2d");
//   const width = image.width;
//   const height = image.height;
//   let fontSize = Math.floor(width/10);//use width so you get a relative size vs and absolute size
//   let spaceFromTextToEdge = height / 25;
//   //update canvas background
//   canvas.width = width;
//   canvas.height =height;
//   canvasContext.drawImage(img,0,0)
//   //render text
//   canvasContext.strokeStyle = "black";//color of line around letters
//   canvasContext.lineWidth = Math.floor(fontSize / 6)// width of black line around text letters
//   canvasContext.fillStyle = "white";
//   canvasContext.testAlign = "center";//center the text on the image
//   canvasContext.lineJoin = "round";
//   canvasContext.font = `${fontSize}px arial`;//font-family
//   //add top text
//   canvasContext.textBaseline = "top";// helps adhere to spaceFromTextToEdge
//   canvasContext.strokeText(topText, width/2, spaceFromTextToEdge)// parameters are the text from input for top of meme, the x axis, y axis
//   canvasContext.fillText(topText, width/2, spaceFromTextToEdge);
//   //add bottom text
//   canvasContext.textBaseline = "bottom";// helps adhere to spaceFromTextToEdge
//   canvasContext.strokeText(bottomText, width/2, height - spaceFromTextToEdge)
//   canvasContext.fillText(bottomText, width/2, height - spaceFromTextToEdge);

// }
