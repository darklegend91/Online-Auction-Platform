function check_Password() {
    let a = document.getElementById("password").value;
    let b = document.getElementById("confirm_password").value;
    if ((a=="") || (b=="")){
        alert("Please Fill out all the details");
    } else if (a.length<8 || b.length<8){
        alert("Password should be atleast 8 characters");
    } else if (a == b) {
        window.location.href = "../pages/3_main.html";
    } else {
        alert("Password and confirm password does not match.");
    }
}
function form_page(){
    window.location.href="../pages/2_form.html";
}