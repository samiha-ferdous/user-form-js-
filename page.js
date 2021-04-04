const form=document.getElementById("form");
const username=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("password");
const confirmpassword=document.getElementById("confirmpassword");

//show error function

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = input.nextElementSibling; // update here 
    small.innerText = message;
  }
  

//success function
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success"; 
}

function CheckErrors(inputArr){
    inputArr.forEach(function(input){
    if(input.value.trim()===''){
        showError(input,`${input.id} is required`);
}
    });

}

form.addEventListener('submit',function(x){
    x.preventDefault();
    CheckErrors([username,email,password,confirmpassword]);
});