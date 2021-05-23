console.log("Awesome livecode to you all!")

const authorization = "Bearer sk_11a996a530ab669bcc09d9285552e006";
// TODO


// select the form
const form = document.querySelector("#clearbitForm");

const input = document.querySelector("#clearbitEmail");

const name = document.querySelector("#userName");
const email = document.querySelector("#userEmail");
const bio = document.querySelector("#userBio");
const location = document.querySelector("#userLocation");
const avatar = document.querySelector("#userAvatar");

// AddEventListner when user submit - form
form.addEventListener('submit', (event) => {

const options = {
  headers: {
    'Authorization': authorization
  }
}
// get the value and input
  const url = `https://person.clearbit.com/v2/combined/find?email=${input.value}`
  fetch(url, options).then(response => response.json())
  .then((data) => {
    name.innerHTML = data.person.name.fullName;
    email.innerHTML = data.person.email;
    bio.innerHTML = data.person.bio;
    location.innerHTML = data.person.location;
    avatar.innerHTML = `<img src="${data.person.avatar}">`;

  console.log(data)

  })

  console.log(input.value)
})

// API request for the information




// Insert the information into HTML
