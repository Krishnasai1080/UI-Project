document.getElementById("login-info").addEventListener('submit',logininfo);
function logininfo(e)
{
    e.preventDefault();
    var formData = {
        Email:document.getElementById("user").value,
        Password:document.getElementById("password").value
    };
    console.log(formData);
    fetchData('/users/login', formData, 'POST')
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