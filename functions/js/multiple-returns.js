function isFieldEmpty() {
  const FIELD = document.querySelector('#info');
  if (FIELD.value === '') {
    return true;
  } else {
    return false;
  }
}

const FIELD_TEST = isFieldEmpty();

if (FIELD_TEST) {
  alert('Please provide your imfomation');
}