const authorization = "Bearer GET_API_KEY_FROM_CLEARBIT_AND_PUT_HERE";

const insertDetailsIntoDom = (data) => {
    // console.log(data)
    document.getElementById("userName").innerText = data.name.fullName
    document.getElementById("userEmail").innerText = data.email
    document.getElementById("userBio").innerText = data.bio
    document.getElementById("userLocation").innerText = data.location


}

const callClearbitAPI = (email) => {
  fetch(`https://person.clearbit.com/v1/people/email/${email}`,{ headers: {
    Authorization: authorization
  }})
    .then(response => response.json())
    .then(data => insertDetailsIntoDom(data))
}

const form  = document.getElementById("clearbitForm")

form.addEventListener("submit", (event) => {
  event.preventDefault()
  const searchValue = document.getElementById("clearbitEmail").value
  callClearbitAPI(searchValue)
})
