console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(fields) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--
for(let i=1; i<6; i++ ){


  
  const img = document.createElement("img");
  img.src =  "/assets/star-empty.svg";

if(i<=)

  
  starContainer.append(img);
  

}
  //--^-- your code here --^--
}

renderStars();
