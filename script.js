

var password = document.getElementById("password");

function generatepass()
{
        
    var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&*()<>?";
    var passwordLength = 12;
    var password = "";

    for(var i=0; i<=passwordLength; i++)
    {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber,randomNumber + 1);

    }

document.getElementById("password").value=password;

}

function copypass()
{
    var copytext = document.getElementById("password");
    copytext.select();
    navigator.clipboard.writeText(copytext.value);
}