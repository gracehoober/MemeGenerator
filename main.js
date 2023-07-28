
/*html elements are in the javascript with these variables*/
const imageURL = document.querySelector("#imgURL");// refers to imgURL input field
const topText = document.querySelector("#topText");// .querySelector returns the first element withing the doc that matches the specified selector(can be classes or elements)
const bottomText = document.querySelector("#bottomText");
const memeList = document.querySelector("#meme-list");

let image; //update this every times a new image is put in

imageURL.addEventListener("change", () => {//change event is if a new image is input in
  image = new Image();//like Date methods. need the new keyword to create a new obj
  image.src = imageURL;
  image.addEventListener("load", () => {//listening for the load event on the image
    imageToCanvas(memeList, image, topText.value, bottomText.value)
    })
})

/*make the image show up on the page(canvas element*/
function imageToCanvas (canvas, img, topText, bottomText){
  let canvasContext = canvas.getContext("2d");

  //
}
