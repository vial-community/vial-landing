function validateForm() {
  let email = document.forms["vial-validate"]["email"];
  let fullName = document.forms["vial-validate"]["fullName"];
  let birthday = document.forms["vial-validate"]["birthday"];
  let occupation = document.forms["vial-validate"]["occupation"];
  let terms = document.forms["vial-validate"]["dakort"].checked;
  let formErrorMessage = document.getElementById("formErrorMessage");
  let termsErrorMessage = document.getElementById("termsErrorMessage");
  let emailValid = validateEmail(email);
  let fullNameValid = validateFullName(fullName);
  let birthdayValid = validateBirthday(birthday);
  let occupationValid = occupation.value !== "...";


  function validateTerms() {
    if (terms !== false) {
      termsErrorMessage.classList.add("hidden");
      termsErrorMessage.classList.remove("visible");
      return true;
    } else {
      termsErrorMessage.classList.add("visible");
      termsErrorMessage.classList.remove("hidden");
      return false;
    }
  }
  function validateFields() {
    if (emailValid && fullNameValid && birthdayValid && occupationValid) {
      formErrorMessage.classList.add("hidden");
      formErrorMessage.classList.remove("visibility");
      return true;
    } else {
      formErrorMessage.classList.add("visible");
      formErrorMessage.classList.remove("hidden");
      return false;
    }
  }
  validateFields();
  validateTerms();
}
function validateEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    return true;
  }
  return false;
}
function validateFullName(fullName) {
  if (/^[a-zA-Z ]+$/.test(fullName.value)) {
    return true;
  }
  return false;
}
function validateBirthday(birthday) {
  if (/^([0-9]{4})-([0-9]{2})-([0-9]{2})$/.test(birthday.value)) {
    return true;
  }
  return false;
}