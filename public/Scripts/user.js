document.getElementById("user-reg").addEventListener('submit',register);
function register(e)
{
    e.preventDefault();
    const formData = {
        Firstname: document.getElementById("firstName").value,
        Lastname: document.getElementById("lastName").value,
        Email: document.getElementById("email").value,
        Gender:"M",
        Age: document.getElementById("age").value,
        DateofBirth: document.getElementById("date").value,
        Password: document.getElementById("password").value
    };
    console.log(formData);
fetchData('/users/register', formData, 'POST')
      .then(data => {
        if (!data.message) {
          setCurrentUser(data)
          window.location.href = "index.html"
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  async function fetchData(route = '', data = {}, methodType) {
    const response = await fetch(`http://localhost:3000${route}`, {
      method: methodType, // *POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    if (response.ok) {
      return await response.json(); // parses JSON response into native JavaScript objects
    } else {
      throw await response.json();
    }
  }

  // configuring local storage
function setCurrentUser(user) {
    localStorage.setItem('user', JSON.stringify(user))
  }
  
  function getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'))
  }
  
  function removeUser() {
    localStorage.removeItem('user')
    window.location.href = 'index.html'
  }