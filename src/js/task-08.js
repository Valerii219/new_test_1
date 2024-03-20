
const form = document.querySelector(".login-form");

form.addEventListener('submit', sentForm);

function sentForm(e){
    e.preventDefault();
    // const form = e.target.elements;
    // const emailValue = form.email.value;
    // const passwordValue = form.password.value;
    const email = form.email.value;
    const password = form.password.value;
    if(email === "" || password === ""){
        return alert('всі поля повинні бути заповнені')
    }
    // const formData = {
    //     email:emailValue,
    //     password:passwordValue
        
    // }
    const formData ={
        email,
        password
    }
//     console.log(`Login: ${emailValue}, Password: ${passwordValue}`);
console.log(formData);
  form.reset(formData);
    
}
