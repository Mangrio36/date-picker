const datePickerBtn = document.querySelector(".date-picker-button");
const datePicker = document.querySelector(".date-picker");

datePickerBtn.addEventListener("click", () => {
  datePicker.classList.toggle("show");
});
