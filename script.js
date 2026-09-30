

// getElementById
const showInfoBtn = document.getElementById("showInfoBtn");
const outputDisplay = document.getElementById("outputDisplay");
const countrySelect = document.getElementById("country");
const countryOtherField = document.getElementById("countryOtherField");
const countryOtherInput = document.getElementById("countryOther");

countrySelect.addEventListener("change", function () {
  const isOther = countrySelect.value === "Other";
  countryOtherField.hidden = !isOther;
  countryOtherInput.disabled = !isOther;
  countryOtherInput.required = isOther;

  if (!isOther) {
    countryOtherInput.value = "";
  }
});

document.getElementById("infoForm").addEventListener("reset", function () {
  countryOtherField.hidden = true;
  countryOtherInput.disabled = true;
  countryOtherInput.required = false;
});

showInfoBtn.addEventListener("click", function () {
  // getElementById
  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const age = document.getElementById("age").value.trim();
  const birthdate = document.getElementById("birthdate").value;
  const phone = document.getElementById("phone").value.trim();
  const favColor = document.getElementById("favColor").value.trim();
  const selectedCountry = countrySelect.value;
  const country = selectedCountry === "Other" ? countryOtherInput.value.trim() : selectedCountry;
  const bio = document.getElementById("bio").value.trim();

  // querySelector 
  const genderInput = document.querySelector('input[name="gender"]:checked');
  const gender = genderInput ? genderInput.value : "Not specified";

  // querySelectorAll
  const hobbyBoxes = document.querySelectorAll(".hobby:checked");
  const hobbies =
    hobbyBoxes.length > 0
      ? Array.from(hobbyBoxes)
          .map(function (box) {
            return box.value;
          })
          .join(", ")
      : "None selected";

      // Validation
  if (!fullName || !email || !age || !birthdate || !phone || !favColor || !country || !genderInput) {
    outputDisplay.innerHTML =
      '<p class="placeholder">Please fill in all required fields before showing your info.</p>';
    return;
  }

  // List of info to display
  const info = [
    { label: "Full Name", value: fullName },
    { label: "Email Address", value: email },
    { label: "Age", value: age },
    { label: "Birthdate", value: birthdate },
    { label: "Phone Number", value: phone },
    { label: "Favorite Color", value: favColor },
    { label: "Country", value: country },
    { label: "Gender", value: gender },
    { label: "Hobbies", value: hobbies },
    { label: "About Me", value: bio || "No bio provided" },
  ];

  // Clear previous output, then display the new info
  outputDisplay.innerHTML = "";

  info.forEach(function (item) {
    const row = document.createElement("div");
    row.className = "info-row";

    const labelSpan = document.createElement("span");
    labelSpan.className = "label";
    labelSpan.textContent = item.label + ":";

    const valueSpan = document.createElement("span");
    valueSpan.className = "value";
    valueSpan.textContent = item.value;

    row.appendChild(labelSpan);
    row.appendChild(valueSpan);
    outputDisplay.appendChild(row);
  });

  // getElementsByClassName
  const rows = document.getElementsByClassName("info-row");
  for (let i = 0; i < rows.length; i++) {
    if (rows[i].textContent.startsWith("Favorite Color")) {
      rows[i].style.color = favColor.toLowerCase();
    }
  }
});

// Reset the output card after clicking the "Clear" button
document.getElementById("clearBtn").addEventListener("click", function () {
  outputDisplay.innerHTML =
    '<p class="placeholder">Your details will appear here after you click "Show My Info".</p>';
});
