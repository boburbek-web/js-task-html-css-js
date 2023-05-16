const text = document.querySelector(".text"),
  age = document.querySelector(".age"),
  job = document.querySelector(".job"),
  yourName = document.querySelector(".your-name"),
  yourAge = document.querySelector(".your-age"),
  yourJob = document.querySelector(".your-job"),
  wrapper = document.querySelector(".wrapper"),
  submit = document.querySelector(".submit"),
  clear = document.querySelector(".clear"),
  input = document.querySelectorAll("input"),
  itemElement = document.createElement("h4"),
  newElement = document.createElement("h4");



text.addEventListener('keyup', () => {
  const textValue = document.querySelector(".text").value;
  yourName.innerText = `👩‍💻 Name : ${textValue}`;
})

age.addEventListener('keyup', () => {
  const ageValue = document.querySelector(".age").value;
  yourAge.innerText = `⚡️ Age : ${ageValue}`;

})

job.addEventListener('keyup', () => {
  const jobValue = document.querySelector(".job").value;
  yourJob.innerText = `🧰 Job: ${jobValue}`;
})

submit.addEventListener("click", ()=> {
  newElement.classList.add('submitElement');
  newElement.innerText = "successful sending✅";
  wrapper.appendChild(newElement);

  const submitElement = document.querySelector("h4");
  submitElement.classList.add('submitElement');
  itemElement.style.display = "none"
  newElement.style.display = "block"
});

clear.addEventListener("click", ()=> {
  itemElement.classList.add('success')
  itemElement.innerText = "unsuccessful sending ❌";
  wrapper.appendChild(itemElement);

  const success = document.querySelector("h4");
  success.classList.add('unsuccess');
  itemElement.style.display = "block"
  newElement.style.display = "none"

  for (let key of input) {
    key.value = ""
  }
})




