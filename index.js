document.addEventListener('DOMContentLoaded', () => {
  handleOnSearchSubmit()
} )

function handleOnSearchSubmit() {
  const form = document.getElementById('pokemon-form')
  form.addEventListener('submit', (e) => {
    // const inputValue = document.getElementById('search-input').value
    e.preventDefault()
    console.log(e)
  })
}

// fetch('http://api.open-notify.org/astros.json')
// .then(function(response) {
//   return response.json();
// })
// .then(function(json) {
//   console.log(json)
// });