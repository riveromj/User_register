let user ={
    name:'',
    lastname:'',
    email:'',
    password:'',
    repeat:''
}
function inputsForm(event){
    console.log(event.target.name);
    user[event.target.name]=event.target.value;
}
function messageError(message){
    
    let messageAlert = document.querySelector("#error");
    messageAlert.classList.add("show-element");
    messageAlert.innerHTML=message;
    
}
function submitForm (event){
    event.preventDefault();
   for (let index in user){
         if (user[index]===''){
        messageError('Debe completar todos los campos');
        }
    }
    //console.log(user, user['password']);
    if(user['password']!=user['repeat']){
        messageError('verifique password');
        console.log("password diferente");
    }else{
        //como no hay error en el formulario muestro loading y olculto save
        let buttonLoading = document.querySelector(".loading");
        buttonLoading.classList.add("show-element");
        let buttonSave = document.querySelector(".save");
        buttonSave.classList.add("hidden");
    }
}



