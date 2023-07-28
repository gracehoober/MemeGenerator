
/*html elements are in the javascript with these variables*/
const form = document.querySelector("#meme-gen");
const imageURL = document.querySelector("#imgURL");// refers to imgURL input field
const topText = document.querySelector("#topText");// .querySelector returns the first element withing the doc that matches the specified selector(can be classes or elements)
const bottomText = document.querySelector("#bottomText");
const button = document.querySelector("button");
const memeList = document.querySelector("#meme-list");
let image;

/*function to create meme and put it on the page
  I:form data
  O:div of meme added to meme-list div
  can use append or appendChild: https://developer.mozilla.org/en-US/docs/Web/API/Element/append
*/
function createMeme(form){
  //create new div
  let memeDiv = document.createElement("div");
  //add image to div
  memeDiv.append(imageURL)
  //add texts to meme div
  memeDiv.append(topText)
  memeDiv.append(bottomText);
  //add created meme to div in html
  memeList.appendChild(memeDiv);
}

//function to remove meme from page

//event listeners
form.addEventListener("submit", () => {
})










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
