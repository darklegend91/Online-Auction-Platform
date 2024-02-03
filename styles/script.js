function next_page(){
    let a = prompt("Place your Bid");
    let b = confirm("The Amount entered is " + a + "\nDo you wanna Continue?");
    if (b){
        window.location.href="pages/confirmation.html";
    }
}

function check_Password() {
    let a = document.getElementById("password").value;
    let b = document.getElementById("confirm_password").value;
    if ((a=="") || (b=="")){
        alert("Please Fill out all the details");
    } else if (a == b) {
        window.location.href = "pages/3_main.html";
    } else {
        alert("Password and confirm password does not match.");
    }
}
function form_page(){
    window.location.href="pages/2_form.html";
}