function copy_url() {
  // copy to clipboard
  const copyText = document.querySelector('#input_full_url')
  copyText.setAttribute('type', 'text')
  copyText.select()
  document.execCommand("copy");
  copyText.setAttribute('type', 'hidden')

  popup()
}

function popup() {
  // copied popup effect
  const show_copy = document.querySelector('#show_copy')
  show_copy.setAttribute('style', 'display: block')
  show_copy.classList.add('popup')
  setTimeout(function () {
    show_copy.setAttribute('style', 'display: none')
    show_copy.classList.remove('popup')
  }, 4500);
}