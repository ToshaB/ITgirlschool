function backgroundPage() {

    switch(document.getElementById('background').value)
    {
        case 'grey': document.querySelector('body').style.background="black"; break;
        case 'menta': document.querySelector('body').style.background="aquamarine"; break;
        case 'white': document.querySelector('body').style.background="white"; break;
    } 
} 

function check() {
    let name = document.getElementById('nameUser');
    let surname = document.getElementById('surnameUser');
    let email = document.getElementById('nameEmail');
    let password = document.getElementById('password');
    document.getElementById('errorMessage').innerHTML = '';

    if(name.value == ''){
        document.getElementById('errorMessage').innerHTML+='Не заполнено "Имя"<br>';
    }
    if(surname.value == ''){
        document.getElementById('errorMessage').innerHTML+='Не заполнено "Фамилия"<br>';
    }
    if(email.value == ''){
        document.getElementById('errorMessage').innerHTML+='Не заполнен "Еmail"<br>';
    }
    if(password.value == ''){
        document.getElementById('errorMessage').innerHTML+='Не заполнен "Пароль"<br>';
    } 
    if(password.value.length < 6){
        document.getElementById('errorMessage').innerHTML+='Пароль должен содержать более 5 символов'
    }
}