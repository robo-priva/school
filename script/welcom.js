function count_animation(id,start,end,speed){
    let pro = document.getElementById(id) ;
    let current_position = start ;
    let timer = setInterval(function(){
     current_position ++ ;
     // if(id==="clap"){
       // pro.innerHTML = current_position + "L-A"
        //clearInterval(timer);
    //}
    pro.innerHTML = current_position + "+"
    if(current_position == end){
        clearInterval(timer);
    }
   
    }, speed);
}


// Form validation check.

let names = document.getElementById("Name");
let phone = document.getElementById('phone');

names.addEventListener('input', (e)=>{
    let name_msg = document.getElementById("name_msg");
    let name = names.value;

if(!name.includes(" ") || name.length < 6){
    name_msg.innerHTML = "Name is short<br> Must have Atlist Two names!";
    name_msg.style.color = "red";

}else{
     name_msg.innerHTML = ""; 
}
});

phone.addEventListener('input', ()=>{
    let phone_msg = document.getElementById("phone_msg");
    let phon = phone.value.trim();
    if(phon.length <= 9 ||  phon.length > 10){
        phone_msg.textContent = "All Cameroon Numbers Have minimum of 9 digits.";
        phone_msg.style.color = "red";
    }
 

});


count_animation("Awards", 0, 10, 200);
count_animation("Years", 0, 24, 150);

function count_anim(id,start,end,speed){
    let pro = document.getElementById(id) ;
    let current_position = start ;
    let timer = setInterval(function(){
     current_position ++ ;
     // if(id==="clap"){
       // pro.innerHTML = current_position + "L-A"
        //clearInterval(timer);
    //}
    pro.innerHTML = current_position + " List A"
    if(current_position == end){
        clearInterval(timer);
    }
   
    }, speed);
}
count_anim("clap", 0, 61, 50);


