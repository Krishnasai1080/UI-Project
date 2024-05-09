document.getElementById("login-info").addEventListener('submit',logininfo);
function logininfo(e)
{
    e.preventDefault();
    var formData = {
        User:document.getElementById("user").value,
        Password:document.getElementById("password").value
    };
    console.log(formData);
}