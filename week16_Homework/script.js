function sumInput() {
    let numbers = [];
    let sum = 0;
    //сохраняем в массив значения
        for(;;){                                   
        let value = +prompt("Введите число", '');

        if (!value) break; 
        numbers.push(+value);
    }
    // сортируем значения массива
    numbers.sort(function(a,b){
        return a-b
    });
    alert(numbers);
     // ссумируем значения мяссива
        for (let number of numbers) {
        sum += number;
}
    alert('Сумма: ' + sum);
}

function first(){
    let skills = ['js', 'css', 'html'];
    alert(skills[0]);
}

function second() {
    const numbers = [0, 1, false, 2, undefined, '', 3, null];
    const filteredNumbers = numbers.filter(Boolean);
    alert(filteredNumbers);
}

function third() {
    const arr = [[1,2], [1,2,3], [1,2,3,4]];
        for(i=0; i<arr.length; i++) {
            const newArr = arr[i].length;
            if(newArr > 3){
            alert(i);
            }
        }
}

//----------------------Калькулятор стоимости------------------------

function calc() {
            
    let typeModel = document.getElementById("type_model"); //получаем ссылку на элемент Select (Марка авто)
    var typeAgeNew = document.getElementById("type_age_new"); //получаем ссылку на radio (Возраст авто)
    var count = document.getElementById("count"); //получаем ссылку на элемент input (Пробег)
    var result = document.getElementById("result"); //получаем ссылку на элемент span, в него будем писать стоимость авто

    var price = 0;
    price += parseInt(typeModel.options[typeModel.selectedIndex].value);
    price += (typeAgeNew.checked == true) ? parseInt(typeAgeNew.value) : 0;
    price += (type_age_middle.checked == true) ? parseInt(type_age_middle.value) : 0;
    price += (type_age_large.checked == true) ? parseInt(type_age_large.value) : 0;
    price = parseInt(count.value) + price;

    const formatter = new Intl.NumberFormat('ru');
    result.innerHTML = formatter.format(price);
}

