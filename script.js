const ratingPoint = document.getElementsByClassName("rating-point");
const activePoint = document.getElementsByClassName("active");
const container = document.querySelectorAll(".container");
const submit = document.getElementById("submit");
const illustrationImg = "images/illustration-thank-you.svg";
let value = "";

ratingPoint[0].addEventListener("click", () => {
  ratingPoint[0].classList.add("active");
  value = ratingPoint[0].innerText;

  ratingPoint[1].classList.remove("active");
  ratingPoint[2].classList.remove("active");
  ratingPoint[3].classList.remove("active");
  ratingPoint[4].classList.remove("active");
});
ratingPoint[1].addEventListener("click", () => {
  ratingPoint[1].classList.add("active");
  value = ratingPoint[1].innerText;

  ratingPoint[0].classList.remove("active");
  ratingPoint[2].classList.remove("active");
  ratingPoint[3].classList.remove("active");
  ratingPoint[4].classList.remove("active");
});
ratingPoint[2].addEventListener("click", () => {
  ratingPoint[2].classList.add("active");
  value = ratingPoint[2].innerText;

  ratingPoint[0].classList.remove("active");
  ratingPoint[1].classList.remove("active");
  ratingPoint[3].classList.remove("active");
  ratingPoint[4].classList.remove("active");
});
ratingPoint[3].addEventListener("click", () => {
  ratingPoint[3].classList.add("active");
  value = ratingPoint[3].innerText;

  ratingPoint[0].classList.remove("active");
  ratingPoint[1].classList.remove("active");
  ratingPoint[2].classList.remove("active");
  ratingPoint[4].classList.remove("active");
});
ratingPoint[4].addEventListener("click", () => {
  ratingPoint[4].classList.add("active");
  value = ratingPoint[4].innerText;

  ratingPoint[0].classList.remove("active");
  ratingPoint[1].classList.remove("active");
  ratingPoint[2].classList.remove("active");
  ratingPoint[3].classList.remove("active");
});

submit.addEventListener("click", () => {
  const star = document.querySelector(".star");
  const tittle = document.querySelector(".tittle");
  const description = document.querySelector(".description");
  const rating = document.querySelector(".rating");
  const submit = document.querySelector(".submit");
  const subContainer = document.createElement("div");
  subContainer.setAttribute("id", "subContainer");
  container[0].appendChild(subContainer);

  star.style.display = "none";
  tittle.style.display = "none";
  description.style.display = "none";
  rating.style.display = "none";
  submit.style.display = "none";

  let imgRating = document.createElement("img");
  imgRating.classList.add("img-rating");
  imgRating.src = illustrationImg;
  subContainer.appendChild(imgRating);

  let cP1 = document.createElement("div");
  cP1.classList.add("container-review");
  let pReview = document.createElement("p");
  pReview.classList.add("paragraphReview");
  pReview.innerText = `You selected ${value} out of 5`;
  cP1.appendChild(pReview);
  subContainer.appendChild(cP1);

  let thankText = document.createElement("h1");
  //   thankText.classList("thank-text");
  thankText.innerText = `Thank you!`;
  subContainer.appendChild(thankText);

  let thankP = document.createElement("p");
  thankP.innerText = `We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!`;
  subContainer.appendChild(thankP);
});
