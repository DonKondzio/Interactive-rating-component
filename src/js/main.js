const selectContainer = document.querySelector(".select-container");
const responseContainer = document.querySelector(".response-container");
const infoText = document.querySelector(".info-text");
const submitBtn = document.querySelector(".submit");
const numberBtns = document.querySelectorAll(".number");

let number;

const submit = () => {
  infoText.textContent = `You selected ${number} out of 5`;
  selectContainer.style.display = "none";
  responseContainer.style.display = "flex";
};

submitBtn.addEventListener("click", submit);
numberBtns.forEach((el) => {
  el.addEventListener("click", (e) => {
    number = e.target.textContent;
  });
});
