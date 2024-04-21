document.getElementById("user-notes").addEventListener('submit',usernotes);
function usernotes(e)
{
    e.preventDefault();
    var formData = {
        text:document.getElementById("notes").value
    };
    console.log(formData);
}