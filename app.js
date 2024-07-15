// Задание 5.10.1

// let number = prompt("Введите число");
// let qvadro = number ** 2;
// let qub = number ** 3;
// alert(`Введенное число - ${number} \nКвадрат числа - ${qvadro} \nКуб числа - ${qub}`)

// Задание 5.10.2

// let userInput = prompt('Введите промокод')

// let promo = 'скидка';

// if (userInput.toLowerCase() == promo) {
//     alert('Промокод применён')
// } else {
//     alert('Промокод не работает')
// }

// Задание 5.10.3

// let name = prompt("Введите ваше имя");

// let yearOfDate = prompt("Введите ваш год рождения");

// let age = 2024 - yearOfDate;

// alert(`${name}: ${age}`);

// Задание 5.10.4

// let userNameInput = prompt("Введите ваше имя");

// let userYearInput = prompt("Введите ваш год рождения")

// let age = 2024 - userYearInput;

// let ageWord = age % 10;

// if (ageWord === 1) {
//     alert(`${userNameInput}: ${age} год`)
// } else if (ageWord >= 2 && ageWord <= 4) {
//     alert(`${userNameInput}: ${age} года`)
// } else {
//     alert(`${userNameInput}: ${age} лет`)
// }

// Задание 10.5

const userAgeInput = prompt("Введите ваш возраст")

if (userAgeInput < 18) {
    alert("Видимо вам кредит не нужен. Всего доброго!")
} 

if (userAgeInput >= 18 && userAgeInput <= 21) {
   let userNumberInput = prompt("Мы можем вам выдать максимум 50000 \nВведите сумму кратную 1000")
   let multipleNumber = +userNumberInput % 1000 === 0;
        if (multipleNumber) {
            alert(`Мы можем вам выдать ${userNumberInput}`)
        } else {
            let checkNumber = +userNumberInput / 1000 * 100;
            
            console.log(checkNumber);

            alert(` Вы ввели значение не кратное 1000. Мы можем вам выдать ${checkNumber}`)
        }
        
}
