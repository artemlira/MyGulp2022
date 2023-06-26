"use strict";

const forms = document.forms;
if (forms.length) {
  for (const form of forms) {
    const file = form.querySelector('input[type="file"]');
    file ? file.addEventListener("change", formAddFile) : null;
    form.addEventListener("submit", formSubmitAction);
  }
}

function formAddFile(e) {
  const formInputFile = e.target;
  const formsFiles = formInputFile.files;
  const fileName = formsFiles.length ? formsFiles[0].name : "";
  formInputFile.parentElement.nextElementSibling.innerHTML = fileName;
}

async function formSubmitAction(e) {
  e.preventDefault();
  const form = e.target;
  const formAction = form.getAttribute("action")
    ? form.getAttribute("action").trim()
    : "#";
  const formMethod = form.getAttribute("method")
    ? form.getAttribute("method").trim()
    : "GET";
  const formData = new FormData(form);
  form.classList.add("form-sending");
  const response = await fetch(formAction, {
    method: formMethod,
    body: formData,
  });
  if (response.ok) {
    alert("Form sent!");
    form.classList.remove("form-sending");

    const formInputFile = form.querySelector('input[type="file"]');

    formInputFile
      ? (formInputFile.parentElement.nextElementSibling.innerHTML = "")
      : null;
    form.reset();
  } else {
    alert("Error");
    form.classList.remove("form-sending");
  }
}
