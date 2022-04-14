/*-----------------Переключатель тем-------------*/
function backgroundPage() {

    switch(document.getElementById('background').value)
    {
        case 'dark': document.querySelector('body').style.background="grey"; break;
        case 'menta': document.querySelector('body').style.background="aquamarine"; break;
        case 'white': document.querySelector('body').style.background="white"; break;
    } 
} 

/*-------------------Форма-------------------------*/

    let nameUser = document.getElementById('nameUser');
    let surname = document.getElementById('surnameUser');
    let email = document.getElementById('nameEmail');
    let password = document.getElementById('password');
    let helloMessage = document.getElementById('hello-message');

    function check() {
    document.getElementById('errorMessage').innerHTML = '';

    if(nameUser.value == ''){
        document.getElementById('errorMessage').innerHTML+='Не заполнено "Имя"<br>';
    }
    if(surname.value == ''){
        document.getElementById('errorMessage').innerHTML+='Не заполнено "Фамилия"<br>';
    }
    if(email.value == ''){
        document.getElementById('errorMessage').innerHTML+='Не заполнено "Имя ящика"<br>';
    }
    if(password.value == ''){
        document.getElementById('errorMessage').innerHTML+='Не заполнен "Пароль"<br>';
    } 
    if(password.value.length < 6){
        document.getElementById('errorMessage').innerHTML+='Пароль должен содержать более 5 символов'
    }
    else {
        helloMessage.textContent = 'Добро пожаловать, '+ nameUser.value + '!';
    }
}

/*-----------------Калькулятор js---------------*/


let num1, num2, result; // объявляем переменные


function plus () {

    num1 = document.getElementById('n1').value;   // получаем наши значения первого числа
    num1 = Number(num1);       //преобразуем нашу строку в число

    num2 = document.getElementById('n2').value; 
    num2 = Number(num2);

    result = num1 + num2;  //запишем переменную result в которой будем складывать переменные

    // получаем значение p с ответом и записываем туда значение
    // воспользуемся document и получим по id наш элемент и воспользуемся методом innerHTML
    //и запишим переменную result 
    document.getElementById('out').innerHTML += result;
} 

function minus () {
    
    num1 = document.getElementById('n1').value;  
    num1 = Number(num1);        
    
    num2 = document.getElementById('n2').value;
    num2 = Number(num2);

    result = num1 - num2;  
    document.getElementById('out').innerHTML = result;
}

function divide () {
    num1 = document.getElementById('n1').value;  
    num1 = Number(num1);        
    
    num2 = document.getElementById('n2').value;
    num2 = Number(num2);

    result = num1 / num2;  
    document.getElementById('out').innerHTML = result;
    
    if(num1/0){
        document.getElementById('errorDivide').innerHTML +='На ноль делить нельзя!'  
    }
}

function muliply () {
    num1 = document.getElementById('n1').value;  
    num1 = Number(num1);        
    
    num2 = document.getElementById('n2').value;
    num2 = Number(num2);

    result = num1 * num2;  
    document.getElementById('out').innerHTML = result;
}

function reset() {
    document.getElementById('n1').value = '';
    document.getElementById('n2').value = '';
    document.getElementById('out').innerHTML = '';
    document.getElementById('errorDivide').innerHTML = '';
}