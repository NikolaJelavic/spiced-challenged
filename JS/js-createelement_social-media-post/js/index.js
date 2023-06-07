console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);



// Exercise:
// Use document.createElement() and append another social media post to the body.

const body = document.querySelector('body')

const article = document.createElement("article");
article.classList.add("post");
article.textContent = `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`;
body.append(article); 


//p
const p = document.createElement("p");
p.classList.add("post__content");
article.append(p);

//footer
const footer = document.createElement("footer");
footer.classList.add("post__footer");
article.append(footer);

//span
const span = document.createElement("span");
span.classList.add("post__username");
span.textContent = `@username`
footer.append(span);

//button
const button = document.createElement("button");
button.classList.add("post__button");
button.textContent = `♥ Like`;
button.addEventListener("click", handleLikeButtonClick);
footer.append(button);