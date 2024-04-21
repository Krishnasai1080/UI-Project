document.getElementById("user-reg").addEventListener('submit',register);
function register(e)
{
    e.preventDefault();
    var formData = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        age: document.getElementById("age").value,
        date: document.getElementById("date").value,

    };
    console.log(formData);
}