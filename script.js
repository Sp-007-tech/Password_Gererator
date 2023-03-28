function getPassword()
{
    var char = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOOPQRSTUVWXYZ!@#$%^&*()_+{}[]";

    var passLength = 8;
    var password = "";

    for (var i=0; i<passLength; i++)
    {
        var randomNumber = Math.floor(Math.random() * char.length);

        password += char.substring(randomNumber,randomNumber+1);
    }
    
    document.getElementById("password").value =password;
}
