let formEl = document.querySelector(".form-inner");
let TitleEl = document.querySelector(".title");
let bmiNameEl = document.querySelector(".bmi_name");
let bmiHeight = document.querySelector(".bmi_height");
let bmiWeight = document.querySelector(".bmi_weight");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = bmiNameEl.value;
  let bmiName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  let weight = bmiWeight.value / 100;
  let height = bmiHeight.value;
  let BMI = (weight / height ** 2).toFixed(1);
  if (BMI <= 18.5) {
    TitleEl.textContent = `${bmiName} 𝓼𝓲𝔃 𝓸𝔃𝓰'𝓲𝓷𝓼𝓲𝔃!`;
  } else if (BMI > 18.5 && BMI < 24.9) {
    TitleEl.textContent = `${bmiName} 𝓼𝓲𝔃 𝓷𝓸𝓻𝓶𝓪𝓷𝓵𝓲𝓼𝓲𝔃!`;
  } else if (BMI > 25 && BMI < 29.9) {
    TitleEl.textContent = `${bmiName} 𝓼𝓲𝔃 𝓼𝓮𝓶𝓲𝔃!`;
  } else {
    TitleEl.textContent = `${bmiName} 𝓼𝓲𝔃 𝓸'𝓽𝓪 𝓼𝓮𝓶𝓲𝔃!`;
  }
});
