const dobInput = document.getElementById("dob");
const calculateBtn = document.getElementById("calculate-btn");
const resultDiv = document.getElementById("result");
const ageSpan = document.getElementById("age");

calculateBtn.addEventListener("click", calculateAge);

function calculateAge() {
  const dobValue = dobInput.value;
  if (dobValue === "") {
    alert("Please select your Date of Birth.");
    return;
  }

  const dob = new Date(dobValue);
  const today = new Date();

  let age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();
  const dayDiff = today.getDate() - dob.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  ageSpan.innerText = age;
  resultDiv.classList.remove("hide");
}
