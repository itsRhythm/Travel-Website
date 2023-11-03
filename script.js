let person = document.getElementById('nameBox')
let email = document.getElementById("emailBox")
let category = document.getElementById("categoryBox")
let outputEl = document.getElementById("output-field")
let submitBtn = document.getElementById("submit-btn")

submitBtn.addEventListener("click", function(){
    document.getElementById("form-txt").innerHTML = `<h2>${person.value}</h2>
    <p>Your reservation request for <b>${category.value}</b> has been accepted</p>
    <p>You will recieve a confirmation email at <i> ${email.value}</i></p>`

    person.value = ""
    email.value = ""
    category.value = ""
})
