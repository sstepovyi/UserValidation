$(document).ready(function () {
    $('[id^=Userpass]').keypress(validatePass);
    $('[id^=UserName]').keypress(validateName);
    $('[id^=TryLogIn]').on("click", function () { postToServer(); });
});
var Checker = 0;

function validatePass(event) {
    var key = window.event ? event.keyCode : event.which;
    if (event.keyCode === 8 || event.keyCode === 46) {
        return true;
    } else if (key < 48 || key > 57) {
        return false;
    } else {
        return true;
    }
};

function validateName(event) {
    var key = window.event ? event.keyCode : event.which;
    if ((key > 64 && key < 91) || (key > 96 && key < 123))
        return true;
    else
        return false;
};

function postToServer() {
    var username = $("#UserName").val();
    var password = ($("#Userpass").val() == "") ? 0 : $("#Userpass").val();

    $.ajax({
        url: "Home/CheckAutorization",
        type: "GET",
        data: { username: username, userpassword: password },
        success: function (data) {
            if (data == 1) {
                Checker = 0;
                document.getElementById('TryLogIn').style.visibility = 'hidden';
                document.getElementById('InfoMessage').innerText = "welcome " + username;
                document.getElementById('InfoMessage').style.color = "green";
            }
            else {
                Checker++;
                if (Checker == 3) {
                    window.location.href = "/404";
                }
                else {
                    document.getElementById('InfoMessage').innerText = "looks like one of the fields is incorrect, please try again.";
                    document.getElementById('InfoMessage').style.color = "red";
                }
            }
        },
        error: function () {
            alert('Something went wrong');
            document.getElementById('InfoMessage').innerText = "";
        }
    });
}