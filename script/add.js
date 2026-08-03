function open_form(){
    //alert("Fill in the Form below!");
    let messege = document.getElementById("mess").value;
   mess.textContent = "Please Fill the form below";
  mess.style.color = "red";
   // e.preventDefault();
   // mess.textContent = "Good";
    //mess.style.color = "green";
}

let attemps = 0;
function validate_login(){
    
    let err = document.querySelector('.error');
    let pass_code = "Madam123princes" ;
    let code = document.getElementById("pass_word").value;
    if(code != pass_code){
    
        err.textContent = "Invalid Password";
        err.style.color = "red";

            attemps++;
            err.style.color = "pink";
            err.textContent ="Password incorrect!!!";

            if(attemps >= 4){
                err.textContent = "";
                alert("Too many wrong attemps!!!");
            }
            if(code === pass_code){
                err.textContent = "🚀";
                // take to dashboard!
            }
        
    }
     if(code === pass_code){
                err.textContent = "🚀";
                // take to dashboard!
            }
}